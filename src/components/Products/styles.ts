import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  position: relative;

  background: var(--gray-100);
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  > img {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Edit = styled.div`
  width: fit-content;
  padding: 0.25rem;

  display: flex;
  align-items: center;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  color: var(--white);
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const ProductDescription = styled.div`
  padding: 1.5rem 2rem;

  .product-name {
    color: var(--green);
    font-weight: 700;
  }

  .product-description {
    margin-top: 0.25rem;
    font-size: 0.9rem;
  }

  .product-price {
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }
`;

export const ProductFooter = styled.div`
  padding: 0 1.5rem 2rem 1.5rem;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  .adding-product-footer {
    margin-top: 1rem;
  }
`;
