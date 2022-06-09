import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Navbar from "../../components/Navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import LandingPage from "../../components/LandingPage/LandingPage";
import Search from "../../components/search/Search";

function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />

      <div className="homeContainer">
        <Search />
        <Featured />

        <PropertyList />

        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
}

export default Home;
