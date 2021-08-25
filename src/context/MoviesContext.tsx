import { Children } from "react";
import { ReactNode } from "react";

import { createContext, useEffect, useState } from "react";

import { api } from '../services/api';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ProviderMovie {
  children: ReactNode,
}

interface MoviesContextData{
  genres:GenreResponseProps[];
  selectedGenreId: number;
  selectedGenre: GenreResponseProps;
  handleClickButton:(id: number) => void;
  movies: MovieProps[]
}

export const WatchMeContext = createContext<MoviesContextData>({} as MoviesContextData);

export function MoviesContext({children}: ProviderMovie){

    const [genres, setGenres] = useState<GenreResponseProps[]>([]);
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
    
    useEffect(() => {
      api.get<GenreResponseProps[]>('genres').then(response => {
        setGenres(response.data);
      });
    }, []);

    useEffect(() => {
      api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
        setMovies(response.data);
      });
  
      api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
        setSelectedGenre(response.data);
      })
    }, [selectedGenreId]);

    function handleClickButton(id: number) {
      setSelectedGenreId(id);
    }
    
    return (
      <WatchMeContext.Provider value={{genres, selectedGenreId, movies, handleClickButton, selectedGenre}}>
        {children}
      </WatchMeContext.Provider>
    )
}