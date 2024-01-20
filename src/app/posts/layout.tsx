import React, { Children } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>posts</div>
      {children}
    </>
  );
};

export default layout;
