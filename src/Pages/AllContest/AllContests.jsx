/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import ContestsCard from "./ContestsCard";
import { Fade } from "react-awesome-reveal";
import CategoriesTitles from "./CategoriesTitles";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NoContestCard from "../../Components/NoContestCard/NoContestCard";
import { categoriesHeading } from "./CategoryHeading";
import LoadingComp from "../../Components/LoadingComp/LoadingComp";
import axios from "axios";
const PAGE_SIZE = 6;

const AllContests = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const [contestsCards, setContestsCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/contests', {
      method: 'GET',
      // headers: {
      //   'content-type': 'application/json',
      // },
      // body: JSON.stringify()
    })
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filteredData = data.filter(
            (dataCard) => dataCard.category === category
          );
          setContestsCards(filteredData);
        } else setContestsCards(data);

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category]);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentCards = contestsCards.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <LoadingComp></LoadingComp>;

  return (
    <Fade cascade damping={0.1}>
      <div className="px-2 md:px-4 py-4 border-2 rounded-lg mt-2">
        <Helmet>
          <title>Contest Hub | Contests</title>
        </Helmet>
        <div className="flex flex-col items-center w-10/12 md:w-6/12 mx-auto text-center mt-4">
          <h1 className="font-font-rubik text-3xl md:text-7xl uppercase">
            Oye Coder?
          </h1>
          <p className="font-font-dancing text-xl md:text-4xl">
            Dont Dodge Any Constests !!! Okay?
          </p>
        </div>
        <div className="mt-4 border-2 rounded-lg px-4 py-4">
          <div className="text-gray-600 flex gap-4 justify-between items-center text-xs md:text-sm font-font-poppins font-normal overflow-x-auto">
            {categoriesHeading.map((headings) => (
              <CategoriesTitles
                key={headings.title}
                title={headings.title}
                selected={category === headings.title}
              ></CategoriesTitles>
            ))}
          </div>
        </div>
        {currentCards && currentCards.length > 0 ? (
          <div>
          {contestsCards && contestsCards.length > 0 ? (
            <div className="mt-4 md:mt-10 rounded-lg py-4 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10">
              {contestsCards.map((contest) => (
                <ContestsCard
                  key={contest._id}
                  contest={contest}
                ></ContestsCard>
              ))}
            </div>
          ) : (
            <NoContestCard></NoContestCard>
          )}
        </div>
        ) : (
          <NoContestCard></NoContestCard>
        )}
        <div className="flex justify-center mt-4">
          {contestsCards && contestsCards.length > PAGE_SIZE ? (
            <div className="join">
             {[...Array(Math.ceil(contestsCards.length / PAGE_SIZE))].map(
              (_, index) => (
                <button
                  key={index}
                  className={`join-item btn ${
                    currentPage === index + 1 ? "btn-active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        ) : (
          <div></div>
        )}
        </div>
      </div>
    </Fade>
  );
};

export default AllContests;
