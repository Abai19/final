'use client';
import {Space, Typography} from 'antd';
import {useRouter} from 'next/navigation';
import {FC} from 'react';

import withHeader from '../../hoc/with-header';

import {LanguageWrapper, StyledButton} from './styles';

const Language: FC = () => {
    const {push} = useRouter();

    return (
        <LanguageWrapper>
            <div>
                <Typography.Title level={4}>
                Выберите язык для обучения
                </Typography.Title>
                <Space direction="vertical" style={{width: '100%'}} size="middle">
                    <StyledButton size="large" type="primary" onClick={() => push('/english')}>
                Английский
                    </StyledButton>
                    <StyledButton size="large" type="primary" onClick={() => push('/kyrgyz')}>
                Кыргызский
                    </StyledButton>
                    <StyledButton size="large" type="primary" onClick={() => push('/korean')}>
                Корейский
                    </StyledButton>
                </Space>
            </div>
        </LanguageWrapper>
    );
};
export default withHeader(Language);
