import {useSearchMovie} from "../../hooks/useSearchMovie.js";
import {useSearchParams} from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard.jsx";
import './MoviPage.style.css'
import React from 'react';
import ReactPaginate from 'react-paginate';
import ReactPaginateImport from "react-paginate";


const MoviePage = () => {
  const [searchParams] = useSearchParams();
  const searchKeyword = searchParams.get("keyword");
  const ReactPaginate =
      ReactPaginateImport?.default ?? ReactPaginateImport;

  // 경로 두가지
  // nav바에서 클릭해서 온 경우
  // keyword를 입력해서 온 경우 -> Keyword와 관련된 영화를 보여줌
  const {data, isLoading, isError, error} = useSearchMovie({ keyword: searchKeyword });
  if(isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  const handlePageClick = () => {

  }

  if (!data.results || data.results.length === 0) {
    return <div className={'guide'}>검색 결과가 없습니다.</div>
  }

  return (
      <div className={'content-container'}>
        <ul className={'movies-search-list'}>

          {data?.results?.map((movie) => (
              <li key={movie.id}><MovieCard item={movie}/></li>
          ))}
        </ul>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={data?.total_pages}
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