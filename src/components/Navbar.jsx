import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="app-ul">
          <li className="app-li">
            <NavLink to="/" activeClassName="active">
              &larr; Movies</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};