'use client';

import { useState } from "react";
import withHeader from "../../hoc/with-header"
import {TaskComponent} from "../../components/task-test";
import dynamic from "next/dynamic";

const English = () => {
    const [currentLevel, setCurrentLevel] = useState(1);

    const droppableElements = [
        { id: 1, imageUrl: '/english/red_ball.png', correct: true },
        { id: 2, imageUrl: '/english/red_ball.png', correct: true },

        // Add more droppable elements as needed
    ];

    const dropTargets = [
        { id: 1,imageUrl: '/english/red_ball.png', correct: true },
        // Add more drop targets as needed
    ];

    const handleDropSuccess = (level: number) => {
        setCurrentLevel(level + 1);
    };

    return (
        <div>
            english
            <TaskComponent
                level={currentLevel}
                title="Put the red ball on the red table"
                droppableElements={droppableElements}
                dropTargets={dropTargets}
                soundUrlCorrect="/english/great.mp3"
                soundUrlWrong="/english/great.mp3"
                onDropSuccess={handleDropSuccess}
            />
        </div>
    )
}
export default withHeader(English)