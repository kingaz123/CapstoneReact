import { Tabs, message } from "antd";
import React, { useEffect, useState } from "react";
import { theaterServ } from "../../services/theater.service";
import TheaterMenuItem from "./TheaterMenuItem";

const TheaterMenu: React.FC = () => {
  const [theater, setTheater] = useState<any[]>([]);

  useEffect(() => {
    theaterServ
      .getAllTheaters()
      .then((res: any) => {
        setTheater(res.data.content);
      })
      .catch((err: any) => {
        message.error(err.response.data);
      });
  }, []);

  const renderItemTab = () => {
    return theater.map((item: any, index: number) => {
      return {
        label: (
          <img
            src={item.logo}
            alt=""
            className="w-14 h-14 text-left bg-yellow-500 rounded-lg shadow-lg"
          />
        ),
        key: index + 1,
        children: <TheaterMenuItem maHeThongRap={item.maHeThongRap} />,
      };
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-16">
      <h2 className="text-3xl font-bold mb-7 text-white text-center">
        ĐẶT VÉ THEO LỊCH CHIẾU VÀ RẠP ƯA THÍCH CỦA BẠN
      </h2>
      <div className="">
        <Tabs tabPosition={"left"} items={renderItemTab()} />
      </div>
    </div>
  );
};

export default TheaterMenu;
