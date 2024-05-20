
import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h2>Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul className="list-group">
          {reviews.map((review, index) => (
            <li key={index} className="list-group-item">
              <strong>{review.user.name}:</strong> {review.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
