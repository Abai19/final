'use client';
import {DndContext, DragEndEvent, useSensors, useSensor, MouseSensor, TouchSensor} from '@dnd-kit/core';
import {Coordinates} from '@dnd-kit/core/dist/types';
import {Flex, Typography, notification} from 'antd';
import {Howl} from 'howler';
import {usePathname} from 'next/navigation';
import React, {memo, useEffect, useState} from 'react';

import {play} from '../../utils/play';

import {Draggable} from './draggable';
import {Droppable} from './droppable';
import {ContentWrapper, Counter} from './styles';

export interface IElement {
    id: number;
    imageUrl: string;
    isDropped?: boolean;
    delta?: Coordinates;
}

interface TaskProps {
    level?: number;
    title: string;
    droppableElements: IElement[];
    dropTargets: IElement[];
    soundUrlCorrect: string;
    soundUrlWrong: string;
    currentLevel: number;
}

const LevelFifteen: React.FC<TaskProps> = ({
    title,
    soundUrlCorrect,
    soundUrlWrong,
    currentLevel,
}) => {
    const [isClient, setIsClient] = useState(false);
    const [position, setPosition] = useState<{[key: number]: Coordinates | undefined}>({

    });
    const [currentId, setCurrentId] = useState(1);
    const path = usePathname();

    const soundCorrect = new Howl({
        src: [soundUrlCorrect],
        format: ['mp3'],
    });
    const soundWrong = new Howl({
        src: [soundUrlWrong],
        format: ['mp3'],
    });
    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 200,
                tolerance: 6,
            },
        }),
    );
    useEffect(() => {
        setIsClient(true);
    }, []);
    const [isDropped, setDropped] = useState(false);

    function handleDragEnd ({active, over, delta}: DragEndEvent) {
        if (!over?.id) {
            soundWrong.play();
            notification.error({message: 'Wrong', duration: 1});
            setPosition({...position, [active.id]: {
                scaleX: 1,
                scaleY: 1,
                x: 0,
                y: 0,
            }});
            return;
        }
        if (active.id === over?.id) {
            soundCorrect.play();
            notification.success({message: 'Great', duration: 1});
            setDropped(true);
            setPosition({...position, [currentId]: delta});
            setCurrentId(currentId + 1);
        } else {
            soundWrong.play();
            notification.error({message: 'Wrong', duration: 1});
            setPosition({...position, [active.id]: {
                scaleX: 1,
                scaleY: 1,
                x: 0,
                y: 0,
            }});
        }
    }
    useEffect(() => {
        play(title, path);
        setDropped(false);
    }, [title, path]);  
  
    const droppableItems = [{
        id: 1,
    }, {
        id: 2,
    }, {
        id: 3,
    }].map((item) => (
        <Droppable key={`droppable_${item.id}`} {...item} isDropped={isDropped} />
    ));
    
    return (
        <>
            {
                isClient && (
                    <>  
                        <Flex align="center" justify="space-between" style={{marginTop: 20}}>
                            <div></div>
                            <Typography.Title level={4} style={{textAlign: 'center'}}>{title}</Typography.Title>
                            <Counter>{currentLevel + 1}</Counter>
                        </Flex>
                        <DndContext sensors={sensors} onDragEnd={handleDragEnd} autoScroll={{enabled: false}}>
                            <ContentWrapper>
                                <div>
                                    <Draggable
                                        id={currentId}
                                        imageUrl="/superman.png"
                                        delta={position[currentId - 1]} 
                                    />
                                </div>
                                <div style={{
                                    display: 'flex', 
                                    alignItems: 'center', justifyContent: 'space-around', marginTop: '155px'}}
                                >
                                    {droppableItems}
                                </div>
                            </ContentWrapper>
                        </DndContext>   
                    </>
                )
            }
        </>
    );
};

export default memo(LevelFifteen);
