import "./Teacher.css";
export default function TPrincipalMsg({ name, message, photo }) {
  return (
    <div className="principal-card">
      <div className="principal-header">
        <img src={process.env.PUBLIC_URL + "/pusssy cat.jpg"} alt="Principal" className="principal-photo" />


        <div>
          <h4>{name || "Dr. A. Sharma"}</h4>
          <p className="designation">Principal</p>
        </div>
      </div>

      <p className="principal-message">
        “{message ||
          "Dear Teachers, thank you for your hard work and dedication. Keep inspiring students every day!"}”
      </p>
    </div>
  );
}
