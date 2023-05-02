import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className='nav flex'>
        <li className='nav-link'>
          <NavLink to='/'>Today</NavLink>
        </li>
        <li className='nav-link'>
          <NavLink to='/friends'>Friends</NavLink>
        </li>
        <li className='nav-link'>
          <NavLink to='/new'>New</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
