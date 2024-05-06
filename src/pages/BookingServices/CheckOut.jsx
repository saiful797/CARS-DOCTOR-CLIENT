import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const {_id,title, price, img} =service;
    const {user} = useContext(AuthContext);

    const handleBookService = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;

        const bookingInfo = {
            CustomerName: name, 
            date, 
            img,
            email, 
            serviceId: _id,
            price: price
        };
        console.log(bookingInfo);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
            if(data.insertedId){
                alert('Service Booked Successfully!');
            }
            
        })

    }
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Book Service: {title}</h1>

            <form onSubmit={handleBookService} className="card-body">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.name} placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" placeholder="Enter Your Email..." className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
               </div>

                <div className="form-control mt-6">
                    <input className="btn btn-outline text-[#FF3811]" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
        
    );
};

export default CheckOut;