import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

function HomeTemplates(props: PropsWithChildren) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default HomeTemplates;
