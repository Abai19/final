'use client';

import { FC, useMemo, useState } from "react";
import withHeader from "../../hoc/with-header"
import { Button, Flex, Steps, notification } from "antd";
import { getItems } from "./consts";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Wrapper } from "./styles";

const English: FC = () => {
    const [currentLevel, setCurrentLevel] = useState(0);

    const goNext = () => {
        setCurrentLevel(currentLevel + 1);
    };

    const goPrev = () => {
        setCurrentLevel(currentLevel - 1);
    };

    const content = useMemo(() => {
        if (! getItems(goNext)[currentLevel]?.content) {
            notification.success({message: 'Congratulations, you have completed all tasks'})
            return ''
        }
        return getItems(goNext)[currentLevel].content
    },[currentLevel])

    const stepsLength = getItems(goNext).length;
    
    return (
        <Wrapper>
            <Flex align="center" gap={10}>
                {
                    currentLevel > 0 && (
                        <Button size="large" icon={<LeftOutlined />} onClick={goPrev}>Previous</Button>
                    )
                }
                <Steps current={currentLevel} items={getItems(goNext)} />
                {
                        currentLevel < stepsLength - 1 && (
                        <Button size="large" onClick={goNext}>
                            Next
                            <RightOutlined />
                        </Button>                    )
                }
            </Flex>
            {content}
        </Wrapper>
    )
}
export default withHeader(English)