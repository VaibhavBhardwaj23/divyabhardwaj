import "./Footer.css";
import insta from "../assets/icons8-insta-100.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="trainer">
        <h5>Trainer</h5>
        <h4>Divya Bhardwaj</h4>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={"/reviews"}
        >
          <p>Reviews</p>
        </NavLink>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={"/contact"}
        >
          <p>Contact</p>
        </NavLink>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={"/about"}
        >
          <p>About Me</p>
        </NavLink>
      </div>
      <div>
        <img style={{ width: "24px" }} src={insta} />
      </div>
    </div>
  );
};

export default Footer;
