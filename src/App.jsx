import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Friends from './pages/Friends';
import Friend from './pages/Friend';
import New from './pages/New';
import Missing from './pages/Missing';

const App = () => {
  const friendList = [
    {
      id: 1,
      name: 'Bertie Yates',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      day: 5,
      month: 5,
      year: 1999,
      phone: '555-471-2345',
      mail: 'me@you.com',
      web: 'https://facebook.com',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
      day: 5,
      month: 9,
      year: 1987,
      phone: '555-471-2345',
      mail: 'me@you.com',
      web: 'https://facebook.com',
    },
    {
      id: 3,
      name: 'Larry Little',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      day: 23,
      month: 2,
      year: 2003,
      phone: '555-471-2345',
      mail: 'me@you.com',
      web: 'https://facebook.com',
    },
    {
      id: 4,
      name: 'Sean Walsh',

      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      day: 5,
      month: 5,
      year: 2008,
      phone: '555-471-2345',
      mail: 'me@you.com',
      web: 'https://facebook.com',
    },
    {
      id: 5,
      name: 'Lola Gardner',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      day: 25,
      month: 12,
      year: 1992,
      phone: '555-471-2345',
      mail: 'me@you.com',
      web: 'https://facebook.com',
    },
  ];

  const months = [
    'All',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [friends, setFriends] = useState([]);
  const [today, setToday] = useState([]);
  const [birthMonth, setBirthMonth] = useState(0);
  const [friendName, setFriendName] = useState('');
  const [friendDay, setFriendDay] = useState('');

  useEffect(() => {
    setFriends(friendList);
  }, []);

  useEffect(() => {
    const day = new Date().getDay();
    const month = new Date().getMonth() + 1;
    console.log(day, month);
    const friendsToday = friends.filter(
      friend => friend.day === day && friend.month === month
    );
    setToday(friendsToday);
  }, [friends]);

  useEffect(() => {
    console.log('Month changed ' + birthMonth);
  }, [birthMonth, setBirthMonth]);

  const handleSubmit = () => {
    console.log('submitted');
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home today={today} />} />
        <Route
          path='/friends'
          element={
            <Friends
              list={months}
              friends={friends}
              setBirthMonth={setBirthMonth}
              birthMonth={birthMonth}
              friendDay={friendDay}
              setFriendDay={setFriendDay}
            />
          }
        />
        <Route
          path='/friends/:id'
          element={<Friend friends={friends} months={months} />}
        />
        <Route
          path='/new'
          element={
            <New
              friends={friends}
              handleSubmit={handleSubmit}
              setFriendName={setFriendName}
              friendName={friendName}
            />
          }
        />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
