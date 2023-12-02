// hoc/with-header.tsx
import React, { FC, ReactNode } from "react";
import { Wrapper } from "./styles";
import { Header } from "../components/header";

interface WithHeaderProps {
  children: ReactNode;
}

const withHeader = <P extends WithHeaderProps>(
  WrappedComponent: React.ComponentType<P>
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
