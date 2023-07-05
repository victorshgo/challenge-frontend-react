import { useState } from "react";
import { Pencil, ShoppingCart } from "phosphor-react";

import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { Input } from "@/components/Input";

import { ProductTypes } from "@/types/products";

import * as S from "./styles";

export function Products(props: ProductTypes) {
  const [editProductOpen, setEditProductOpen] = useState(false);

  const openEditProduct = () => setEditProductOpen(true);
  const closeEditProduct = () => setEditProductOpen(false);

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
        <Button>
          <ShoppingCart size={22} />
          &nbsp;Add to cart
        </Button>
      </S.ProductFooter>

      <Modal
        open={editProductOpen}
        title="Edit product"
        onClose={closeEditProduct}
      >
        <S.Form>
          <Input value={props.name} />
          <Input value={props.description} />
          <Input value={props.amount} />
          <Input value={props.image} type="url" />
          <div className="adding-product-footer">
            <Button>Edit product</Button>
          </div>
        </S.Form>
      </Modal>
    </S.Container>
  );
}
