import {useMoviesDetailQuery} from "../../hooks/useMovieDetail.js";
import { useParams} from "react-router-dom";
import DetailTopMovieInfo
  from "../../components/DetailTopMovieInfo/DetailTopMovieInfo.jsx";
import DetailReview from "../../components/DetailReview/DetailReview.jsx";
import './MovieDetail.style.css'
import Trailer from "../../components/Trailer/Trailer.jsx";

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
      <div className={'wrap'}>
        <DetailTopMovieInfo data={data}/>
        {/* Reviews */}
        <DetailReview/>
        {/*  예고편*/}
        <Trailer movieId={id} />
      </div>
  )
}

export default MovieDetailPage;