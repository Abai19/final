// hoc/with-header.tsx
import React, {FC, ReactNode} from 'react';

import {Header} from '../components/header';

import {Wrapper} from './styles';

interface WithHeaderProps {
  children?: ReactNode;
}
const withHeader = <P extends WithHeaderProps>(
    WrappedComponent: React.ComponentType<P>,
) => {
    const WithHeader: FC<P> = (props) => {
        return (
            <Wrapper>

                <Header />
                <WrappedComponent {...props} />
            </Wrapper>
        );
    };

    return WithHeader;
};

export default withHeader;
