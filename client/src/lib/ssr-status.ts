import { createContext, useContext } from "react";

export interface SSRStatusContextType {
  code: number;
  set(code: number): void;
}

export const SSRStatusContext = createContext<SSRStatusContextType | null>(null);

export function useSSRStatus() {
  return useContext(SSRStatusContext);
}
