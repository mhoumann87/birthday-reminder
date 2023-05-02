import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Friends from './pages/friends';
import Friend from './pages/friend';
import New from './pages/New';
import Missing from './pages/Missing';

function App() {
  const friendList = [
    {
      id: 1,
      name: 'Bertie Yates',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      day: 1,
      month: 5,
      year: 2008,
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
      year: 2008,
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
      year: 2008,
      phone: '555-471-2345',
      mail: 'me@you.com',
    },
    {
      id: 4,
      name: 'Sean Walsh',

      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      day: 1,
      month: 5,
      year: 2008,
      phone: '555-471-2345',
      mail: 'me@you.com',
    },
    {
      id: 5,
      name: 'Lola Gardner',

      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      day: 25,
      month: 12,
      year: 2008,
      phone: '555-471-2345',
      mail: 'me@you.com',
    },
  ];

  const [friends, setFriends] = useState(friendList);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home friends={friends} />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/friends/:id' element={<Friend />} />
        <Route
          path='/new'
          element={<New friends={friends} setFriends={setFriends} />}
        />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
