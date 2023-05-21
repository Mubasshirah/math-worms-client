import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user,logOutUser}=useContext(AuthContext);
    const handleLogOut=()=>{
        logOutUser()
        .then()
        .catch(error=>console.log(error))
    }
    const navItem=  <>
    <Link to='/' className='px-3 hover:text-sky-500'>Home</Link>
    
    <Link to='/alltoys' className='px-3  hover:text-sky-500'>All Toys</Link>
    {
        user? <>
        <Link to='/mytoys' className='px-3  hover:text-sky-500'>My Toys</Link>
    <Link to='/addatoy' className='px-3  hover:text-sky-500'>Add a Toy</Link>
        </> :
        <></>
    }
    <Link to='/blogs' className='px-3  hover:text-sky-500'>Blogs</Link>
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {navItem}
                    </ul>
                </div>
                
                <img src={logo} alt="" className='w-20 h-20'/><span><span className="ps-1 font-semibold text-2xl ">math</span> <span className="text-2xl font-bold text-sky-500">WORMS</span></span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
            { user ?
                              
                              <div className="flex items-center">
                                 
                                 <img src={user.photoURL} alt=""  style={{width:'20px',height:'20px',borderRadius:'50%',marginRight:'15px'}} data-toggle="tooltip" data-placement="top" title={user.displayName} />
                                 
                                
                                  <button className="btn bg-sky-500 border-0 text-white"  onClick={handleLogOut}>Logout</button>
                              </div>
                               :
                               <Link className="btn bg-sky-500 border-0 text-white" to='/login'>Log In</Link>
                           }   
            
          
            </div>
        </div>
    );
};

export default Navbar;