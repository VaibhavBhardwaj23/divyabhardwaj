import about from "../assets/aboutsection.jpg";
import about2 from "../assets/about2.jpg"
import about3 from "../assets/about3.jpg"
import "./Reviews.css"
const AboutMe = () => {
  return (
    <div className="abt_me_hero">
      <div className="abt_page box_1" style={{ display: "flex", margin: "1em 0" }}>
        <img style={{ border: "2px solid #228b22" }} src={about} />
        <p style={{ padding: "0.5em" }}>
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>
      <div className="abt_page box_2" style={{ display: "flex", margin: "1em 0" }}>
        <img style={{ border: "2px solid #228b22" }} src={about2} />
        <p style={{ padding: "0.5em" }}>
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>
      <div className="abt_page box_3" style={{ display: "flex", margin: "1em 0" }}>
        <img style={{ border: "2px solid #228b22" }} src={about3} />
        <p style={{ padding: "0.5em" }}>
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
