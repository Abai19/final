'use client'
import React, { useState, useEffect } from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { Howl } from 'howler';
import Image from 'next/image';

interface Element {
    id: number;
    imageUrl: string;
    correct: boolean;
}

interface TaskProps {
    level: number;
    title: string;
    droppableElements: Element[];
    dropTargets: Element[];
    soundUrlCorrect: string;
    soundUrlWrong: string;
    onDropSuccess: (level: number) => void;
}

const DraggableElement: React.FC<{ element: Element; index: number }> = ({ element, index }) => {
    console.log(element.id)
    return (
        <Draggable draggableId={`elements-${element.id}`} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{ marginBottom: '10px' }}
                >
                    <Image width={50} height={50} src={element.imageUrl} alt={`Element ${element.id}`} />
                </div>
            )}
        </Draggable>
    );
};

const TaskComponent: React.FC<TaskProps> = ({
    level,
    title,
    droppableElements,
    dropTargets,
    soundUrlCorrect,
    soundUrlWrong,
    onDropSuccess,
}) => {
    const [played, setPlayed] = useState(false);
    const [isBrowser, setIsBrowser] = useState(false);

    const soundCorrect = new Howl({
        src: [soundUrlCorrect],
    });
    useEffect(() => {
        if (typeof window !== "undefined") {
          setIsBrowser(true);
        }
      }, []);
    const soundWrong = new Howl({
        src: [soundUrlWrong],
    });

    useEffect(() => {
        // Play sound when the component is mounted
        soundCorrect.play();
        setPlayed(true);
    }, []); // Empty dependency array ensures the effect runs once

    const handleDrop = (result: any) => {
        console.log(result)
        if (!result.destination) return;

        const { source, destination } = result;

        const droppedElement = droppableElements.find((el) => el.id === source.droppableId);
        const correctDropTarget = dropTargets.find((target) => target.id === destination.droppableId);
        console.log(source, destination)
        if (droppedElement && correctDropTarget) {
            if (droppedElement.correct && correctDropTarget.correct) {
                soundCorrect.play();
                setPlayed(true);
                onDropSuccess(level);
            } else {
                soundWrong.play();
                alert('Incorrect Drop!');
            }
        }
    };

    return (
        <div>
            <h2>{title}</h2>
            {
                isBrowser ? <DragDropContext onDragEnd={handleDrop}>
                <div style={{ display: 'flex' }}>
                    {/* {
                        droppableElements.map((element,index) => (
                            <Draggable draggableId={`elements-${element.id}`} index={index}>
                                {(provided) => (
                                    <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        key={element.id}
                                        ref={provided.innerRef}
                                        style={{ marginBottom: '10px' }}
                                    >
                                        <Image width={50} height={50} src={element.imageUrl} alt={`Element ${element.id}`} />
                                    </div>
                                )}
                            </Draggable>
                        ))
                    } */}
                    <Droppable droppableId="elements" direction="horizontal">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                // style={{
                                //     display: 'flex',
                                //     width: '100%',
                                //     height: '200px',
                                //     border: '1px solid #000',
                                //     backgroundColor: played ? 'lightgreen' : 'white',
                                // }}
                            >
                                {droppableElements.map((element, index) => (
                                    <DraggableElement key={element.id} element={element} index={index} />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    {
                        dropTargets.map((target) => (
                            <Droppable droppableId={`targets-${target.id}`} direction="horizontal">
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        style={{
                                            display: 'flex',
                                            marginLeft: '20px',
                                        }}
                                    >
                                        <Image
                                            key={target.id}
                                            width={50}
                                            height={50}
                                            src={target.imageUrl}
                                            alt={`Drop Target ${target.id}`}
                                        />
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        ))
                    }
                </div>
            </DragDropContext> : null
            }
            
        </div>
    );
};

export default TaskComponent;
