import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseTitle from "../../hooks/UseTitle";


const UpdatedToy = () => {
  UseTitle('update toy info ');
   const updatedToy=useLoaderData();
   console.log(updatedToy);
   const {_id}=updatedToy;
   console.log(_id)
    const handleUpdate=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const quantity=form.quantity.value;
        
        const subcategory=form.subcategory.value;
        const price=form.price.value;
       
        const updated={name,quantity,subcategory,price};
        console.log(updated);
        fetch(`http://localhost:5000/addtoys/${_id}`,{
          method:"PUT",
          headers:{
            "content-type":"application/json",
          },
          body:JSON.stringify(updated)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
          if(data.modifiedCount>0){
            Swal.fire({
              title: 'Success!',
              text: 'Toys updated successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
          form.reset();
        })
    }
    return (
        <div className='bg-[#F4F3F0] w-full px-20 pt-10'>

      <h1 className='text-sky-500 text-4xl text-center'>Update Toy</h1>
      <form onSubmit={handleUpdate}>
        <div className='md:flex mb-8'>
          <div className="form-control me-4 w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">

              <input type="text" name="name"className="input input-bordered  w-full" />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">

              <input type="text" name='price' className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <div className='md:flex mb-8 '>
          <div className="form-control md:w-1/2 w-full me-4">
            <label className="label">
              <span className="label-text">sub category</span>
            </label>
            <label className="input-group">

              <input type="text" name="subcategory"  className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 w-full me-4">
            <label className="label">
              <span className="label-text">quantity</span>
            </label>
            <label className="input-group">

              <input type="text" name="quantity" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
      
        <div className="mb-10">
        <input type="submit" className="btn btn-block mb-10"  value="Update Toy"/>
        </div>
      </form>
    </div>
    );
};

export default UpdatedToy;