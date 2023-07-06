import { useState } from "react";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { Plus, ShoppingCart } from "phosphor-react";

import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { Modal } from "@/components/Modal";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { ProductTypes } from "@/types/products";

import * as S from "./styles";

export function Home() {
  const [addProductOpen, setAddProductOpen] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data, refetch } = useQuery("products", () =>
    fetch("http://localhost:5173/api/products").then((res) => res.json())
  );

  const openAddProduct = () => setAddProductOpen(true);
  const closeAddProduct = () => setAddProductOpen(false);

  const handleCreateProduct = handleSubmit(async (data) => {
    await fetch("http://localhost:5173/api/products", {
      method: "POST",
      body: JSON.stringify({
        id: Date.now(),
        createdAt: new Date(),
        ...data,
      }),
    })
      .then((res) => res.json())
      .then(() => refetch())
      .then(() => {
        reset();
        closeAddProduct();
      });
  });

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
          <S.Form onSubmit={handleCreateProduct}>
            <Input
              placeholder="Name:"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <Alert>Por favor, preencha o nome do produto.</Alert>
            )}

            <Input
              placeholder="Description:"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <Alert>Por favor, preencha a descrição do produto.</Alert>
            )}

            <Input
              placeholder="Amount:"
              {...register("amount", { required: true })}
            />
            {errors.amount && (
              <Alert>Por favor, preencha o valor do produto.</Alert>
            )}

            <Input
              placeholder="URL Image:"
              type="url"
              {...register("image", { required: true })}
            />
            {errors.image && <Alert>Por favor, insira uma URL válida.</Alert>}

            <div className="adding-product-footer">
              <Button type="submit">Create product</Button>
            </div>
          </S.Form>
        </Modal>
      </S.Container>
    </CartProvider>
  );
}
