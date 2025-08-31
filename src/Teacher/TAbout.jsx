import "./Teacher.css";

export default function TAbout({ 
  name = "ABC Public School", 
  logo = "https://via.placeholder.com/100", 
  description = "ABC Public School is dedicated to excellence in education and holistic development of students.", 
  email = "info@abcschool.com", 
  phone = "+91-9876543210" 
}) {
  return (
    <div className="about-card">
      <img src={logo} alt={name} className="school-logo" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
}
