import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import FeaturedContests from "../../Components/FeaturedContests/FeaturedContests";
import AdvertiesMent from "../../Components/AdvertiseMent/AdvertiesMent";
import TopContestCreator from "../../Components/TopContestCreator/TopContestCreator";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Contest Hub | Home</title>
      </Helmet>
      <Fade cascade damping={0.1}>
        <Banner></Banner>
        <Categories></Categories>
        <FeaturedContests></FeaturedContests>
        <AdvertiesMent></AdvertiesMent>
        <TopContestCreator></TopContestCreator>
      </Fade>
    </div>
  );
};

export default Home;
