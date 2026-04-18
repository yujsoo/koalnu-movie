import {useSearchMovie} from "../../hooks/useSearchMovie.js";
import {useSearchParams} from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard.jsx";
import './MoviPage.style.css'
import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import ReactPaginateImport from "react-paginate";
import {useMovieGenreQuery} from "../../hooks/useMovieGenreQuery.js";

const MoviePage = () => {
  const [searchParams] = useSearchParams();
  const searchKeyword = searchParams.get("keyword");
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState("popular");
  const [selectedGenre, setSelectedGenre] = useState(null);

  const { data: genreData } = useMovieGenreQuery();

  const ReactPaginate =
      ReactPaginateImport?.default ?? ReactPaginateImport;


  // 경로 두가지
  // nav바에서 클릭해서 온 경우
  // keyword를 입력해서 온 경우 -> Keyword와 관련된 영화를 보여줌
  const {data, isLoading, isError, error} = useSearchMovie({ keyword: searchKeyword , page:page
  });
  if(isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  const handlePageClick = (event) => {
    setPage(event.selected + 1)
  }

  const filterMovies = (movies) => {
    if (!selectedGenre) return movies;

    return movies.filter(movie =>
        movie.genre_ids.includes(selectedGenre)
    );
  };

  const sortMovies = (movies) => {
    switch (sortType) {
      case "popular":
        return [...movies].sort((a, b) => b.popularity - a.popularity);

      case "rating":
        return [...movies].sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0));

      default:
        return movies;
    }
  };

  const processedMovies = sortMovies(
      filterMovies(data?.results || [])
  );

  if (!data.results || data.results.length === 0) {
    return <div className={'guide'}>검색 결과가 없습니다.</div>
  }

  return (
      <div className={'content-container'}>
        <div className="controls">
          {/* 정렬 */}
          <select
              value={sortType}
              onChange={(e) => {
                setSortType(e.target.value);
                setPage(1);
              }}
          >
            <option value="popular">인기순</option>
            <option value="rating">평점순</option>
          </select>

          {/* 장르 */}
          <select
              value={selectedGenre ?? ""}
              onChange={(e) => {
                setSelectedGenre(e.target.value ? Number(e.target.value) : null);
                setPage(1);
              }}
          >
            <option value="">전체 장르</option>
            {genreData?.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
            ))}
          </select>
        </div>
        <ul className={'movies-search-list'}>
          {processedMovies.map((movie) => (
              <li key={movie.id}><MovieCard item={movie}/></li>
          ))}
        </ul>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={data?.total_pages}
            forcePage={page - 1}
            previousLabel="previous"
            renderOnZeroPageCount={null}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            nextClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            activeClassName={'active'}
            disabledClassName={'disabled'}
        />
      </div>
  )
}

export default MoviePage;