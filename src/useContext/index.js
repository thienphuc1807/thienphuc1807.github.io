import { useState, createContext } from "react";
import Content from "./content";

export const ThemeContext = createContext();

// Context đơn giản hoá việc truyền dữ liệu từ component cha xuống component con
// mà không cần sử dụng tới props

// 1. Create context
// 2. Provider để truyền dữ liệu từ component cha đến component con
// 3. Consumer để nhận dữ liệu từ conponent cha

function ThemeApp() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeApp;
