import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { toast } from "react-hot-toast";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";

const MobileMenu = ({ menuOptions }) => {
  const localData = localStorage.getItem("userInfo");
  let userdetail = JSON.parse(localData);
  const navigate = useNavigate();
  const handleLogOut = () => {
    if (localData) {
      localStorage.removeItem("userInfo");
      toast.success("Logout Successfully");
      window.location.reload();
      navigate("/");
    }
  };
  return (
    <Menu as="div" className="inline-block relative text-left md:hidden">
       <div className="flex justify-center items-center">
       {userdetail && (
            <Link to="/profile" className="font-bold text-md mr-3 text-center">
              <button>
                <img
                  className="w-10 rounded-full"
                  title={userdetail?.name}
                  src={userdetail.photo}
                  alt=""
                />
              </button>
            </Link>
          )}
      <Menu.Button className="p-1.5 text-2xl rounded-md bg-primary-900 border border-primary-700 hover:bg-primary-950/50 hover:border-primary-600 shadow-sm">
        <HiMenuAlt3 /> 
      </Menu.Button>
       </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 px-2.5 py-4 mt-2 space-y-1 w-40 rounded-md shadow-lg origin-top-right bg-slate-100 focus:outline-none border border-primary-700">
          {menuOptions.map(({ title, link }) => (
            <Menu.Item
              className="block px-3 py-2 font-medium rounded-md hover:bg-primary-700 hover:text-white"
              as={NavLink}
              key={link}
              to={link}
            >
              {title}
            </Menu.Item>
          ))}
                    
          {userdetail ? (
            userdetail?.email ? (
              <li className="list-none font-medium text-lg">
                <button
                  onClick={handleLogOut}
                  className="bg-red-500 text-white py-1 px-4 rounded-full text-sm"
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li className="list-none font-medium text-lg">
                <Link to="/login">Login</Link>
              </li>
            )
          ) : (
            <li className="list-none font-medium text-lg">
              <Link to="/signup">Sign Up</Link>
            </li>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MobileMenu;
