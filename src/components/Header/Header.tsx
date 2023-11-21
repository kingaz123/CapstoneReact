import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown } from "antd";

interface RootState {
  user: {
    userData: {
      hoTen: string;
    };
  };
}

const items = [
  {
    key: "1",
    label: (
      <NavLink
        className="block p-2 pl-3 rounded-md hover:bg-green-500"
        to="/info"
      >
        <i className="mr-3 fa-solid fa-circle-info"></i>
        Thông tin tài khoản
      </NavLink>
    ),
  },
  {
    key: "2",
    label: (
      <NavLink
        className="block p-2 pl-3 rounded-md hover:bg-green-500"
        to="/setting"
      >
        <i className="mr-3 fa-solid fa-sliders"></i>
        Cài đặt trang web
      </NavLink>
    ),
  },
  {
    key: "3",
    label: (
      <div
        className="p-2 pl-3 duration-500 rounded-md hover:bg-green-500"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/";
        }}
      >
        <i className="mr-3 fa-solid fa-arrow-right-from-bracket"></i>
        Đăng xuất
      </div>
    ),
  },
];

const Header: React.FC = () => {
  const { hoTen } = useSelector(
    (state: RootState) => state.user.userData || {},
  );

  return (
    <nav className="top-0 left-0 z-20 w-full shadow-md bg-gradient-to-r from-blue-900 to-purple-800 text-lg">
      <div className="flex flex-wrap items-center justify-between px-12 py-5 mx-auto text-white">
        <NavLink to="/" className="flex items-center">
          <img
            src="../img/CinemaLogo.png"
            className="w-20 h-20 object-cover mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center font-semibold text-xl">
            Sunlight Cinema
          </span>
        </NavLink>
        {hoTen ? (
          <div className="flex md:order-2">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
            >
              <div className="p-2 text-white cursor-pointer">
                <i className="mr-3 fa-solid fa-user-gear"></i>
                {hoTen}
              </div>
            </Dropdown>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Mở menu</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex md:order-2">
            <NavLink to="/login">
              <button
                type="button"
                className="w-40 h-12 mr-3 font-bold text-base text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 transition duration-300 ease-in-out"
              >
                <i className="mr-2 fa-solid fa-right-to-bracket"></i>
                Đăng nhập
              </button>
            </NavLink>
            <NavLink to="/register">
              <button
                type="button"
                className="w-40 h-12 ml-3 font-bold text-base text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded-xl shadow-lg hover:from-pink-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300 transition duration-300 ease-in-out"
              >
                <i className="mr-2 fa-solid fa-user-pen"></i>
                Đăng ký
              </button>
            </NavLink>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        )}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-2 md:mt-0">
            <li>
              <NavLink
                to="/"
                className="py-2 px-4 rounded md:hover:bg-indigo-700 md:hover:text-white"
                aria-current="page"
              >
                Đặt vé
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="py-2 px-4 rounded md:hover:bg-indigo-700 md:hover:text-white"
              >
                Góc điện ảnh
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="py-2 px-4 rounded md:hover:bg-indigo-700 md:hover:text-white"
              >
                Review Phim
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
