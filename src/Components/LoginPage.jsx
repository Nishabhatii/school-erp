
import Header from "./Header";
import NoticeBar from "./NoticeBar";
import LoginForm from "./LoginForm";
import Footer from "./Footer";

export default function LoginPage() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-12">
      <Header />
      <NoticeBar />
      <LoginForm />
      <Footer />
        </div>
      </div>
    </div>
  );
}
