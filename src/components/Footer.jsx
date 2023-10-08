import "./Footer.css"
import insta from "../assets/icons8-insta-100.png"
const Footer = () => {
  return (
    <div className="footer">
        <div className="trainer">
            <h5>Trainer</h5>
            <h4>Divya Bhardwaj</h4>
        </div>
        <div
          style={{
            flex:1,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <p>Reviews</p>
          <p>Contact</p>
          <p>About Me</p>
        </div>
        <div >
            <img style={{width:"24px"}} src={insta}/>
        </div>
    </div>
  )
}

export default Footer