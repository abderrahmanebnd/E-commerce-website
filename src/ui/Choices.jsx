import Choice from "./Choice";

function Choices({ onClick, category }) {
  return (
    <ul className="flex justify-center flex-wrap px-4 gap-x-4 gap-y-2 mb-10  ">
      <Choice onClick={onClick} category={category}>
        All
      </Choice>
      <Choice onClick={onClick} category={category}>
        Headphones
      </Choice>
      <Choice onClick={onClick} category={category}>
        Earbuds
      </Choice>
      <Choice onClick={onClick} category={category}>
        Earphones
      </Choice>
      <Choice onClick={onClick} category={category}>
        Neckbands
      </Choice>
    </ul>
  );
}

export default Choices;
