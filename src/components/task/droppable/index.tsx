
import React, { CSSProperties, useEffect, useMemo, useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { IElement } from '..';
import Image from 'next/image';
import { DroppableWrapper } from './style';
import { Popover } from 'antd';

export const Droppable = ({ id, imageUrl, isDropped, isAnimated }: IElement) => {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    });

    const content = useMemo(() => {
        if (isDropped && isAnimated) {
            return (
                <Popover title="Thank you :)" open={isDropped}>
                    <Image width={350} height={250} src={imageUrl} alt={`Element ${id}`} />
                </Popover>
            )
        }
        return (
            <Image width={350} height={250} src={imageUrl} alt={`Element ${id}`} />
        )
    },[isDropped,imageUrl])

    return (
        <DroppableWrapper ref={setNodeRef} isOver={isOver} isAnimation={isDropped && isAnimated}>
            {content}
        </DroppableWrapper>
    );
}
