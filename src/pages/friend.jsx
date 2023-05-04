import { useParams } from 'react-router-dom';
import profilePic from '../assets/generic-user-profile_354184-1481565527.png';

const Friend = ({ friends, months }) => {
  const { id } = useParams();
  const thisYear = new Date().getFullYear();
  const friend = friends.find(friend => friend.id.toString() === id);
  const month = months[friend.month - 1];
  const age = thisYear - friend.year;

  return (
    <>
      {friend.id && (
        <main className='friend-info grid'>
          <div className='card flex'>
            <img
              src={friend.image ? friend.image : profilePic}
              alt='friend.name'
            />
            <div className='info-box'>
              <h2>{friend.name}</h2>
              <p>
                Birthday: {month} {friend.day} {friend.year}
              </p>
              <p>Age {age} years old</p>
              <p>
                Phone Number:{' '}
                {friend.phone ? friend.phone : 'No phone number added'}
              </p>
              <p>
                E-mail:{' '}
                {friend.mail ? (
                  <>
                    <a href={`mailto:${friend.mail}`}>{friend.mail}</a>
                  </>
                ) : (
                  'No email added'
                )}
              </p>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Friend;
