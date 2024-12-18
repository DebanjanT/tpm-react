import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider
      value={{
        ripple: true,
      }}
    >
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
