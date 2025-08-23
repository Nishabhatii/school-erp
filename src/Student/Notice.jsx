

export default function NoticeCard() {
  const notices = [
    "Holiday on Friday due to maintenance",
    "PTM scheduled for next Monday",
    "Mid-term exams start from 1st August"
  ];

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer p-4">
      <h4 className="font-semibold text-lg mb-4 text-center">📢 Notices</h4>
      
      <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
        {notices.map((notice, index) => (
          <li key={index}>{notice}</li>
        ))}
      </ul>
    </div>
  );
}