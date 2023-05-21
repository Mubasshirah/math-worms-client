import Banner from "../Banner";
import Features from "../Features";
import Gallery from "../Gallery";
import ShopByCategory from "../ShopByCategory";
import CustomersReview from "./CustomersReview";



const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Features></Features>
            <ShopByCategory></ShopByCategory>
            <CustomersReview></CustomersReview>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;