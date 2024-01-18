import { Helmet } from 'react-helmet-async';
import Banner from '../../Components/Banner/Banner';
import Categories from '../../Components/Categories/Categories';
import FeaturedContests from '../../Components/FeaturedContests/FeaturedContests';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Contest Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <FeaturedContests></FeaturedContests>
        </div>
    );
};

export default Home;