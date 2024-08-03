import { CiSearch } from "react-icons/ci";
import { FaBell, FaMicrophone } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./utils/severSlice";

const Header = () => {
  const dark =useSelector(store=>store.server.dark);
  const dispatch = useDispatch()
  return (
    <div className={`${dark?"text-white bg-neutral-900":"text-black bg-white"} w-full h-14 px-8 justify-between flex items-center shadow-lg`}>
        <h1 className="font-bold">DASHBOARD</h1>
      <button className="px-2 bg-green-700 rounded-md" onClick={()=>dispatch(toggleTheme())}>{dark?"Light":"Dark"}</button>
      </div>
  
  );
};

export default Header;
