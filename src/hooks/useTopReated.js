import {useQuery} from "@tanstack/react-query";
import api from "../util/api";

const fetchTopReated = () => {
  return api.get(`/movie/top_rated`)
}

export const useTopReated = () => {
  return (
      useQuery({
        queryKey:['movie-top-reated'],
        queryFn: fetchTopReated,
        select:(result) => result.data
      })
  )
}
