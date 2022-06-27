import { List, ListRowRenderer, AutoSizer } from "react-virtualized";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };

  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
}

export function Content({ selectedGenre, movies }: ContentProps) {

  // const rowRenderer: ListRowRenderer = ({index, key, style}) => {
  //   return (
  //     <div key={key}>
  //       <div style={style}>
  //         <MovieCard title={movies[index].Title} poster={movies[index].Poster} runtime={movies[index].Runtime} rating={movies[index].Ratings[0].Value} />
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">

          {/* <List 
            height={400}
            rowHeight={380}
            width={840}
            overscanRowCount={2}
            rowCount={movies.length}
            rowRenderer={rowRenderer}
          /> */}

          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}