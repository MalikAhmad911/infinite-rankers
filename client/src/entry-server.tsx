import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { SSRStatusContext, SSRStatusContextType } from "./lib/ssr-status";

(React as any).useLayoutEffect = React.useEffect;

export function render(url: string): { html: string; status: number } {
  const statusObj: SSRStatusContextType = { code: 200, set(code) { this.code = code; } };

  try {
    const html = renderToString(
      <SSRStatusContext.Provider value={statusObj}>
        <App ssrUrl={url} />
      </SSRStatusContext.Provider>
    );
    return { html, status: statusObj.code };
  } catch (e) {
    console.error("SSR render error:", e);
    return { html: "", status: 200 };
  }
}
