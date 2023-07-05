import logo from "@/assets/logo.webp";

import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <img src={logo} alt="Logotipo" />
    </S.Header>
  );
}
