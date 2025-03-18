import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./themeToggle";

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
