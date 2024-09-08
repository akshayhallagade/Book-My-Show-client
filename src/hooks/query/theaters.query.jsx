import { useQuery } from "@tanstack/react-query";
import apiv1Instance from "../../api/header";

export const useGetAllTheaters = () => {
  const query = useQuery({
    queryKey: ["theater"],
    queryFn: async function () {
      const { data } = await apiv1Instance.get("/theater");
      console.log(data);
      return data;
    },
  });
  return { ...query, theater: query.data };
};
