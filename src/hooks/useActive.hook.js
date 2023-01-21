import React from "react";

const useActive = () => {
  const [active, setActive] = React.useState(false);
  const handleChangeActive = () => {
    setActive((prev) => !prev);
  };
  return {
    active,
    handleChangeActive,
  };
};

export default useActive;
