import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="flex items-center lg:px-40 lg:flex-row flex-col px-24">
      <div className="w-1/2 hidden lg:block p-12">
        <img src="../img/register.png" alt="Đăng ký" />
      </div>
      <div className="lg:w-1/2 w-full">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
