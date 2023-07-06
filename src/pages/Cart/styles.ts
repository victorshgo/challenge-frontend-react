import styled from "styled-components";

export const Card = styled.div`
  padding: 3rem 2rem;

  background: var(--gray-100);
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const ListItem = styled.li`
  margin-bottom: 2rem;
  padding-bottom: 2rem;

  display: flex;
  align-items: center;

  border-bottom: 0.5px solid rgba(170, 170, 170, 0.3);

  > img {
    height: 9rem;
    margin-right: 2rem;
    border-radius: 8px;
  }

  .product-name {
    color: var(--green);
    font-size: 1.5rem;
    font-weight: 700;
  }

  .product-price {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
`;

export const Actions = styled.div`
  margin-top: 0.35rem;

  display: flex;
  align-items: center;

  > button {
    width: 1.75rem;
    height: 1.75rem;

    background: var(--green);
    font-size: 1.5rem;
    line-height: 0;
    color: var(--white);
    border: 0;
    border-radius: 16px;
    cursor: pointer;
    transition: background-color 0.1s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  > p {
    margin: 0 0.5rem;

    font-size: 1.25rem;
  }
`;

export const TotalValues = styled.p`
  font-size: 2rem;
  text-align: right;
`;

export const ListFooter = styled.div`
  margin-top: 1rem;

  display: flex;
  justify-content: flex-end;

  button:first-child {
    margin-right: 1rem;
  }
`;

export const CardBox = styled.div`
  padding: 0.5rem;
  margin-bottom: 1rem;

  background-color: var(--gray-300);
  border-radius: 8px;
`;

export const Empty = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > p {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    opacity: 0.7;
  }

  > svg {
    opacity: 0.7;
  }
`;
