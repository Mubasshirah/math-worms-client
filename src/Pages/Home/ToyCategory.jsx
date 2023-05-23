import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const ToyCategory = ({ single }) => {
    const { _id,picture, name, price, rating } = single;
    const {user}=useContext(AuthContext);
    const handleViewDetails=()=>{
        if(!user){
            alert('please log in first');
            return;
           
        }
        else{
            <Link to={`/allToys/${_id}`} className="btn btn-info"></Link>
        }
        
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-16">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                
                    <p>Rating: {rating}</p>
                    <div>
                    <Link to={`/allToys/${_id}`} className="btn btn-info" onClick={()=>{handleViewDetails()}}>View Details</Link>

                    </div>
                </div>
                <figure><img src={picture}/></figure>
            </div>
        </div>
    );
};

export default ToyCategory;