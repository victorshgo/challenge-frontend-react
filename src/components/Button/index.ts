import { styled } from "styled-components";

export const Button = styled.button<{ isOutlined?: boolean }>`
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;

  ${({ isOutlined }) =>
    isOutlined
      ? `
        background: var(--white);
        color: var(--green);
        border: 1px solid var(--green);
      `
      : `
        background: var(--green);
        color: var(--white);
        border: 0;
  `};

  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.1s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
`;
