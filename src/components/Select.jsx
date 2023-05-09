const Select = ({ list, handelChange, selected }) => {
  return (
    <>
      {list.length && (
        <select value={selected} onChange={handelChange}>
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
