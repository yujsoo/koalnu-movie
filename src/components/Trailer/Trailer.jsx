import {useMovieVideosQuery} from "../../hooks/useMovieVideos.js";
import './Trailer.style.css'

const Trailer = ({ movieId }) => {
  const { data, isLoading } = useMovieVideosQuery({ movieId });

  if (isLoading) return <div>Loading...</div>;

  const trailer = data?.results?.find(
      (v) => v.type === "Trailer" && v.site === "YouTube"
  );

  if (!trailer) {
    return <div>예고편이 없습니다.</div>;
  }

  return (
      <div className={'box trailer-container'}>
        <h4>Trailer</h4>
        <div className="trailer">
          <iframe
              width="100%"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Trailer"
              allowFullScreen
          />
        </div>
      </div>
  );
};

export default Trailer;