'use client';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import {Button, Flex, Steps, notification} from 'antd';
import {FC, useMemo, useState} from 'react';

import withHeader from '../../hoc/with-header';

import {getItems} from './consts';
import {Wrapper} from './styles';

const English: FC = () => {
    const [currentLevel, setCurrentLevel] = useState(0);

    const goNext = () => {
        setCurrentLevel(currentLevel + 1);
    };

    const goPrev = () => {
        setCurrentLevel(currentLevel - 1);
    };
    const content = useMemo(() => {
        const items = getItems(currentLevel);
        if (!items[currentLevel]?.content) {
            notification.success({message: 'Congratulations, you have completed all tasks'});
            return '';
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
                    currentLevel < stepsLength - 1 && (
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
