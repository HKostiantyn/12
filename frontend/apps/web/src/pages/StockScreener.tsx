import React,{ useState } from "react";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import Handle from "rc-slider/lib/Handles/Handle";

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

const StockScreener = () => {
  return (
    <div className="p-8 bg-blue-100 rounded-lg">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">Stocks Screener</h2>
      <Link to="/wascreen">
        <p className="mb-4 text-sm text-gray-700">Check out Warrant Screener</p>
      </Link>

      <form className="space-y-8">
        {/* Section 1: General Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Board
            </label>
            <select className="w-full mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8">
              <option value="default">Select Board</option>
              <option value="main">Main Market</option>
              <option value="ace">Ace Market</option>
              <option value="stwarrant">Structured Warrant</option>
              <option value="etf">ETF</option>
              <option value="bondloan">Bond & Loan</option>
              <option value="leap">Leap Market</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sector
            </label>
            <select className="w-full mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8">
              <option value="defualt">Select Sector</option>
              <option value="bondc">Bond Conventional</option>
              <option value="cef">Closed End Fund</option>
              <option value="construction">Construction</option>
              <option value="cps">Consumer Products & Services</option>
              <option value="energe">Engergy</option>
              <option value="etfb">ETF-Bond</option>
              <option value="etfc">ETF Commodity</option>
              <option value="etfe">ETF Equity</option>
              <option value="fs">Financial Services</option>
              <option value="hc">Health Care</option>
              <option value="ips">Industrial Products & Services</option>
              <option value="plant">Plantation</option>
              <option value="property">Property</option>
              <option value="reit">Real Estate Investment Trusts</option>
              <option value="spac">SPAC</option>
              <option value="stw">Structured Warrant</option>
              <option value="tech">Technology</option>
              <option value="telem">Telecommunications & Media</option>
              <option value="trans">Transportation & Logistics</option>
              <option value="utilities">Utilities</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sub Sector
            </label>
            <select
              name="subsector"
              className="w-full mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8"
            >
              <option></option>
              <option value="5">Agricultural Products</option>
              <option value="39">Auto Parts</option>
              <option value="7">Automotive</option>
              <option value="27">Banking</option>
              <option value="91">Bond Fund</option>
              <option value="41">Building Materials</option>
              <option value="43">Chemicals</option>
              <option value="1">Closed End Fund</option>
              <option value="93">Commodity Fund</option>
              <option value="3">Construction</option>
              <option value="9">Consumer Services</option>
              <option value="97">Conventional GG</option>
              <option value="99">Conventional MGS</option>
              <option value="101">Conventional PDS</option>
              <option value="67">Digital Services</option>
              <option value="45">Diversified Industrials</option>
              <option value="85">Electricity</option>
              <option value="21">
                Energy, Infrastructure, Equipment &amp; Services
              </option>
              <option value="95">Equity Fund</option>
              <option value="11">Food &amp; Beverages</option>
              <option value="87">Gas, Water &amp; Multi-Utilities</option>
              <option value="33">Health Care Equipment &amp; Services</option>
              <option value="35">Health Care Providers</option>
              <option value="13">Houshold Goods</option>
              <option value="47">Industrial Engineering</option>
              <option value="49">
                Industrial Materials, Components &amp; Equipment
              </option>
              <option value="51">Industrial Services</option>
              <option value="29">Insurance</option>
              <option value="103">Islamic GG</option>
              <option value="105">Islamic GII</option>
              <option value="107">Islamic PDS</option>
              <option value="75">Media</option>
              <option value="53">Metals</option>
              <option value="23">Oil &amp; Gas Producers</option>
              <option value="25">Other Energy Resources</option>
              <option value="31">Other Financials</option>
              <option value="55">Packaging Materials</option>
              <option value="15">Personal Goods</option>
              <option value="37">Pharmaceuticals</option>
              <option value="59">Plantation</option>
              <option value="61">Property</option>
              <option value="63">Real Estate Investment Trusts</option>
              <option value="17">Retailers</option>
              <option value="69">Semiconductors</option>
              <option value="71">Software</option>
              <option value="65">Special Purpose Acquisition Company</option>
              <option value="89">Structured Warrants</option>
              <option value="73">Technology Equipment</option>
              <option value="77">Telecommunications Equipment</option>
              <option value="79">Telecommunications Service Providers</option>
              <option value="81">
                Transportation &amp; Logistics Services
              </option>
              <option value="83">Transportation Equipment</option>
              <option value="19">Travel, Leisure &amp; Hospitality</option>
              <option value="57">Wood &amp; Wood Products</option>
            </select>
          </div>

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
              <label className="block text-sm font-medium text-gray-700">
                {item}
              </label>

              <div className="flex space-x-2 mt-1">
                <input
                  type="number"
                  placeholder="min"
                  className="w-1/2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                  className="w-1/2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <label className="block text-sm font-medium text-gray-700">
            By Stocks
          </label>
          <input
            type="text"
            placeholder="Stock Symbol"
            className="w-full mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8"
          />
        </div>

        <div className="flex gap-4">
          <div>
            <label className="inline-block text-sm font-medium text-gray-700 mr-4">
              Continuous Profitable
            </label>
            <select className="w-fit mt-1 border-gray-300 rounded-md shadow-sm h-8">
              <option value="default">-</option>
              <option value="years">Years</option>
              <option value="quarters">Quarters</option>
            </select>
          </div>

          <div>
            <label className="inline-block text-sm font-medium text-gray-700 mr-4">
              Years
            </label>
            <select className="w-fit mt-1 border-gray-300 rounded-md shadow-sm h-8">
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
            <label htmlFor="strictMode" className="text-sm text-gray-700">
              Strict Mode
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <input type="checkbox" id="shariah" className="mr-2" />
            <label htmlFor="shariah" className="text-sm text-gray-700">
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
              <select className="w-fit border-gray-300 rounded-md shadow-sm h-8">
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
              <select className="w-fit border-gray-300 rounded-md shadow-sm h-8">
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
              <select className="w-fit border-gray-300 rounded-md shadow-sm h-8">
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
              <select className="w-fit border-gray-300 rounded-md shadow-sm h-8">
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
              <select className="w-fit border-gray-300 rounded-md shadow-sm h-8">
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
              <select className="w-fit border-gray-300 rounded-md shadow-sm h-8">
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
              <select className="w-fit border-gray-300 rounded-md shadow-sm h-8">
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
              <select className="w-fit border-gray-300 rounded-md shadow-sm h-8">
                <option value="any">Any</option>
                <option value="on">On</option>
                <option value="off">Off</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-2 items-center">
            <label className="w-1/6">Price Change</label>
            <div className="flex w-1/6 items-center">
              <input type="checkbox" id="gainers" className="mr-2" />
              <label htmlFor="gainers" className="text-sm text-gray-700">
                Gainers
              </label>
            </div>
            <div className="flex w-1/6 items-center">
              <input type="checkbox" id="losers" className="mr-2" />
              <label htmlFor="losers" className="text-sm text-gray-700">
                Losers
              </label>
            </div>
            <div className="flex w-1/6 items-center">
              <input type="checkbox" id="unchange" className="mr-2" />
              <label htmlFor="unchange" className="text-sm text-gray-700">
                Unchange
              </label>
            </div>
          </div>

          <div className="flex space-x-2 items-center">
            <label className="w-1/6">52-week Price</label>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="gainers" className="mr-2" />
              <label htmlFor="gainers" className="text-sm text-gray-700">
                Year High
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="losers" className="mr-2" />
              <label htmlFor="losers" className="text-sm text-gray-700">
                Year Low
              </label>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <label className="w-1/6">RSI(14)</label>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="gainers" className="mr-2" />
              <label htmlFor="gainers" className="text-sm text-gray-700">
                Overbought
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="losers" className="mr-2" />
              <label htmlFor="losers" className="text-sm text-gray-700">
                Oversold
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="unchange" className="mr-2" />
              <label htmlFor="unchange" className="text-sm text-gray-700">
                Neutral
              </label>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <label className="w-1/6">Stochastic(14)</label>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="gainers" className="mr-2" />
              <label htmlFor="gainers" className="text-sm text-gray-700">
                Overbought
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="losers" className="mr-2" />
              <label htmlFor="losers" className="text-sm text-gray-700">
                Oversold
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="unchange" className="mr-2" />
              <label htmlFor="unchange" className="text-sm text-gray-700">
                Neutral
              </label>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <label className="w-1/6">SMA</label>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="gainers" className="mr-2" />
              <label htmlFor="gainers" className="text-sm text-gray-700">
                SMA5
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="losers" className="mr-2" />
              <label htmlFor="losers" className="text-sm text-gray-700">
                SMA10
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="unchange" className="mr-2" />
              <label htmlFor="unchange" className="text-sm text-gray-700">
                SMA20
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="unchange" className="mr-2" />
              <label htmlFor="unchange" className="text-sm text-gray-700">
                SMA50
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="unchange" className="mr-2" />
              <label htmlFor="unchange" className="text-sm text-gray-700">
                SMA200
              </label>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <label className="w-1/6">OBV</label>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="gainers" className="mr-2" />
              <label htmlFor="gainers" className="text-sm text-gray-700">
                Uptrend
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="losers" className="mr-2" />
              <label htmlFor="losers" className="text-sm text-gray-700">
                Downtrend
              </label>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <label className="w-1/6">Volume Breakout</label>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="gainers" className="mr-2" />
              <label htmlFor="gainers" className="text-sm text-gray-700">
                30 days
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="losers" className="mr-2" />
              <label htmlFor="losers" className="text-sm text-gray-700">
                1 year
              </label>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <label className="w-1/6">Relative Volume</label>
            <input
              type="number"
              placeholder="min"
              className="w-1/6 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-8"
            />

            <input
              type="number"
              placeholder="max"
              className="w-1/6 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-8"
            />
          </div>
          <div className="flex space-x-2 items-center">
            <label className="w-1/6">Price Breakout</label>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="gainers" className="mr-2" />
              <label htmlFor="gainers" className="text-sm text-gray-700">
                30 days
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="losers" className="mr-2" />
              <label htmlFor="losers" className="text-sm text-gray-700">
                1 year
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="losers" className="mr-2" />
              <label htmlFor="losers" className="text-sm text-gray-700">
                near 30d high
              </label>
            </div>
            <div className="flex items-center w-1/6">
              <input type="checkbox" id="losers" className="mr-2" />
              <label htmlFor="losers" className="text-sm text-gray-700">
                near 1y high
              </label>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <label className="w-1/6">Cash and Debt</label>
            <label className="p-2 border-gray-300 bg-gray-200 text-yellow-900">
              Net Cash
            </label>
            <input type="checkbox" id="losers" className="mr-2" />
          </div>
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
              Code - Category - Price - Change - Change % - 52w Price - Volume -
              EPS - DPS - NTA - PE - DY - ROE - PTBV - Cap - Indicators
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
  );
};

export default StockScreener;
