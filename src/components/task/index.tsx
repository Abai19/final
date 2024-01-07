
import React, { memo, useEffect, useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Draggable } from './draggable';
import { Droppable } from './droppable';
import {Howl} from 'howler';
import { Typography } from 'antd';
import { ContentWrapper } from './styles';

export interface IElement {
    id: number;
    imageUrl: string;
    correct: boolean;
}

interface TaskProps {
    level?: number;
    title: string;
    titleSound : string;
    droppableElements: IElement[];
    dropTargets: IElement[];
    soundUrlCorrect: string;
    soundUrlWrong: string;
    onDropSuccess: () => void;
}

const TaskComponent: React.FC<TaskProps> = ({
    title,
    titleSound,
    droppableElements,
    dropTargets,
    soundUrlCorrect,
    soundUrlWrong,
    onDropSuccess,
}) => {
    const soundCorrect = new Howl({
        src: [soundUrlCorrect],
        format: ['mp3'],
    });
    const soundWrong = new Howl({
        src: [soundUrlWrong],
        format: ['mp3']
    });
    const soundTitle = new Howl({
        src: [titleSound],
        format: ['mp3']
    })
    soundTitle.play();
    function handleDragEnd({ active,over }: DragEndEvent) {
        if (active.id === over?.id) {
            soundCorrect.play();
            onDropSuccess();
        }
        else {
            soundWrong.play()
        }
    }
    const draggableItems = droppableElements.map((item) => (
        <Draggable {...item} key={item.id} />
    ))
    const droppableItems = dropTargets.map((item) => (
        <Droppable {...item} key={item.id}/>
    ))
    return (
        <>
            <Typography.Title level={4} style={{textAlign: 'center'}}>{title}</Typography.Title>
            <DndContext onDragEnd={handleDragEnd}>
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

    );
}

export default memo(TaskComponent);