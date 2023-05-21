

const SingleToyCard = ({ toy }) => {
    const { _id, name, seller_name, sub_category, price, available_quantity, picture, rating, description } = toy;
    return (
    
            <tr>
            <th >
                <div>
                    <div className="rounded w-24 h-24">
                        <img src={picture} alt="image" />
                    </div>
                    <p>{name}</p>
                </div>
            </th>
            <td >
            <p className="w-[15%]">
                {description}
              </p>
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
                <button className="btn btn-info">View Details</button>
               </td>
        </tr>
        
    );
};

export default SingleToyCard;