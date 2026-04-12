import {usePopularMoviesQuery} from "../../hooks/usePopularMovies.js";
import "./Banner.style.css";
const Banner = () => {
  const {data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log(data);

  if (isLoading) {
    <h1>Loading...</h1>
  }

  if (isError) {
    <h1>{error.message}</h1>
  }
  return (
      <div style={{
     backgroundImage: "url(" + `https://media.themoviedb.org/t/p/w1066_and_h600_face${data?.results[0].poster_path}` + ")",
      }}
      className={'banner'}
      >
        <div className={'info'}>
          <strong>{data?.results[0].title}</strong>
          <p>{data?.results[0].overview}</p>
        </div>
      </div>
  )
}

export default Banner;