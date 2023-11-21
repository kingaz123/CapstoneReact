import React from "react";
import { Input, message } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { userServ } from "../../services/user.service";
import { saveLocal } from "../../utils/localStore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/slices/userSlice";

interface LoginFormValues {
  taiKhoan: string;
  matKhau: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: yup.object({
      taiKhoan: yup.string().required("Vui lòng điền dữ liệu vào trường"),
      matKhau: yup
        .string()
        .required("Vui lòng điền dữ liệu vào trường")
        .min(5, "Mật khẩu tối thiểu 5 ký tự"),
    }),
    onSubmit: (values) => {
      userServ
        .login(values)
        .then((res) => {
          if (res.data.content.maLoaiNguoiDung === "KhachHang") {
            saveLocal("user", res.data.content);
            dispatch(setUserData(res.data.content));
            messageApi.success("Đăng nhập thành công");
            navigate("/");
            window.location.reload();
          } else {
            messageApi.error("Đăng nhập thất bại");
          }
        })
        .catch((err) => {
          messageApi.error(err.response.data.content);
        });
    },
  });

  return (
    <div className="bg-black text-white p-10 rounded-lg shadow-lg">
      {contextHolder}
      <h1 className="mb-5 text-4xl font-bold uppercase text-white">
        Đăng nhập
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-300"
          >
            Tài khoản
          </label>
          <Input
            type="text"
            id="taiKhoan"
            className="bg-gray-700 border border-gray-600 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            status={
              formik.errors.taiKhoan && formik.touched.taiKhoan ? "error" : ""
            }
          />
          {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
            <p className="mt-2 text-sm italic text-red-500">
              {formik.errors.taiKhoan}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-medium text-gray-300"
          >
            Mật khẩu
          </label>
          <Input
            type="password"
            id="matKhau"
            className="bg-gray-700 border border-gray-600 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            status={
              formik.errors.matKhau && formik.touched.matKhau ? "error" : ""
            }
          />
          {formik.errors.matKhau && formik.touched.matKhau ? (
            <p className="mt-2 text-sm italic text-red-500">
              {formik.errors.matKhau}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="text-white bg-purple-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full p-3 text-center"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
