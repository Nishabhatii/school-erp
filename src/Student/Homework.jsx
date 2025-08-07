import React, { useState } from "react";

export default function HomeworkCard() {
  const [show, setShow] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow p-4 cursor-pointer transition-all duration-300 hover:shadow-lg"
      onClick={() => setShow(!show)}
    >
      <h4 className="font-semibold text-lg mb-2">📝 Homework</h4>
      {show && (
        <ul className="text-sm list-disc ml-4">
          <li>Science: Chap 4 Q1–10</li>
          <li>English: Essay on “My Pet”</li>
        </ul>
      )}
    </div>
  );
}