import List from '../components/List';

const Home = ({ today }) => {
  return (
    <main className='home grid'>
      <div className='list-card shadow'>
        <header className='list-header'>
          <h3>Birthdays Today</h3>
        </header>
        {today.length ? (
          <List list={today} />
        ) : (
          <p className='margin-y text-center'>
            None of your friends have birthday today
          </p>
        )}
      </div>
    </main>
  );
};
export default Home;
