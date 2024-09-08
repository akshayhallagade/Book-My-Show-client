import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiv1Instance from "../../api/header";
import { changeAlertText } from "../../reducer/alertSlice";
import { useDispatch } from "react-redux";

export const useAddTheater = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ theaterName, lat, long, address, isActive }) => {
      const data = await apiv1Instance.post("/theater", {
        theaterName,
        location: {
          lat,
          long,
          address,
        },
        isActive,
      });
      return data;
    },
    onSuccess: async ({ data }) => {
      dispatch(changeAlertText(data.message));
      queryClient.invalidateQueries("theater");
    },
  });
  return mutation;
};
