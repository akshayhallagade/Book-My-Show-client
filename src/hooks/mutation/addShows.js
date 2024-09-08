import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiv1Instance from "../../api/header";
import { changeAlertText } from "../../reducer/alertSlice";
import { useDispatch } from "react-redux";

export const useAddShows = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ movieId, theaterId, showTime }) => {
      const data = await apiv1Instance.post("/shows", {
        movieId,
        theaterId,
        showTime,
      });
      return data;
    },
    onSuccess: async ({ data }) => {
      console.log(data);
      dispatch(changeAlertText(data.message));
      queryClient.invalidateQueries("shows");
    },
  });
  return mutation;
};
