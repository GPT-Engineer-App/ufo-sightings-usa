const Reports = () => {
  const reports = [
    { title: "Nevada Sighting Report", link: "#", description: "Detailed analysis of the bright light sighting over Nevada." },
    { title: "Kansas Disc Report", link: "#", description: "In-depth report on the disc-shaped object seen in Kansas." },
    { title: "Texas Triangle Report", link: "#", description: "Comprehensive study of the triangle pattern lights in Texas." },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Detailed Reports</h1>
      <ul className="space-y-2">
        {reports.map((report, index) => (
          <li key={index} className="border-b pb-2">
            <a href={report.link} className="text-blue-500 hover:underline font-semibold">{report.title}</a>
            <p>{report.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;