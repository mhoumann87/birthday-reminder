import List from '../components/List';

const Home = ({ today }) => {
  return (
    <main className='container'>
      <div className='card'>
        <List list={today} />
      </div>
    </main>
  );
};
export default Home;
