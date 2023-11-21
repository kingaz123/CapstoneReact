import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { movieServ } from "../../services/movie.service";
import moment from "moment";
import TheaterMenu from "../TheaterMenu/TheaterMenu";
import { getLocal } from "../../utils/localStore";
import { Modal } from "antd";

const MovieInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>({});
  const navigate = useNavigate();
  const [modal2Open, setModal2Open] = useState(false);

  const getMovieDetails = async (id: string) => {
    const currentMovie = await movieServ.getMovieDetails(id);
    setMovie(currentMovie.data.content);
  };

  useEffect(() => {
    getMovieDetails(id);
  }, []);

  const {
    tenPhim,
    hinhAnh,
    ngayKhoiChieu,
    moTa,
    dangChieu,
    sapChieu,
    hot,
    danhGia,
  } = movie;

  return (
    <>
      <div className="py-12 text-white bg-gradient-to-b from-purple-800 to-black">
        <div className="container mx-auto px-4">
          <h1 className="mb-10 text-5xl font-bold tracking-tight uppercase text-center">
            Thông tin phim
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="w-full lg:w-1/2">
              <img
                src={hinhAnh}
                alt="Movie"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-xl">
              <h2 className="text-4xl font-extrabold uppercase">{tenPhim}</h2>
              <div className="flex flex-col gap-2">
                <p>
                  <span className="text-blue-400">Ngày khởi chiếu: </span>
                  <span>{moment(ngayKhoiChieu).format("DD/MM/YYYY")}</span>
                </p>
                <p>
                  <span className="text-blue-400">Mô tả: </span>
                  <span>{moTa}</span>
                </p>
                <p>
                  <span className="text-blue-400">Trạng thái: </span>
                  <span>
                    {dangChieu ? "Đang chiếu | " : ""}
                    {sapChieu ? "Sắp chiếu | " : ""}
                    {hot ? "Hot" : ""}
                  </span>
                </p>
                <p>
                  <span className="text-blue-400">Đánh giá: </span>
                  <span>{danhGia} / 10</span>
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-green-700 transition duration-500 shadow"
                  onClick={() => setModal2Open(true)}
                >
                  XEM TRAILER
                </button>
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-green-700 transition duration-500 shadow"
                  onClick={() => {
                    getLocal("user")
                      ? navigate("/booking")
                      : navigate("/login");
                  }}
                >
                  ĐẶT VÉ NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24">
        <TheaterMenu />
      </div>
      <Modal
        title="Trailer từ Youtube"
        centered
        visible={modal2Open}
        onCancel={() => {
          setModal2Open(false);
          const iframe = document.querySelector("iframe");
          const iframeSrc = iframe.src;
          iframe.src = iframeSrc;
        }}
        footer={null}
        width={"90vw"}
      >
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/1ovgxN2VWNc?autoplay=1"
          title="Trailer"
          frameBorder={0}
          allow="accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; web-share"
          allowFullScreen
        />
      </Modal>
    </>
  );
};

export default MovieInfo;
