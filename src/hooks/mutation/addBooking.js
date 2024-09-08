import { useMutation } from "@tanstack/react-query";
import apiv1Instance from "../../api/header";

export const useAddBooking = () => {
  //   const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ showId, seats, amount }) => {
      const data = await apiv1Instance.post("/bookings", {
        showId,
        seats,
        amount,
      });
      return data;
    },
    onSuccess: async ({ data }) => {
      console.log(data);
      //   queryClient.invalidateQueries("shows");
      return data;
    },
  });
  return mutation;
};
