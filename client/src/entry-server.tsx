import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

(React as any).useLayoutEffect = React.useEffect;

export function render(url: string): string {
  try {
    return renderToString(<App ssrUrl={url} />);
  } catch (e) {
    console.error("SSR render error:", e);
    return "";
  }
}
