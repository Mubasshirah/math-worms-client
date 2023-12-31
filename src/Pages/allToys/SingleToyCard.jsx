import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";




const SingleToyCard = ({ toy }) => {
  
    const {user}=useContext(AuthContext);
    const { _id, name, seller_name, sub_category, price, available_quantity, picture, rating,  } = toy;
    const handleViewDetails=()=>{
        if(!user){
            alert('You have to log in first to view details');
          
            return;
           
        }
        else{
            <Link to={`/allToys/${_id}`} className="btn btn-info"></Link>
        }
        
    }
    return (
    
            <tr>
            <th >
                <div>
                    <div className="rounded w-24 h-24">
                        <img src={picture} alt="image" />
                    </div>
                    
                </div>
            </th>
           <td>
           <p>{name}</p>
           </td>
            <td >
              <p>{sub_category}</p>
              
            </td>
            <td >
            <p>{seller_name}</p>
            </td>
            <td >
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Quantity:</strong> {available_quantity}</p>
            <p><strong>Rating:</strong> {rating}</p>
            </td>
               
               <td >
               
                    <Link to={`/allToys/${_id}`} className="btn btn-info" onClick={()=>{handleViewDetails()}}>View Details</Link>

                
               </td>
        </tr>
        
    );
};

export default SingleToyCard;