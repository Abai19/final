'use client'
import { Badge, Button, Dropdown, MenuProps } from "antd";
import { HeaderWrapper, Logo } from "./styles";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#1677ff',
};
export const Header = () => {

    const { push } = useRouter();
    const logoutClick = () => {
        push('auth')
    }
    const items: MenuProps['items'] = [
        {
            label: 'Выйти из профиля',
            key: '1',
            onClick: logoutClick
        },
    ];
    const title = useMemo(() => {
        if (typeof window == "undefined"){
            return ''
        }
        return typeof window !== "undefined" ? window.localStorage.getItem('username'): ""
    },[window.localStorage])

    return (
        <HeaderWrapper style={headerStyle}>
            <Logo>
                easy language
            </Logo>
            <Badge count={'lite'} overflowCount={99999}>

                <Dropdown menu={{ items }} placement="bottom" >
                    <Button icon={<UserOutlined style={{ fontSize: 20 }} />}>
                        {title}
                    </Button>
                </Dropdown>
            </Badge>

        </HeaderWrapper>
    )
}