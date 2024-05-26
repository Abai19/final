import {shuffle} from 'lodash';

import LevelFifteen from '../../components/level-fifteen';
import TaskComponent from '../../components/task';

const dropTargets = [
    {id: 1, imageUrl: '/english/images/sq.png', isAnimated: true},
];
const droppableElementsSquirrel = shuffle([
    {id: 1, imageUrl: '/english/images/apple.png', title: 'an apple'},
    {id: 1, imageUrl: '/english/images/nut.png', title: 'a nut'},
    {id: 1, imageUrl: '/english/images/pear.webp', title: 'a pear'},
]);

const draggableItemsSecond = shuffle([
    {id: 1, imageUrl: '/english/images/ball.webp', title: 'the ball'},
    {id: 2, imageUrl: '/english/images/book.png', title: 'the book'},
    {id: 3, imageUrl: '/english/images/pen.png', title: 'the pen'},
]);
const droppableItemsSecond = shuffle([
    {id: 4, imageUrl: '/english/images/table.webp', title: 'table'},
    {id: 5, imageUrl: '/english/images/chair.webp', title: 'chair'},
    {id: 6, imageUrl: '/english/images/board.avif', title: 'board'},
]);

const draggableItemsThird = shuffle([
    {id: 1, imageUrl: '/english/images/ball.webp', title: 'the ball'},
    {id: 2, imageUrl: '/english/images/book.png', title: 'the book'},
    {id: 3, imageUrl: '/english/images/pen.png', title: 'the pen'},
]);
const droppableItemsThird = shuffle([
    {id: 4, imageUrl: '/english/images/table.webp', title: 'table'},
    {id: 5, imageUrl: '/english/images/chair.webp', title: 'chair'},
    {id: 6, imageUrl: '/english/images/board.avif', title: 'board'},
]);

const draggableItemsFour = [
    {id: 2, imageUrl: '/english/images/red_ball.png', title: 'red ball'},
    {id: 2, imageUrl: '/english/images/blue_book.png', title: 'blue book'},
    {id: 2, imageUrl: '/english/images/green_pen.png', title: 'green pen'},
];
    
const droppableItemsFour = [
    {id: 2, imageUrl: '/english/images/red-table.png', title: 'red table'},
    {id: 2, imageUrl: '/english/images/green_chair.png', title: 'green chair'},
    {id: 2, imageUrl: '/english/images/black_board.webp', title: 'black board'},
];
export const getItems = (currentItem: number) => {
    const randomElementSquirrel = droppableElementsSquirrel[currentItem % droppableElementsSquirrel.length];

    const randomPlaceSecond = droppableItemsSecond[0];

    const items = [
        {
            title: '',
            content: (
                <TaskComponent
                    key="squirrel-1"
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
                    key="squirrel-2"
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
                    key="squirrel-3"
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
                    title={`Put ${draggableItemsSecond[0].title} on the ${randomPlaceSecond.title}`}
                    droppableElements={[{...draggableItemsSecond[0], id: randomPlaceSecond.id}]}
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
                    title={`Put ${draggableItemsSecond[1].title} on the ${randomPlaceSecond.title}`}
                    droppableElements={[draggableItemsSecond[0], {...draggableItemsSecond[1], id:randomPlaceSecond.id}]}
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
                    title={`Put ${draggableItemsSecond[2].title} on the ${randomPlaceSecond.title}`}
                    droppableElements={[draggableItemsSecond[1], {...draggableItemsSecond[2], id:randomPlaceSecond.id}]}
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
                    isMultiple={true}
                    key="item-4"
                    title={`
                        Put ${draggableItemsSecond[0].title} on the ${randomPlaceSecond.title},
                        Put ${draggableItemsSecond[1].title} on the ${randomPlaceSecond.title}
                    `}
                    droppableElements={[
                        {...draggableItemsSecond[0], id:randomPlaceSecond.id + 1}, 
                        {...draggableItemsSecond[1], id:randomPlaceSecond.id},
                    ]}
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
                    key="item-5"
                    isMultiple={true}
                    title={`
                        Put ${draggableItemsSecond[0].title} on the ${randomPlaceSecond.title},
                        Put ${draggableItemsSecond[1].title} on the ${randomPlaceSecond.title},
                        Put ${draggableItemsSecond[2].title} on the ${randomPlaceSecond.title}
                    `}
                    droppableElements={[
                        {...draggableItemsSecond[0], id:randomPlaceSecond.id + 1}, 
                        {...draggableItemsSecond[1], id:randomPlaceSecond.id + 2}, 
                        {...draggableItemsSecond[2], id:randomPlaceSecond.id},
                    ]}
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
                    key="third"
                    title={`Put ${draggableItemsThird[0].title} on the ${droppableItemsThird[0].title}`}
                    droppableElements={[{...draggableItemsThird[0], id: droppableItemsThird[0].id}]}
                    dropTargets={[droppableItemsThird[0]]}
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
                    key="third-2"
                    title={`Put ${draggableItemsThird[1].title} on the ${droppableItemsThird[1].title}`}
                    droppableElements={[{...draggableItemsThird[1]}]}
                    dropTargets={[
                        {...droppableItemsThird[0], id: 0}, 
                        {...droppableItemsThird[1], id: draggableItemsThird[1].id},
                    ]}
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
                    key="third-3"
                    title={`Put ${draggableItemsThird[2].title} on the ${droppableItemsThird[2].title}`}
                    droppableElements={[{...draggableItemsThird[2]}]}
                    dropTargets={[
                        {...droppableItemsThird[0], id: 0}, 
                        {...droppableItemsThird[2], id: draggableItemsThird[2].id},
                    ]}
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
                    key="third-4"
                    isMultiple={true}
                    title={
                        `
                        Put ${draggableItemsThird[2].title} on the ${droppableItemsThird[1].title},
                        Put ${draggableItemsThird[0].title} on the ${droppableItemsThird[2].title}
                    `}
                    droppableElements={[
                        {...draggableItemsThird[2], id: droppableItemsThird[1].id},
                        {...draggableItemsThird[0], id: droppableItemsThird[2].id},
                    ]}
                    dropTargets={[
                        droppableItemsThird[2],
                        droppableItemsThird[1],
                    ]}
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
                    title={`Put the ${draggableItemsFour[0].title} on the ${droppableItemsFour[0].title}`}
                    droppableElements={[draggableItemsFour[0]]}
                    dropTargets={[droppableItemsFour[0]]}
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
                    title={`Put the ${draggableItemsFour[1].title} on the ${droppableItemsFour[1].title}`}
                    droppableElements={[draggableItemsFour[1]]}
                    dropTargets={[droppableItemsFour[1]]}
                    soundUrlCorrect="/english/sounds/great.mp3"
                    soundUrlWrong="/english/sounds/wrong.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <LevelFifteen
                    key="15"
                    title="Cross the bridge"
                    droppableElements={[draggableItemsFour[1]]}
                    dropTargets={[droppableItemsFour[1]]}
                    soundUrlCorrect="/english/sounds/great.mp3"
                    soundUrlWrong="/english/sounds/wrong.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
    ];
    return items;
};
