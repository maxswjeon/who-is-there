import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "constants/theme";
import type { AppProps } from "next/app";
import { useRef } from "react";
import "styles/door.css";
import "styles/global.css";

function App({ Component, pageProps }: AppProps) {
  const clientRef = useRef<QueryClient>(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={clientRef.current}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
