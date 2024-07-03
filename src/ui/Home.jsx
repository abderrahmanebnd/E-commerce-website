import Advantages from "./Advantages";
import FeaturedSlider from "./Sliders/FeaturedSlider";
import HeroSlider from "./Sliders/HeroSlider";
import TopProducts from "./TopProducts";

function Home() {
  return (
    <main className="bg-bgColor pb-5 ">
      <HeroSlider />
      <FeaturedSlider />
      <TopProducts />
      <Advantages />
    </main>
  );
}

export default Home;
