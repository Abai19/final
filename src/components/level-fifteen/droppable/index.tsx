
import {useDroppable} from '@dnd-kit/core';
import React, {useMemo} from 'react';

import {DroppableWrapper} from './style';

interface IEl {
    id: number;
    isDropped: boolean;
}
export const Droppable = ({id, isDropped}: IEl) => {
    const {isOver, setNodeRef} = useDroppable({
        id: id,
    });

    const content = useMemo(() => {
        return (
            <div style={{width: '50px', height: '50px', background: 'grey'}} /> 
        );
    }, []);

    return (
        <DroppableWrapper ref={setNodeRef} isOver={isOver} isAnimation={isDropped}>
            {content}
        </DroppableWrapper>
    );
};
