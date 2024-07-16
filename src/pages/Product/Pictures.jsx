import { useEffect, useState } from "react";
import productsData from "../../../public/data/productsData";

function Pictures({ id }) {
  const images = productsData[id - 1].images;
  const [selectedPic, setSelectedPic] = useState(images[0]);
  useEffect(
    function () {
      setSelectedPic(images[0]);
    },
    [images]
  );
  return (
    <section className="flex flex-col-reverse  gap-1 sm:flex-row flex-grow ">
      <ul className="flex sm:flex-col gap-6 ">
        {images.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setSelectedPic(item)}
              className="w-full"
            >
              <figure
                className={`rounded border-2 ${
                  selectedPic === item ? "text-text" : "border-thumb"
                } p-1 cursor-pointer`}
              >
                <img src={item} alt="Product" className="sm:w-16 w-full " />
              </figure>
            </li>
          );
        })}
      </ul>

      <figure className="flex-grow">
        <img
          src={selectedPic}
          alt="Hero-Pic"
          className="w-auto m-auto sm:w-80 md:w-96"
        />
      </figure>
    </section>
  );
}

export default Pictures;
