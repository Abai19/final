'use client';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import {Button, Flex, Result, Typography, notification} from 'antd';
import {FC, useMemo, useState} from 'react';

import withHeader from '../../hoc/with-header';

import {getItems} from './consts';
import {Wrapper, StyledSteps} from './styles';

const Kyrgyz: FC = () => {
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
            notification.success({message: 'Жакшы!', duration: 1});
            return (
                <Result
                    status="success"
                    title={
                        <>
                            <Typography.Title level={4}>
                                Куттуктайбыз, сиз бардык тапшырмаларды аткардыңыз!
                            </Typography.Title>
                            <Typography.Title level={4}>
                                Сиз максатыңызга жакындадыңыз!
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
                        <Button size="large" icon={<LeftOutlined />} onClick={goPrev}></Button>
                    )
                }
                <StyledSteps current={currentLevel} items={getItems(currentLevel)} />
                {
                    currentLevel < 12 && (
                        <Button size="large" onClick={goNextChapter}>
                            =<RightOutlined />
                        </Button>                    
                    )
                }
                {
                    currentLevel < stepsLength && (
                        <Button size="large" onClick={goNext}>
                            <RightOutlined />
                        </Button>                    
                    )
                }
            </Flex>
            {content}
        </Wrapper>
    );
};
export default withHeader(Kyrgyz);
