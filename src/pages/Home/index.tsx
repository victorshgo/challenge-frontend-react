import { useQuery } from "react-query";

import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { ProductTypes } from "@/types/products";

import * as S from "./styles";

export function Home() {
  const { data } = useQuery("products", () =>
    fetch(`http://localhost:5173/api/products`).then((res) => res.json())
  );

  return (
    <S.Container>
      <Header />
      <S.Content>
        {data?.products.map((product: ProductTypes) => (
          <Products key={product.id} {...product} />
        ))}
      </S.Content>
    </S.Container>
  );
}
