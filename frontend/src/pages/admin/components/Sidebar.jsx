import { NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";
import { HiCube } from "react-icons/hi";
import "./Sidebar.css";

function Sidebar() {
  const menuLi = [
    {
      name: "Dashboard",
      link: "/",
      icon: <MdDashboardCustomize />,
    },
    {
      name: "Products",
      link: "/products",
      icon: <HiCube />,
    },
    {
      name: "Categories",
      link: "/categories",
      icon: <HiAdjustments />,
    },
    {
      name: "Users",
      link: "/users",
      icon: <FaUserFriends />,
    },
  ];
  return (
    <>
      <div style={{ width: "300px" }}>
        <div className="p-3 bg-dark">
          <h2 className="text-center text-white py-3">Admin Panel</h2>
          <ul className="list-unstyled">
            {menuLi.map((newLi, index) => {
              return (
                <li key={index} className="">
                  <NavLink
                    className="p-2 d-block mb-2 rounded text-white text-decoration-none"
                    to={newLi.link}
                  >
                    {newLi.icon}
                    {newLi.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
