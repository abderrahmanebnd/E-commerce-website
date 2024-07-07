import { useParams } from "react-router-dom";
import productsData from "../../../public/data/productsData";

function Overview() {
  const id = useParams().id;
  const item = productsData[id - 1];
  return (
    <div className="container m-auto text-text  ">
      <p className="font-semibold leading-8  mb-5 text-xl">
        The <span className="text-main">{item.title}</span> {item.connectivity}{" "}
        {item.category} provides with fabulous sound quality{" "}
      </p>
      <ul className="list-disc list-inside space-y-3 mb-5 text-lg">
        <li>Sound Tuned to Perfection</li>
        <li>Comfortable to Wear</li>
        <li>Long Hours Playback Time</li>
      </ul>
      <p className="leading-8 text-sm sm:text-lg">
        Buy{" "}
        <span className="font-semibold">
          {item.title} {item.connectivity}
          {item.category}{" "}
        </span>
        which offers you with fabulous music experience by providing you with
        awesome sound quality that you can never move on from. Enjoy perfect
        flexibility and mobility with amazing musical quality with these Earbuds
        giving you a truly awesome audio experience. It blends with exceptional
        sound quality and a range of smart features for an unrivalled listening
        experience.
      </p>
    </div>
  );
}

export default Overview;
