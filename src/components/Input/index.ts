import { styled } from "styled-components";

export const Input = styled.input`
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;

  border: 0.5px solid rgba(170, 170, 170, 0.3);
  border-radius: 8px;
  color: #555;
  transition: background-color 0.1s;

  &:hover {
    filter: brightness(0.975);
  }
`;
