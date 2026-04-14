import './MovieCard.style.css'
import {useMovieGenreQuery} from "../../hooks/useMovieGenreQuery.js";

const MovieCard = ({item}) => {

  const { data: genreData } = useMovieGenreQuery();
  console.log(genreData)
  const showGenre = (genreId) => {
    const genreNameList = genreId.map((id) => {
      const filter = genreData?.find((genre) => genre.id === id);
      return filter?.name;
    });
    return genreNameList

  }
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
        <div className={'info-box'}>
          <p className={'title'}>{item.title}</p>
          <div className={'tag-box'}>
            {showGenre(item.genre_ids).map((id) => (
                <span className={'tag'} key={id}>{id}</span>
            ))}
          </div>
          <div className={'etc'}>
            <p>{item.vote_average}</p>
            <p>{item.popularity}</p>
            <p>{item.adult ? 'over18' : 'under18'}</p>
          </div>
        </div>
      </div>
  )
}

export default MovieCard;