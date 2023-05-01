import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className='nav flex'>
        <li className='nav-link'>
          <NavLink to='/'>Full List</NavLink>
        </li>
        <li className='nav-link'>
          <NavLink to='/new'>Add New</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
