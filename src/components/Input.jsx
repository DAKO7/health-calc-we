import React from 'react';

export const Input = ({ title, type, id, value, setValue, maxLength }) => {
  const onChangeInput = (event) => {
    const result = event.target.value.replace(/\D/g, '');
    setValue(result);
  };

  return (
    <div className="custom-input">
      <label htmlFor={id}>{title}</label>
      <div className="input">
        <input
          maxLength={maxLength}
          onChange={onChangeInput}
          value={value}
          type="text"
          id={id}
          name={id}
          placeholder={title}
        />
        <button>{type}</button>
      </div>
    </div>
  );
};
