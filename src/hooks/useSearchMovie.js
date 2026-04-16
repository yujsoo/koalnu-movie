import {useQuery} from "@tanstack/react-query";
import api from "../util/api.js";

const fetchSearchMovie = ({keyword,page}) => {
  return keyword ? api.get(`/search/movie?query=${keyword}&page=${page}`) : api.get(`/movie/popular`);
}

export const useSearchMovie = ({keyword,page}) => {
  return useQuery({
    queryKey: ['movie-search', keyword,page],
    queryFn: () => fetchSearchMovie({keyword,page}),
    select:(result) => result.data
  })
}