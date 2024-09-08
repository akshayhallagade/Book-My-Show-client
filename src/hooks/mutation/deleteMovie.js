import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiv1Instance from "../../api/header";
import { useDispatch } from "react-redux";
import { changeAlertText } from "../../reducer/alertSlice";

export const useDeleteMovie = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ id }) => {
      const data = await apiv1Instance.delete(`/movie/${id}`);
      return data;
    },
    onSuccess: ({ data }) => {
      console.log(data);
      dispatch(changeAlertText(data.message));
      queryClient.invalidateQueries("movies");
    },
  });
  return mutation;
};
