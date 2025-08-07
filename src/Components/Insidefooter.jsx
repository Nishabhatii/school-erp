
import "./Insidefooter.css";

const Insidefooter = () => {
  return (
    <footer className="school-footer">
      <div className="footer-top">
        <h3>VIDYASAGAR INTERNATIONAL SCHOOL</h3>
        <p>
          Jafarpur Majra, Gharora, Manjhawali road, Tigaon, Greater Faridabad (Haryana - 121101)
        </p>
        <p>📞 +91-7011702170, 9811674008</p>
        <p>✉️ vidyasagarfbd@gmail.com, vis.frontdesk@gmail.com</p>
        <button className="enquiry-button">Enquiry Now</button>
      </div>

      <div className="footer-bottom">
        <p>Follow Us - Stay connected on our social platforms</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Twitter">X</a>
          <a href="#" aria-label="YouTube">YouTube</a>
        </div>
        <a className="download-link" href="#">Download Enquiry Form</a>
      </div>
    </footer>
  );
};

export default Insidefooter;