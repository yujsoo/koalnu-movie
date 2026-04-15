import {useQuery} from "@tanstack/react-query";
import api from "../util/api";

const fetchMoviesDetail = ({movieId}) => {
  return api.get(`/movie/${movieId}`)
}

export const useMoviesDetailQuery = ({movieId}) => {
  return useQuery({
    queryKey:['movie-detail'],
    queryFn: () => fetchMoviesDetail({movieId}),
    select:(result) => result.data
  })
}