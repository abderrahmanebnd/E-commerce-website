import Advantages from "../../ui/Advantages";
import FeaturedSlider from "../../ui/Sliders/FeaturedSlider";
import HeroSlider from "../../ui/Sliders/HeroSlider";
import TopProducts from "../../ui/TopProducts";
import Footer from "../../ui/Footer";
function Home() {
  return (
    <main className="bg-bgColor pb-5 ">
      <HeroSlider />
      <FeaturedSlider />
      <TopProducts />
      <Advantages />
      <Footer />
    </main>
  );
}

export default Home;
