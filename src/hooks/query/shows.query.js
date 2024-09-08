import { useQuery } from "@tanstack/react-query";
import apiv1Instance from "../../api/header";

export const useGetAllShows = () => {
  const query = useQuery({
    queryKey: ["shows"],
    queryFn: async function () {
      const { data } = await apiv1Instance.get("/shows");
      console.log(data);
      return data;
    },
  });
  return { ...query, shows: query.data };
};
export const useGetAllShowsByMovieId = (id) => {
  const query = useQuery({
    queryKey: ["shows", id],
    queryFn: async function () {
      const { data } = await apiv1Instance.get(`/shows/${id}`);
      console.log(data);
      return data;
    },
  });
  return { ...query, shows: query.data };
};
export const useGetShowById = (showid) => {
  const query = useQuery({
    queryKey: ["shows", showid],
    queryFn: async function () {
      const { data } = await apiv1Instance.get(`/shows/schedule/${showid}`);
      console.log(data);
      return data;
    },
  });
  return { ...query, shows: query.data };
};
