import { useQuery } from "@tanstack/react-query";
import apiv1Instance from "../../api/header";

export const useGetAllMovies = () => {
  const query = useQuery({
    queryKey: ["movie"],
    queryFn: async function () {
      const { data } = await apiv1Instance.get("/movie");
      console.log(data);
      return data;
    },
  });
  return { ...query, movies: query.data };
};

export const useGetSingleMovie = (id) => {
  const query = useQuery({
    queryKey: ["movie", id],
    queryFn: async function () {
      const { data } = await apiv1Instance.get(`/movie/${id}`);
      console.log(data);
      return data;
    },
  });
  return { ...query, movie: query.data?.movieData };
};

export const useGetDeleteMovie = (id) => {
  const query = useQuery({
    queryKey: ["movie", id],
    queryFn: async function () {
      const { data } = await apiv1Instance.delete(`/movie/${id}`);
      console.log(data);
      return data;
    },
  });
  return { ...query, movie: query.data };
};
