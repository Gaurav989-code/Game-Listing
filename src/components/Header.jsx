import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/images/gamelogo.jpg";
import { LuSearch } from "react-icons/lu";
import { FiMoon, FiSun } from "react-icons/fi";
import { TContext } from "../Context/TContext";

function Header() {
  const [toggle, setToggle] = useState(true);
  const {theme, setTheme} = useContext(TContext)

  useEffect(()=>{
console.log('theme:',theme)
  },[])

  return (
    <div className="flex items-center p-3 ">
      <img src={logo} width={60} height={60} />
      <div className="flex items-center rounded-full mx-5 bg-slate-200 p-2 w-full">
        <LuSearch />
        <input
          className=" px-3 bg-transparent outline-none"
          placeholder="Search Games"
          type="text"
          
        />
      </div>
      <div>
        {theme == 'light' ? (
          <FiMoon
            onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer "
          />
        ) : (
          <FiSun
            onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}
            className="text-[35px] p-1 rounded-full bg-slate-200 text-black cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
