import React from 'react';
import './Main.scss'
import image1 from '../../assets/rasmlar/r2.png'
import image2 from '../../assets/rasmlar/r3.png'
import image3 from '../../assets/rasmlar/r4.png'

const link= [
    {
       id:1,
       h1:'FS - QUILTED MAXI CROSS BAG' ,
       p:'$534,33',
       span:'24% Off',
       h4:'$299,43',
       img:image1

    },
    {
        id:2,
        h1:'FS - QUILTED MAXI CROSS BAG' ,
        p:'$534,33',
        span:'24% Off',
        h4:'$299,43',
        img:image2
 
     },
     {
        id:3,
        h1:'FS - QUILTED MAXI CROSS BAG' ,
        p:'$534,33',
        span:'24% Off',
        h4:'$299,43',
        img:image3
 
     },
]

const links = link.map(link => (
    <div className="column_all" key={link.id}>
      <div className="teg">
      <div className="teg_row">
        <h1>{link.h1}</h1>
        </div>
        <div className="teg_row">
        <p>{link.p}</p>
        </div>
      </div>
      <h4>{link.h4} <span>{link.span}</span></h4>
    <img src={link.img} alt="" />
     <div className="column_row">

     </div>
    </div>
))

const Main = () => {
    return (
        <div>
            <section className='main'>
      <div className="container">
        <div className="main_all">
             <h1>Super Flash Sale
        50% Off</h1>
        </div>
      </div>
            </section>
            <div className="container">
                <div className="column">
               {links}
                </div>
            </div>
        </div>
    );
}

export default Main;
