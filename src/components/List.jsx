import ListItem from './ListItem';

const List = ({ list }) => {
  return (
    <>
      {list.length && (
        <ul>
          {list.map(item => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      )}

      {!list.length && <h3>None of your friends have birthday today</h3>}
    </>
  );
};

export default List;
