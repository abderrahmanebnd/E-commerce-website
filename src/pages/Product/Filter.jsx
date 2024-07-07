const dataTypes = ["specifications", "overview", "reviews"];
function Filter({ setDataType, dataType }) {
  return (
    <ul className="mt-20 mb-14 flex m-auto container justify-center gap-y-5 gap-x-20 flex-wrap">
      {dataTypes.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => setDataType(item)}
            className={`text-text ${
              item === dataType ? "bg-main text-white" : ""
            } px-2 py-1 rounded text-sm cursor-pointer capitalize transition-colors duration-300`}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default Filter;
