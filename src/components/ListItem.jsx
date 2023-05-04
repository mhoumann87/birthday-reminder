import { Link } from 'react-router-dom';
import profilePic from '../assets/generic-user-profile_354184-1481565527.png';

const ListItem = ({ item }) => {
  const year = new Date().getFullYear();
  return (
    <Link to={`/friends/${item.id}`}>
      <li className='list-item flex shadow'>
        <p className='sr-only'>Link to all info about {item.name}</p>
        <img src={item.image ? item.image : profilePic} alt={item.name} />
        <div className='list-content'>
          <h3>{item.name}</h3>
          <p className='small'>Age {year - item.year}</p>
        </div>
      </li>
    </Link>
  );
};

export default ListItem;
