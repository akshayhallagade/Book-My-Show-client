import { useDispatch } from "react-redux";
import { slideChange } from "../reducer/sliderSlice";

const Overlay = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="fixed z-40 top-0 right-0 bg-gray-700 opacity-60 w-screen h-screen"
      onClick={() => dispatch(slideChange())}
    ></div>
  );
};

export default Overlay;
