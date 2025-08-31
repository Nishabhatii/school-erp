// TAbout.jsx
export default function TAbout({ name, logo, description, email, phone }) {
  return (
    <div className="about-card">
                  <TAbout 
              name="ABC Public School"
              logo="https://via.placeholder.com/100"
              description="ABC Public School is dedicated to excellence in education and holistic development of students."
              email="info@abcschool.com"
              phone="+91-9876543210"
            />
      <div className="about-header">
        {logo && <img src={logo} alt="School Logo" className="about-logo" />}
        <h3>{name || "ABC Public School"}</h3>
      </div>
      <p className="about-description">
        {description ||
          "Our mission is to provide quality education, nurture creativity, and inspire young minds to achieve excellence in academics and life."}
      </p>
      <div className="about-contact">
        {email && <p><strong>Email:</strong> {email}</p>}
        {phone && <p><strong>Phone:</strong> {phone}</p>}
      </div>
    </div>
  );
}
