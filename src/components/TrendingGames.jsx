import React, { useEffect } from "react";

function TrendingGames({ gameList }) {
  useEffect(() => {
    console.log(gameList);
  }, []);
  return (
    <div className="mt-5 hidden md:block">
        <h2 className="text-[30px] font-bold dark:text-white">Trending Games</h2>
    <div className="gap-4 mt-5 md:grid md:grid-cols-3 lg:grid-cols-4">
      {gameList.map((item,index)=> index<4&&(
            <div className="bg-gray-600 rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <img src={item.background_image} className="h-[270px] rounded-t-lg object-cover" />
            <h2 className="text-[18px] font-bold p-2 dark:text-white">{item.name}</h2>
          </div>
        ))}
    </div>
    </div>
  );
}

export default TrendingGames;
