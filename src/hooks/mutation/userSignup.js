import apiv1Instance from "../../api/header";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { changeAlertText } from "../../reducer/alertSlice";
import { useNavigate } from "react-router-dom";

export const useSignupUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
    }) => {
      const data = await apiv1Instance.post("/user/signup", {
        firstName,
        lastName,
        dateOfBirth,
        email,
        password,
      });
      return data;
    },
    onSuccess: async ({ data }) => {
      dispatch(changeAlertText(data.message));
      const token = data.token;
      localStorage.setItem("token", token);
      navigate("/");
    },
  });
  return mutation;
};
