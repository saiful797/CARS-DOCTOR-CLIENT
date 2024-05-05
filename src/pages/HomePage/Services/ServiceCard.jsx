import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({service}) => {
    console.log(service);
    const {img,price,title} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={img} alt="service photo.." className="rounded-xl" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className='text-[#FF3811]'>Price: ${price}</p>
            <div className="card-actions flex justify-end">
                <button className="btn text-[#FF3811]"><FaArrowRight />
</button>
            </div>
        </div>
        </div>
    );
};

ServiceCard.propTypes={
    service: PropTypes.object.isRequired,
}
export default ServiceCard;