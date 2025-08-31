import "./Teacher.css";
export default function TPrincipalMsg({ name, message, photo }) {
  return (
    <div className="principal-card">
      <div className="principal-header">
        <img
          src={photo || "https://via.placeholder.com/80"}
          alt={name || "Principal"}
          className="principal-photo"
        />
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
