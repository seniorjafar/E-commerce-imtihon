import React from 'react';
import Main from '../../Components/Main/Main'
import {useGetProductsQuery} from '../../Components/context/productApi';
import Product from '../../Components/Product/Product'
import Footer from '../../Components/Footer/Footer';
import Latest from '../../Components/Latest/latest';
import Featured from '../../Components/Featured/Featured';
const Home = () => {
    const { data,isLoading } = useGetProductsQuery();
    return (
        <div>
          <Main/>
            <Product data={data}  loading={isLoading}/>
            <Latest/>
            <Featured/>
            <Footer/>

        </div>
    );
}

export default Home;
