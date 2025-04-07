import React, { useEffect } from "react";

function GamesByGenreId({ gameList }) {
  useEffect(() => {
    console.log(gameList);
  }, []);
  return (
    <div>
      <h2 className="text-[30px] font-bold mt-5 dark:text-white">Popular Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {gameList.map((item) => (
          <div className="bg-gray-600 rounded-lg p-3 group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <img
              src={item.background_image}
              className=" w-full h-[80] rounded-t-lg object-cover"
            />
            <h2 className="text-[18px] font-bold p-2 dark:text-white">
              {item.name} <span className="text-[10px] text-green-700 bg-slate-100  font-medium ml-2 rounded-sm p-1">{item.metacritic}</span>
            </h2>
            <h2 className="text-[12px] mt-2 font-medium p-2 dark:text-white">
              ⭐ {item.rating} 👀{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenreId;
