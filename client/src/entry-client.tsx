import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;

const hasSSR = root.innerHTML.trim() !== "" && root.innerHTML.trim() !== "<!--ssr-outlet-->";

if (hasSSR) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}

root.classList.add("ready");
