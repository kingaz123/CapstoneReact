import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-800 shadow-lg px-12 pt-5">
      <div className="px-12 pt-7 w-full max-w-screen-2xl p-8 mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-base">
          <div className="mb-6">
            <NavLink to="/" className="flex items-center">
              <img
                src="../img/CinemaLogo.png"
                className="w-20 h-20 object-cover mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center font-bold text-xl">
                Sunlight Cinema
              </span>
            </NavLink>
          </div>
          <div className="mb-6">
            <h3 className="text-yellow-500 font-bold mb-4">Khám phá</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="hover:text-gray-300">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-gray-300">
                  Về chúng tôi
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-gray-300">
                  Phim
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-gray-300">
                  Sự kiện
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-yellow-500 font-bold mb-4">Pháp lý</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="hover:text-gray-300">
                  Chính sách bảo mật
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-gray-300">
                  Điều khoản sử dụng
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-gray-300">
                  Cấp phép
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-yellow-500 font-bold mb-4">Liên hệ</h3>
            <p className="mb-4">
              Hãy liên hệ chúng tôi nếu bạn có bất kỳ câu hỏi nào.
            </p>
            <NavLink
              to="/"
              className="px-6 py-2 border border-white rounded hover:bg-white hover:text-blue-900"
            >
              Liên hệ
            </NavLink>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />
        <span className="block text-base sm:text-center">
          Bản quyền © 2023 Cybersoft Cinema. Đã đăng ký bản quyền.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
