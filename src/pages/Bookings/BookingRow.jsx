import PropTypes from 'prop-types'
const BookingRow = ({booking}) => {
    // console.log(booking);
    const {_id, price,img,title,date} = booking;

    const handleDelete = (id) =>{
        const proceed = confirm('Are you sure you want to Delete!');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE',

            })
              .then(res => res.json())
              .then(data => {
                // console.log(data);
                if(data.deletedCount>0){
                    alert('Booking Service Deleted Successfully');
                    location.reload();
                }
              })
        }
    }

    const handleBookingConfirm=(id)=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                // Update State
            }
        })
    }
    return (
        <tr>
            <th>
            <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            </th>
            <td>
            
                <div className="avatar">
                <div className="rounded w-20 h-20">
                    <img src={img} alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>{date}</td>
            <td>{price}</td>
            <th>
            <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
            </th>
        </tr>
    );
};

BookingRow.propTypes={
    booking: PropTypes.object,
}
export default BookingRow;