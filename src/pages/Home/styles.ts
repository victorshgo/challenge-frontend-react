import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.main`
  max-width: 70rem;

  margin: 3rem auto 2rem auto;
  padding: 0 1rem;

  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

export const Actions = styled.div``;

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

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  .adding-product-footer {
    margin-top: 1rem;
  }
`;
