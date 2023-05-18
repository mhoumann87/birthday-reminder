const Input = ({ type, name, info, required, value, onChange, min, max }) => {
  const minVal = min !== '' ? `min=${min}` : '';

  return (
    <>
      <label htmlFor={name} className='sr-only'>
        {info}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={info}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </>
  );
};

export default Input;
