import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch, useSelector } from "react-redux";
import { changeAlertText } from "../reducer/alertSlice";
import { useEffect } from "react";

const AlertNotification = () => {
  const alert = useSelector((state) => state.alert.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeAlertText(""));
    }, 2000);
  }, [dispatch]);

  return (
    <>
      {alert && (
        <Alert
          variant="filled"
          icon={<CheckIcon fontSize="inherite" />}
          severity="success"
          className="w-fit fixed right-5 bottom-5"
          onClose={() => {
            dispatch(changeAlertText(""));
          }}
        >
          {alert}
        </Alert>
      )}
      ;
    </>
  );
};

export default AlertNotification;
