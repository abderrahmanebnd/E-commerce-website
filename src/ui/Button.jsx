import { NavLink } from "react-router-dom";

function Button({ type, to, children, onClick, customClass }) {
  const style = ` bg-main px-3 py-2  sm:px-5 sm:py-3 capitalize  text-white block w-fit rounded-md hover:bg-main-2 transition-colors duration-200 m-auto sm:m-0 ${customClass}`;

  if (type === "link") {
    return (
      <NavLink className={style} onClick={() => onClick()}>
        {children}
      </NavLink>
    );
  }
  return <button className={style}>{children}</button>;
}

export default Button;
