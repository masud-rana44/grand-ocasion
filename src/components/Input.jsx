export const Input = ({ id, label, type, value, onChange, ...rest }) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium leading-6 ">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required
          {...rest}
          className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset text-black ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};
