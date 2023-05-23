
import UseTitle from "../../hooks/UseTitle";
import SingleToyCard from "./SingleToyCard";
import { useEffect, useState } from "react";


const AllToys = () => {
    UseTitle('all toys');
    const [toys,setToys]=useState([]);
    const [searchText,setSearchText]=useState('');
    useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[]);
    const handleSearch=()=>{
    
           fetch(`http://localhost:5000/toyname/${searchText}`)
           .then(res=>res.json())
           .then(data=>setToys(data))

        
    }
    return (

        <div>
            <h2 className="text-5xl text-sky-500 my-5 text-center">Grab Your favourite toys!</h2>
            <div className="text-center my-10">
            <div className="form-control ">
                    <div className="input-group w-1/4 mx-auto">
                        <input onChange={(e)=>setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered " />
                        <button onClick={handleSearch} className="btn btn-square bg-info border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto ">
                <table className="table table-compact w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>
                                <p>Picture</p>
                                
                            </th>
                            <th>
                            <p>Toy Name</p>
                            </th>

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
                        {toys.map(toy => <SingleToyCard toy={toy} key={toy._id}></SingleToyCard>)}
                    </tbody>

                </table>
            </div>




        </div>
    );
};

export default AllToys;