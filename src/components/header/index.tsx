'use client';
import {UserOutlined} from '@ant-design/icons';
import {Badge, Button, Dropdown, MenuProps} from 'antd';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';

import {HeaderWrapper, Logo} from './styles';
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#1677ff',
};
export const Header = () => {
    const [title, setTitle] = useState<string>('');

    const {push} = useRouter();
    const logoutClick = () => {
        push('language');
    };
    const items: MenuProps['items'] = [
        {
            label: 'Выйти из профиля',
            key: '1',
            onClick: logoutClick,
        },
    ];
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUsername = localStorage.getItem('username');
            setTitle(storedUsername || '');
        }
    }, []);

    return (
        <HeaderWrapper style={headerStyle}>
            <Logo>
                easy language
            </Logo>
            <Badge count="lite" overflowCount={99999}>
                <Dropdown menu={{items}} placement="bottom">
                    <Button icon={<UserOutlined style={{fontSize: 20}} />}>
                        {title}
                    </Button>
                </Dropdown>
            </Badge>
        </HeaderWrapper>
    );
};
