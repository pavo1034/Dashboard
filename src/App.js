import {useSelector } from "react-redux";
import FiciGame from "./FiciGame";
import Header from "./Header";

const App = () => {
  const dark = useSelector((store) => store.server.dark);
  return (
    <>
      <Header />
      <div className={`${dark ? "bg-neutral-900" : "bg-white"} p-4`}>
        <FiciGame />
      </div>
    </>
  );
};

export default App;
