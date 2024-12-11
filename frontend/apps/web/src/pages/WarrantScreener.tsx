import React from 'react';

const WarrantScreener = () => {
  return (
    <div className="p-8 bg-blue-100 rounded-lg">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">Warrant Screener</h2>

      <form className="space-y-2 max-w-3xl flex flex-col p-4">
        <div className="flex space-x-2">
          <label className="w-1/3">Select Stock</label>
          <select
            className="w-full mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8"
            aria-placeholder="Select an Option"
          >
            {/* Adding commonly known HKEX stocks */}
            <option value="0001.HK">CK Hutchison Holdings</option>
            <option value="0002.HK">CLP Holdings</option>
            <option value="0003.HK">Hong Kong & China Gas</option>
            <option value="0005.HK">HSBC Holdings</option>
            <option value="0006.HK">Power Assets Holdings</option>
            <option value="0011.HK">Hang Seng Bank</option>
            <option value="0012.HK">Henderson Land Development</option>
            <option value="0016.HK">Sun Hung Kai Properties</option>
            <option value="0066.HK">MTR Corporation</option>
            <option value="0388.HK">Hong Kong Exchanges and Clearing</option>
            <option value="0700.HK">Tencent Holdings</option>
            <option value="1299.HK">AIA Group</option>
            <option value="2318.HK">Ping An Insurance</option>
            <option value="2388.HK">BOC Hong Kong</option>
            <option value="941.HK">China Mobile</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <label className="w-1/3">Category</label>
          <select
            className="w-full mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8"
            aria-placeholder="Category"
          >
            <option value="any">Any</option>
            <option value="cwarrant">Company Warrants</option>
            <option value="swarrant">Structured Warrants</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <label className="w-1/3">Type</label>
          <select className="w-full mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8">
            <option value="any">Any</option>
            <option value="call">CALL</option>
            <option value="put">PUT</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <label className="w-1/3">Maturity</label>
          <div className="w-full flex space-x-2">
            <input
              type="text"
              placeholder="min days"
              className="h-8 w-1/2 p-2 rounded-sm border-2"
            />
            <input
              type="text"
              placeholder="max days"
              className="h-8 w-1/2 p-2 rounded-sm border-2"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <label className="w-1/3">Price</label>
          <div className="w-full flex space-x-2">
            <input
              type="text"
              placeholder="min price"
              className="h-8 w-1/2 p-2 rounded-sm border-2"
            />
            <input
              type="text"
              placeholder="max price"
              className="h-8 w-1/2 p-2 rounded-sm border-2"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <label className="w-1/3">Gearing</label>
          <div className="w-full flex space-x-2">
            <input
              type="text"
              placeholder="min gearing"
              className="h-8 w-1/2 p-2 rounded-sm border-2"
            />
            <input
              type="text"
              placeholder="max gearing"
              className="h-8 w-1/2 p-2 rounded-sm border-2"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <label className="w-1/3">Premium</label>
          <div className="w-full flex space-x-2">
            <input
              type="text"
              placeholder="min premium"
              className="h-8 w-1/2 p-2 rounded-sm border-2"
            />
            <input
              type="text"
              placeholder="max premium"
              className="h-8 w-1/2 p-2 rounded-sm border-2"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <label className="w-1/3">Premium %</label>
          <div className="w-full flex space-x-2">
            <input
              type="text"
              placeholder="min premium %"
              className="h-8 w-1/2 p-2 rounded-sm border-2"
            />
            <input
              type="text"
              placeholder="max premium %"
              className="h-8 w-1/2 p-2 rounded-sm border-2"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <input type="checkbox" />
          <label>Shariah Compliant</label>
        </div>
        <div className="flex space-x-2">
          <label className="w-1/3">Relative Volume</label>
          <div className="w-full flex space-x-2">
            <input
              type="text"
              placeholder="min"
              className="h-8 w-1/2 p-2 rounded-sm border-2"
            />
            <input
              type="text"
              placeholder="max"
              className="h-8 w-1/2 p-2 rounded-sm border-2"
            />
          </div>
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white my-[1rem] px-4 py-2 rounded cursor-pointer w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WarrantScreener;
