
import React, { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Draggable } from './draggable';
import { Droppable } from './droppable';
import {Howl} from 'howler';

export interface IElement {
    id: number;
    imageUrl: string;
    correct: boolean;
}

interface TaskProps {
    level: number;
    title: string;
    droppableElements: IElement[];
    dropTargets: IElement[];
    soundUrlCorrect: string;
    soundUrlWrong: string;
    onDropSuccess: (level: number) => void;
}
export const TaskComponent: React.FC<TaskProps> = ({
    level,
    title,
    droppableElements,
    dropTargets,
    soundUrlCorrect,
    soundUrlWrong,
    onDropSuccess,
}) => {
    const soundCorrect = new Howl({
        src: [soundUrlCorrect],
        format: ['mp3']
    });
    const soundWrong = new Howl({
        src: [soundUrlWrong],
    });
    function handleDragEnd({ active,over }:DragEndEvent) {
        console.log(active)
        console.log(over)
        if (active.id === over?.id) {
            soundCorrect.play();
        }
        else {
            soundWrong.play()
        }
    }
    const draggableItems = droppableElements.map((item) => (
        <Draggable {...item} />
    ))
    const droppableItems = dropTargets.map((item) => (
        <Droppable {...item} />
    ))
    return (
        <DndContext onDragEnd={handleDragEnd}>
            {draggableItems}
            {droppableItems}
            {/* {!parent ? draggableItems : null}
      <Droppable id="droppable">
        {parent === "droppable" ? draggable : 'Drop here'}
      </Droppable> */}
        </DndContext>
    );

}
