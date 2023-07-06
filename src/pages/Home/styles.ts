import styled from "styled-components";

export const AddProductButton = styled.div`
  padding: 1rem;

  display: flex;
  align-items: center;
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;

  background-color: var(--green);
  border-radius: 50%;
  color: var(--white);
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

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

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  .adding-product-footer {
    margin-top: 1rem;
  }
`;
