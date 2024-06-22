import ServiceCard from "./ServiceCard";
import MultiServiceComponent from "./MultiServiceComponent";

function Body() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <video
          playsInline
          loop
          muted
          autoPlay
          style={{ objectFit: "cover", width: "100%" }}
        >
          <source
            src="https://8904598.fs1.hubspotusercontent-na1.net/hubfs/8904598/SuccessiveTechnologies_July2021/bannerVideo%20(1).mp4"
            type="video/mp4"
          ></source>
        </video>
        <div
          style={{
            position: "absolute",
            zIndex: 80,
            top: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "700px",
            fontSize: "25px",
            color: "white",
          }}
        >
          <h1>Redefining Digital</h1>
          <h2>Transformation</h2>
          <h3>
            Transform your business growth across all touchpoints of customer
          </h3>
          <h3>vexperience with our digital transformation solutions.</h3>
        </div>
      </div>
      <ServiceCard />
      <ServiceCard />
      <MultiServiceComponent/>
    </>
  );
}

export default Body;
