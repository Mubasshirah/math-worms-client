import { useLoaderData } from "react-router-dom";


const SingleToyViewDetails = () => {
    const toy = useLoaderData();
    const { _id, name, seller_name, seller_email, sub_category, price, available_quantity, picture, rating, description } = toy;
    return (
        <div className="my-14 ">
            <div className="card lg:card-side bg-base-100 shadow-xl">
               <div className="md:w-1/2">
               <figure><img src={picture} alt="Album" className="w-full h-[450px]" /></figure>
               </div>
                <div className="card-body md:w-1/2">
                    <h2 className="card-title"> {name}</h2>
                    <p><strong>Seller name:</strong> {seller_name}</p>
                    <p><strong>Seller email:</strong> {seller_email}</p>
                    <p><strong>Price:</strong>$ {price}</p>
                    <p><strong>Rating:</strong> {rating}</p>
                    <p><strong>Available Quantity:</strong> {available_quantity}</p>
                    <p><strong>Description:</strong> {description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleToyViewDetails;