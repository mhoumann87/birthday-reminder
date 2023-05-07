const Select = ({ list }) => {
  return (
    <>
      {list.length && (
        <select>
          {list.map(item => (
            <option key={list.indexOf(item)} value={list.indexOf(item)}>
              {item}
            </option>
          ))}
        </select>
      )}
      {!list.length && <p>No List Applied</p>}
    </>
  );
};

export default Select;
