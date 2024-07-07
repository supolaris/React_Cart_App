import "./HomeStyles.css";
import "../index.css";
import { WebColors } from "../constant/WebColors";

export const Home = () => {
  return (
    <div style={styles.homeDiv}>
      <div style={styles.imageDiv}>
        <img
          style={styles.image}
          src={require("../assets/images/userImage.jpg")}
          alt=""
        />
        <h3 style={styles.userNameText}>Jessica James</h3>
      </div>

      <div style={styles.contentDiv}>
        <div style={styles.headingDescriptionButtonDiv}>
          <div style={styles.headingDiv}>
            <h1 style={styles.headingText}>Bringing interior to life</h1>
          </div>
          <div style={styles.descriptionDiv}>
            <p style={styles.descriptionText}>
              Tempo characterizedby its ambient light, circular and soft,
              highlights the beauty of the baracejo, wild and raw material.
            </p>
          </div>
          {/* <div style={styles.buttonDiv}> */}
          <div className="buttonDiv" style={styles.buttonDiv}>
            <p style={styles.buttonText}>Get started</p>
          </div>
        </div>
        <div style={styles.bagImageDiv}>
          <img
            style={styles.bagImage}
            alt=""
            src={require("../assets/images/bagsCatagory.jpg")}
          />
        </div>
      </div>
      {/* Service Section */}
      <div className="itemsCenterAlign homeServiceClass">
        <h2 style={styles.servicesTitleText} className="serviceTitleText">
          Our Services
        </h2>
        <p style={styles.servicesDescriptionText}>
          Comprehensive expertise for your success
        </p>
      </div>
      <div className="itemsCenterAlign" style={styles.servicesSectionDiv}>
        <div style={styles.serviceDiv}>
          <img
            style={styles.serviceImage}
            alt=""
            src={require("../assets/images/services/webDevService.png")}
          />
          <h3 style={styles.serviceTitleText}>Web Development</h3>
          <p style={styles.serviceDescriptionText}>
            Building responsive, user-friendly websites using the latest
            technologies to enhance online presence and drive engagement.
          </p>
        </div>
        <div style={styles.serviceDiv}>
          <img
            style={styles.serviceImage}
            alt=""
            src={require("../assets/images/services/appDevService.png")}
          />
          <h3 style={styles.serviceTitleText}>App Development</h3>
          <p style={styles.serviceDescriptionText}>
            Crafting high-quality mobile applications with seamless performance
            and intuitive design for both iOS and Android platforms.
          </p>
        </div>
        <div style={styles.serviceDiv}>
          <img
            style={styles.serviceImage}
            alt=""
            src={require("../assets/images/services/productMarketingService.png")}
          />
          <h3 style={styles.serviceTitleText}>Product Marketing</h3>
          <p style={styles.serviceDescriptionText}>
            Strategizing and executing marketing plans to effectively promote
            products, boost visibility, and increase customer acquisition and
            retention.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  homeDiv: {
    backgroundColor: "#F2EDE7",
    padding: 20,
    borderRadius: 20,
    paddingRight: 60,
    paddingLeft: 60,
  },
  imageDiv: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    borderRadius: "50%",
    height: 50,
    width: 50,
  },
  userNameText: {
    paddingLeft: 10,
  },
  contentDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingDescriptionButtonDiv: {
    width: "40%",
  },
  headingDiv: {},
  headingText: {
    fontSize: 80,
  },
  descriptionDiv: {
    width: "70%",
  },
  descriptionText: {
    fontWeight: "500",
  },
  bagImageDiv: {},
  bagImage: {
    borderRadius: 20,
  },
  buttonDiv: {
    width: "25%",
    borderRadius: 20,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 18,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },

  //services section
  servicesTitleDescriptionDiv: {},
  servicesTitleText: {},
  servicesDescriptionText: {},
  servicesSectionDiv: {
    paddingTop: 10,
    paddingBottom: 40,
    display: "flex",
  },
  serviceDiv: {
    backgroundColor: WebColors.SandyBrown,
    margin: 20,
    borderRadius: 20,
  },

  serviceImage: {
    height: 200,
    width: 200,
  },
  serviceTitleText: {
    fontSize: 30,
    color: WebColors.White,
  },
  serviceDescriptionText: {
    fontSize: 18,
    color: WebColors.LightGray,
  },
};
