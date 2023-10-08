import Headings from "../components/Headings";
import about from "../assets/aboutsection.jpg";
import arrow from "../assets/arrow.png";

import "./AboutSection.css";
const AboutSection = () => {
  return (
    <div className="abt_section_hero">
      <Headings title={"About Me"} />
      <div className="abt_section" style={{ display: "flex", margin: "1em 0" }}>
        <img style={{ border: "2px solid #228b22" }} src={about} />

        <p style={{ padding: "0.5em" }}>
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
          <div
            style={{
              padding: "1em .8em",
              borderRadius: "50px",
              backgroundColor: "#228B22",
              width: "max-content",
              margin: "5em auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            LEARN MORE
            <img
              style={{
                width: "10px",
                transform: "rotate(180deg)",
                margin: "0 1em",
              }}
              src={arrow}
            />
          </div>
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
