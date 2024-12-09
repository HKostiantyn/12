import React, { useRef } from "react";
// import SplashScreen from "/splashback.png";
import { NewsType, WatchType } from "../types/DataTypes";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { FreeMode, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

interface IDahsboardProps {
  news: NewsType[];
  marketDayWatch: WatchType;
}

const Dashboard: React.FC<IDahsboardProps> = ({ news, marketDayWatch }) => {
  const scrollNewsRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    if (scrollNewsRef.current) {
      scrollNewsRef.current.scrollLeft += event.deltaY;
    }
  };

  const addScrollListener = () => {
    scrollNewsRef.current?.addEventListener("wheel", handleScroll);
  };

  const removeScrollListener = () => {
    scrollNewsRef.current?.removeEventListener("wheel", handleScroll);
  };

  return (
    <div className="mx-auto max-w-screen flex flex-col gap-2">
      {/* Landing Page */}
      <div className="lg:block relative hidden">
        <img src="/splashback.png" className="w-full" alt="Splash Screen" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-2xl gap-12">
          <h1 className="text-3xl text-[64px] text-center font-body -mt-32">
            <span className="text-primary">Easy Access</span> with HKEX Screener
          </h1>
          <p className="text-center text-[24px] text-blue-gray-500 w-[50%]">
            Willing to focus only Hong Kong Exchange? Then we are here for you.
            You can use analytical tools from various well-known providers to
            get price movement reports, the latest market news, and other
            important information you need about Hong Kong Stocks.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Link to="/stscreen">Get Started</Link>
          </button>
        </div>
      </div>

      {/* Data Show Page */}
      <div className="flex flex-col p-20 gap-20">
        {/* Hong Kong News */}
        <div>
          <div className="flex flex-row justify-between mb-6">
            <h1 className="text-black text-[2rem]">Hong Kong News</h1>
            <p className="text-primary text-lg hover:underline">See All</p>
          </div>

          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            mousewheel={true}
            pagination={{ clickable: true }}
            freeMode={true}
            modules={[Pagination, FreeMode, Mousewheel, Autoplay]}
            className="w-full h-full"
          >
            {news.map((one, index) => (
              <SwiperSlide
                className="text-md flex justify-center py-2"
                key={`dashboard-news-card-${index}`}
              >
                <div className="overflow-hidden justify-between h-[600px]">
                  <div className="m-0 rounded-none">
                    <img src={one.gettyImageUrl} alt="News Card Image" />
                  </div>
                  <div className="p-4">
                    <h6 className="text-xl text-blue-gray-700">{one.title}</h6>
                    <p className="mt-3 text-sm text-gray-700">
                      <span
                        dangerouslySetInnerHTML={{ __html: one.content }}
                      ></span>
                    </p>
                  </div>
                  <div className="flex items-center justify-end p-4">
                    <span className="font-normal">Read More</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* HKEX Stock Market News */}
        <div>
          <div className="flex flex-row justify-between mb-6">
            <h1 className="text-black text-[2rem]">HKEX Stock Market News</h1>
            <p className="text-primary text-lg hover:underline">See All</p>
          </div>

          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            mousewheel={true}
            pagination={{ clickable: true }}
            freeMode={true}
            modules={[Pagination, FreeMode, Mousewheel, Autoplay]}
            className="w-full h-full"
          >
            {news.map((one, index) => (
              <SwiperSlide
                className="text-md flex justify-center py-2"
                key={`dashboard-news-card-${index}`}
              >
                <div className="overflow-hidden justify-between h-[600px]">
                  <div className="m-0 rounded-none">
                    <img src={one.gettyImageUrl} alt="News Card Image" />
                  </div>
                  <div className="p-4">
                    <h6 className="text-xl text-blue-gray-700">{one.title}</h6>
                    <p className="mt-3 text-sm text-gray-700">
                      <span
                        dangerouslySetInnerHTML={{ __html: one.content }}
                      ></span>
                    </p>
                  </div>
                  <div className="flex items-center justify-end p-4">
                    <span className="font-normal">Read More</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Investment Ideas */}
        <div>
          <div className="flex flex-row justify-between mb-6">
            <h1 className="text-black text-[2rem]">Investment Ideas</h1>
            <p className="text-primary text-lg hover:underline">{"<      >"}</p>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            freeMode={true}
            modules={[Pagination, FreeMode]}
            className="w-full h-full"
          >
            <SwiperSlide className="p-2 bg-white shadow-md border-2 h-[25em]">
              <h6 className="text-xl font-medium text-primary m-4">
                Top Daily Gainers
              </h6>
              <table className="w-full min-w-max table-auto text-left rounded-xl overflow-hidden">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {marketDayWatch.TopGainers.map((slug, index) => (
                    <tr key={`dashboard-gainer-table-${index}`}>
                      <td>{slug.slug.toUpperCase()}</td>
                      <td>{slug.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </SwiperSlide>
            <SwiperSlide className="p-2 bg-white shadow-md border-2 h-[25em]">
              <h6 className="text-xl font-medium text-primary m-4">
                Top Daily Losers
              </h6>
              <table className="w-full min-w-max table-auto text-left rounded-xl">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {marketDayWatch.TopLosers.map((slug, index) => (
                    <tr key={`dashboard-gainer-table-${index}`}>
                      <td>{slug.slug.toUpperCase()}</td>
                      <td>{slug.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </SwiperSlide>
            <SwiperSlide className="p-2 bg-white shadow-md border-2 h-[25em]">
              <h6 className="text-xl font-medium text-primary m-4">
                CryptoCurrency
              </h6>
              <table className="w-full min-w-max table-auto text-left rounded-xl">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {marketDayWatch.CryptoCurrency.map((slug, index) => (
                    <tr key={`dashboard-gainer-table-${index}`}>
                      <td>{slug.slug.toUpperCase()}</td>
                      <td>{slug.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
