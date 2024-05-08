import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user.email}`
    const [bookings, setBookings] = useState([]);

    useEffect(() =>{
        fetch(url)
         .then(res => res.json())
         .then(data => {
            // console.log(data);
            setBookings(data);
         })
    },[url])
    
    return (
        <div>
            <h1>Loading Data: {bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="text-xl font-bold">
                        <th>Action</th>
                        <th>Image</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        bookings.map(booking => <BookingRow key={booking._id} booking={booking}/>)
                      }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default Bookings;