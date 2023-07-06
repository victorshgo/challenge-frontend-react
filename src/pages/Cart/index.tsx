import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrencyDollar, ShoppingBagOpen } from "phosphor-react";

import { CartContext } from "@/context/CartContext";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

import { ProductTypes } from "@/types/products";

import * as S from "./styles";

export function Cart() {
  const navigate = useNavigate();

  const { products, increase, decrease } = useContext(CartContext);

  const handleBackToShop = () => navigate("/");
  const handleIncreaseProduct = (product: ProductTypes) => increase(product);
  const handleDecreaseProduct = (product: ProductTypes) => decrease(product);

  const sumValues = useCallback(() => {
    let sum = 0;
    products.map((product) => (sum += product.amount * product.count));
    return sum;
  }, [products]);

  return (
    <div>
      <Header />

      <Container>
        <S.Card>
          {products.length > 0 ? (
            <ul>
              {products.map((product) => (
                <S.ListItem key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <div>
                    <p className="product-name">{product.name}</p>
                    <p>{product.description}</p>
                    <S.Actions>
                      <button onClick={() => handleDecreaseProduct(product)}>
                        -
                      </button>
                      <p className="product-quantity">{product.count}</p>
                      <button onClick={() => handleIncreaseProduct(product)}>
                        +
                      </button>
                    </S.Actions>
                    <p className="product-price">{product.amount}</p>
                  </div>
                </S.ListItem>
              ))}
              <S.TotalValues>${sumValues()}</S.TotalValues>
              <S.ListFooter>
                <Button isOutlined onClick={handleBackToShop}>
                  Back to shop
                </Button>
                <Button>
                  <CurrencyDollar size={20} />
                  &nbsp;Checkout
                </Button>
              </S.ListFooter>
            </ul>
          ) : (
            <S.Empty>
              <ShoppingBagOpen size={128} />
              <p>You have no items in the cart.</p>
              <Button onClick={handleBackToShop}>Back to shop</Button>
            </S.Empty>
          )}
        </S.Card>
      </Container>
    </div>
  );
}
