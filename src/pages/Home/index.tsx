import { useState } from "react";
import { useQuery } from "react-query";
import { Plus, ShoppingCart } from "phosphor-react";

import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { Modal } from "@/components/Modal";
import { ProductTypes } from "@/types/products";

import * as S from "./styles";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export function Home() {
  const [addProductOpen, setAddProductOpen] = useState(false);

  const { data } = useQuery("products", () =>
    fetch(`http://localhost:5173/api/products`).then((res) => res.json())
  );

  const openAddProduct = () => setAddProductOpen(true);
  const closeAddProduct = () => setAddProductOpen(false);

  return (
    <CartProvider>
      <S.Container>
        <Header />
        <S.Content>
          {data?.products.map((product: ProductTypes) => (
            <Products key={product.id} {...product} />
          ))}
        </S.Content>
        <S.AddProductButton onClick={openAddProduct}>
          <Plus size={32} />
        </S.AddProductButton>
        <S.CartButton>
          <ShoppingCart size={32} />
        </S.CartButton>

        <Modal
          open={addProductOpen}
          title="Add product"
          onClose={closeAddProduct}
        >
          <S.Form>
            <Input placeholder="Name:" />
            <Input placeholder="Description:" />
            <Input placeholder="Amount:" />
            <Input placeholder="URL Image:" type="url" />
            <div className="adding-product-footer">
              <Button>Create product</Button>
            </div>
          </S.Form>
        </Modal>
      </S.Container>
    </CartProvider>
  );
}
