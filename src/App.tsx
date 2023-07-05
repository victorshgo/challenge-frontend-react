import { QueryClient, QueryClientProvider } from "react-query";

import { Routes } from "@/services/routes";
import { GlobalStyles } from "@/styles/global";

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Routes />
    </QueryClientProvider>
  );
}
