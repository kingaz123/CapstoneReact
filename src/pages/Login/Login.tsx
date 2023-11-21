import React, { useEffect } from "react";
import { LoginForm } from "../../components/LoginForm";
import { getLocal } from "../../utils/localStore";
import { message } from "antd";

const Login: React.FC = () => {
  useEffect(() => {
    if (!getLocal("user")) {
      message.info(
        "Bạn có thể đặt vé sau khi đăng nhập vào tài khoản của bạn.",
      );
    }
  }, []);

  return (
    <div className="flex items-center gap-4 lg:px-48 flex-col lg:flex-row px-24">
      <div className="lg:w-1/2 hidden lg:block p-12">
        <img src="../img/login.png" alt="Đăng nhập" />
      </div>
      <div className="lg:w-1/2 lg:px-24 w-full px-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
