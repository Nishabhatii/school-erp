import "./topbar.css";


export default function Topbar({ name = "Student", onLogout }) {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h3 className="text-xl font-semibold text-gray-700">👋 Welcome, {name}</h3>
      <button
        onClick={onLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </header>
  );
}