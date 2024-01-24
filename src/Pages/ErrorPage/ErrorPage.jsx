import { Link } from 'react-router-dom';
import './Errorpage.css';

const ErrorPage = () => {
    return (
        <div className="errorbg border-2 rounded-lg mt-4">
            <div className='bg-black w-full min-h-screen z-10 bg-opacity-80 flex flex-col justify-center items-center rounded-lg'>
                <h1 className='tracking-widest text-2xl md:text-7xl font-font-poppins font-extrabold text-white'>404 Route Not Found</h1>
                <Link to="/"><button className='px-4 py-2 text-5xl font-font-poppins font-bold bg-white text-black mt-10 rounded-lg border-2 border-black hover:cursor-pointer hover:bg-black hover:text-white hover:duration-700'>Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;