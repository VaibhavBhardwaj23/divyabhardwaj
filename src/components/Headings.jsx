/* eslint-disable react/prop-types */
import "./Heading.css";
const Headings = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h1>{title}</h1>
      <div
        style={{
          backgroundColor: "#228B22",
          height: "50px",
          flex: "1",
          margin: "0 0.5em",
        }}
      ></div>
    </div>
  );
};

export default Headings;
