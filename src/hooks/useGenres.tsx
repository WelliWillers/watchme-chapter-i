import { useContext } from "react";
import { WatchMeContext } from "../context/MoviesContext";

export function useGenres(){
    const context = useContext(WatchMeContext);

    return context;
}