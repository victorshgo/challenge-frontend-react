import { styled } from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;

  background: var(--green);
  color: var(--white);
  border: 0;
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
