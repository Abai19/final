
import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import { IElement } from '..';
import Image from 'next/image';

export const Droppable = ({id, imageUrl}: IElement) => {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
        <Image width={50} height={50} src={imageUrl} alt={`Element ${id}`} />
    </div>
  );
}
  