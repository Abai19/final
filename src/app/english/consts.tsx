import TaskComponent from '../../components/task'

const droppableElements2 = [
    { id: 2, imageUrl: '/english/images/red_ball.png'},
];

const dropTargets2 = [
    { id: 2,imageUrl: '/english/images/red-table.png' },
];

const droppableElements = [
    { id: 1, imageUrl: '/english/images/apple.png'},
];

const dropTargets = [
    { id: 1,imageUrl: '/english/images/sq.png', isAnimated: true },
];
const droppableElements3 = [
    { id: 3, imageUrl: '/english/images/nut.png'},
];

const dropTargets3 = [
    { id: 3,imageUrl: '/english/images/sq.png', isAnimated: true },
];

const droppableElements4 = [
    { id: 4, imageUrl: '/english/images/pear.webp' },
];

const dropTargets4 = [
    { id: 4,imageUrl: '/english/images/sq.png', isAnimated: true },
];

const droppableElements5 = [
    { id: 4, imageUrl: '/english/images/ball.webp' },
];

const dropTargets5 = [
    { id: 4,imageUrl: '/english/images/table.webp'},
];

const droppableElements6 = [
    { id: 4, imageUrl: '/english/images/book.png' },
];

const dropTargets6 = [
    { id: 4,imageUrl: '/english/images/chair.webp'},
];

const droppableElements7 = [
    { id: 4, imageUrl: '/english/images/pen.png' },
];

const dropTargets7 = [
    { id: 4,imageUrl: '/english/images/board.avif'},
];
export const getItems = (currentItem: number) =>  [
    {
        title: '',
        content: (
            <TaskComponent
                key={currentItem}
                title="Give an apple to the squirrel"
                titleSound= '/english/sounds/squirrel-apple.mp3'
                droppableElements={droppableElements}
                dropTargets={dropTargets}
                soundUrlCorrect="/english/sounds/thankyou.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        )
    },
    {
        title: '',
        content: (
            <TaskComponent
                key={currentItem}
                title="Give a nut to the squirrel"
                titleSound= '/english/sounds/squirrel-nut.mp3'
                droppableElements={droppableElements3}
                dropTargets={dropTargets3}
                soundUrlCorrect="/english/sounds/thankyou.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        )
    },
    {
        title: '',
        content: (
            <TaskComponent
                key={currentItem}
                title="Give a pear to the squirrel"
                titleSound= '/english/sounds/squirrel-pear.mp3'
                droppableElements={droppableElements4}
                dropTargets={dropTargets4}
                soundUrlCorrect="/english/sounds/thankyou.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        )
    },
    {
        title: '',
        content: (
            <TaskComponent
                key={currentItem}
                title="Put the ball on the table"
                titleSound= '/english/sounds/ball-table.mp3'
                droppableElements={droppableElements5}
                dropTargets={dropTargets5}
                soundUrlCorrect="/english/sounds/great.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        )
    },
    {
        title: '',
        content: (
            <TaskComponent
                key={currentItem}
                title="Put the book on the chair"
                titleSound= '/english/sounds/book-chair.mp3'
                droppableElements={droppableElements6}
                dropTargets={dropTargets6}
                soundUrlCorrect="/english/sounds/great.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        )
    },
    {
        title: '',
        content: (
            <TaskComponent
                key={currentItem}
                title="Put the pen on the board"
                titleSound= '/english/sounds/pen-board.mp3'
                droppableElements={droppableElements7}
                dropTargets={dropTargets7}
                soundUrlCorrect="/english/sounds/great.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        )
    },
    {
        title: '',
        content: (
            <TaskComponent
                key={currentItem}
                title="Put the red ball on the red table"
                titleSound= '/english/sounds/redball-redtable.mp3'
                droppableElements={droppableElements2}
                dropTargets={dropTargets2}
                soundUrlCorrect="/english/sounds/great.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        )
    },
]