import { QueryClient, QueryClientProvider } from "react-query";

import { CartProvider } from "@/context/CartContext";

import { Routes } from "@/services/routes";

import { GlobalStyles } from "@/styles/global";

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <GlobalStyles />
        <Routes />
      </CartProvider>
    </QueryClientProvider>
  );
}
