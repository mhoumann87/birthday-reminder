import List from '../components/List';

const Home = ({ today }) => {
  return (
    <main className='home grid'>
      <div className='list-card shadow'>
        <List list={today} />
      </div>
    </main>
  );
};
export default Home;
