import "./NavBar.css";
import menu from "../assets/menu.png";
import cross from "../assets/cross.png";
import { useState } from "react";
const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <nav
        className="desktop_navigation"
        style={{
          color: "white",
          padding: "1em",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: "300",
        }}
      >
        <p>Home</p>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <p>Reviews</p>
          <p>Contact</p>
          <p>About Me</p>
        </div>
        <p>New Delhi, India</p>
      </nav>
      <nav
        className="mobile_navigation"
        style={{
          color: "white",
          padding: "1em",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: "300",
        }}
      >
        <p>Home</p>
        <img
          onClick={() => setShow(!show)}
          style={{ width: "23px" }}
          src={menu}
        />
        <div
          className={show ? "show " : "hide"}
          style={{
            position: "absolute",
            outline: "1px solid red",
            padding: "1.3em",
            width: "100%",
            top: 0,
            height: "100vh",
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 10,
          }}
        >
          <img
            src={cross}
            onClick={() => setShow(!show)}
            style={{ width: "30px", float: "right" }}
          />
          <div
            style={{
              width: "100%",
              marginTop: "30%",
              fontSize: "3.5em",
              justifyContent: "space-evenly",
            }}
          >
            <p>Reviews</p>
            <p>Contact</p>
            <p>About Me</p>
          </div>
          <p style={{ margin: "1em auto" }}>New Delhi, India</p>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default NavBar;
