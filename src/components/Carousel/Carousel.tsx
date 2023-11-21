import { useEffect, useState } from "react";
import { Carousel } from "antd";
import { movieServ } from "../../services/movie.service";

const HomeBanner = (): JSX.Element => {
  const [banner, setBanner] = useState<any[]>([]);
  const getAllBanner = async (): Promise<void> => {
    const res = await movieServ.getAllBanners();
    setBanner(res.data.content);
  };
  useEffect(() => {
    getAllBanner();
  }, []);
  return (
    <Carousel autoplay>
      {banner.map((item: any, index: number) => {
        return (
          <div key={index} className="h-93vh">
            <img
              className="object-cover w-full h-full"
              src={item.hinhAnh}
              alt=""
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeBanner;
