import { useState } from "react";
import "./App.css";
import Card from "./component/Card";
import ThemeBtn from "./component/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";
import { useEffect } from "react";

function App() {
  const [themeMode, setthemeMode] = useState("light");

  const darkTheme = () => {
    setthemeMode("dark");
  };

  const lightTheme = () => {
    setthemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-warp justify-center items-center h-screen">
        <div className="w-2xl">
          <ThemeBtn />
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
