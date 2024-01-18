import imageOne from '../../assets/img2.jpg';

const FeaturedContestCard = () => {
    return (
        <div className="px-2 py-4 border-2 rounded-xl">
            <div className='flex flex-col gap-4 items-center mb-4'>
                <img src={imageOne} className='w-40 rounded-lg' alt="" />
                <h1 className='font-font-roboto-slab font-bold text-lg underline'>Contest Name</h1>
            </div>
            <div className='font-font-poppins text-center'>
                <p className='text-sm mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quis?</p>
                <p className='text-sm font-bold'>Attempted Count: <span className='font-light'>{}</span></p>
                <button className='my-2 px-4 py-1 rounded-sm bg-black text-white '>Details</button>
            </div>
        </div>
    );
};

export default FeaturedContestCard;