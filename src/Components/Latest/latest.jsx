import React from 'react';
import './Latest.scss'
import image1 from '../../assets/rasmlar/latest.png'
import image2 from '../../assets/rasmlar/latest1.png'
import image3 from '../../assets/rasmlar/latest2.png'
import image4 from '../../assets/rasmlar/latest3.png'
import image5 from '../../assets/rasmlar/img.png'
import image6 from '../../assets/rasmlar/img1.png'
import image7 from '../../assets/rasmlar/img2.png'
const data = [
    {
        id:1,
        h1:'FREE SHIPPING',
        img:image2,
        p:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    },
    {
        id:1,
        h1:'100% REFUND',
        img:image3,
        p:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    },
    {
        id:1,
        h1:'SUPPORT 24/7',
        img:image4,
        p:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    },
]


let links = data?.map((link) =>(
    <div className="latest_lif" key={link.id}>
  <img src={link.img} alt="" />
   <h1>{link.h1}</h1>
   <p>{link.p}</p>
    </div>
))


const linkAll= [
    {
        id:1,
        h1:'Fashion Industry',
        img:image5,
        span:'01 Jan, 2015',
        p:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        id:1,
        h1:'Best Design Tools',
        img:image6,
        span:'01 Jan, 2015',
        p:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        id:1,
        h1:'HR Community',
        img:image7,
        span:'01 Jan, 2015',
        p:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
]


let news = linkAll?.map((el) =>(
    <div className="latest_top_rigth" key={el.id}>
        <div className="img">
            <img src={el.img} alt="" />
        </div>
        <div className="img">
           <span>{el.span}</span>
           <h1>{el.h1}</h1>
           <p>{el.p}</p>
        </div>
    </div>
))
const Banner = () => {
    return (
        <div>
            <section className='latest'>
                <div className="container">
                     <div className="latest_all">
                        <div className="latest_res">
                            <h1>Adidas Men Running Sneakers</h1>
                            <p>Performance and design. Taken right to the edge.</p>
                            <h5>SHOP NOW</h5>
                            <div className="br"></div>
                        </div>
                        <div className="latest_res">
                            <img src={image1} alt="" />
                        </div>
                     </div>
                </div>
            </section>
<div className="container">
    <div className="latest_top">
   {links}
    </div>
   <div className="tixt">
    <h1>LATEST NEWS</h1>
   </div>
<div className="latest_all">
   {news}
</div>
</div>
        </div>
    );
}

export default Banner;
