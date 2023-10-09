import ReviewsCard from "../components/ReviewsCard"
import user from "../assets/user.png"
import "./Reviews.css"
const Reviews = () => {
  return (
    <div className="review_page_hero">
        <ReviewsCard image={user} review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
        <ReviewsCard image={user}  review={"Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} username={"USERNAME"}/>
    </div>
  )
}

export default Reviews