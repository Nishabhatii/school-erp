// import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import StudentDashboard from "./Components/StudentDashboard";
// import TeacherDashboard from "./Pages/TeacherDashboard"; // future use

function App() {
  return (
    <Router>
      <Routes>
        < Route path="/" element={
          <LoginPage /> } />
        <Route path="/Student-Dashboard" element={<StudentDashboard />} />
        <Route path="/school-erp" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
// import Header from "./Components/Header";
// import NoticeBar from "./Components/NoticeBar";
// import LoginForm from "./Components/LoginForm";
// import Footer from "./Components/Footer";
// import "./Components/Login.css";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <NoticeBar />
//       <LoginForm />
//       <Footer />
//     </div>
//   );
// }

// export default App;