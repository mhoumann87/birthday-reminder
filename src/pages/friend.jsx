import { useParams } from 'react-router-dom';
import profilePic from '../assets/generic-user-profile_354184-1481565527.png';

const Friend = ({ friends, months }) => {
  let month, age;
  const { id } = useParams();
  const thisYear = new Date().getFullYear();
  const friend = friends.find(friend => friend.id.toString() === id);

  if (friend) {
    month = months[friend.month - 1];
    age = thisYear - friend.year;
  }

  return (
    <>
      <main className='friend-info grid'>
        <div className='card flex'>
          {friend && (
            <>
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
                <p>
                  Web Address:{' '}
                  {friend.web ? (
                    <a href={`${friend.web}`} target='_blank'>
                      {friend.web}
                    </a>
                  ) : (
                    <p>No web sited added</p>
                  )}
                </p>
              </div>
            </>
          )}
          {!friend && <h3>Sorry can't find a friend with that id</h3>}
        </div>
      </main>
    </>
  );
};

export default Friend;
