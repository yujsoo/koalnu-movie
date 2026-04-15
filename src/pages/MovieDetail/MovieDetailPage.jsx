import {useMoviesDetailQuery} from "../../hooks/useMovieDetail.js";
import { useParams} from "react-router-dom";
import DetailTopMovieInfo
  from "../../components/DetailTopMovieInfo/DetailTopMovieInfo.jsx";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError ,error } = useMoviesDetailQuery({ movieId: id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  console.log(data)

  return (
      <>
        <DetailTopMovieInfo data={data}/>
        {/* Reviews */}

      </>
  )
}

export default MovieDetailPage;