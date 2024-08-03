import { useDispatch } from "react-redux";
import { addChartData } from "../utils/severSlice";
import { useEffect} from "react";

const useData = () => {
  const dispatch = useDispatch();
  const fetchFici = () => {
    const x = Math.floor(Math.random() * 10)+2;
    const arr = [x * 2, x * 7, x * 6, x * 4, x * 3];
    dispatch(addChartData(arr));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      fetchFici();
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);
};

export default useData;
