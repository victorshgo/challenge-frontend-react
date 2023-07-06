import styled from "styled-components";

export const CartButton = styled.div`
  padding: 1rem;

  display: flex;
  align-items: center;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;

  background-color: var(--green);
  border-radius: 50%;
  color: var(--white);
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Badge = styled.div`
  padding: 0.5rem;

  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--red);
  border-radius: 50%;
  color: var(--white);
`;
