'use client';
import {DoubleRightOutlined, LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Typography} from 'antd';
import {useRouter} from 'next/navigation';

import {Wrapper, StyledForm} from './styles';

const AuthPage = () => {
    const {push} = useRouter();
    const onFinish = (values: any) => {
        typeof window !== 'undefined' ? localStorage.setItem('username', values.username) : '';
        push('/kyrgyz');
    };

    return (
        <Wrapper>
        
            <StyledForm
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Typography.Title level={4} style={{textAlign: 'center'}}>
                    КЫРГЫЗ ТИЛИНЕ КӨЗ КАРАНДЫСЫЗ КИРГИЗүү <br />
                    КАРАГУЛОВ А., БАКТЫБЕКОВ А., КЕНЕНБАЕВ Э.
                </Typography.Title>
                {/* <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Введите логин!'}]}
                >
                    <Input 
                        size="large" 
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder="Введите логин"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Введите пароль!'}]}
                >
                    <Input
                        size="large"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Введите пароль"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>
                </Form.Item> */}

                <Form.Item>
                    <Button 
                        type="primary"
                        size="large" 
                        style={{width: '100%'}} 
                        htmlType="submit" 
                        className="login-form-button"
                        icon={<DoubleRightOutlined />}
                    >
                        
                    </Button>
                </Form.Item>
            </StyledForm>
        </Wrapper>
    );
};

export default AuthPage;
