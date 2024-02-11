
import {useDroppable} from '@dnd-kit/core';
import {Popover} from 'antd';
import Image from 'next/image';
import React, {useMemo} from 'react';

import {IElement} from '..';

import {DroppableWrapper} from './style';

export const Droppable = ({id, imageUrl, isDropped, isAnimated}: IElement) => {
    const {isOver, setNodeRef} = useDroppable({
        id: id,
    });

    const content = useMemo(() => {
        if (isDropped && isAnimated) {
            return (
                <Popover title="Thank you :)" open={isDropped}>
                    <Image width={350} height={250} src={imageUrl} alt={`Element ${id}`} />
                </Popover>
            );
        }
        return (
            <Image width={350} height={250} src={imageUrl} alt={`Element ${id}`} />
        );
    }, [isDropped, imageUrl]);

    return (
        <DroppableWrapper ref={setNodeRef} isOver={isOver} isAnimation={isDropped && isAnimated}>
            {content}
        </DroppableWrapper>
    );
};
