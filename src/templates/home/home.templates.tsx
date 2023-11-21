import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const HomeTemplate: React.FC = () => {
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

export default HomeTemplate;
