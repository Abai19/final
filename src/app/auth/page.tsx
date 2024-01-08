'use client';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Wrapper ,StyledForm} from "./styles";
import { useRouter } from "next/navigation";

const AuthPage = () => {
    const {push} = useRouter()
    const onFinish = (values: any) => {
        typeof window !== "undefined" ? localStorage.setItem('username', values.username ): ""
        push('/language')
    };

    return (
        <Wrapper>
        <StyledForm
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Введите логин!' }]}
            >
                <Input 
                    size="large" 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder="Введите логин"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Введите пароль!' }]}
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
                    <Checkbox>Запомить меня</Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button type="primary" size="large" style={{width: "100%"}}  htmlType="submit" className="login-form-button">
                    Войти
                </Button>
            </Form.Item>
        </StyledForm>
        </Wrapper>
    );
};

export default AuthPage