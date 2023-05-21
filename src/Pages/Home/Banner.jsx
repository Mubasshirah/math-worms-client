import img3 from '../../assets/images/img3.jpg';
import img6 from '../../assets/images/img6.jpg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[550px] ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={img6} className="w-full " />
                    <div className="absolute flex justify-start items-center transform -translate-y-1/2 ps-10 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full">
                        <div className='text-white  '>
                            <h2 className='text-6xl pt-5 font-bold'>Educational</h2>
                            <h2 className='text-6xl font-bold'>And Funny</h2>
                            <h2 className='text-6xl font-bold mb-5'>Toys for Kids</h2>
                            <p className='text-2xl'>Is math boring and horrible???</p>
                            <p className='text-2xl'>Here are toys to make your math learning funny and interesting...</p>
                            <div className='mt-5'>
                                <button className="btn btn-info me-5">See all toys</button>
                               
                            </div>
                        </div>
                    </div>
                  
                  
                  
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle me-5">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-info border-transparent">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src={img3} className="w-full" />
                   
                    <div className="absolute flex justify-start items-center transform -translate-y-1/2 ps-10 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full">
                        <div className='text-white  '>
                            <h2 className='text-6xl pt-5 font-bold'>Educational</h2>
                            <h2 className='text-6xl font-bold'>And Funny</h2>
                            <h2 className='text-6xl font-bold mb-5'>Toys for Kids</h2>
                            <p className='text-2xl'>Is math boring and horrible???</p>
                            <p className='text-2xl'>Here are toys to make your math learning funny and interesting...</p>
                            <div className='mt-5'>
                                <button className="btn btn-info me-5">See all toys</button>
                               
                            </div>
                        </div>
                    </div>
                   
                   
                   
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle me-5">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-info border-transparent">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;