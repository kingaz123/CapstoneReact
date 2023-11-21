import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import {
  set_loading_ended,
  set_loading_started,
} from "../../redux/slices/loadingSlice";
import { movieServ } from "../../services/movie.service";

type Movie = {
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
};

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set_loading_started());
    movieServ
      .getAllMovies()
      .then((res) => {
        setMovies(res.data.content);
        dispatch(set_loading_ended());
      })
      .catch((err) => {
        message.error(err.message || "An error occurred while fetching movies");
        dispatch(set_loading_ended());
      });
  }, [dispatch]);

  return (
    <div className="max-w-screen-xl mx-auto mb-16 py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold tracking-tight text-white mb-8">
        Danh sách phim
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
        {movies.map((item) => {
          return (
            <div
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
              key={item.maPhim}
            >
              <img
                className="w-full h-64 object-cover object-center"
                src={item.hinhAnh}
                alt={item.tenPhim}
              />
              <div className="flex flex-col justify-between p-6 h-[calc(100%-16rem)]">
                {" "}
                <div>
                  <h3
                    className="text-base font-bold mb-2 line-clamp-2"
                    style={{ height: "3.5rem" }}
                  >
                    <span className="bg-orange-500 text-white text-sm px-3 py-1 mr-2 rounded-full">
                      {item.maNhom}
                    </span>
                    {item.tenPhim}
                  </h3>
                  <p
                    className="text-gray-700 text-base mb-4 line-clamp-3"
                    style={{ height: "4.5rem" }}
                  >
                    {item.moTa}
                  </p>
                </div>
                <NavLink
                  to={`/detail/${item.maPhim}`}
                  className="text-indigo-600 hover:text-indigo-900 font-medium text-base"
                >
                  Xem Ngay
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
