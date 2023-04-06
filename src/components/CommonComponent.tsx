import React from "react";

const CommonComponent = ({ children }: any) => {
  React.useEffect(() => {
    console.log({ children });
  }, []);
  return (
    <>
      {children}
      <div>CommonComponent</div>
    </>
  );
};

export default CommonComponent;
