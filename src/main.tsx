import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PrimeReactProvider
        value={{
          ripple: true,
        }}
      >
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>
);
