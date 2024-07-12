import { NavLink } from "react-router-dom";
import Button from "./Button";
import { footMenu } from "../../../public/data/footerData";

function Footer() {
  return (
    <footer className="bg-black pt-10 ">
      <ul className="container m-auto grid gap-7 sm:grid-cols-2 lg:grid-cols-4 px-3 mb-5">
        <li>
          <NavLink to="/" className="text-text text-2xl font-bold block mb-3">
            X-SouQ
          </NavLink>
          <p className="text-text-muted text-sm mb-4">
            Subscribe to our Email alerts to receive early discount offers, and
            new products info.
          </p>
          <input
            placeholder="Email Address*"
            className="bg-transparent p-2 border-2 border-thumb rounded text-track placeholder:text-thumb w-full mb-4"
          />
          <Button>Subscribe</Button>
        </li>

        {footMenu.map((item) => {
          return (
            <li key={item.id}>
              <h2 className="text-text font-semibold mb-5">{item.title}</h2>
              <div className="grid gap-3">
                {item.menu.map((menuItem, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={menuItem.path}
                      className="text-text-muted hover:text-text"
                    >
                      {menuItem.link}
                    </NavLink>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="bg-black px-4 border-t border-text-muted ">
        <p className="text-text py-4 text-sm sm:text-md">
          {new Date().getFullYear()} | X-SouQ. All Rights Reserved. Built by |
          <NavLink className="hover:text-white"> Abderrahmane bnd</NavLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
