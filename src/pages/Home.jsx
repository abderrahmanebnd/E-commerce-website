import Advantages from "../features/Home/Advantages";
import FeaturedSlider from "../ui/Sliders/FeaturedSlider";
import HeroSlider from "../ui/Sliders/HeroSlider";
import TopProducts from "../features/Home/TopProducts";
import Footer from "../ui/common/Footer";
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
