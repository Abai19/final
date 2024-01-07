import TaskComponent from '../../components/task'

const droppableElements2 = [
    { id: 1, imageUrl: '/english/images/red_ball.png', correct: true },
];

const dropTargets2 = [
    { id: 1,imageUrl: '/english/images/red-table.png', correct: true },
];

const droppableElements = [
    { id: 1, imageUrl: '/english/images/apple.png', correct: true },
];

const dropTargets = [
    { id: 1,imageUrl: '/english/images/sq.png', correct: true },
];
const droppableElements3 = [
    { id: 1, imageUrl: '/english/images/nut.png', correct: true },
];

const dropTargets3 = [
    { id: 1,imageUrl: '/english/images/sq.png', correct: true },
];

const droppableElements4 = [
    { id: 1, imageUrl: '/english/images/pear.png', correct: true },
];

const dropTargets4 = [
    { id: 1,imageUrl: '/english/images/sq.png', correct: true },
];
export const getItems = (handleDropSuccess: () => void) =>  [
    {
        title: '',
        content: (
            <TaskComponent
                title="Give the squirrel an apple"
                titleSound= '/english/sounds/squirrel-apple.mp3'
                droppableElements={droppableElements}
                dropTargets={dropTargets}
                soundUrlCorrect="/english/sounds/thankyou.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                onDropSuccess={handleDropSuccess}
            />
        )
    },
    {
        title: '',
        content: (
            <TaskComponent
                title="Give the squirrel a nut"
                titleSound= '/english/sounds/squirrel-nut.mp3'
                droppableElements={droppableElements3}
                dropTargets={dropTargets3}
                soundUrlCorrect="/english/sounds/thankyou.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                onDropSuccess={handleDropSuccess}
            />
        )
    },
    {
        title: '',
        content: (
            <TaskComponent
                title="Give the squirrel a pear"
                titleSound= '/english/sounds/squirrel-nut.mp3'
                droppableElements={droppableElements4}
                dropTargets={dropTargets4}
                soundUrlCorrect="/english/sounds/thankyou.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                onDropSuccess={handleDropSuccess}
            />
        )
    },
    {
        title: '',
        content: (
            <TaskComponent
                title="Put the red ball on the red table"
                titleSound= '/english/sounds/redball-redtable.mp3'
                droppableElements={droppableElements2}
                dropTargets={dropTargets2}
                soundUrlCorrect="/english/sounds/great.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                onDropSuccess={handleDropSuccess}
            />
        )
    },
]