import React, { useState } from "react";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import Handle from "rc-slider/lib/Handles/Handle";
import { useColorMode } from "../context/ColorModeContext";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import { Link } from "react-router-dom";

const customHandle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
      zIndex={1000}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const boardOptions = [
  { value: "default", label: "Select Board" },
  { value: "main", label: "Main Market" },
  { value: "ace", label: "Ace Market" },
  { value: "stwarrant", label: "Structured Warrant" },
  { value: "etf", label: "ETF" },
  { value: "bondloan", label: "Bond & Loan" },
  { value: "leap", label: "Leap Market" },
];

const sectorOptions = [
  { value: "default", label: "Select Sector" },
  { value: "bondc", label: "Bond Conventional" },
  { value: "cef", label: "Closed End Fund" },
  { value: "construction", label: "Construction" },
  { value: "cps", label: "Consumer Products & Services" },
  { value: "energe", label: "Energy" },
  { value: "etfb", label: "ETF-Bond" },
  { value: "etfc", label: "ETF Commodity" },
  { value: "etfe", label: "ETF Equity" },
  { value: "fs", label: "Financial Services" },
  { value: "hc", label: "Health Care" },
  { value: "ips", label: "Industrial Products & Services" },
  { value: "plant", label: "Plantation" },
  { value: "property", label: "Property" },
  { value: "reit", label: "Real Estate Investment Trusts" },
  { value: "spac", label: "SPAC" },
  { value: "stw", label: "Structured Warrant" },
  { value: "tech", label: "Technology" },
  { value: "telem", label: "Telecommunications & Media" },
  { value: "trans", label: "Transportation & Logistics" },
  { value: "utilities", label: "Utilities" },
];

const subSectorOptions = [
  { value: "", label: "Select Sub Sector" },
  { value: "5", label: "Agricultural Products" },
  { value: "39", label: "Auto Parts" },
  { value: "7", label: "Automotive" },
  { value: "27", label: "Banking" },
  { value: "91", label: "Bond Fund" },
  { value: "41", label: "Building Materials" },
  { value: "43", label: "Chemicals" },
  { value: "1", label: "Closed End Fund" },
  { value: "93", label: "Commodity Fund" },
  { value: "3", label: "Construction" },
  { value: "9", label: "Consumer Services" },
  { value: "97", label: "Conventional GG" },
  { value: "99", label: "Conventional MGS" },
  { value: "101", label: "Conventional PDS" },
  { value: "67", label: "Digital Services" },
  { value: "45", label: "Diversified Industrials" },
  { value: "85", label: "Electricity" },
  { value: "21", label: "Energy, Infrastructure, Equipment & Services" },
  { value: "95", label: "Equity Fund" },
  { value: "11", label: "Food & Beverages" },
  { value: "87", label: "Gas, Water & Multi-Utilities" },
  { value: "33", label: "Health Care Equipment & Services" },
  { value: "35", label: "Health Care Providers" },
  { value: "13", label: "Household Goods" },
  { value: "47", label: "Industrial Engineering" },
  { value: "49", label: "Industrial Materials, Components & Equipment" },
  { value: "51", label: "Industrial Services" },
  { value: "29", label: "Insurance" },
  { value: "103", label: "Islamic GG" },
  { value: "105", label: "Islamic GII" },
  { value: "107", label: "Islamic PDS" },
  { value: "75", label: "Media" },
  { value: "53", label: "Metals" },
  { value: "23", label: "Oil & Gas Producers" },
  { value: "25", label: "Other Energy Resources" },
  { value: "31", label: "Other Financials" },
  { value: "55", label: "Packaging Materials" },
  { value: "15", label: "Personal Goods" },
  { value: "37", label: "Pharmaceuticals" },
  { value: "59", label: "Plantation" },
  { value: "61", label: "Property" },
  { value: "63", label: "Real Estate Investment Trusts" },
  { value: "17", label: "Retailers" },
  { value: "69", label: "Semiconductors" },
  { value: "71", label: "Software" },
  { value: "65", label: "Special Purpose Acquisition Company" },
  { value: "89", label: "Structured Warrants" },
  { value: "73", label: "Technology Equipment" },
  { value: "77", label: "Telecommunications Equipment" },
  { value: "79", label: "Telecommunications Service Providers" },
  { value: "81", label: "Transportation & Logistics Services" },
  { value: "83", label: "Transportation Equipment" },
  { value: "19", label: "Travel, Leisure & Hospitality" },
  { value: "57", label: "Wood & Wood Products" },
];

