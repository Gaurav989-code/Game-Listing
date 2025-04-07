import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList() {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((res) => {
      setGenreList(res.data.results);
    });
  };

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white  ">Genre</h2>

      {genreList.map((item, index) => (
        <div
          onClick={() => setActiveIndex(index)}
          className={`flex group gap-2 items-center mb-2 cursor-pointer hover:bg-slate-400 p-2 rounded-lg hover:dark:bg-slate-600
             ${
               index === activeIndex ? "bg-slate-300 dark:bg-slate-500" : null
             }`}
        >
          <img
            key={item.id}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all ease-out duration-300
               ${index === activeIndex ? "scale - 110" : null} `}
            src={item.image_background}
          />
          <h3 className={`text-[18px]  dark:text-white group-hover:font-bold transition-all ease-out duration-300  ${index === activeIndex ? "font-bold" : null} `}>
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
