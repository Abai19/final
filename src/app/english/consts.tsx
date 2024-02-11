import TaskComponent from '../../components/task';

const dropTargets = [
    {id: 1, imageUrl: '/english/images/sq.png', isAnimated: true},
];

export const getItems = (currentItem: number) => {
    const droppableElementsSquirrel = [
        {id: 1, imageUrl: '/english/images/apple.png', title: 'an apple'},
        {id: 1, imageUrl: '/english/images/nut.png', title: 'a nut'},
        {id: 1, imageUrl: '/english/images/pear.webp', title: 'a pear'},
    ];
    const randomElementSquirrel = droppableElementsSquirrel[Math.floor(Math.random() 
        * droppableElementsSquirrel.length)];

    const draggableItemsSecond = [
        {id: 4, imageUrl: '/english/images/ball.webp', title: 'the ball'},
        {id: 4, imageUrl: '/english/images/book.png', title: 'the book'},
        {id: 4, imageUrl: '/english/images/pen.png', title: 'the pen'},
    ];
    const droppableItemsSecond = [
        {id: 4, imageUrl: '/english/images/table.webp', title: 'table'},
        {id: 4, imageUrl: '/english/images/chair.webp', title: 'chair'},
        {id: 4, imageUrl: '/english/images/board.avif', title: 'board'},
    ];
    const randomElementSecond = draggableItemsSecond[Math.floor(Math.random() * draggableItemsSecond.length)];
    const randomPlaceSecond = droppableItemsSecond[Math.floor(Math.random() * droppableItemsSecond.length)];

    const draggableItemsThird = [
        {id: 2, imageUrl: '/english/images/red_ball.png', title: 'red ball'},
        {id: 2, imageUrl: '/english/images/blue_book.png', title: 'blue book'},
        {id: 2, imageUrl: '/english/images/green_pen.png', title: 'green pen'},
    ];
    
    const droppableItemsThird = [
        {id: 2, imageUrl: '/english/images/red-table.png', title: 'red table'},
        {id: 2, imageUrl: '/english/images/green_chair.png', title: 'green chair'},
        {id: 2, imageUrl: '/english/images/black_board.webp', title: 'black board'},
    ];
    const randomElementThird = draggableItemsThird[Math.floor(Math.random() * draggableItemsThird.length)];
    const randomPlaceThird = droppableItemsThird[Math.floor(Math.random() * droppableItemsThird.length)];

    const items = [{
        title: '',
        content: (
            <TaskComponent
                key="squirrel"
                title={`Give ${randomElementSquirrel.title} to the squirrel`}
                droppableElements={[randomElementSquirrel]}
                dropTargets={dropTargets}
                soundUrlCorrect="/english/sounds/thankyou.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        ),
    },
    {
        title: '',
        content: (
            <TaskComponent
                key="item"
                title={`Put ${randomElementSecond.title} on the ${randomPlaceSecond.title}`}
                droppableElements={[randomElementSecond]}
                dropTargets={[randomPlaceSecond]}
                soundUrlCorrect="/english/sounds/great.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        ),
    },
    {
        title: '',
        content: (
            <TaskComponent
                key="item-2"
                title={`Put ${randomElementSecond.title} on the ${randomPlaceSecond.title}`}
                droppableElements={[randomElementSecond]}
                dropTargets={[randomPlaceSecond]}
                soundUrlCorrect="/english/sounds/great.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        ),
    },
    {
        title: '',
        content: (
            <TaskComponent
                key="item-3"
                title={`Put ${randomElementSecond.title} on the ${randomPlaceSecond.title}`}
                droppableElements={[randomElementSecond]}
                dropTargets={[randomPlaceSecond]}
                soundUrlCorrect="/english/sounds/great.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        ),
    },
    {
        title: '',
        content: (
            <TaskComponent
                key="color"
                title={`Put the ${randomElementThird.title} on the ${randomPlaceThird.title}`}
                droppableElements={[randomElementThird]}
                dropTargets={[randomPlaceThird]}
                soundUrlCorrect="/english/sounds/great.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        ),
    },
    {
        title: '',
        content: (
            <TaskComponent
                key="color-2"
                title={`Put the ${randomElementThird.title} on the ${randomPlaceThird.title}`}
                droppableElements={[randomElementThird]}
                dropTargets={[randomPlaceThird]}
                soundUrlCorrect="/english/sounds/great.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        ),
    },
    {
        title: '',
        content: (
            <TaskComponent
                key="color-3"
                title={`Put the ${randomElementThird.title} on the ${randomPlaceThird.title}`}
                droppableElements={[randomElementThird]}
                dropTargets={[randomPlaceThird]}
                soundUrlCorrect="/english/sounds/great.mp3"
                soundUrlWrong="/english/sounds/wrong.mp3"
                currentLevel={currentItem}
            />
        ),
    },
    ];
    return items;
};
