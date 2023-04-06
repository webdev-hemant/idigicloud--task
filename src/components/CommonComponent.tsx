import React from "react";

const CommonComponent = ({ children }: any) => {
  React.useEffect(() => {
    console.log({ children });
  }, []);
  return (
    <>
      {children}
      <h1>{children.props.name}</h1>
      <div>CommonComponent</div>
    </>
  );
};

export default CommonComponent;
