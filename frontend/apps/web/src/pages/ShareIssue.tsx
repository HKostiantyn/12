const ShareIssue = () => {
  const upcomingShareIssueData = [
    {
      exDate: "08 Nov",
      name: "MPIRE-WB",
      link: "/v2/stocks/view/7943WB",
      subject: "Adjustment (warrant)",
      ratio: "1.0000 : 2.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3493684",
    },
    {
      exDate: "08 Nov",
      name: "MPIRE",
      link: "/v2/stocks/view/7943",
      subject: "Share Consolidation",
      ratio: "1.0000 : 2.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3493683",
    },
    {
      exDate: "19 Nov",
      name: "HM-WC",
      link: "/v2/stocks/view/0060WC",
      subject: "Adjustment (warrant)",
      ratio: "1.0000 : 3.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3497779",
    },
    {
      exDate: "19 Nov",
      name: "HM",
      link: "/v2/stocks/view/0060",
      subject: "Share Consolidation",
      ratio: "1.0000 : 3.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink:
        "https://disclosure.bursamalaysia.com/FileAccess/viewHtml?e=3497766",
    },
  ];

  const shareIssueData = [
    {
      exDate: "22 Oct",
      name: "PMBTECH",
      link: "/v2/stocks/view/7172",
      subject: "Rights Issue",
      ratio: "3.0000 : 20.00",
      offerPrice: "1.2700",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/7172/2484045",
    },
    {
      exDate: "14 Oct",
      name: "XL",
      link: "/v2/stocks/view/7121",
      subject: "Bonus Issue (warrant)",
      ratio: "1.0000 : 2.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/7121/2484023",
    },
    {
      exDate: "11 Oct",
      name: "ANCOMNY",
      link: "/v2/stocks/view/4758",
      subject: "Dividend in specie",
      ratio: "4.0000 : 100.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/4758/2483963",
    },
    {
      exDate: "09 Oct",
      name: "ANNJOO",
      link: "/v2/stocks/view/6556",
      subject: "Rights Issue (warrant)",
      ratio: "1.0000 : 4.000",
      offerPrice: "0.8000",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/6556/2483987",
    },
    {
      exDate: "07 Oct",
      name: "MHCARE",
      link: "/v2/stocks/view/03005",
      subject: "Bonus Issue",
      ratio: "1.0000 : 3.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/03005/2483977",
    },
    {
      exDate: "04 Oct",
      name: "TRIVE",
      link: "/v2/stocks/view/0118",
      subject: "Bonus Issue (warrant)",
      ratio: "2.0000 : 5.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/0118/2483957",
    },
    {
      exDate: "03 Oct",
      name: "HAILY",
      link: "/v2/stocks/view/0237",
      subject: "Bonus Issue (warrant)",
      ratio: "1.0000 : 2.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/0237/2483953",
    },
    {
      exDate: "02 Oct",
      name: "VIZIONE",
      link: "/v2/stocks/view/7070",
      subject: "Share Consolidation",
      ratio: "1.0000 : 5.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/7070/2483949",
    },
    {
      exDate: "02 Oct",
      name: "VIZIONE-WE",
      link: "/v2/stocks/view/7070WE",
      subject: "Adjustment (warrant)",
      ratio: "5.0000 : 1.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/7070WE/2483947",
    },
    {
      exDate: "26 Sep",
      name: "XL",
      link: "/v2/stocks/view/7121",
      subject: "Bonus Issue",
      ratio: "2.0000 : 5.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/7121/2483937",
    },
    {
      exDate: "24 Sep",
      name: "CRESNDO",
      link: "/v2/stocks/view/6718",
      subject: "Subdivision",
      ratio: "3.0000 : 1.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/6718/2483929",
    },
    {
      exDate: "24 Sep",
      name: "RCECAP",
      link: "/v2/stocks/view/9296",
      subject: "Bonus Issue",
      ratio: "1.0000 : 1.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/9296/2483921",
    },
    {
      exDate: "23 Sep",
      name: "MQTECH",
      link: "/v2/stocks/view/0070",
      subject: "Share Consolidation",
      ratio: "1.0000 : 10.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/0070/2483927",
    },
    {
      exDate: "17 Sep",
      name: "PTT",
      link: "/v2/stocks/view/7010",
      subject: "Bonus Issue",
      ratio: "1.0000 : 1.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/7010/2483913",
    },
    {
      exDate: "17 Sep",
      name: "QL",
      link: "/v2/stocks/view/7084",
      subject: "Bonus Issue",
      ratio: "1.0000 : 2.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/7084/2483907",
    },
    {
      exDate: "11 Sep",
      name: "SUPREME",
      link: "/v2/stocks/view/03018",
      subject: "Bonus Issue",
      ratio: "2.0000 : 1.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/03018/2483923",
    },
    {
      exDate: "11 Sep",
      name: "HAILY",
      link: "/v2/stocks/view/0237",
      subject: "Bonus Issue",
      ratio: "1.0000 : 1.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/0237/2483813",
    },
    {
      exDate: "09 Sep",
      name: "GREATEC",
      link: "/v2/stocks/view/0208",
      subject: "Bonus Issue",
      ratio: "1.0000 : 1.0000",
      offerPrice: "",
      type: "Ratio",
      announcementLink: "/v2/stocks/announcement/0208/2483727",
    },
  ];

  return (
    <div className="p-8">
      <div className="m-4">
        <h1 className="text-[2.5rem]">Recent Share Issues</h1>
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
                Ratio
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Offer Price
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
            {shareIssueData.map((action, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">
                  {action.exDate}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <a
                    href={action.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {action.name}
                  </a>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {action.subject}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {action.ratio}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {action.offerPrice || "-"}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {action.type}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <a
                    href={action.announcementLink}
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
        <h1 className="text-[2.5rem]">Upcoming Share Issues</h1>

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
                Ratio
              </th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Offer Price
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
            {upcomingShareIssueData.map((action, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">
                  {action.exDate}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <a
                    href={action.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {action.name}
                  </a>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {action.subject}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {action.ratio}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {action.offerPrice || "-"}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {action.type}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <a
                    href={action.announcementLink}
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

export default ShareIssue;
