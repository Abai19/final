'use client';
import {DndContext, DragEndEvent} from '@dnd-kit/core';
import {Coordinates} from '@dnd-kit/core/dist/types';
import {Flex, Typography, notification} from 'antd';
import {Howl} from 'howler';
import React, {memo, useEffect, useState} from 'react';

import {play} from '../../utils/play';

import {Draggable} from './draggable';
import {Droppable} from './droppable';
import {ContentWrapper, Counter} from './styles';

export interface IElement {
    id: number;
    imageUrl: string;
    isDropped?: boolean;
    isAnimated?: boolean;
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

const TaskComponent: React.FC<TaskProps> = ({
    title,
    droppableElements,
    dropTargets,
    soundUrlCorrect,
    soundUrlWrong,
    currentLevel,
}) => {
    const [isClient, setIsClient] = useState(false);
    const [position, setPosition] = useState<{[key: string]: Coordinates | undefined}>({});

    const soundCorrect = new Howl({
        src: [soundUrlCorrect],
        format: ['mp3'],
    });
    const soundWrong = new Howl({
        src: [soundUrlWrong],
        format: ['mp3'],
    });
    
    useEffect(() => {
        setIsClient(true);
    }, []);
    const [isDropped, setDropped] = useState(false);

    function handleDragEnd ({active, over, delta}: DragEndEvent) {
        if (!over?.id) {
            soundWrong.play();
            notification.error({message: 'Wrong', duration: 1});
            setPosition({...position, [active.id]: undefined});
            return;
        }
        if (active.id >= over?.id) {
            soundCorrect.play();
            notification.success({message: 'Great', duration: 1});
            setDropped(true);
            setPosition({...position, [active.id]: delta});
        } else {
            soundWrong.play();
            notification.error({message: 'Wrong', duration: 1});
            setPosition({...position, [active.id]: undefined});
        }
    }
    useEffect(() => {
        play(title);
        setDropped(false);
    }, [title]);  

    const draggableItems = droppableElements.map((item) => (
        <Draggable key={`draggable_${item.id}`} {...item} delta={position[item.id]} />
    ));
  
    const droppableItems = dropTargets.map((item) => (
        <Droppable key={`droppable_${item.id}`} {...item} isDropped={isDropped} isAnimated={item.isAnimated} />
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
                        <DndContext onDragEnd={handleDragEnd} autoScroll={{enabled: false}}>
                            <ContentWrapper>
                                <div>
                                    {draggableItems}
                                </div>
                                <div>
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

export default memo(TaskComponent);
