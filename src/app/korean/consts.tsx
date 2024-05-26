import {shuffle} from 'lodash';

import LevelFifteen from '../../components/level-fifteen';
import TaskComponent from '../../components/task';

const dropTargets = [
    {id: 1, imageUrl: '/english/images/sq.png', isAnimated: true},
];
const droppableElementsSquirrel = shuffle([
    {id: 1, imageUrl: '/english/images/apple.png', title: '사과'},
    {id: 1, imageUrl: '/english/images/nut.png', title: '너트'},
    {id: 1, imageUrl: '/english/images/pear.webp', title: '배'},
]);

const draggableItemsSecond = shuffle([
    {id: 1, imageUrl: '/english/images/ball.webp', title: '공을'},
    {id: 2, imageUrl: '/english/images/book.png', title: '책을'},
    {id: 3, imageUrl: '/english/images/pen.png', title: '펜을'},
]);
const droppableItemsSecond = shuffle([
    {id: 4, imageUrl: '/english/images/table.webp', title: '테이블'},
    {id: 5, imageUrl: '/english/images/chair.webp', title: '의자 위에'},
    {id: 6, imageUrl: '/english/images/board.avif', title: '판자'},
]);

const draggableItemsThird = shuffle([
    {id: 1, imageUrl: '/english/images/ball.webp', title: '공을'},
    {id: 2, imageUrl: '/english/images/book.png', title: '책을'},
    {id: 3, imageUrl: '/english/images/pen.png', title: '펜을'},
]);
const droppableItemsThird = shuffle([
    {id: 4, imageUrl: '/english/images/table.webp', title: '테이블'},
    {id: 5, imageUrl: '/english/images/chair.webp', title: '의자 위에'},
    {id: 6, imageUrl: '/english/images/board.avif', title: '판자'},
]);

const draggableItemsFour = [
    {id: 2, imageUrl: '/english/images/red_ball.png', title: '빨간 공'},
    {id: 2, imageUrl: '/english/images/blue_book.png', title: '파란 책'},
    {id: 2, imageUrl: '/english/images/green_pen.png', title: '녹색 펜'},
];
    
const droppableItemsFour = [
    {id: 2, imageUrl: '/english/images/red-table.png', title: '빨간 테이블'},
    {id: 2, imageUrl: '/english/images/green_chair.png', title: '녹색 의자'},
    {id: 2, imageUrl: '/english/images/black_board.webp', title: '블랙보드'},
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
                    title={`다람쥐에게 ${randomElementSquirrel.title} 줘`}
                    droppableElements={[randomElementSquirrel]}
                    dropTargets={dropTargets}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="squirrel-2"
                    title={`다람쥐에게 ${randomElementSquirrel.title} 줘`}
                    droppableElements={[randomElementSquirrel]}
                    dropTargets={dropTargets}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="squirrel-3"
                    title={`다람쥐에게 ${randomElementSquirrel.title} 줘`}
                    droppableElements={[randomElementSquirrel]}
                    dropTargets={dropTargets}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="item"
                    title={`${draggableItemsSecond[0].title} ${randomPlaceSecond.title} 놓다`}
                    droppableElements={[{...draggableItemsSecond[0], id: randomPlaceSecond.id}]}
                    dropTargets={[randomPlaceSecond]}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="item-2"
                    title={`${draggableItemsSecond[1].title} ${randomPlaceSecond.title} 놓다`}
                    droppableElements={[draggableItemsSecond[0], {...draggableItemsSecond[1], id:randomPlaceSecond.id}]}
                    dropTargets={[randomPlaceSecond]}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="item-3"
                    title={`${draggableItemsSecond[2].title} ${randomPlaceSecond.title} 놓다`}
                    droppableElements={[draggableItemsSecond[1], {...draggableItemsSecond[2], id:randomPlaceSecond.id}]}
                    dropTargets={[randomPlaceSecond]}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
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
                        ${draggableItemsSecond[0].title} ${randomPlaceSecond.title} 놓다,
                        ${draggableItemsSecond[1].title} ${randomPlaceSecond.title} 놓다
                    `}
                    droppableElements={[
                        {...draggableItemsSecond[0], id:randomPlaceSecond.id + 1}, 
                        {...draggableItemsSecond[1], id:randomPlaceSecond.id},
                    ]}
                    dropTargets={[randomPlaceSecond]}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    isMultiple={true}
                    key="item-5"
                    title={`
                        ${draggableItemsSecond[0].title} ${randomPlaceSecond.title} 놓다,
                        ${draggableItemsSecond[1].title} ${randomPlaceSecond.title} 놓다,
                        ${draggableItemsSecond[2].title} ${randomPlaceSecond.title} 놓다
                    `}
                    droppableElements={[
                        {...draggableItemsSecond[0], id:randomPlaceSecond.id + 1}, 
                        {...draggableItemsSecond[1], id:randomPlaceSecond.id + 2}, 
                        {...draggableItemsSecond[2], id:randomPlaceSecond.id},
                    ]}
                    dropTargets={[randomPlaceSecond]}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="third"
                    title={`${draggableItemsThird[0].title} ${droppableItemsThird[0].title} 놓다`}
                    droppableElements={[{...draggableItemsThird[0], id: droppableItemsThird[0].id}]}
                    dropTargets={[droppableItemsThird[0]]}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="third-2"
                    title={`${draggableItemsThird[1].title} ${droppableItemsThird[1].title} 놓다`}
                    droppableElements={[{...draggableItemsThird[1]}]}
                    dropTargets={[
                        {...droppableItemsThird[0], id: 0}, 
                        {...droppableItemsThird[1], id: draggableItemsThird[1].id},
                    ]}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="third-3"
                    title={`${draggableItemsThird[2].title} ${droppableItemsThird[2].title} 놓다`}
                    droppableElements={[{...draggableItemsThird[2]}]}
                    dropTargets={[
                        {...droppableItemsThird[0], id: 0}, 
                        {...droppableItemsThird[2], id: draggableItemsThird[2].id},
                    ]}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
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
                        ${draggableItemsThird[2].title} ${droppableItemsThird[1].title} 놓다,
                        ${draggableItemsThird[0].title} ${droppableItemsThird[2].title} 놓다
                    `}
                    droppableElements={[
                        {...draggableItemsThird[2], id: droppableItemsThird[1].id},
                        {...draggableItemsThird[0], id: droppableItemsThird[2].id},
                    ]}
                    dropTargets={[
                        droppableItemsThird[2],
                        droppableItemsThird[1],
                    ]}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="color"
                    title={`${draggableItemsFour[0].title} ${droppableItemsFour[0].title} 놓다`}
                    droppableElements={[draggableItemsFour[0]]}
                    dropTargets={[droppableItemsFour[0]]}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <TaskComponent
                    key="color-2"
                    title={`${draggableItemsFour[1].title} ${droppableItemsFour[1].title} 놓다`}
                    droppableElements={[draggableItemsFour[1]]}
                    dropTargets={[droppableItemsFour[1]]}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
        {
            title: '',
            content: (
                <LevelFifteen
                    key="15"
                    title="다리를 건너다"
                    droppableElements={[draggableItemsFour[1]]}
                    dropTargets={[droppableItemsFour[1]]}
                    soundUrlCorrect="/correct_kor.mp3"
                    soundUrlWrong="/wrong_kor.mp3"
                    currentLevel={currentItem}
                />
            ),
        },
    ];
    return items;
};
