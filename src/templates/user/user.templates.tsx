import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
// Import RootState from your Redux store

const UserTemplate: React.FC = () => {
  // Use RootState to type the state parameter in useSelector
  return (
    <Fragment>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default UserTemplate;
