
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {  useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext, useState } from 'react';
import UseTitle from '../../hooks/UseTitle';
const Login = () => {
  UseTitle('log in');
  const [error,setError]=useState('');
  const navigate=useNavigate();
  const location=useLocation();
  const from=location?.state?.from?.pathname || '/';
    const {signInUser,logInWithGoogle}=useContext(AuthContext);
    const handleLogin=event=>{
        event.preventDefault();
        setError('');
        const form=event.target;   
        const email=form.email.value;
        const password=form.password.value;
        const user={email,password};
        console.log(user);
        signInUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate(from,{replace:true});
        })
        .catch(err=>{
            console.error(err);
            setError(err.message);
        })
        form.reset()

    }
    const handleLogInWithGoogle=()=>{
      logInWithGoogle()
      .then(result=>{
          const user=result.user;
          navigate(from,{replace:true});
          console.log(user);
         })
         .catch(error=>{
          console.log(error)
         })
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
      <div className="card-body text-black">
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
       <div className='text-red-600'>{error}</div>
       <div>
       <button className="btn btn-outline btn-info mt-5" onClick={handleLogInWithGoogle}><FaGoogle></FaGoogle>  <span className='ms-3'>Log in with google</span></button>
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