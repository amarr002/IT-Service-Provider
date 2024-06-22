import "./MultiService.css";

function MultiServiceComponent() {
  return (
    <div className="main">
      <div className="maindiv1">
        <p>Creating Digital Solutions Driven By Actionable Insights</p>
      </div>
      <div className="maindiv2">
        <div className="boxcss">
          <span>01</span>
          <div className="img-container">
            <div className="overlay"></div>
            <img
              src="https://successive.tech/wp-content/uploads/2024/05/UX-min.webp"
              alt="UX Design: Crafting Engaging Digital Experiences"
            />
            <div className="image-txt">
              UX Design: Crafting Engaging Digital Experiences
            </div>
          </div>
        </div>
        <div className="boxcss">
          <span>02</span>
          <div className="img-container">
            <div className="overlay"></div>
            <img
              src="https://successive.tech/wp-content/uploads/2024/05/Advanced-data-min.webp"
              alt="Advanced Data Analytics: Transforming Healthcare"
              className="img-style"
            />

            <div className="image-txt">
              UX Design: Crafting Engaging Digital Experiences
            </div>
          </div>
        </div>
        <div className="boxcss">
          <span>03</span>
          <div className="img-container">
            <div className="overlay"></div>
            <img
              src="https://successive.tech/wp-content/uploads/2024/05/customer-experince-min.webp"
              alt="How Does Data Improving Customer Experience?"
            />
            <div className="image-txt">
              UX Design: Crafting Engaging Digital Experiences
            </div>
          </div>
        </div>
        <div className="boxcss">
          <span>04</span>
          <div className="img-container">
            <div className="overlay"></div>
            <img
              src="https://successive.tech/wp-content/uploads/2024/05/telemedicine-min.webp"
              alt="Telemedicine: A Viable Healthcare Tech Solution"
            />
            <div className="image-txt">
              UX Design: Crafting Engaging Digital Experience
            </div>
          </div>
        </div>
      </div>
      <div className="maindiv3">
        <h2>Our Service Offerings & Capabilities</h2>
      </div>
    </div>
  );
}

export default MultiServiceComponent;
