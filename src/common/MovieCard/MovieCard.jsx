import './MovieCard.style.css'
import {useMovieGenreQuery} from "../../hooks/useMovieGenreQuery.js";
import { Link } from "react-router-dom";

const MovieCard = ({item}) => {

  const { data: genreData } = useMovieGenreQuery();
  console.log(genreData)

  const showGenre = (genreIds) => {
    if (!Array.isArray(genreIds) || !genreData) return [];

    return genreIds
    .map(id => genreData.find(g => g.id === id)?.name)
    .filter(Boolean);
  };

  if (!item) {
    return null;
  }

  return (
      <div className={'movie-card'} style={
        {
          backgroundPosition: 'center top',
          backgroundSize:'cover',
          backgroundImage: "url("
              + `https://media.themoviedb.org/t/p/w220_and_h330_face/${item?.poster_path}`
              + ")",
        }
      }>
        <Link to={`/movies/${item.id}`}>
          <div className={'info-box'}>
            <p className={'title'}>{item.title}</p>
            <div className={'tag-box'}>
              {showGenre(item.genre_ids).map((name) => (
                  <span className={'tag'} key={`${item.id}-${name}`}>
                    {name}
                  </span>
              ))}
            </div>
            <div className={'etc'}>
              <p>{item.vote_average}</p>
              <p>{item.popularity}</p>
              <p>{item.adult ? 'over18' : 'under18'}</p>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default MovieCard;