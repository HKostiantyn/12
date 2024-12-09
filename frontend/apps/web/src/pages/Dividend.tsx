const Dividend = () => {
  const dividendData = [
    {
      exDate: "07 Nov",
      name: "SNS",
      link: "/v2/stocks/view/0259",
      subject: "Second Interim Dividend",
      amount: "0.002500",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/0259/2483973",
    },
    {
      exDate: "06 Nov",
      name: "PWF",
      link: "/v2/stocks/view/7134",
      subject: "Fourth Interim Dividend",
      amount: "0.015000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/7134/2484075",
    },
    {
      exDate: "05 Nov",
      name: "ICAP",
      link: "/v2/stocks/view/5108",
      subject: "Interim Dividend (with Dividend Re-Investment Plan)",
      amount: "0.104100",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/5108/2484083",
    },
    {
      exDate: "05 Nov",
      name: "KIPREIT",
      link: "/v2/stocks/view/5280",
      subject: "Income Distribution",
      amount: "0.015200",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/5280/2484071",
    },
    {
      exDate: "05 Nov",
      name: "ULICORP",
      link: "/v2/stocks/view/7133",
      subject: "Fourth Interim Dividend",
      amount: "0.020000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/7133/2484069",
    },
    {
      exDate: "01 Nov",
      name: "CHB",
      link: "/v2/stocks/view/0291",
      subject: "Interim Dividend",
      amount: "0.013000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/0291/2484065",
    },
    {
      exDate: "30 Oct",
      name: "SUCCESS",
      link: "/v2/stocks/view/7207",
      subject: "Interim Dividend",
      amount: "0.016000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/7207/2484057",
    },
    {
      exDate: "30 Oct",
      name: "HLFG",
      link: "/v2/stocks/view/1082",
      subject: "Final Dividend",
      amount: "0.360000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/1082/2484013",
    },
    {
      exDate: "30 Oct",
      name: "HLCAP",
      link: "/v2/stocks/view/5274",
      subject: "Final Dividend",
      amount: "0.220000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/5274/2484011",
    },
    {
      exDate: "30 Oct",
      name: "SDG",
      link: "/v2/stocks/view/5285",
      subject: "Interim Dividend",
      amount: "0.046500",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/5285/2483653",
    },
    {
      exDate: "29 Oct",
      name: "ORIENT",
      link: "/v2/stocks/view/4006",
      subject: "Interim Dividend",
      amount: "0.200000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/4006/2484017",
    },
    {
      exDate: "29 Oct",
      name: "HLBANK",
      link: "/v2/stocks/view/5819",
      subject: "Final Dividend",
      amount: "0.430000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/5819/2484001",
    },
    {
      exDate: "29 Oct",
      name: "VELESTO",
      link: "/v2/stocks/view/5243",
      subject: "Interim Dividend",
      amount: "0.002500",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/5243/2483867",
    },
    {
      exDate: "29 Oct",
      name: "MCEMENT",
      link: "/v2/stocks/view/3794",
      subject: "Second Interim Dividend",
      amount: "0.060000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/3794/2483667",
    },
    {
      exDate: "29 Oct",
      name: "PTRANS",
      link: "/v2/stocks/view/0186",
      subject: "Third Interim Dividend",
      amount: "0.005000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/0186/2483615",
    },
    {
      exDate: "28 Oct",
      name: "DIN045801028",
      link: "/v2/stocks/view/0400GB",
      subject: "Profit Payment",
      amount: "4.580000",
      type: "Percentage",
      announcementLink: "/v2/stocks/announcement/0400GB/2484053",
    },
    {
      exDate: "24 Oct",
      name: "GLOTEC",
      link: "/v2/stocks/view/5220",
      subject: "Final Dividend",
      amount: "0.007000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/5220/2484041",
    },
    {
      exDate: "24 Oct",
      name: "ATLAN",
      link: "/v2/stocks/view/7048",
      subject: "Second Interim Dividend",
      amount: "0.037500",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/7048/2484031",
    },
    {
      exDate: "24 Oct",
      name: "CHINWEL",
      link: "/v2/stocks/view/5007",
      subject: "Interim Dividend",
      amount: "0.017600",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/5007/2483899",
    },
    {
      exDate: "24 Oct",
      name: "KSENG",
      link: "/v2/stocks/view/3476",
      subject: "Interim Dividend",
      amount: "0.050000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/3476/2483795",
    },
    {
      exDate: "24 Oct",
      name: "UNIQUE",
      link: "/v2/stocks/view/0257",
      subject: "Interim Dividend",
      amount: "0.008000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/0257/2483633",
    },
    {
      exDate: "23 Oct",
      name: "APOLLO",
      link: "/v2/stocks/view/6432",
      subject: "Final Dividend",
      amount: "0.050000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/6432/2483775",
    },
    {
      exDate: "22 Oct",
      name: "RHONEMA",
      link: "/v2/stocks/view/5278",
      subject: "Interim Dividend",
      amount: "0.005000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/5278/2484029",
    },
    {
      exDate: "22 Oct",
      name: "CRESNDO",
      link: "/v2/stocks/view/6718",
      subject: "Interim Dividend",
      amount: "0.010000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/6718/2484007",
    },
    {
      exDate: "22 Oct",
      name: "CRESNDO",
      link: "/v2/stocks/view/6718",
      subject: "Special Dividend",
      amount: "0.050000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/6718/2484005",
    },
    {
      exDate: "22 Oct",
      name: "KMLOONG",
      link: "/v2/stocks/view/5027",
      subject: "Interim Dividend",
      amount: "0.050000",
      type: "Currency",
      announcementLink: "/v2/stocks/announcement/5027/2484003",
    },
    // Add more rows here as needed
  ];

  const upcomingDividendData = [
    {
      exDate: "11 Nov",
      name: "PLENITU",
      link: "/v2/stocks/view/5075",
      subject: "Final Dividend",
      amount: "0.035000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3485430",
    },
    {
      exDate: "11 Nov",
      name: "IGBREIT",
      link: "/v2/stocks/view/5227",
      subject: "Income Distribution",
      amount: "0.026800",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3494756",
    },
    {
      exDate: "11 Nov",
      name: "IGBCR",
      link: "/v2/stocks/view/5299",
      subject: "Income Distribution",
      amount: "0.009400",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3494786",
    },
    {
      exDate: "11 Nov",
      name: "AXREIT",
      link: "/v2/stocks/view/5106",
      subject: "Income Distribution",
      amount: "0.023500",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3495000",
    },
    {
      exDate: "12 Nov",
      name: "YTLPOWR",
      link: "/v2/stocks/view/6742",
      subject: "Second Interim Dividend",
      amount: "0.040000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3475376",
    },
    {
      exDate: "12 Nov",
      name: "YTL",
      link: "/v2/stocks/view/4677",
      subject: "Interim Dividend",
      amount: "0.045000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3475381",
    },
    {
      exDate: "12 Nov",
      name: "OKA",
      link: "/v2/stocks/view/7140",
      subject: "Final Dividend",
      amount: "0.012000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3477313",
    },
    {
      exDate: "12 Nov",
      name: "DXN",
      link: "/v2/stocks/view/5318",
      subject: "Second Interim Dividend",
      amount: "0.008000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3494126",
    },
    {
      exDate: "12 Nov",
      name: "AXREIT",
      link: "/v2/stocks/view/5106",
      subject: "Income Distribution",
      amount: "0.011000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3495499",
    },
    {
      exDate: "13 Nov",
      name: "ATRIUM",
      link: "/v2/stocks/view/5130",
      subject: "Income Distribution",
      amount: "0.021000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3495461",
    },
    {
      exDate: "14 Nov",
      name: "KEINHIN",
      link: "/v2/stocks/view/7199",
      subject: "First and Final Dividend",
      amount: "0.025000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3478781",
    },
    {
      exDate: "14 Nov",
      name: "PGF",
      link: "/v2/stocks/view/8117",
      subject: "First Interim Dividend",
      amount: "0.020000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3494694",
    },
    {
      exDate: "14 Nov",
      name: "INFOTEC",
      link: "/v2/stocks/view/0253",
      subject: "Interim Dividend",
      amount: "0.007900",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3495706",
    },
    {
      exDate: "14 Nov",
      name: "LBS-PA",
      link: "/v2/stocks/view/5789PA",
      subject: "Others",
      amount: "0.066000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3496739",
    },
    {
      exDate: "15 Nov",
      name: "BAT",
      link: "/v2/stocks/view/4162",
      subject: "Interim Dividend",
      amount: "0.220000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3496113",
    },
    {
      exDate: "18 Nov",
      name: "MALPAC",
      link: "/v2/stocks/view/4936",
      subject: "Interim Dividend",
      amount: "0.100000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3496999",
    },
    {
      exDate: "19 Nov",
      name: "BESHOM",
      link: "/v2/stocks/view/7668",
      subject: "Final Dividend",
      amount: "0.015000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3486428",
    },
    {
      exDate: "19 Nov",
      name: "ZHULIAN",
      link: "/v2/stocks/view/5131",
      subject: "Third Interim Dividend",
      amount: "0.020000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3493818",
    },
    {
      exDate: "20 Nov",
      name: "NESTLE",
      link: "/v2/stocks/view/4707",
      subject: "Interim Dividend",
      amount: "0.350000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3494124",
    },
    {
      exDate: "20 Nov",
      name: "TECHBND",
      link: "/v2/stocks/view/5289",
      subject: "First Interim Dividend",
      amount: "0.010000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3497770",
    },
    {
      exDate: "20 Nov",
      name: "YINSON",
      link: "/v2/stocks/view/7293",
      subject: "Second Interim Dividend (with Dividend Re-Investment Plan)",
      amount: "0.010000",
      type: "Currency",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3498145",
    },
    // More rows can be added here.
  ];

  return (
    <div className="p-8">
      <div className="m-4">
        <h1 className="text-[2.5rem]">Recent Dividends</h1>
        <hr className="border-1 mt-2 mb-2" />

        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Ex Date
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Name
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Subject
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Amount
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Type
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {dividendData.map((dividend, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">
                  {dividend.exDate}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <a
                    href={dividend.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {dividend.name}
                  </a>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {dividend.subject}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {dividend.amount}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {dividend.type}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <a
                    href={dividend.announcementLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="border-1 mt-2 mb-2" />

      <div className="m-4">
        <h1 className="text-[2.5rem]">Upcoming Dividends</h1>

        <hr className="border-1 mt-2 mb-2" />
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Ex Date
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Name
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Subject
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Amount
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Type
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Announcement
              </th>
            </tr>
          </thead>
          <tbody>
            {upcomingDividendData.map((dividend, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">
                  {dividend.exDate}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <a
                    href={dividend.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {dividend.name}
                  </a>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {dividend.subject}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {dividend.amount}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {dividend.type}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <a
                    href={dividend.announcementLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dividend;
