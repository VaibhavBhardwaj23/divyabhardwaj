import arrow from "../assets/arrow.png"
import hero from "../assets/hero.jpg"
import "./Hero.css"
const Hero = () => {
  return (
    <div className="hero_section" >
      <div className="section_1">
        <h1>Divya Bhardwaj</h1>
        <p>
          PROFESSIONAL ZUMBA INSTRUCTOR, FITNESS COACH AND TRAINER
        </p>
        <div
          style={{
            padding: "1em .8em",
            borderRadius: "50px",
            backgroundColor: "#228B22",
            width: "max-content",
            margin: "5em auto",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            cursor:"pointer"
          }}
          onClick={()=> window.open("mailto:vaibhavb0203@icloud.com?subject=Enquiry for Training&body=Hi there")}
        >
          DROP ME A LINE
          <img style={{width:"23px",transform:"rotate(180deg)",margin:"0 1em"}} src={arrow}/>
        </div>
      </div>
      <div className="hero_image" >
        <img style={{width:"100%",objectFit:"contain"}} src={hero}/>
      </div>
    </div>
  );
};

export default Hero;
