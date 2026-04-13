import {useQuery} from "@tanstack/react-query";
import api from "../util/api.js";

const fetchMovieGenre = () => {
  return api.get(`/genre/movie/list`)
}

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey:['movie-genre'],
    queryFn: fetchMovieGenre,
    select:(genre) => genre.data.genres,
    // 데이터를 한번 정의하면 잘 바뀌지 않는다. 그래서...
    staleTime: 300000,
  })
}