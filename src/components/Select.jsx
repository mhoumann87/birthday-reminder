const Select = ({ list }) => {
  return (
    <>
      {list.length && (
        <select>
          {list.map(item => (
            <option value={list.indexOf(item) + 1}>{item}</option>
          ))}
        </select>
      )}
      {!list.length && <p>No List Applied</p>}
    </>
  );
};

export default Select;
