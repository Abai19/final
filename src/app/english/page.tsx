'use client';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import {Button, Flex, Result, Steps, Typography, notification} from 'antd';
import {FC, useMemo, useState} from 'react';

import withHeader from '../../hoc/with-header';

import {getItems} from './consts';
import {Wrapper} from './styles';

const English: FC = () => {
    const [currentLevel, setCurrentLevel] = useState(0);

    const goNext = () => {
        setCurrentLevel(currentLevel + 1);
    };
    const goNextChapter = () => {
        if (currentLevel <= 2) {
            setCurrentLevel(3);
        }
        if (currentLevel > 2 && currentLevel <= 8) {
            setCurrentLevel(8);
        }
        if (currentLevel >= 8 && currentLevel <= 12) {
            setCurrentLevel(12);
        }
    };

    const goPrev = () => {
        setCurrentLevel(currentLevel - 1);
    };
    const content = useMemo(() => {
        const items = getItems(currentLevel);
        if (!items[currentLevel]?.content) {
            notification.success({message: 'Congratulations, you have completed all tasks', duration: 1});
            return (
                <Result
                    status="success"
                    title={
                        <>
                            <Typography.Title level={4}>
                                Congratulations, you have completed all tasks!
                            </Typography.Title>
                            <Typography.Title level={4}>
                                You are closer to your goal!
                            </Typography.Title>
                        </>
                    }
                />
            );
        }
        return items[currentLevel].content;
    }, [currentLevel]);

    const stepsLength = getItems(currentLevel).length;
    
    return (
        <Wrapper>
            <Flex align="center" gap={10}>
                {
                    currentLevel > 0 && (
                        <Button size="large" icon={<LeftOutlined />} onClick={goPrev}>Previous</Button>
                    )
                }
                <Steps current={currentLevel} items={getItems(currentLevel)} />
                {
                    currentLevel < 12 && (
                        <Button size="large" onClick={goNextChapter}>
                            Next chapter
                            <RightOutlined />
                        </Button>                    
                    )
                }
                {
                    currentLevel < stepsLength && (
                        <Button size="large" onClick={goNext}>
                            Next
                            <RightOutlined />
                        </Button>                    
                    )
                }
            </Flex>
            {content}
        </Wrapper>
    );
};
export default withHeader(English);
