import React from "react";

type TypeProps = {
  name: string;
  id: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
};

const Input = ({
  name,
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  ...rest
}: TypeProps) => {
  return (
    <label htmlFor={id} className="flex flex-col gap-1">
      {label}
      <input
        className="border border-gray-300 p-2"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        {...rest}
        onBlur={onBlur}
      />
    </label>
  );
};

export default Input;
