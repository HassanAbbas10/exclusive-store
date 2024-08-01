import BestSelling from "@/components/BestSelling/BestSelling";
import BrowseCat from "@/components/BrowseCategory/BrowseCat";
import FlashSale from "@/components/FlashSale/FlashSale";
import Hero from "@/components/Hero/Hero";


const Home = () => {
  return (
    <>
    <Hero/>
    <FlashSale/>
    <BrowseCat/>
    <BestSelling/>
    </>
  );
};

export default Home;
