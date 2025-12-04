import type { GameQuery, Game } from "../types/interfaces";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

  return { data, error, isLoading };
};

export default useGames;
