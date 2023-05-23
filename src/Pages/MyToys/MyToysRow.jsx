import { Link } from "react-router-dom";


const MyToysRow = ({addedtoy,handleDelete}) => {
    const {_id,name,price,selleremail,sellername,quantity,rating,subcategory,details}=addedtoy;
    return (
        <tr>
        <th>
            <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </th>
        
        <td>
            {name}
        </td>
        <td>{selleremail}</td>
        <td>{sellername}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>{rating}</td>
        <td>{subcategory}</td>
        <td>{details}</td>
        <th>
        <Link to={`/addtoys/${_id}`} className="btn btn-ghost btn-xs">Update</Link>
          
        </th>
    </tr>
    );
};

export default MyToysRow;