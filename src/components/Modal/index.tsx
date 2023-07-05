import ReactDOM from "react-dom";
import * as S from "./styles";

interface ModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal(props: ModalProps) {
  const portalEl = document.getElementById("modal-root");

  if (props.open && portalEl) {
    return (
      <div>
        {ReactDOM.createPortal(
          <>
            <S.Backdrop onClick={props.onClose} />
            <S.Modal>
              <S.Header>
                <p>{props.title}</p>
                <S.Close size={18} onClick={props.onClose} />
              </S.Header>
              {props.children}
            </S.Modal>
          </>,
          portalEl
        )}
      </div>
    );
  }

  return null;
}
