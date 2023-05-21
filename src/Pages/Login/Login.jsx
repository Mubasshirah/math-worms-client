
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;   
        const email=form.email.value;
        const password=form.password.value;
        const user={email,password};
        console.log(user);

    }
    return (
        <div>
           <div className="hero min-h-screen" style={{ backgroundImage: `url("https://cdn.wallpapersafari.com/23/30/IpcZNP.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
    <div className="text-center ">
      <h1 className="text-5xl font-bold py-5">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <div className="card-body">
       <form onSubmit={handleLogin}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" required placeholder="password" className="input input-bordered" />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-sky-500 border-0">Login</button>
        </div>
       </form>
       <div>
       <button className="btn btn-outline btn-info mt-5"><FaGoogle></FaGoogle>  <span className='ms-3'>Log in with google</span></button>
          <p className='text-black mt-3'>Are not a member yet? <Link to='/register' className='btn btn-link text-info'>Register</Link></p>
       </div>
      </div>
    </div>
    </div>
  </div>
</div>






        </div>
    );
};

export default Login;