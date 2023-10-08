import Headings from "../components/Headings"
import "./WhyMeSection.css"
const WhyMeSection = () => {
  return (
    <div className="whyMe_section_hero">
        <Headings title={"Why Me?"}/>
        <div className="reasons">
            <div className="points" style={{display:"flex",alignItems:"baseline",justifyContent:"center"}}>
            <h2>01. </h2>
            <span>Morem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className="points" style={{display:"flex",alignItems:"baseline",justifyContent:"center"}}>
            <h2>02. </h2>
            <span>Morem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className="points" style={{display:"flex",alignItems:"baseline",justifyContent:"center"}}>
            <h2>03. </h2>
            <span>Morem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className="points" style={{display:"flex",alignItems:"baseline",justifyContent:"center"}}>
            <h2>04. </h2>
            <span>Morem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            
        </div>
    </div>
  )
}

export default WhyMeSection