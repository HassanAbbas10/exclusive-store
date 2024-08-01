import BestSelling from "@/components/BestSelling/BestSelling";
import BrowseCat from "@/components/BrowseCategory/BrowseCat";
import ExploreItems from "@/components/ExploreItems/ExploreItems";
import FlashSale from "@/components/FlashSale/FlashSale";
import Hero from "@/components/Hero/Hero";
import ProductCountdown from "@/components/ProductCountdown/ProductCountdown";
import NewArrival from "@/components/NewArrival/NewArrival";

const Home = () => {
  return (
    <>
    <Hero/>
    <FlashSale/>
    <BrowseCat/>
    <BestSelling/>
    <ProductCountdown/>
    <ExploreItems/>
    <NewArrival/>
    </>
  );
};

export default Home;
