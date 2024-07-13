import { NavLink } from "react-router-dom";

function Button({ type, to, children, onClick, customClass }) {
  const style = ` bg-main-2 px-5 py-2  sm:px-5 sm:py-3 capitalize  text-white block w-fit rounded-md hover:bg-main transition-colors duration-200  sm:m-0 ${customClass}`;

  if (type === "link") {
    return (
      <NavLink className={style} to={to}>
        {children}
      </NavLink>
    );
  }
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
