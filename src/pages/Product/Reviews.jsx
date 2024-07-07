import { IoMdStar } from "react-icons/io";
import reviewsData from "../../../public/data/reviewsData";

function Reviews() {
  return (
    <ul className="container m-auto ">
      {reviewsData.map((item) => {
        return (
          <li key={item.id} className="mb-8">
            <div className="flex items-center gap-5 mb-2">
              <img
                src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
                alt="user-img"
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h2 className="text-text font-bold mb-1">{item.name}</h2>
                <p className="text-text">
                  <span className="inline-flex text-sm text-main">
                    {Array.from({ length: item.rateCount }, (_, i) => (
                      <IoMdStar key={i} />
                    ))}
                  </span>
                  | <span className="text-text-muted  ">{item.date}</span>
                </p>
              </div>
            </div>
            <p className="text-text">{item.review}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Reviews;
