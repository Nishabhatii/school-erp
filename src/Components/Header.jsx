import "./Login.css";

function Header() {
  return (
    <header className="header w-100">
      <div className="header-left">
        <div className="school-info">
          <h1 className="school-name">XYZ International School</h1>
          <p className="school-address">Sector 101,Faridabad,Haryana,India</p>
        </div>
      </div>
      <div className="header-right">
        <button className="back-button" onClick={() => window.history.back()}>
          ⬅ Back
        </button>
      </div>
    </header>
  );
}

export default Header;
