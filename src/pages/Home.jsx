import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenreId from "../components/GamesByGenreId";

function Home() {
  const [allGameList, setAllGameList] = useState([]);
  const [gamesByGenreListId, setGamesByGenreListId] = useState([]);

  useEffect(() => {
    getAllGames();
    getGamesByGenreListId();
  }, []);

  const getAllGames = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const getGamesByGenreListId = (id) => {
    GlobalApi.getGamesByGenreListId(4).then((resp) => {
      console.log(resp.data.results);
      setGamesByGenreListId(resp.data.results)
    });
  };
  return (
    <div className="grid grid-cols-4">
      <div className="px-8 h-full hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3  h-full">
      {/* && gamesByGenreListId.length > 0 */}
        {allGameList.length > 0  ? (  
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenreId gamesByGenreListId={gamesByGenreListId} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
