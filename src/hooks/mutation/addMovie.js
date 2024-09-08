import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiv1Instance from "../../api/header";
import { changeAlertText } from "../../reducer/alertSlice";
import { useDispatch } from "react-redux";

export const useAddMovie = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      title,
      genre,
      length,
      release_date,
      dimension_type,
      language,
      description,
    }) => {
      const data = await apiv1Instance.post("/movie", {
        title,
        genre,
        length,
        release_date,
        dimension_type,
        language,
        description,
      });
      return data;
    },
    onSuccess: async ({ data }) => {
      dispatch(changeAlertText(data.message));
      queryClient.invalidateQueries("movies");
    },
  });
  return mutation;
};
