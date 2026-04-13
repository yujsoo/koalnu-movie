import {usePopularMoviesQuery} from "../../hooks/usePopularMovies.js";
import MovieSlider from "../../common/MovieSlider/MovieSlider.jsx";

const PopularMovieSlide = () => {
  const {data, isLoading, isError, error} = usePopularMoviesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

   return (
       <div className={'content-container'}>
        <MovieSlider title={'Popular Movie'} data={data}/>
       </div>
   )
}

export default PopularMovieSlide