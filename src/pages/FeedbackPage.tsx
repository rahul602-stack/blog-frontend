import React from 'react';
import './styles/FeedbackPage.css';

const feedbacks = [
  {
    name: 'Emily R.',
    comment: 'Amazing food and great service! The steak was cooked to perfection.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
  },
  {
    name: 'James T.',
    comment: 'Lovely ambiance and friendly staff. Will definitely come again!',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 4,
  },
  {
    name: 'Sophia M.',
    comment: 'Best dining experience in town. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    rating: 5,
  },
];

const FeedbackPage: React.FC = () => {
  return (
    <div className="feedback-container">
      <h1>Customer Feedback</h1>
      <div className="feedback-grid">
        {feedbacks.map((fb, index) => (
          <div className="feedback-card" key={index}>
            <img src={fb.image} alt={fb.name} className="avatar" />
            <h3>{fb.name}</h3>
            <p>{fb.comment}</p>
            <div className="stars">
              {'★'.repeat(fb.rating)}
              {'☆'.repeat(5 - fb.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
