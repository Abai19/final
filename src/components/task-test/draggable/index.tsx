
import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import { IElement } from '..';
import Image from 'next/image';

export const Draggable = ({id, imageUrl} : IElement) =>  {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <Image width={200} height={150} src={imageUrl} alt={`Element ${id}`} />
    </div>
  );
}