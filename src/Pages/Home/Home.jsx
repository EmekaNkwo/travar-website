import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Navbar from "../../components/Navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import LandingPage from "../../components/LandingPage/LandingPage";

function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />

      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guest love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
}

export default Home;
