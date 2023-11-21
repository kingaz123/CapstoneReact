import { https } from "./axios.config";

export const theaterServ = {
  getAllTheaters: (): Promise<any> => {
    return https.get("/api/QuanLyRap/LayThongTinHeThongRap");
  },
  getAllMovieSchedules: (maHeThongRap: string): Promise<any> => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`
    );
  },
};
