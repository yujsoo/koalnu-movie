import {useSearchMovie} from "../../hooks/useSearchMovie.js";
import {useSearchParams} from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard.jsx";
import './MoviPage.style.css'

const MoviePage = () => {
  const [searchParams] = useSearchParams();
  const searchKeyword = searchParams.get("keyword");
  // 경로 두가지
  // nav바에서 클릭해서 온 경우
  // keyword를 입력해서 온 경우 -> Keyword와 관련된 영화를 보여줌
  const {data, isLoading, isError, error} = useSearchMovie({searchKeyword});
  if(isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  const filterMovies = () => {
    if (!searchKeyword) return data?.results;

    return data?.results.filter((item) =>
        item.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  };
  const filteredMovies = filterMovies();

  if (!filteredMovies || filteredMovies.length === 0) {
    return <div className={'guide'}>검색 결과가 없습니다.</div>
  }

  return (
      <div className={'content-container'}>
        <ul className={'movies-search-list'}>
          {}
          {filterMovies()?.map((movie) => (
              <li><MovieCard key={movie.id} item={movie}/></li>
          ))}
        </ul>
      </div>
  )
}

export default MoviePage;