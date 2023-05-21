
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const { handleUpdate,auth,user, createUser}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleRegister=event=>{
        event.preventDefault();
        setSuccess('');
        setError('');
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        const user={name,photo,email,password};
        console.log(user);
        if(email===''){
          alert('email field cannot be empty');
          return;
        }
        if(password===''){
          alert('password field cannot be empty');
          return;
        }
       
       if(password.length<6){
            setError('password must have more than six character');
            return;
        }
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(photo);
            handleUpdate(name,photo);
            
            setSuccess('seccessfully signed up');
            navigate('/');
            console.log(user)
        })
        .catch(err=>{
            console.error(err);
            setError(err.message);
        })
        form.reset()

    }
    return (
        <div>
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://cdn.wallpapersafari.com/23/30/IpcZNP.jpg")` }}>
<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content">
 <div className="max-w-lg">
 <div className="text-center ">
   <h1 className="text-5xl font-bold py-5">Register now!</h1>
  
 </div>
 <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
   <div className="card-body">
    <form onSubmit={handleRegister}>
    <div className="form-control">
       <label className="label">
         <span className="label-text">Name</span>
       </label>
       <input type="name" name='name' required placeholder="name" className="input input-bordered  text-black" />
     </div>
    <div className="form-control">
       <label className="label">
         <span className="label-text">Photo URL</span>
       </label>
       <input type="text" name='photo'  placeholder="photo" className="input input-bordered  text-black" />
     </div>
    <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="email" name='email' required placeholder="email" className="input input-bordered  text-black" />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" name="password" required placeholder="password" className="input input-bordered  text-black" />
      
     </div>
     <div className="form-control mt-6">
       <button className="btn bg-sky-500 border-0">Register</button>
     </div>
    </form>
    <div className='text-red-600'>{error}</div>
    <div className='text-blue-600'>{success}</div>
    <div>
    <p className='text-black mt-3'>Already a member? <Link to='/login' className='btn btn-link text-info'>Login</Link></p>
    </div>
   </div>
 </div>
 </div>
</div>
</div>






     </div>
    );
};

export default Register;