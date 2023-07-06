import { useContext } from "react";
import { ShoppingCart } from "phosphor-react";

import { CartContext } from "@/context/CartContext";

import * as S from "./styles";

export function Cart() {
  const { products } = useContext(CartContext);

  return (
    <S.CartButton>
      <ShoppingCart size={32} />
      {products.length > 0 && <S.Badge />}
    </S.CartButton>
  );
}
