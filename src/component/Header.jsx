import "./Header.css";

function Header({ className }) {
  return (
    <div className={className}>
      <div
        style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}
      >
        <h2>IT Service Provider</h2>
      </div>
      <div>
        <ul style={{ listStyleType: "none", display: "flex", margin: "10px" }}>
          <li>About us</li>
          <li>services</li>
          <li>Industries</li>
          <li>Resources</li>
          <li
            style={{
              borderRadius: "20px",
              backgroundColor: "#03abf4",
              color: "white",
              fontSize: "1.2rem",
            }}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
