import {useQuery} from "@tanstack/react-query";
import api from "../util/api";

const fetchMovieReviews = ({movieId}) => {
  return api.get(`/movie/${movieId}/reviews`)
}

export const useMovieReviewsQuery = ({movieId}) => {
  return useQuery({
    queryKey:['movie-popular'],
    queryFn: () => fetchMovieReviews({movieId}),
    select:(result) => result.data
  })
}