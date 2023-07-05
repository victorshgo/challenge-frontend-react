import * as S from "./styles";

import logo from "@/assets/logo.webp";

export function Header() {
  return (
    <S.Header>
      <img src={logo} alt="Logotipo" />
    </S.Header>
  );
}
