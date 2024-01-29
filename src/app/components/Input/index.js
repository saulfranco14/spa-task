import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}) => (
  <>
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={`border ${
        error ? "border-red-500" : "border-gray-300"
      } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      value={value}
      onChange={onChange}
      autoComplete="new-password"
    />
  </>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
};

export default InputField;
