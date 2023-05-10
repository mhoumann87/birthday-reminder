const Select = ({ list, handelChange, selected, setChange }) => {
  return (
    <>
      {list.length && (
        <select value={selected} onChange={e => setChange(e.target.value)}>
          {list.map(item => (
            <option
              key={list.indexOf(item)}
              value={list.indexOf(item)}
              aria-selected={list.indexOf(item) === selected ? true : false}>
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
