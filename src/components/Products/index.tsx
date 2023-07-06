import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { Pencil, ShoppingCart } from "phosphor-react";

import { CartContext } from "@/context/CartContext";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { Input } from "@/components/Input";
import { ProductTypes } from "@/types/products";

import * as S from "./styles";
import { Alert } from "../Alert";

export function Products(props: ProductTypes) {
  const queryClient = useQueryClient();
  const [editError, setEditError] = useState(false);
  const [editProductOpen, setEditProductOpen] = useState(false);

  const { addToCart } = useContext(CartContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const openEditProduct = () => setEditProductOpen(true);
  const closeEditProduct = () => {
    setEditProductOpen(false);
    setEditError(true);
  };

  const handleAddToCart = () => addToCart(props);

  const handleEditProduct = handleSubmit(async (data) => {
    if (
      data.name === props.name &&
      data.description === props.description &&
      data.amount == props.amount &&
      data.image === props.image
    ) {
      setEditError(true);
      return;
    }

    await fetch(`http://localhost:5173/api/products/${props.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        id: props.id,
        createdAt: props.createdAt,
        ...data,
      }),
    })
      .then((res) => res.json())
      .then(() => queryClient.refetchQueries(["products"], { active: true }))
      .then(() => {
        reset();
        closeEditProduct();
      });
  });

  return (
    <S.Container>
      <img src={props.image} alt={props.name} />
      <S.Edit onClick={openEditProduct}>
        <Pencil size={22} />
      </S.Edit>
      <S.ProductDescription>
        <p className="product-name">{props.name}</p>
        <p className="product-description">{props.description}</p>
        <p className="product-price">{props.amount}</p>
      </S.ProductDescription>
      <S.ProductFooter>
        <Button onClick={handleAddToCart}>
          <ShoppingCart size={22} />
          &nbsp;Add to cart
        </Button>
      </S.ProductFooter>

      <Modal
        open={editProductOpen}
        title="Edit product"
        onClose={closeEditProduct}
      >
        <S.Form onSubmit={handleEditProduct}>
          {editError && (
            <Alert>Por favor, faça as alterações que deseja.</Alert>
          )}

          <Input
            defaultValue={props.name}
            {...register("name", { required: true })}
          />
          {errors.name && <Alert>Por favor, preencha o nome do produto.</Alert>}

          <Input
            defaultValue={props.description}
            {...register("description", { required: true })}
          />
          {errors.description && (
            <Alert>Por favor, preencha a descrição do produto.</Alert>
          )}

          <Input
            defaultValue={props.amount}
            {...register("amount", { required: true })}
          />
          {errors.amount && (
            <Alert>Por favor, preencha o valor do produto.</Alert>
          )}

          <Input
            defaultValue={props.image}
            type="url"
            {...register("image", { required: true })}
          />
          {errors.image && <Alert>Por favor, insira uma URL válida.</Alert>}

          <div className="adding-product-footer">
            <Button type="submit">Edit product</Button>
          </div>
        </S.Form>
      </Modal>
    </S.Container>
  );
}
