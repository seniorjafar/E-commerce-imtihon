import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import ProductTop from '../../Components/Pruducts';

const Reviews = () => {
  const reviewText =
    'Air Max are always very comfortable fit, clean and just perfect in every way. Just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.';

  const renderReview = (text, index) => (
    <div className="review" key={index}>
      <p>{text}</p>
    </div>
  );

  const reviews = [reviewText, reviewText, reviewText];

  return (
    <div>
      <ProductTop />
      <div className="container">
        <div className="review-section">
          <div className="review-links">
            <div className="review-link">
              <p>
                <Link to={'/product/:id'}>Product Information</Link>
              </p>
            </div>
            <div className="review-link">
              <p>
                <Link to={'/reviews'}>Reviews</Link>
                <span>0</span>
              </p>
            </div>
            <div className="review-link">
              <Link to={'/another'}>
                <p>Another tab</p>
              </Link>
            </div>
          </div>
          <div className="reviews">{reviews.map(renderReview)}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;