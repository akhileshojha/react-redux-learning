import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";

const ThemedButton = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};
function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}

export default App;
