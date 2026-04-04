import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Pricing() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation("/contact");
  }, [setLocation]);

  return null;
}
