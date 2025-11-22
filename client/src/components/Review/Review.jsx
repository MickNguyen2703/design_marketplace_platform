import "./Review.scss";

const Review = (props) => {
  const { review } = props;

  return (
    <div className="review">
      <div className="user">
        <img
          className="pp"
          src={review.userID?.image || "/media/noavatar.png"}
          alt=""
        />
        <div className="info" style={{ lineHeight: "20px" }}>
          <span>{review?.userID?.username}</span>
          <div className="stars">
            {new Array(review.star).fill(0).map((star, i) => (
              <img key={i} src="/media/star.png" alt="" />
            ))}
            <span>{review.star}</span>
          </div>
        </div>
      </div>

      <p>{review.description}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/media/like.png" alt="" />
        <span>Yes</span>
        <img src="/media/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;
