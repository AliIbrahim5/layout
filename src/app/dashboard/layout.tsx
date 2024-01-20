import React, { Children } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>layout</div>
      {children}
    </>
  );
};

export default layout;
