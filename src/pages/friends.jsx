import Select from '../components/Select';

const Friends = ({ list }) => {
  return (
    <form>
      <label htmlFor='months'>See Month</label>
      <Select list={list} />
    </form>
  );
};

export default Friends;
