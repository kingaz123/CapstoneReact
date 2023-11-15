import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

function UserTemplate(props: PropsWithChildren) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default UserTemplate;
