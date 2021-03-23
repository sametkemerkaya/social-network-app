import React from 'react';
import Icon404 from '../assets/img/404.svg';

const NotFound = () => {
   return (
      <div className='not-found container h-100 d-flex flex-column align-items-center justify-content-center'>
         <div className='img d-flex justify-content-center'>
            <img src={Icon404} alt='Not Found' />
         </div>
         <h3 className='mt-5'>404 - Not Found</h3>
      </div>
   );
};

export default NotFound;
