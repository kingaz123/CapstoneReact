import { https } from "./axios.config.ts";

export const movieServ = {
  getAllBanners: (): Promise<any> => {
    return https.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  getAllMovies: (tenPhim: string = ""): Promise<any> => {
    if (tenPhim.trim() !== "") {
      return https.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`
      );
    }
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
  addMovies: (formData: any): Promise<any> => {
    return https.post("/api/QuanLyPhim/ThemPhimUploadHinh", formData);
  },
  getMovieDetails: (maPhim: string): Promise<any> => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
  deleteMovies: (MaPhim: string): Promise<any> => {
    return https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${MaPhim}`);
  },
  updateMovies: (formData: any): Promise<any> => {
    return https.post("/api/QuanLyPhim/CapNhatPhimUpload", formData);
  },
  getMovieShowTime: (maPhim: string): Promise<any> => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
  },
};




