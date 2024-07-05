'use client';
import {Spin} from 'antd';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';
export default function Home () {
    const {push} = useRouter();
    useEffect(() => {
        push('/language');
    }, []);
    return (
        <div>
            <Spin size="large" />
        </div>     
    );
}
