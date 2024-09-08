import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiv1Instance from "../../api/header";
import { changeAlertText } from "../../reducer/alertSlice";
import { useDispatch } from "react-redux";

export const useDeleteShows = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ id }) => {
      const data = await apiv1Instance.delete(`/shows/${id}`);
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
