
import { Link } from 'react-router-dom';
import error from '../../assets/images/error.jpg'
const About = () => {
    return (
        <div>
            <div className='h-2/5'>
                <img src={error} alt="" className='w-full h-[400px]'/>
            </div>
            <div className='text-center'>
                <Link to='/' className='btn btn-info'>Go to home</Link>
            </div>
        </div>
    );
};

export default About;