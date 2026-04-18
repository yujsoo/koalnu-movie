import {usePopularMoviesQuery} from "../../hooks/usePopularMovies.js";
import "./Banner.style.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const {data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  return (
      <div style={{
     backgroundImage: "url(" + `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${data?.results?.[0].poster_path}` + ")",
      }}
      className={'banner'}
      >
        <div className={'info'}>
          <strong>{data?.results?.[0].title}</strong>
          <p>{data?.results?.[0].overview}</p>
          <div className={'ctrl-btn'}>
            <button type={'button'} className={'btn play-now'}>Play Now</button>
            <button type={'button'} className={'btn'} onClick={() => navigate(`/movies/${data?.results?.[0].id}`)}>Details</button>
          </div>
        </div>
      </div>
  )
}

export default Banner;