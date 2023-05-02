const Home = ({ friends }) => {
  return (
    <main className='container'>
      <ul>
        {friends.map(friend => {
          return <li key={friend.id}>{friend.name}</li>;
        })}
      </ul>
    </main>
  );
};
export default Home;
