import React,{useState,useEffect} from 'react';
import './Product.scss'
import { FaStar } from "react-icons/fa6";
import { Link} from 'react-router-dom';
import Loading from '../Loading/Loading';
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import {toggleEvent} from '../../Components/context/Heart'
import { useDispatch,useSelector } from 'react-redux';
import {addToCart} from '../../Components/context/Card/index'
import { FaHeart } from "react-icons/fa";

const Product = ({data,loading}) => {
  useEffect(() =>{
axios
.get(`https://fakestoreapi.com/products/categories`)
.then(response =>{
    setCategories(response.data);
})
.catch(error =>{
})
},[]);

  const dispatch = useDispatch();
  let wishlist = useSelector(s => s.heart.value)
    const [count,setCount] = useState(1);
    const [dataSet,  setProducts] = useState(data)
    const [setloading,setLoading] = useState(loading)
    const[ value,setValue] =useState('All')
    const [categories,setCategories] = useState([])
    let all= value
   if(value === "All"){
     all = '/products'
     }
      else{
       all = `/products/category/${value}`
       }
    useEffect(() => {
      setLoading(true);
        axios
            .get(`https://fakestoreapi.com${all}?limit=${count * 8}`)
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false);
              
            });
    }, [count,value]);

    const handleLoadMore = () => {
        setCount(prevCount => prevCount + 1);
    };





const handleCategoryChange = (category) => {
  setValue(category);
  setCount(1); 
};


const categoryButtons = categories.map((el, idx) => (
  <button onClick={() => handleCategoryChange(el)} key={idx}>{el}</button>
));

    let links = dataSet?.map((link) =>(
        <div className="wrapper" key={link.id}>
            
        <div className="card">
        <div className="like">
        <div className="all1">
        <div className="like">
        <button onClick={() =>dispatch(toggleEvent(link))}>
          {
            wishlist?.some(item => item.id === link.id) ? <FaHeart  style={{color:'red',fontSize:'25px'}} />
            : <CiHeart className="svg" />
          }
          </button>
        <button onClick={() => dispatch(addToCart(link)) }><AiOutlineShoppingCart className="svg" /></button>
      </div>
        </div>
      </div>
           <div className="all">HOT</div>
       
          <img src={link.image} alt="" />
         
        </div>
        <div className="h1" title={link.title}>
               <Link to={`/product/${link.id}`}>
               <h1>{link.title}</h1>
               </Link>
            <div className="start">
            <div className="star_all">
                <FaStar />
                </div>
                <div className="star_all">
                <FaStar />
                </div>
                <div className="star_all">
                <FaStar />
                </div>
                <div className="star_all">
                <FaStar />
                </div>
                <div className="star_all">
                <FaStar  style={{color:'gray'}}/>
                </div>
            </div>
            <div className="p1">
                <p>${link.rating.count}<span>$<del>{link.price}</del></span> <span className='span'><h4>{link.rating.rate}</h4> Off</span></p>
            </div>
        </div>
      </div>
    ))

    return (
        <div>
            <div className="container">
                <h1 className='teg_all'>BEST SELLER</h1>
                <div className="category">
                <div className="category_all">
                    <button  onClick={() => handleCategoryChange('All')}>
                        All
                    </button>
                    </div>
                    <div className="category_all">
                      {categoryButtons}
                    </div>
                </div>

             {
                setloading ?  <Loading  count={8}/>  : ""
             }
            <div className="hammasi">
            {links}
            </div>
            <h1 className='h1_link' onClick={handleLoadMore}>LOAD MORE</h1>
            </div>
              
        </div>
    );
}

export default Product;