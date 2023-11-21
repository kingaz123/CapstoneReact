import { https } from "./axios.config";

export const userServ = {
  login: (data: any) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  register: (data: any) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
  },
  getAllUsers: () => {
    return https.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung');
  },
  deleteUsers: (taiKhoan: string) => {
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  addUsers: (data: any) => {
    return https.post("/api/QuanLyNguoiDung/ThemNguoiDung", data);
  },
  updateUsers: (data: any) => {
    return https.post("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  }
};

