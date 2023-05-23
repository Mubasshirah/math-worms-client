import { useContext } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import UseTitle from "../../hooks/UseTitle";


const AddAToy = () => {
    UseTitle('add a toy');
    const {user}=useContext(AuthContext);
    console.log(user)
    const handleAddAToy=event=>{
     event.preventDefault();
     const form=event.target;
     const name=form.name.value;
     const sellername=user?.displayName;
     const selleremail=user?.email;
     
     const price=form.price.value;
     const subcategory=form.subcategory.value;
     const rating=form.rating.value;
     const quantity=form.quantity.value;
     const details=form.details.value;
     const newToy={name,selleremail,sellername,price,subcategory,rating,quantity,details};
     console.log(newToy);
     fetch('https://assignment-11-math-worms-server.vercel.app/addtoys',{
        method:"POST",
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify(newToy)
      })
      .then(res=>res.json())
      .then(data=>{console.log(data)
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Toy added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
        form.reset();
      })
    }
    return (
        <div>
        <h2 className='text-center text-5xl text-info my-10'>Add a toy </h2>
        <form onSubmit={handleAddAToy}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" required  name="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" required name="sellername" defaultValue={user?.displayName} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} required name="selleremail"   className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" required name="price"  className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub Category</span>
                    </label>
                    <input type="text" required name="subcategory"  className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" required name="rating"  className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="text" required name="quantity"  className="input input-bordered" />
                </div>
                
            </div>
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail Information</span>
                    </label>
                    <textarea name="details" required className="textarea textarea-bordered textarea-lg w-full " ></textarea>

                </div>
            <div className="form-control my-6">
                <input className="btn btn-primary btn-block" type="submit" value="Add this new toy to server" />
            </div>
        </form>
        
    </div>
    );
};

export default AddAToy;