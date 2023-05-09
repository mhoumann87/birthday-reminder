import List from '../components/List';
import Select from '../components/Select';

const Friends = ({ list, friends, handelChange, birthMonth }) => {
  return (
    <main className='friends grid'>
      <div className='list-card shadow'>
        <header className='list-header'>
          <form className='flex'>
            <label htmlFor='months'>Set Month</label>
            <Select
              list={list}
              handelChange={handelChange}
              selected={birthMonth}
            />
          </form>
        </header>
        {friends.length ? (
          <List list={friends} />
        ) : (
          <h3>No friends in your app</h3>
        )}
      </div>
    </main>
  );
};

export default Friends;
