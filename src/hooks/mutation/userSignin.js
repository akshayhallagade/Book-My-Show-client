import { useMutation } from "@tanstack/react-query";
import apiv1Instance from "../../api/header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeAlertText } from "../../reducer/alertSlice";

export const useSigninUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const data = await apiv1Instance.post("/user/signin", {
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
