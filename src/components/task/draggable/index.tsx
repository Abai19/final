
import {useDraggable} from '@dnd-kit/core';
import {CSS, Transform} from '@dnd-kit/utilities';
import Image from 'next/image';
import React from 'react';

import {IElement} from '..';

export const Draggable = ({id, imageUrl, delta}: IElement) => {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id,
    });

    const style = {
        transform: transform ? CSS.Translate.toString(transform) 
            : delta ? CSS.Translate.toString(delta as Transform) : '',
        cursor: 'pointer',
    };
    return (
        <div ref={setNodeRef} style={{...style, zIndex: 9999, position: 'relative'}} {...listeners} {...attributes}>
            <Image width={150} height={100} src={imageUrl} alt={`Element ${id}`} />
        </div>
    );
};
