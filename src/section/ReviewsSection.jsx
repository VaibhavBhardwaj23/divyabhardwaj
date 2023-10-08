import Headings from "../components/Headings"
import ReviewsCard from "../components/ReviewsCard"
import ScrollContainer from 'react-indiana-drag-scroll'
import "./ReviewsSection.css"
import user from "../assets/user.png"

const ReviewsSection = () => {
  return (
    <div  className="rvw_section_hero">
      <Headings title={"Reviews"}/>
      <ScrollContainer className="scroll-container" horizontal={true}>
        <ReviewsCard image={user} review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
      </ScrollContainer>
    </div>
  )
}

export default ReviewsSection