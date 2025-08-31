import "./Teacher.css";

export default function TAbout({ 
  name = "ABC Public School", 
  logo = "/schoollogo.png", 
  description = "ABC Public School is dedicated to excellence in education and holistic development of students.ABC Public School was established in 1995 with a vision to provide quality education that blends traditional values with modern learning methods. What began as a small institution with just 100 students and 5 teachers has now grown into a well-recognized educational center with over 2000 students and 80 faculty members.", 
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
