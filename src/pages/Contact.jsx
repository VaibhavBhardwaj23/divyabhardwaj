import { useState } from "react";
import "../section/Form.css"
import form from "../assets/form.jpg"
import arrow from "../assets/arrow.png"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
const Contact = () => {
    const [number, setNumber] = useState(null);
  const [name,setName]= useState("")
  const [email,setEmail]=useState("")
  const handleNumber = (event) => {
    const limit = 10;
    setNumber(event.target.value.slice(0, limit));
  };
  const clientRef = collection(db, "ClientsData");
  const sendData=async(e)=>
  {
    e.preventDefault()
    const client={
        name:name,
        email:email,
        phone:number
    }
    addDoc(clientRef, client);
    alert("We'll Contact You Shortly,Thank you for your enquiry")
    setEmail("")
    setName("")
    setNumber("")
  }
  return (
    <div className="form_section_hero">
    <div className="form_hero">
      <form className="form">
        <h1>Name</h1>
        <input placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)} required />
        <h1>Email</h1>
        <input placeholder="Enter Your Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <h1>Mobile</h1>
        <input placeholder="Enter Your Phone Number" type="number" value={number} onChange={handleNumber} required />
        <button onClick={sendData}>Submit</button>
      </form>
      <div className="form_img">
          <img src={form}/>
      </div>
    </div>
    <div className="cta">
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
      <a
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
        href="https://wa.me/+918368106072"
        target="blank"
      >
        CHAT ON WHATSAPP
        <img style={{width:"23px",transform:"rotate(180deg)",margin:"0 1em"}} src={arrow}/>
      </a>
    </div>
  </div>
  )
}

export default Contact