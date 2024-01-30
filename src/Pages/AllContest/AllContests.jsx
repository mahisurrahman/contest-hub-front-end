import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LoadingComp from "../../Components/LoadingComp/LoadingComp";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

import axiosSecure from "../../API";
import { useEffect, useState } from "react";
import ContestsCard from "./ContestsCard";

const AllContests = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [allContests, setAllContests] = useState([]);

  useEffect(() => {
    axiosSecure.get("/contests").then((res) => {
      setAllContests(res.data);
      setLoading(false);
    });
  }, []);

  const frontEndExpert = allContests.filter(
    (item) => item.contestCategory === "Front-End-Experts"
  );
  const codingChallenges = allContests.filter(
    (item) => item.contestCategory === "Coding-Challenges"
  );
  const jsChallenges = allContests.filter(
    (item) => item.contestCategory === "JS-Challenges"
  );
  const wordpress = allContests.filter(
    (item) => item.contestCategory === "WordPress"
  );
  const fullStacker = allContests.filter(
    (item) => item.contestCategory === "Full-Stacker"
  );
  const youtubeThumbnailers = allContests.filter(
    (item) => item.contestCategory === "Youtube-Thumbnailers"
  );
  const facebookCovers = allContests.filter(
    (item) => item.contestCategory === "Facebook-Covers"
  );
  const bugSolvers = allContests.filter(
    (item) => item.contestCategory === "Bug-Solvers"
  );

  if (loading) return <LoadingComp></LoadingComp>;
  return (
    <Fade cascade damping={0.1}>
      <div className="px-2 md:px-4 py-4 border-2 rounded-lg mt-2">
        <Helmet>
          <title>Contest Hub | Contests</title>
        </Helmet>
        <div>
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className="font-font-poppins font-semibold text-[12px] overflow-x-auto">
              <Tab>All-Contest</Tab>
              <Tab>Front-End-Experts</Tab>
              <Tab>Coding-Challenges</Tab>
              <Tab>JS-Challenges</Tab>
              <Tab>WordPress</Tab>
              <Tab>Full-Stacker</Tab>
              <Tab>Youtube-Thumbnailers</Tab>
              <Tab>Facebook-Covers</Tab>
              <Tab>Bug-Solvers</Tab>
            </TabList>
            <div className="mt-10 border-2 rounded-lg px-4 py-4">
              <TabPanel>
                <div className="grid grid-cols-3 gap-5 px-4 py-2">
                  {allContests.map((contests) => (
                    <ContestsCard
                      key={contests._id}
                      contests={contests}
                    ></ContestsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5 px-4 py-2">
                  {frontEndExpert.map((contests) => (
                    <ContestsCard
                      key={contests._id}
                      contests={contests}
                    ></ContestsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5 px-4 py-2">
                  {codingChallenges.map((contests) => (
                    <ContestsCard
                      key={contests._id}
                      contests={contests}
                    ></ContestsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5 px-4 py-2">
                  {jsChallenges.map((contests) => (
                    <ContestsCard
                      key={contests._id}
                      contests={contests}
                    ></ContestsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5 px-4 py-2">
                  {wordpress.map((contests) => (
                    <ContestsCard
                      key={contests._id}
                      contests={contests}
                    ></ContestsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5 px-4 py-2">
                  {fullStacker.map((contests) => (
                    <ContestsCard
                      key={contests._id}
                      contests={contests}
                    ></ContestsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5 px-4 py-2">
                  {youtubeThumbnailers.map((contests) => (
                    <ContestsCard
                      key={contests._id}
                      contests={contests}
                    ></ContestsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5 px-4 py-2">
                  {facebookCovers.map((contests) => (
                    <ContestsCard
                      key={contests._id}
                      contests={contests}
                    ></ContestsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5 px-4 py-2">
                  {bugSolvers.map((contests) => (
                    <ContestsCard
                      key={contests._id}
                      contests={contests}
                    ></ContestsCard>
                  ))}
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </Fade>
  );
};

export default AllContests;
