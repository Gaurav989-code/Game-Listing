import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { TContext } from "./Context/TContext";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(()=>{
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  },[])

  return (
    <TContext.Provider value={{theme, setTheme}}>
      <div className={`${theme} ${theme == "dark" ? "bg-[#121212]" : null}`}>
        <Header />
        <Home />
      </div>
    </TContext.Provider>
  );
}

export default App;
