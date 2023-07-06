import { QueryClient, QueryClientProvider } from "react-query";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { CartProvider } from "@/context/CartContext";

import { Routes } from "@/services/routes";

import { GlobalStyles } from "@/styles/global";

export function App() {
  const queryClient = new QueryClient();

  const stripe = loadStripe(
    "pk_test_51NQvb0F03u1f0Z0tqfLA7Svdw3yZz23LJHLcJ0zvMaNC4mZrEMp7HkoTuGjYZ92aMyQO5o5lPaRPVPX06nKSu4mm00XpWprDVL"
  );

  return (
    <Elements stripe={stripe}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <GlobalStyles />
          <Routes />
        </CartProvider>
      </QueryClientProvider>
    </Elements>
  );
}
