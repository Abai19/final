'use client';
import {DndContext, DragEndEvent} from '@dnd-kit/core';
import {Flex, Typography} from 'antd';
import {Howl} from 'howler';
import React, {memo, useEffect, useMemo, useState} from 'react';

import {play} from '../../utils/play';

import {Draggable} from './draggable';
import {Droppable} from './droppable';
import {ContentWrapper, Counter} from './styles';

export interface IElement {
    id: number;
    imageUrl: string;
    isDropped?: boolean;
    isAnimated?: boolean;
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

    const soundCorrect = new Howl({
        src: [soundUrlCorrect],
        format: ['mp3'],
    });
    const soundWrong = new Howl({
        src: [soundUrlWrong],
        format: ['mp3'],
    });
    // const soundTitle = new Howl({
    //     src: [titleSound],
    //     format: ['mp3']
    // })
    useEffect(() => {
        setIsClient(true);
    }, []);
    const [isDropped, setDropped] = useState(false);

    function handleDragEnd ({active, over}: DragEndEvent) {
        if (active.id === over?.id) {
            soundCorrect.play();
            setDropped(true);
        } else {
            soundWrong.play();
        }
    }

    useEffect(() => {
        play(title);
        setDropped(false);
    }, [title]);  

    const draggableItems = droppableElements.map((item) => (
        <Draggable key={`draggable_${item.id}`} {...item} />
    ));
  
    const droppableItems = useMemo(() => {
        return dropTargets.map((item) => (
            <Droppable key={`droppable_${item.id}`} {...item} isDropped={isDropped} isAnimated={item.isAnimated} />
        ));
    }, [dropTargets, isDropped]);
 
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
