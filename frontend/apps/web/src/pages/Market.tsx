import React, { useEffect, useState } from "react";
// import axios from "axios";

// Component to display each market index
const MarketIndex = ({ name, value, change, changePercent, flag }) => {
  const changeClass = change.startsWith("+")
    ? "text-green-500"
    : "text-red-500";
  return (
    <div className="flex items-center gap-2 justify-between p-4 border border-gray-300 rounded-md">
      {flag && (
        <span className="w-8">
          <img src={flag} alt="flag" className=" align-middle" />
        </span>
      )}

      <span className="flex-2 text-lg font-medium">{name}</span>
      <div className="flex flex-col gap-2">
        <span className="flex-1 text-right">{value.toLocaleString()}</span>
        <div className="flex flex-row gap-2">
          <span className={`flex-1 text-right ${changeClass}`}>{change}</span>
          <span className={`flex-1 text-right ${changeClass}`}>
            {changePercent}
          </span>
        </div>
      </div>
    </div>
  );
};

// Main component to display the list of market indexes
const MarketIndexes = () => {
  // const [marketData, setMarketData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchMarketData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.example.com/market-indexes"
  //       ); // Replace with your actual API endpoint
  //       setMarketData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching market data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMarketData();
  // }, []);

  // if (loading) {
  //   return <div className="text-center text-xl">Loading...</div>;
  // }

  const marketData = [
    {
      name: "FTSE Bursa Malaysia KLCI",
      value: 1635.87,
      change: "+1.700",
      changePercent: "+0.104%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/my.svg",
    },
    {
      name: "STI",
      value: 3637.64,
      change: "+34.650",
      changePercent: "+0.962%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/sg.svg",
    },
    {
      name: "HANG SENG INDEX",
      value: 20538.38,
      change: "+0.000",
      changePercent: "+0.000%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/hk.svg",
    },
    {
      name: "KOSPI Composite Index",
      value: 2545.72,
      change: "-17.790",
      changePercent: "-0.694%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/kr.svg",
    },
    {
      name: "NIKKEI 225",
      value: 39152.67,
      change: "-328.000",
      changePercent: "-0.831%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/jp.svg",
    },
    {
      name: "SET Index",
      value: 1467.42,
      change: "-14.250",
      changePercent: "-0.962%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/th.svg",
    },
    {
      name: "PSEi INDEX",
      value: 7165.42,
      change: "-92.520",
      changePercent: "-1.275%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/ph.svg",
    },
    {
      name: "FTSE China A50",
      value: 13574.3,
      change: "-148.990",
      changePercent: "-1.086%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/cn.svg",
    },
    {
      name: "SSE Composite Index",
      value: 3383.81,
      change: "-3.181",
      changePercent: "-0.094%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/cn.svg",
    },
    {
      name: "SZSE COMP SUB INDEX",
      value: 10968.14,
      change: "-38.796",
      changePercent: "-0.352%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/cn.svg",
    },
    {
      name: "S&P/ASX 200",
      value: 8163.1,
      change: "-36.400",
      changePercent: "-0.444%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/au.svg",
    },
    {
      name: "Composite Index",
      value: 7383.87,
      change: "-108.063",
      changePercent: "-1.442%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/id.svg",
    },
    {
      name: "NZX 50 INDEX GROS",
      value: 12662.36,
      change: "+13.190",
      changePercent: "+0.104%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/nz.svg",
    },
    {
      name: "TSEC weighted index",
      value: 23235.19,
      change: "+17.809",
      changePercent: "+0.077%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/tw.svg",
    },
    {
      name: "MOEX Russia Index",
      value: 2858.56,
      change: "+28.910",
      changePercent: "+1.022%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/ru.svg",
    },
    {
      name: "FTSE 100",
      value: 8166.68,
      change: "-5.710",
      changePercent: "-0.070%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/gb.svg",
    },
    {
      name: "DAX",
      value: 19039.31,
      change: "-216.959",
      changePercent: "-1.127%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/de.svg",
    },
    {
      name: "NIFTY 50",
      value: 24484.05,
      change: "+270.750",
      changePercent: "+1.118%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/in.svg",
    },
    {
      name: "S&P BSE SENSEX",
      value: 80378.13,
      change: "+901.500",
      changePercent: "+1.134%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/in.svg",
    },
    {
      name: "Dow Jones",
      value: 43729.93,
      change: "+1508.051",
      changePercent: "+3.572%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/us.svg",
    },
    {
      name: "NYSE COMPOSITE INDEX",
      value: 19828.0,
      change: "+364.217",
      changePercent: "+1.871%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/us.svg",
    },
    {
      name: "S&P 500",
      value: 5929.04,
      change: "+146.280",
      changePercent: "+2.530%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/us.svg",
    },
    {
      name: "NASDAQ Composite",
      value: 18983.47,
      change: "+544.295",
      changePercent: "+2.952%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/us.svg",
    },
    {
      name: "S&P/TSX Composite index",
      value: 24637.45,
      change: "+249.549",
      changePercent: "+1.023%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/ca.svg",
    },
    {
      name: "IBOVESPA",
      value: 130340.92,
      change: "-319.828",
      changePercent: "-0.245%",
      flag: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/br.svg",
    },
  ];

  const topActive = [
    {
      name: "GENETEC",
      value: 0.99,
      change: "+0.040",
      changePercent: "+4.2%",
      flag: "",
    },
    {
      name: "3REN",
      value: 0.4,
      change: "+0.005",
      changePercent: "+1.3%",
      flag: "",
    },
    {
      name: "HBGLOB",
      value: 0.11,
      change: "+0.005",
      changePercent: "+4.8%",
      flag: "",
    },
    {
      name: "JCY",
      value: 0.445,
      change: "+0.005",
      changePercent: "+1.1%",
      flag: "",
    },
    {
      name: "GTRONIC",
      value: 0.605,
      change: "+0.020",
      changePercent: "+3.4%",
      flag: "",
    },
    {
      name: "TOPGLOV",
      value: 1.13,
      change: "-0.030",
      changePercent: "-2.6%",
      flag: "",
    },
    {
      name: "MYEG",
      value: 0.885,
      change: "+0.000",
      changePercent: "+0.0%",
      flag: "",
    },
    {
      name: "LUSTER",
      value: 0.06,
      change: "+0.005",
      changePercent: "+9.1%",
      flag: "",
    },
    {
      name: "YTL",
      value: 2.24,
      change: "+0.020",
      changePercent: "+0.9%",
      flag: "",
    },
    {
      name: "CAPITALA",
      value: 0.96,
      change: "-0.015",
      changePercent: "-1.5%",
      flag: "",
    },
    {
      name: "JAKS",
      value: 0.14,
      change: "+0.000",
      changePercent: "+0.0%",
      flag: "",
    },
    {
      name: "CEB",
      value: 0.37,
      change: "+0.005",
      changePercent: "+1.4%",
      flag: "",
    },
    {
      name: "VELOCITY",
      value: 0.045,
      change: "+0.000",
      changePercent: "+0.0%",
      flag: "",
    },
    {
      name: "BAHVEST",
      value: 0.96,
      change: "-0.015",
      changePercent: "-1.5%",
      flag: "",
    },
    {
      name: "INARI",
      value: 3.07,
      change: "+0.080",
      changePercent: "+2.7%",
      flag: "",
    },
    {
      name: "CAREPLS",
      value: 0.265,
      change: "-0.005",
      changePercent: "-1.9%",
      flag: "",
    },
    {
      name: "BPURI",
      value: 0.31,
      change: "+0.000",
      changePercent: "+0.0%",
      flag: "",
    },
    {
      name: "TDM",
      value: 0.255,
      change: "+0.000",
      changePercent: "+0.0%",
      flag: "",
    },
    {
      name: "NOTION",
      value: 1.07,
      change: "-0.020",
      changePercent: "-1.8%",
      flag: "",
    },
    {
      name: "ELRIDGE",
      value: 0.44,
      change: "+0.005",
      changePercent: "+1.1%",
      flag: "",
    },
    {
      name: "AIMFLEX",
      value: 0.18,
      change: "-0.005",
      changePercent: "-2.7%",
      flag: "",
    },
    {
      name: "SRIDGE",
      value: 0.525,
      change: "+0.000",
      changePercent: "+0.0%",
      flag: "",
    },
    {
      name: "ICONIC",
      value: 0.09,
      change: "+0.010",
      changePercent: "+12.5%",
      flag: "",
    },
    {
      name: "SNS",
      value: 0.59,
      change: "-0.005",
      changePercent: "-0.8%",
      flag: "",
    },
    {
      name: "DNEX",
      value: 0.375,
      change: "-0.005",
      changePercent: "-1.3%",
      flag: "",
    },
    {
      name: "KTI",
      value: 0.315,
      change: "+0.000",
      changePercent: "+0.0%",
      flag: "",
    },
    {
      name: "DATAPRP",
      value: 0.15,
      change: "+0.000",
      changePercent: "+0.0%",
      flag: "",
    },
    {
      name: "LHI",
      value: 0.66,
      change: "-0.020",
      changePercent: "-2.9%",
      flag: "",
    },
    {
      name: "SPSETIA",
      value: 1.44,
      change: "-0.010",
      changePercent: "-0.7%",
      flag: "",
    },
    {
      name: "JIANKUN",
      value: 0.05,
      change: "-0.005",
      changePercent: "-9.1%",
      flag: "",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-[2em] m-4">Market Index</h1>
      <div className="grid grid-cols-4 gap-4 p-2">
        {marketData.map((index, idx) => (
          <MarketIndex key={idx} {...index} />
        ))}
      </div>
      <h1 className="text-[2em] m-4">Top Active</h1>
      <div className="grid grid-cols-4 gap-4 p-2">
        {topActive.map((index, idx) => (
          <MarketIndex key={idx} {...index} />
        ))}
      </div>
    </div>
  );
};

export default MarketIndexes;

// Removed inline styles and replaced with Tailwind CSS classes.
