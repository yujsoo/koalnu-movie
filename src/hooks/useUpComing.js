import {useQuery} from "@tanstack/react-query";
import api from "../util/api";

const fetchUpComing = () => {
  return api.get(`/movie/upcoming`)
}

export const useUpComing = () => {
  return (
      useQuery({
        queryKey:['movie-up-coming'],
        queryFn: fetchUpComing,
        select:(result) => result.data
      })
  )
}
