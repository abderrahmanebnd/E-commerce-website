import { NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Button from "./Button";
import { footMenu } from "../../../public/data/footerData";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent page reload
    if (email) {
      toast.success("Successfully subscribed!");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <footer className="bg-black pt-10 ">
      <ul className="container m-auto grid gap-7 sm:grid-cols-2 lg:grid-cols-4 px-3 mb-5">
        <li>
          <NavLink to="/" className="text-text text-2xl font-bold block mb-3">
            X-Beat
          </NavLink>
          <p className="text-text-muted text-sm mb-4">
            Subscribe to our Email alerts to receive early discount offers, and
            new products info.
          </p>
          <form onSubmit={handleSubscribe}>
            <input
              placeholder="Email Address*"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent p-2 border-2 border-thumb rounded text-text placeholder:text-thumb w-full mb-4"
            />
            <Button>Subscribe</Button>
          </form>
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
          {new Date().getFullYear()} | X-Beat. All Rights Reserved. Built by |{" "}
          <NavLink
            className="hover:text-main underline"
            to="https://github.com/abderrahmanebnd"
          >
            Abderrahmane Bnd
          </NavLink>{" "}
          Inspired from
          <NavLink
            to="https://x-beat.netlify.app/"
            className="hover:text-main underline"
          >
            {" "}
            X-Beat
          </NavLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
