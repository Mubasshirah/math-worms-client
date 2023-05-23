import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysRow from "./MyToysRow";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [addedToys, setAddedToys] = useState([]);
    const url = `http://localhost:5000/addtoys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddedToys(data))
    }, [url]);
    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/addtoys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = addedToys.filter(addedToy => addedToy._id !== id);
                        setAddedToys(remaining);
                    }
                })
        }
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