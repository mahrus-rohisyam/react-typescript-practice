import { Link } from "react-router-dom";

type NavList = {
  name: string;
  link: string;
};

type Props = {
  navLists: NavList[];
};

const MainNavbar = ({ navLists }: Props) => {
  return (
    <nav>
      <ul>
        {navLists.map((navList, index) => {
          return (
            <li>
              <Link to={navList.link} key={index}>
                {navList.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNavbar;
