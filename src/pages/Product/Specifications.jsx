import { useParams } from "react-router-dom";
import productsData from "../../../public/data/productsData";

function Specifications() {
  const id = useParams().id;
  const item = productsData[id - 1];
  return (
    <ul className="space-y-5 container m-auto">
      <Spec type={"Brand"} data={item.brand} />
      <Spec type={"Model"} data={item.title} />
      <Spec type={"Generic Name"} data={item.category} />
      <Spec type={"Type"} data={item.type} />
      <Spec type={"Connectivity"} data={item.connectivity} />
      <Spec type={"Microphone"} data={"Yes"} />
    </ul>
  );
}

export default Specifications;

function Spec({ type, data }) {
  return (
    <li className="flex w-full sm:w-1/2 justify-between text-text ">
      <span>{type}</span>
      <span className="font-semibold text-lg">{data}</span>
    </li>
  );
}
