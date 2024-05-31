import React from 'react';
import './Loading.scss'

const Loading = ({count=4}) => {
    return (
        <div className='skeleton__wrapperr container'>
        {
            Array(count).fill("").map((_, inx)=>  <div key={inx} className="skeleton__card">
                <div className="spinner">
                    <span className="spinner-inner-1"></span>
                    <span className="spinner-inner-2"></span>
                    <span className="spinner-inner-3"></span>
                </div>
        </div>)
        }
    </div>
    );
}

export default Loading;
