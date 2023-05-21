import img7 from '../../assets/images/img7.jpeg'

const Features = () => {
    return (
        <div>
            <h1 className='text-5xl my-10 text-center '>Features of our toys</h1>
            <div className='my-20 ms-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img7} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-sky-500 text-4xl">Creative</h2>
                        <p>Our toys will make you creative.These will encourage you to solve harder problems through a funfull learning process. </p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img7} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-sky-500 text-4xl">Encouraging</h2>
                        <p>Our toys will make you creative.These will encourage you to solve harder problems through a funfull learning process. </p>
                       
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img7} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-sky-500 text-4xl">Funfull</h2>
                        <p>Our toys will make you creative.These will encourage you to solve harder problems through a funfull learning process. </p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;