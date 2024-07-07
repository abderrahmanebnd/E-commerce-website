import Choice from "./Choice";

const choices = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];
function Choices({ onClick, category }) {
  return (
    <ul className="flex justify-center flex-wrap px-4 gap-x-4 gap-y-2 mb-10  ">
      {choices.map((item, index) => {
        return (
          <Choice category={category} onClick={onClick}>
            {item}
          </Choice>
        );
      })}
    </ul>
  );
}

export default Choices;
