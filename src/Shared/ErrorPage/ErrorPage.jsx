import { Link } from 'react-router-dom';
import error from '../../../src/assets/404.jpg'
const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto flex justify-center items-center'>
            <div className='w-1/2'>
                <img src={error} alt="error..." />
            </div>
            <div className='w-1/2 flex justify-center items-center'>
               <Link to="/"><button className='btn btn-sm btn-outline'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;