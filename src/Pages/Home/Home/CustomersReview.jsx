
import customer from '../../../assets/images/ccustomer.png'
const CustomersReview = () => {
    return (
        <div>
            <h1 className='text-5xl my-10 text-center '> Customers Review</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ms-10'>
                <div className="card w-96 h-60 bg-base-100 shadow-xl image-full">
                    <figure><img src={customer} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mr.Tanjib</h2>
                        <p>I am highly pleased with this toys. These are really educative and funny.My children are happy as well. I will buy more toys fromthis store further</p>

                    </div>
                </div>
                <div className="card w-96 h-60 bg-base-100 shadow-xl image-full">
                    <figure><img src={customer} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Ms.Anika</h2>
                        <p>I am highly pleased with this toys. These are really educative and funny.My children are happy as well. I will buy more toys fromthis store further</p>

                    </div>
                </div>
                <div className="card w-96 h-60 bg-base-100 shadow-xl image-full">
                    <figure><img src={customer} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mr.Iftekhar</h2>
                        <p>I am highly pleased with this toys. These are really educative and funny.My children are happy as well. I will buy more toys fromthis store further</p>

                    </div>
                </div>
                <div className="card w-96 h-60 bg-base-100 shadow-xl image-full">
                    <figure><img src={customer} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mr.Musavee</h2>
                        <p>I am highly pleased with this toys. These are really educative and funny.My children are happy as well. I will buy more toys fromthis store further</p>

                    </div>
                </div>
                <div className="card w-96 h-60 bg-base-100 shadow-xl image-full">
                    <figure><img src={customer} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Ms.Samia</h2>
                        <p>I am highly pleased with this toys. These are really educative and funny.My children are happy as well. I will buy more toys fromthis store further</p>

                    </div>
                </div>
                <div className="card w-96 h-60 bg-base-100 shadow-xl image-full">
                    <figure><img src={customer} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Ms.Amrin</h2>
                        <p>I am highly pleased with this toys. These are really educative and funny.My children are happy as well. I will buy more toys fromthis store further</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersReview;