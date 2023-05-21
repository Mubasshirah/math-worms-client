import { useLoaderData } from "react-router-dom";
import SingleToyCard from "./SingleToyCard";


const AllToys = () => {
    const toys=useLoaderData()
    return (
        
               <div>
            <h2 className="text-5xl text-sky-500 my-5 text-center">Grab Your favourite toys!</h2>
            <div className="overflow-x-auto ">
                <table className="table table-compact w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>
                                <p>Picture and</p>
                                <p>Toy Name</p>
                            </th>
                            <th>Description</th>
                            <th>Sub Category</th>
                            <th>Seller</th>
                            <th> 
                                <p>Price</p>
                                <p>available quantity</p>
                                <p>and rating</p>
                            </th>
                            <th>
                                <p>Status</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                          {toys.map(toy=><SingleToyCard toy={toy} key={toy._id}></SingleToyCard>)}
                    </tbody>

                </table>
            </div>
        


          
        </div>
    );
};

export default AllToys;