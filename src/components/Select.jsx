const Select = ({ list, selected, setChange }) => {
  console.log(selected);
  return (
    <>
      {list.length && (
        <select value={selected} onChange={e => setChange(e.target.value)}>
          {list.map((value, key) => (
            <option
              key={key}
              value={key}
              aria-selected={key === selected ? true : false}>
              {value}
            </option>
          ))}
        </select>
      )}
      {!list.length && <p>No List Applied</p>}
    </>
  );
};

export default Select;
