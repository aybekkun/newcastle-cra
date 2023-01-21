import React from "react";
import { useDispatch } from "react-redux";

import MainLayout from "./layouts/MainLayout";
import RegisterLayout from "./layouts/RegisterLayout";
import { userCheck } from "./redux/auth/asyncActions";
import Routing from "./Routing/Routing";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    (async function () {
      await dispatch(userCheck());
    })();
  }, []);
  return (
    <>
      <Routing />
    </>
  );
};

export default App;
