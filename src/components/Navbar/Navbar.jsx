import {
  MdOutlineHowToVote
} from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
  
  const MENU_OPTIONS = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Add Task',
      link: '/add-task',
    },
    {
      title: 'Sign Up',
      link: '/signup',
    },
    {
      title: 'Login',
      link: '/login',
    },
  ];
  
  const Navbar = () => {
  
    return (
      <header className="container flex sticky top-0 z-20 justify-between items-center py-2 md:py-3 px-6 lg:px-0">
        <Link
          className="px-3 py-2 rounded-lg"
          to="/">
          <h1 className="flex items-center text-2xl font-bold ">
            <MdOutlineHowToVote className="text-3xl text-accent-500 me-1" />
            CT<span className="text-accent-500 text-blue-700"> M</span>
          </h1>
        </Link>
        <nav>
          <ul className="hidden gap-2 items-center md:flex">
            {MENU_OPTIONS.map(({ title, link}) => (
              <li key={link}>
                <NavLink
                  className="flex items-center px-3 py-2 font-medium rounded-lg md:text-lg"
                  to={link}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <MobileMenu menuOptions={MENU_OPTIONS}></MobileMenu>
        </nav>
      </header>
    );
  };
  
  export default Navbar;