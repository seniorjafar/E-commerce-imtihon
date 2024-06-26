import React from 'react';
import './Wishlist.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar, FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toggleEvent } from '../../Components/context/Heart';
import Footer from '../../Components/Footer/Footer';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.heart.value);
  const dispatch = useDispatch();

  const renderProductCard = (link) => (
    <div className="wrapper" key={link.id}>
      <div className="card">
        <div className="like">
          <div className="all1">
            <div className="like">
              <button onClick={() => dispatch(toggleEvent(link))}>
                {wishlist.some((item) => item.id === link.id) ? (
                  <FaHeart style={{ color: 'red', fontSize: '25px' }} />
                ) : (
                  <CiHeart className="svg" />
                )}
              </button>
              <button onClick={() => dispatch(addToCart(link))}>
                <AiOutlineShoppingCart className="svg" />
              </button>
            </div>
          </div>
        </div>
        <div className="all">HOT</div>
        <img src={link.image} alt={link.title} />
      </div>
      <div className="h1" title={link.title}>
        <Link to={`/product/${link.id}`}>
          <h1>{link.title}</h1>
        </Link>
        <div className="start">
          {[...Array(5)].map((_, index) => (
            <div className="star_all" key={index}>
              <FaStar style={{ color: index < 4 ? 'inherit' : 'gray' }} />
            </div>
          ))}
        </div>
        <div className="p1">
          <p>
            $5463<span>$266</span> <span className="span">366 Off</span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="single">
        <div className="container">
          <div className="single_row">
            <div className="single_alt">
              <Link to="/">Home</Link> /
            </div>
            <div className="single_alt">
              <p>Wishlist</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="wish">Wishlist</h1>
      <div className="hammasi">
        {wishlist.length ? (
          wishlist.map(renderProductCard)
        ) : (
          <div className="not_found">
            <h1>Not Found</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;