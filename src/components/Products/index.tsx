import { ProductTypes } from "@/types/products";

import * as S from "./styles";

export function Products(props: ProductTypes) {
  return (
    <S.Container>
      <img src={props.image} alt={props.name} />
      <S.ProductDescription>
        <p className="product-name">{props.name}</p>
        <p className="product-description">{props.description}</p>
        <p className="product-price">{props.amount}</p>
      </S.ProductDescription>
    </S.Container>
  );
}
