import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewsType, WatchType } from "../types/DataTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { setUserDetails } from "../store/authSlice";
import { RootState } from "../store";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useColorMode } from "../context/ColorModeContext";

interface IDahsboardProps {
  news: NewsType[];
  marketDayWatch: WatchType;
}

const Dashboard: React.FC<IDahsboardProps> = ({ news, marketDayWatch }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.auth.userId);

  const slidesData = [
    { title: "Top Daily Gainers", data: marketDayWatch.TopGainers },
    { title: "Top Daily Losers", data: marketDayWatch.TopLosers },
    { title: "CryptoCurrency", data: marketDayWatch.CryptoCurrency },
  ];
  const { colorMode } = useColorMode();

  useEffect(() => {
    const fetchUserLevel = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();

        dispatch(
          setUserDetails({
            userId: userData._id || null,
            admin: userData.admin || false,
            username: userData.username || null,
            email: userData.email || null,
            level: userData.level || null,
            stripeSessionId: userData.stripeSessionId || null,
            token: userData.token || null,
            avatar: userData.avatar || null,
          })
        );
        console.log(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) {
      fetchUserLevel();
    }
  }, []); // Add userId as a dependency

  return (
    <div className="mx-auto max-w-screen flex flex-col gap-2">
      {/* Landing Page */}
      <div className="lg:block relative hidden">
        <img src="/splashback.png" className="w-full" alt="Splash Screen" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-2xl gap-12">
          <h1 className="text-3xl text-[64px] text-center font-body -mt-32">
            <span
              className={`${
                colorMode === "dark" ? "text-gray-500" : "text-black"
              }`}
            >
              Easy Access with HKEX Screener
            </span>
          </h1>
          <p
            className={`text-center  text-[24px] w-[50%] ${
              colorMode === "dark" ? "text-gray-500" : "text-black"
            }`}
          >
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
      <div
        className={`flex flex-col p-20 gap-20  ${
          colorMode === "dark"
            ? "bg-gray-800 text-white"
            : "bg-white text-black"
        }`}
      >
        {/* Hong Kong News */}
        <div>
          <div className="flex flex-row justify-between mb-6">
            <h1
              className={`flex ${
                colorMode === "dark" ? "text-white" : "text-black"
              } text-[2rem]`}
            >
              Hong Kong News
            </h1>
            <p
              className={`flex ${
                colorMode === "dark" ? "text-white" : "text-black"
              } text-lg`}
            >
              See All
            </p>
          </div>

          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{ clickable: true }}
            freeMode={true}
            modules={[Pagination, FreeMode]}
            className="w-full h-full"
          >
            {news.map((one, index) => (
              <SwiperSlide
                className="text-md flex justify-center py-2"
                key={`dashboard-news-card-${index}`}
              >
                <div className="overflow-hidden justify-between min-h-[600px]">
                  <div className="m-0 rounded-none">
                    <img src={one.gettyImageUrl} alt="News Card Image" />
                  </div>
                  <div className="p-4">
                    <h6 className="text-xl">{one.title}</h6>
                    <p className="mt-3 text-sm">
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
            <h1
              className={`flex ${
                colorMode === "dark" ? "text-white" : "text-black"
              } text-[2rem]`}
            >
              HKEX Stock Market News
            </h1>
            <p
              className={`flex ${
                colorMode === "dark" ? "text-white" : "text-black"
              } text-lg`}
            >
              See All
            </p>
          </div>

          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{ clickable: true }}
            freeMode={true}
            modules={[Pagination, FreeMode]}
            className="w-full h-full"
          >
            {news.map((one, index) => (
              <SwiperSlide
                className="text-md flex justify-center py-2"
                key={`dashboard-news-card-${index}`}
              >
                <div className="overflow-hidden justify-between min-h-[600px]">
                  <div className="m-0 rounded-none">
                    <img src={one.gettyImageUrl} alt="News Card Image" />
                  </div>
                  <div className="p-4">
                    <h6 className="text-xl">{one.title}</h6>
                    <p className="mt-3 text-sm">
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
            <h1
              className={`flex ${
                colorMode === "dark" ? "text-white" : "text-black"
              } text-[2rem]`}
            >
              Investment Ideas
            </h1>
            <p
              className={`flex ${
                colorMode === "dark" ? "text-white" : "text-black"
              } text-lg`}
            >
              See All
            </p>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            freeMode={true}
            modules={[Pagination, FreeMode]}
            className="w-full h-full"
          >
            {slidesData.map((slide, slideIndex) => (
              <SwiperSlide
                key={`dashboard-slide-${slideIndex}`}
                className={`flex p-2 shadow-md border-2 h-[25em] min-w-[420px] ${
                  colorMode === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black"
                }`}
              >
                <h6
                  className={`text-xl font-medium p-4 ${
                    colorMode === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {slide.title}
                </h6>
                <table className="w-full min-w-max table-auto text-left rounded-xl overflow-hidden">
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slide.data.map((slug, index) => (
                      <tr key={`dashboard-table-${slideIndex}-${index}`}>
                        <td>{slug.slug.toUpperCase()}</td>
                        <td>{slug.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
