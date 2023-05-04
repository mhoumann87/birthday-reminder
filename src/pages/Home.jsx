import List from '../components/List';

const Home = ({ today }) => {
  return (
    <main className='home grid'>
      {today.length ? (
        <div className='list-card shadow flex'>
          <List list={today} />
        </div>
      ) : (
        <p className='margin-y'>None of your friends have birthday today</p>
      )}
    </main>
  );
};
export default Home;
