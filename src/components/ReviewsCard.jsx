/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./ReviewCard.css"
const ReviewsCard = ({image,review,username}) => {

  return (
    <div className="review_card">
      <img src={image}/>
      <p>{review}</p>
      <p>-{username}</p>
    </div>
  )
}

export default ReviewsCard