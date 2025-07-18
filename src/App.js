
import Header from "./Components/Header";
import NoticeBar from "./Components/NoticeBar";
import LoginForm from "./Components/LoginForm";
import Footer from "./Components/Footer";
import "./Components/Login.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NoticeBar />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;