import { X } from "phosphor-react";
import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  overflow: hidden;
`;

export const Modal = styled.div<{ width?: string | number }>`
  width: 30%;
  min-height: 10rem;
  padding: 2rem;
  position: fixed;
  top: 20vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 10;
`;

export const Header = styled.div`
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(170, 170, 170, 0.3);

  > p {
    font-size: 1.25rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.35);
  }
`;

export const Close = styled(X)`
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }
`;
