import { renderToString } from "react-dom/server";
import { QueryClient } from "@tanstack/react-query";
import App from "./App";

export function render(url: string): string {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  const html = renderToString(<App ssrUrl={url} queryClient={queryClient} />);

  queryClient.clear();

  return html;
}
