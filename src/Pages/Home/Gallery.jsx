import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Gallery = () => {
  useEffect(()=>{
    AOS.init({duration:3000})
},[])
    return (
        <div className='mb-10'>
             <h1 className='text-5xl my-10 text-center '> Our Gallery</h1>

             <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
             

              <div className='grid md:grid-rows-2 gap-6'>
                <div className='h-80 md:h-36  '><img src={img2} alt="" className='h-full shadow-lg w-full' /></div>
                <div className='h-80 md:h-36 '><img src={img5} alt="" className='h-full w-full shadow-lg'/></div>
              </div>


              <div className='h-80 '>
                <img src={img3} alt="" className=' h-full shadow-lg'/>
              </div>
             </div>


             <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
              <div className='h-80 w-full '>
                <img src={img6} alt="" className=' h-full w-full shadow-lg'/>
              </div>


              

              <div className='h-80 w-full '>
                <img src={img5} alt="" className=' h-full w-full shadow-lg'/>
              </div>

              <div className='grid md:grid-rows-2 gap-6'>
                <div className='h-80 md:h-36  '><img src={img4} alt="" className='h-full w-full shadow-lg' /></div>
                <div className='h-80 md:h-36 '><img src={img1} alt="" className='h-full w-full shadow-lg'/></div>
              </div>

             </div>
        </div>
    );
};

export default Gallery;