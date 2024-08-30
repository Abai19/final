import {shuffle} from 'lodash';

import LevelFifteen from '../../components/level-fifteen';
import TaskComponent from '../../components/task';

const dropTargets = [
    {id: 1, imageUrl: '/english/images/sq.png', isAnimated: true},
];
const droppableElementsSquirrel = shuffle([
    {id: 1, imageUrl: '/english/images/apple.png', title: 'Алманы'},
    {id: 1, imageUrl: '/english/images/nut.png', title: 'Жангакты'},
    {id: 1, imageUrl: '/english/images/pear.webp', title: 'Алмурутту'},
]);

const draggableItemsSecond = shuffle([
    {id: 1, imageUrl: '/english/images/ball.webp', title: 'Топту'},
    {id: 2, imageUrl: '/english/images/book.png', title: 'Китепти'},
    {id: 3, imageUrl: '/english/images/pen.png', title: 'Калемди'},
]);
const droppableItemsSecond = shuffle([
    {id: 4, imageUrl: '/english/images/table.webp', title: 'үстөлгө'},
    {id: 5, imageUrl: '/english/images/chair.webp', title: 'отургучка'},
    {id: 6, imageUrl: '/english/images/board.avif', title: 'тактага'},
]);

const draggableItemsThird = shuffle([
    {id: 1, imageUrl: '/english/images/ball.webp', title: 'Топту'},
    {id: 2, imageUrl: '/english/images/book.png', title: 'Китепти'},
    {id: 3, imageUrl: '/english/images/pen.png', title: 'Калемди'},
]);
const droppableItemsThird = shuffle([
    {id: 4, imageUrl: '/english/images/table.webp', title: 'үстөлгө'},
    {id: 5, imageUrl: '/english/images/chair.webp', title: 'отургучка'},
    {id: 6, imageUrl: '/english/images/board.avif', title: 'тактага'},
]);

const draggableItemsFour = [
    {id: 2, imageUrl: '/english/images/red_ball.png', title: 'Кызыл топту'},
    {id: 2, imageUrl: '/english/images/blue_book.png', title: 'Көк китепти'},
    {id: 2, imageUrl: '/english/images/green_pen.png', title: 'Жашыл калемди'},
];
    
const droppableItemsFour = [
    {id: 2, imageUrl: '/english/images/red-table.png', title: 'кызыл үстөлгө'},
    {id: 2, imageUrl: '/english/images/green_chair.png', title: 'жашыл отургучка'},
    {id: 2, imageUrl: '/english/images/black_board.webp', title: 'кара тактага'},
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
                    title={`${randomElementSquirrel.title} тыйынчычканга бер`}
                    droppableElements={[randomElementSquirrel]}
                    dropTargets={dropTargets}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="squirrel-2"
                    title={`${randomElementSquirrel.title} тыйынчычканга бер`}
                    droppableElements={[randomElementSquirrel]}
                    dropTargets={dropTargets}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="squirrel-3"
                    title={`${randomElementSquirrel.title} тыйынчычканга бер`}
                    droppableElements={[randomElementSquirrel]}
                    dropTargets={dropTargets}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="item"
                    title={`${draggableItemsSecond[0].title} ${randomPlaceSecond.title} кой`}
                    droppableElements={[{...draggableItemsSecond[0], id: randomPlaceSecond.id}]}
                    dropTargets={[randomPlaceSecond]}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="item-2"
                    title={`${draggableItemsSecond[1].title} ${randomPlaceSecond.title} кой`}
                    droppableElements={[draggableItemsSecond[0], {...draggableItemsSecond[1], id:randomPlaceSecond.id}]}
                    dropTargets={[randomPlaceSecond]}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="item-3" 
                    title={`${draggableItemsSecond[2].title} ${randomPlaceSecond.title} кой`}
                    droppableElements={[draggableItemsSecond[1], {...draggableItemsSecond[2], id:randomPlaceSecond.id}]}
                    dropTargets={[randomPlaceSecond]}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
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
                        ${draggableItemsSecond[0].title} ${randomPlaceSecond.title} кой, андан кийин
                        ${draggableItemsSecond[1].title} ${randomPlaceSecond.title} кой
                    `}
                    droppableElements={[
                        {...draggableItemsSecond[0], id:randomPlaceSecond.id + 1}, 
                        {...draggableItemsSecond[1], id:randomPlaceSecond.id},
                    ]}
                    dropTargets={[randomPlaceSecond]}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
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
                        ${draggableItemsSecond[0].title} ${randomPlaceSecond.title} кой, андан кийин
                        ${draggableItemsSecond[1].title} ${randomPlaceSecond.title} кой, андан кийин
                        ${draggableItemsSecond[2].title} ${randomPlaceSecond.title} кой
                    `}
                    droppableElements={[
                        {...draggableItemsSecond[0], id:randomPlaceSecond.id + 1}, 
                        {...draggableItemsSecond[1], id:randomPlaceSecond.id + 2}, 
                        {...draggableItemsSecond[2], id:randomPlaceSecond.id},
                    ]}
                    dropTargets={[randomPlaceSecond]}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="third"
                    title={`${draggableItemsThird[0].title} ${droppableItemsThird[0].title} кой`}
                    droppableElements={[{...draggableItemsThird[0], id: droppableItemsThird[0].id}]}
                    dropTargets={[droppableItemsThird[0]]}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="third-2"
                    title={`${draggableItemsThird[1].title} ${droppableItemsThird[1].title} кой`}
                    droppableElements={[{...draggableItemsThird[1]}]}
                    dropTargets={[
                        {...droppableItemsThird[0], id: 0}, 
                        {...droppableItemsThird[1], id: draggableItemsThird[1].id},
                    ]}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="third-3"
                    title={`${draggableItemsThird[2].title} ${droppableItemsThird[2].title} кой`}
                    droppableElements={[{...draggableItemsThird[2]}]}
                    dropTargets={[
                        {...droppableItemsThird[0], id: 0}, 
                        {...droppableItemsThird[2], id: draggableItemsThird[2].id},
                    ]}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    isMultiple={true}

                    key="third-4"
                    title={
                        `
                        ${draggableItemsThird[2].title} ${droppableItemsThird[1].title} кой, андан кийин
                        ${draggableItemsThird[0].title} ${droppableItemsThird[2].title} кой
                    `}
                    droppableElements={[
                        {...draggableItemsThird[2], id: droppableItemsThird[1].id},
                        {...draggableItemsThird[0], id: droppableItemsThird[2].id},
                    ]}
                    dropTargets={[
                        droppableItemsThird[2],
                        droppableItemsThird[1],
                    ]}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="color"
                    title={`${draggableItemsFour[0].title} ${droppableItemsFour[0].title} кой`}
                    droppableElements={[draggableItemsFour[0]]}
                    dropTargets={[droppableItemsFour[0]]}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="color-2"
                    title={`${draggableItemsFour[1].title} ${droppableItemsFour[1].title} кой`}
                    droppableElements={[draggableItemsFour[1]]}
                    dropTargets={[droppableItemsFour[1]]}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <LevelFifteen
                    key="15"
                    title="Көпүрөдөн өт"
                    droppableElements={[draggableItemsFour[1]]}
                    dropTargets={[droppableItemsFour[1]]}
                    soundUrlCorrect="/correct_ky.mp3"
                    soundUrlWrong="/wrong_ky.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
    ];
    return items;
};
