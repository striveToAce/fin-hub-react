import {
  HomeHeading,
  OurTeams,
  SubHeading,
} from "../components/Home/HomeContents";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

/*
FinHub's Home page "/" 
*/
const Home = () => {
  return (
    <div>
      <Header />
      <HomeHeading />
      <SubHeading />
      <OurTeams />
      <Footer />
    </div>
  );
};
export default Home;