const Dropdown = ({ label, options }) => {
  const { colorMode } = useColorMode();
  return (
    <div>
      <label
        className={`block text-sm font-medium ${
          colorMode === "dark" ? "text-white" : "text-black"
        }`}
      >
        {label}
      </label>
      <select
        className={`w-full mt-1 block  rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 h-6 ${
          colorMode === "dark"
            ? "bg-gray-200 text-black"
            : "bg-gray-600 text-white"
        }`}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const filters = [
  {
    label: "Price Change",
    options: [
      { id: "gainers", name: "Gainers" },
      { id: "losers", name: "Losers" },
      { id: "unchange", name: "Unchange" },
    ],
  },
  {
    label: "52-week Price",
    options: [
      { id: "year-high", name: "Year High" },
      { id: "year-low", name: "Year Low" },
    ],
  },
  {
    label: "RSI(14)",
    options: [
      { id: "overbought", name: "Overbought" },
      { id: "oversold", name: "Oversold" },
      { id: "neutral", name: "Neutral" },
    ],
  },
  {
    label: "Stochastic(14)",
    options: [
      { id: "stoch-overbought", name: "Overbought" },
      { id: "stoch-oversold", name: "Oversold" },
      { id: "stoch-neutral", name: "Neutral" },
    ],
  },
  {
    label: "SMA",
    options: [
      { id: "sma5", name: "SMA5" },
      { id: "sma10", name: "SMA10" },
      { id: "sma20", name: "SMA20" },
      { id: "sma50", name: "SMA50" },
      { id: "sma200", name: "SMA200" },
    ],
  },
  {
    label: "OBV",
    options: [
      { id: "uptrend", name: "Uptrend" },
      { id: "downtrend", name: "Downtrend" },
    ],
  },
  {
    label: "Volume Breakout",
    options: [
      { id: "vol-30days", name: "30 days" },
      { id: "vol-1year", name: "1 year" },
    ],
  },
  {
    label: "Price Breakout",
    options: [
      { id: "price-30days", name: "30 days" },
      { id: "price-1year", name: "1 year" },
      { id: "near-30d-high", name: "Near 30d High" },
      { id: "near-1y-high", name: "Near 1y High" },
    ],
  },
];

const StockScreener = () => {
  const { colorMode } = useColorMode();
  return (
    <div className={` ${
      colorMode === "dark"
        ? "bg-gray-600 text-white"
        : "bg-gray-100 text-black"
    }`}>
      <div
        className={`p-8 w-[90%] mx-auto rounded-2xl ${
          colorMode === "dark"
            ? "bg-gray-700 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">Stocks Screener</h2>
        <Link to="/wascreen">
          <p
            className={`mb-4 text-sm ${
              colorMode === "dark"
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Check out Warrant Screener
          </p>
        </Link>

        <form className="space-y-8">
          {/* Section 1: General Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <Dropdown label="Board" options={boardOptions} />
            <Dropdown label="Sector" options={sectorOptions} />
            <Dropdown label="Sub Sector" options={subSectorOptions} />
            {/* Repeat for each Min/Max range input */}
            {[
              "PE",
              "ROE",
              "EPS",
              "NTA",
              "DY",
              "PTBV",
              "PSR",
              "Price",
              "Vol.",
              "Market Cap (M)",
            ].map((item) => (
              <div key={item} className="col-span-1 md:col-span-2">
                <label
                  className={`block text-sm font-medium ${
                    colorMode === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {item}
                </label>

                <div className="flex space-x-2 mt-1">
                  <input
                    type="number"
                    placeholder="min"
                    className="w-1/2 border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Slider
                    min={0}
                    max={100}
                    defaultValue={[0, 1000]}
                    step={1}
                    range={true}
                    className="m-auto"
                    // handleRender={customHandle}
                    styles={{
                      track: { backgroundColor: "black" },
                      handle: {
                        borderColor: "black",
                        borderRadius: "1px",
                        width: "2px",
                      },
                    }}
                  />

                  <input
                    type="number"
                    placeholder="max"
                    className="w-1/2 border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <label
              className={`block text-sm font-medium ${
                colorMode === "dark"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              By Stocks
            </label>
            <input
              type="text"
              placeholder="Stock Symbol"
              className="w-full mt-1 block border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8"
            />
          </div>

          <div className="flex gap-2">
            <div>
              <label
                className={`inline-block text-sm font-medium mr-4 ${
                  colorMode === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Continuous Profitable
              </label>
              <select className="w-fit mt-1 border-gray-300 rounded-sm shadow-sm h-8">
                <option value="default">-</option>
                <option value="years">Years</option>
                <option value="quarters">Quarters</option>
              </select>
            </div>

            <div>
              <label
                className={`inline-block text-sm font-medium mr-4 ${
                  colorMode === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Years
              </label>
              <select className="w-fit mt-1 border-gray-300 rounded-sm shadow-sm h-8">
                <option value="default">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="strictMode" className="mr-2" />
              <label
                htmlFor="strictMode"
                className={`inline-block text-sm font-medium mr-4 ${
                  colorMode === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Strict Mode
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <input type="checkbox" id="shariah" className="mr-2" />
              <label
                htmlFor="shariah"
                className={`inline-block text-sm font-medium mr-4 ${
                  colorMode === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Shariah Compliant
              </label>
            </div>

            <div className="flex space-x-2 items-center">
              <label className="w-1/6">Net Profit</label>
              <div className="flex w-1/6 gap-1 items-center">
                <button
                  type="button"
                  className="bg-transparent border-2 rounded-sm p-1 border-green-200 h-8"
                >
                  QoQ
                </button>
                <select className="w-fit border-gray-300 rounded-sm shadow-sm h-8">
                  <option value="any">Any</option>
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
              <div className="flex w-1/6 gap-1">
                <button
                  type="button"
                  className="bg-transparent border-2 rounded-sm p-1 border-green-200 h-8"
                >
                  YoY
                </button>
                <select className="w-fit border-gray-300 rounded-sm shadow-sm h-8">
                  <option value="any">Any</option>
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
              <div className="flex w-1/6 gap-1">
                <button
                  type="button"
                  className="bg-transparent border-2 rounded-sm p-1 border-green-200 h-8"
                >
                  ConQ
                </button>
                <select className="w-fit border-gray-300 rounded-sm shadow-sm h-8">
                  <option value="any">Any</option>
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
              <div className="flex w-1/6 gap-1">
                <button
                  type="button"
                  className="bg-transparent border-2 rounded-sm p-1 border-green-200 h-8"
                >
                  TopQ
                </button>
                <select className="w-fit border-gray-300 rounded-sm shadow-sm h-8">
                  <option value="any">Any</option>
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-2 items-center">
              <label className="w-1/6">Revenue</label>
              <div className="flex w-1/6 gap-1 items-center">
                <button
                  type="button"
                  className="bg-transparent border-2 rounded-sm p-1 border-green-200 h-8"
                >
                  QoQ
                </button>
                <select className="w-fit border-gray-300 rounded-sm shadow-sm h-8">
                  <option value="any">Any</option>
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
              <div className="flex w-1/6 gap-1">
                <button
                  type="button"
                  className="bg-transparent border-2 rounded-sm p-1 border-green-200 h-8"
                >
                  YoY
                </button>
                <select className="w-fit border-gray-300 rounded-sm shadow-sm h-8">
                  <option value="any">Any</option>
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
              <div className="flex w-1/6 gap-1">
                <button
                  type="button"
                  className="bg-transparent border-2 rounded-sm p-1 border-green-200 h-8"
                >
                  ConQ
                </button>
                <select className="w-fit border-gray-300 rounded-sm shadow-sm h-8">
                  <option value="any">Any</option>
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
              <div className="flex w-1/6 gap-1">
                <button
                  type="button"
                  className="bg-transparent border-2 rounded-sm p-1 border-green-200 h-8"
                >
                  TopQ
                </button>
                <select className="w-fit border-gray-300 rounded-sm shadow-sm h-8">
                  <option value="any">Any</option>
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
            </div>

            {filters.map((filter) => (
              <fieldset
                className="flex space-x-2 items-center mb-4"
                key={filter.label}
              >
                <legend className="w-1/6 font-bold">{filter.label}</legend>
                {filter.options.map((option) => (
                  <div className="flex items-center w-1/6" key={option.id}>
                    <input
                      type="checkbox"
                      id={option.id}
                      className="mr-2"
                      aria-label={option.name}
                    />
                    <label
                      htmlFor={option.id}
                      className={`inline-block text-sm font-medium mr-4 ${
                        colorMode === "dark"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {option.name}
                    </label>
                  </div>
                ))}
              </fieldset>
            ))}

            <fieldset className="flex space-x-2 items-center mb-4">
              <legend className="w-1/6 font-bold">Relative Volume</legend>
              <input
                type="number"
                placeholder="min"
                className="w-1/6 border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 h-8"
              />
              <input
                type="number"
                placeholder="max"
                className="w-1/6 border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 h-8"
              />
            </fieldset>

            <fieldset className="flex space-x-2 items-center">
              <legend className="w-1/6 font-bold">Cash and Debt</legend>
              <label className="p-2 border-gray-300 bg-gray-200 text-yellow-900 mr-2">
                Net Cash
              </label>
              <input type="checkbox" id="net-cash" className="mr-2" />
            </fieldset>
            <div className="flex items-center space-x-2">
              <label className="text-gray-700 text-sm font-medium w-1/6">
                Debt to Cash
              </label>

              {/* Input Group for Min and Max */}
              <div className="flex space-x-2">
                {/* Min Label and Input */}
                <div className="flex items-center w-1/2">
                  <span className="bg-gray-200 px-2 py-1 text-sm rounded-l-md h-8">
                    Min
                  </span>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    name="debt_to_cash_min"
                    data-name="Debt to Cash ≥"
                    data-value="1"
                    data-gtm-form-interact-field-id="13"
                    className="form-control w-full border border-gray-300 rounded-r-md py-1 px-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Max Label and Input */}
                <div className="flex items-center w-1/2">
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    name="debt_to_cash_max"
                    data-name="Debt to Cash ≤"
                    data-value="1"
                    data-gtm-form-interact-field-id="14"
                    className="form-control w-full border border-gray-300 rounded-l-md py-1 px-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="bg-gray-200 px-2 py-1 text-sm rounded-r-md h-8">
                    Max
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-gray-700 text-sm font-medium w-1/6">
                Debt to Equity
              </label>

              {/* Input Group for Min and Max */}
              <div className="flex space-x-2">
                {/* Min Label and Input */}
                <div className="flex items-center w-1/2">
                  <span className="bg-gray-200 px-2 py-1 text-sm rounded-l-md h-8">
                    Min
                  </span>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    name="debt_to_cash_min"
                    data-name="Debt to Cash ≥"
                    data-value="1"
                    data-gtm-form-interact-field-id="13"
                    className="form-control w-full border border-gray-300 rounded-r-md py-1 px-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Max Label and Input */}
                <div className="flex items-center w-1/2">
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    name="debt_to_cash_max"
                    data-name="Debt to Cash ≤"
                    data-value="1"
                    data-gtm-form-interact-field-id="14"
                    className="form-control w-full border border-gray-300 rounded-l-md py-1 px-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="bg-gray-200 px-2 py-1 text-sm rounded-r-md h-8">
                    Max
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <label className="w-1/6">Show/Hide Columns</label>
              <label className="w-4/5">
                Code - Category - Price - Change - Change % - 52w Price - Volume
                - EPS - DPS - NTA - PE - DY - ROE - PTBV - Cap - Indicators
              </label>
            </div>
          </div>

          {/* Section 4: Action Buttons */}
          <div className="flex justify-between space-x-4">
            <button
              type="button"
              className="bg-yellow-900 text-white py-2 px-4 rounded hover:bg-yellow-400"
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 mt-5 rounded cursor-pointer w-full"
            >
              Screen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StockScreener;
