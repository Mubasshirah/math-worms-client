import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysRow from "./MyToysRow";
import UseTitle from "../../hooks/UseTitle";
import Swal from "sweetalert2";


const MyToys = () => {
    UseTitle('my toys');
    const { user } = useContext(AuthContext);
    const [addedToys, setAddedToys] = useState([]);
    const url = `https://assignment-11-math-worms-server.vercel.app/addtoys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddedToys(data))
    }, [url]);
    const handleDelete = id => {
       
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://assignment-11-math-worms-server.vercel.app/addtoys/${id}`,{
                method:"DELETE"
              })
              .then(res=>res.json())
              .then(data=>{console.log(data)
              if(data.deletedCount>0){
                Swal.fire(
                  'Deleted!',
                  'This toy has been deleted.',
                  'success'
                )
                const remaining=addedToys.filter(toy=>toy._id!==id);
              setAddedToys(remaining);
              
              }
              })
              
            }
          })
        }
    

    
    return (
        <div className="my-10">
            <h2 className="text-5xl text-sky-500 my-5 text-center">Your added toys</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>name</th>
                            <th>Seller name</th>
                            <th>email</th>
                            <th>price</th>
                            <th>category</th>
                            <th>rating</th>
                            <th>details</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedToys.map(addedtoy => <MyToysRow
                                key={addedtoy._id}
                                addedtoy={addedtoy}
                                handleDelete={handleDelete}
                                
                            ></MyToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;