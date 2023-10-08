/* eslint-disable react/no-unescaped-entities */
import Headings from "../components/Headings"
import "./StepsSection.css"
import steps from "../assets/steps.jpg"
const StepsSection = () => {
  return (
    <div className="steps_section_hero">
        <Headings title={"6 Steps to Sucess"}/>
        <div className="steps_content">
            <div className="steps_hero">
                <div className="steps">
                    <h1>1</h1>
                    <p>Fill the Form</p>
                </div>
                <div className="steps">
                    <h1>2</h1>
                    <p>We'll get in touch</p>
                </div>
                <div className="steps">
                    <h1>3</h1>
                    <p>Understand the Goal</p>
                </div>
                <div className="steps">
                    <h1>4</h1>
                    <p>Planning training and nutrition</p>
                </div>
                <div className="steps">
                    <h1>5</h1>
                    <p>Start Training</p>
                </div>
                <div className="steps">
                    <h1>6</h1>
                    <p>Enjoy the Results</p>
                </div>
            </div>
            <div className="steps_img">
            <img src={steps}/>
            </div>
        </div>
    </div>
  )
}

export default StepsSection