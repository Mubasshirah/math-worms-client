
import customer from '../../../assets/images/ccustomer.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const CustomersReview = () => {
    useEffect(()=>{
        AOS.init({duration:3000})
    },[])
    return (
        <div>
            <h1 className='text-5xl my-10 text-center '> Customers Review</h1>

            <div className="card lg:card-side bg-base-200 shadow-xl md:w-2/3 mx-auto mb-10" >
                <figure><img src={customer} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Ms.Azmin</h2>
                    <p>I am highly pleased with this toys. These are really educative and funny.My children are happy as well. I will buy more toys fromthis store further</p>


                </div>
            </div>
            <div className="card lg:card-side bg-base-200 shadow-xl md:w-2/3 mx-auto mb-10" data-aos='fade-right'>
                
                <div className="card-body">
                    <h2 className="card-title">Ms.Sara</h2>
                    <p>I am highly pleased with this toys. These are really educative and funny.My children are happy as well. I will buy more toys fromthis store further</p>


                </div>
                <figure><img src={customer} /></figure>
            </div>
            <div className="card lg:card-side bg-base-200 shadow-xl md:w-2/3 mx-auto mb-10" data-aos='fade-left'>
                <figure><img src={customer} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Ms.Amrin</h2>
                    <p>I am highly pleased with this toys. These are really educative and funny.My children are happy as well. I will buy more toys fromthis store further</p>


                </div>
            </div>
            <div className="card lg:card-side bg-base-200 shadow-xl md:w-2/3 mx-auto mb-10" data-aos='fade-right'>
                
                <div className="card-body">
                    <h2 className="card-title">Ms.Anika</h2>
                    <p>I am highly pleased with this toys. These are really educative and funny.My children are happy as well. I will buy more toys fromthis store further</p>


                </div>
                <figure><img src={customer} /></figure>
            </div>
            <div className="card lg:card-side bg-base-200 shadow-xl md:w-2/3 mx-auto mb-10" data-aos='fade-left'>
                <figure><img src={customer} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Ms.Nazifa</h2>
                    <p>I am highly pleased with this toys. These are really educative and funny.My children are happy as well. I will buy more toys fromthis store further</p>


                </div>
            </div>
            <div className="card lg:card-side bg-base-200 shadow-xl md:w-2/3 mx-auto mb-10" data-aos='fade-right'>
                
                <div className="card-body">
                    <h2 className="card-title">Ms.Samia</h2>
                    <p>I am highly pleased with this toys. These are really educative and funny.My children are happy as well. I will buy more toys fromthis store further</p>


                </div>
                <figure><img src={customer} /></figure>
            </div>
        </div>

    );
};

export default CustomersReview;