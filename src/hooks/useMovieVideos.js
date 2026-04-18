import { useQuery } from "@tanstack/react-query";
import api from "../util/api.js";

export const useMovieVideosQuery = ({ movieId }) => {
  return useQuery({
    queryKey: ["movieVideos", movieId],
    queryFn: async () => {
      const res = await api.get(`/movie/${movieId}/videos`);
      return res.data;
    }
  });
};