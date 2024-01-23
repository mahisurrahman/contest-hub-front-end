import { Helmet } from 'react-helmet-async';
import Banner from '../../Components/Banner/Banner';
import Categories from '../../Components/Categories/Categories';
import FeaturedContests from '../../Components/FeaturedContests/FeaturedContests';
import AdvertiesMent from '../../Components/AdvertiseMent/AdvertiesMent';
import TopContestCreator from '../../Components/TopContestCreator/TopContestCreator';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Contest Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <FeaturedContests></FeaturedContests>
            <AdvertiesMent></AdvertiesMent>
            <TopContestCreator></TopContestCreator>
        </div>
    );
};

export default Home;