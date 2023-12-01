import { Input, message } from "antd";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { userServ } from "../../services/user.service";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      nhapLaiMatKhau: "",
      maNhom: "GP01",
      email: "",
      soDt: "",
    },
    onSubmit: async (values: typeof formik.initialValues) => {
      try {
        await userServ.register(values);
        message.success("Đăng ký thành công");
        setTimeout(() => {
          navigate("/login");
        }, [2000]);
      } catch (err) {
        message.error(err.response.data.content);
      }
    },
    validationSchema: yup.object({
      hoTen: yup.string().required("Vui lòng điền dữ liệu vào trường"),
      taiKhoan: yup.string().required("Vui lòng điền dữ liệu vào trường"),
      matKhau: yup
        .string()
        .required("Vui lòng điền dữ liệu vào trường")
        .min(5, "Mật khẩu tối thiểu 5 ký tự"),
      nhapLaiMatKhau: yup
        .string()
        .required("Vui lòng điền dữ liệu vào trường")
        .oneOf([yup.ref("matKhau"), null], "Mật khẩu xác nhận không khớp"),
      email: yup
        .string()
        .required("Vui lòng điền dữ liệu vào trường")
        .matches(
          /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          "Địa chỉ email không hợp lệ",
        ),
      soDt: yup
        .string()
        .required("Vui lòng điền dữ liệu vào trường")
        .matches(/^[0-9\-+]{9,15}$/, "Số điện thoại không hợp lệ"),
    }),
  });

  return (
    <div className="bg-black text-white p-10 rounded-lg shadow-lg">
      <h1 className="mb-10 text-4xl font-bold uppercase text-white">
        Đăng ký tài khoản
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid md:grid-cols-2 md:grid-rows-3 gap-6 mb-10 grid-cols-1 grid-rows-6">
          <div>
            <label
              htmlFor="hoTen"
              className="block mb-2 text-lg font-medium text-gray-300"
            >
              Họ tên khách hàng
            </label>
            <Input
              type="text"
              id="hoTen"
              className="bg-gray-700 text-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              status={
                formik.errors.hoTen && formik.touched.hoTen ? "error" : ""
              }
            />
            {formik.errors.hoTen && formik.touched.hoTen ? (
              <p className="mt-2 text-sm italic text-red-500">
                {formik.errors.hoTen}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label
              htmlFor="taiKhoan"
              className="block mb-2 text-lg font-medium text-gray-300"
            >
              Tên tài khoản
            </label>
            <Input
              type="text"
              id="taiKhoan"
              className="bg-gray-700 text-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
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
            ) : (
              ""
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-300"
            >
              Email
            </label>
            <Input
              type="text"
              id="email"
              className="bg-gray-700 text-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              status={
                formik.errors.email && formik.touched.email ? "error" : ""
              }
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="mt-2 text-sm italic text-red-500">
                {formik.errors.email}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label
              htmlFor="soDt"
              className="block mb-2 text-lg font-medium text-gray-300"
            >
              Số điện thoại
            </label>
            <Input
              type="text"
              id="soDt"
              className="bg-gray-700 text-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              status={formik.errors.soDt && formik.touched.soDt ? "error" : ""}
            />
            {formik.errors.soDt && formik.touched.soDt ? (
              <p className="mt-2 text-sm italic text-red-500">
                {formik.errors.soDt}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label
              htmlFor="matKhau"
              className="block mb-2 text-lg font-medium text-gray-300"
            >
              Mật khẩu
            </label>
            <Input
              type="password"
              id="matKhau"
              className="bg-gray-700 text-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
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
            ) : (
              ""
            )}
          </div>
          <div>
            <label
              htmlFor="nhapLaiMatKhau"
              className="block mb-2 text-lg font-medium text-gray-300"
            >
              Xác nhận mật khẩu
            </label>
            <Input
              type="password"
              id="nhapLaiMatKhau"
              className="bg-gray-700 text-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              status={
                formik.errors.nhapLaiMatKhau && formik.touched.nhapLaiMatKhau
                  ? "error"
                  : ""
              }
            />
            {formik.errors.nhapLaiMatKhau && formik.touched.nhapLaiMatKhau ? (
              <p className="mt-2 text-sm italic text-red-500">
                {formik.errors.nhapLaiMatKhau}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-purple-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
