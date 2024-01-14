import styled, { css, keyframes } from "styled-components";

const jumpAnimation = keyframes`
  0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
    transform: translateY(0);
  }
  5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
    transform: translateY(-20px);
  }
  10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
    transform: translateY(-10px);
  }
`;

export const DroppableWrapper = styled.div<{ isOver?: boolean, isAnimation?: boolean }>`
  opacity: 0.5;

  ${(props) =>
        props.isOver && css` opacity: 1;`
    }

  ${(props) =>
        props.isAnimation && css`
        animation: ${jumpAnimation} 2s ease-in-out;
    `}
`;
