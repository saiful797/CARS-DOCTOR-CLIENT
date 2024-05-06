import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
         .then(res => res.json())
         .then(data =>{
            // console.log(data);
            setServices(data);
         })
    },[])
    return (
        <div>
            <div className="mt-10">
                <h2 className="text-2xl text-center font-bold text-[#FF3811]">Service</h2>
                <h4 className="text-5xl font-bold mt-4 text-center">Our Service Area</h4>
                <p className="text-base text-balance w-1/2 mx-auto text-center mt-4">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
                </p>
            </div>
            <div className="mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3 place-content-center">
                {
                    services.map(service => <ServiceCard key={service._id} service ={service} />)
                }
            </div>
        </div>
    );
};

export default Services;