import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { TContext } from "./Context/TContext";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <TContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme == "dark" ? "bg-[#121212]" : null} min-h-[100vh]`}>
        <Header />
        <Home />
      </div>
    </TContext.Provider>
  );
}

export default App;
