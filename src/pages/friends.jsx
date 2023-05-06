import Select from '../components/Select';

const Friends = ({ list }) => {
  return (
    <main className='friends grid'>
      <div className='list-card shadow'>
        <header className='list-header'>
          <form className='flex'>
            <label htmlFor='months'>Set Month</label>
            <Select list={list} />
          </form>
        </header>
      </div>
    </main>
  );
};

export default Friends;
