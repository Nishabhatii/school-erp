
import { Home, Calendar, BookOpen, FileText, Bell } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">School ERP</h2>
      <nav className="space-y-4 text-gray-700">
        <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
          <Home size={20} />
          <span>Home</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
          <Calendar size={20} />
          <span>Timetable</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
          <BookOpen size={20} />
          <span>Homework</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
          <FileText size={20} />
          <span>Results</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
          <Bell size={20} />
          <span>Notices</span>
        </a>
      </nav>
    </aside>
  );
}