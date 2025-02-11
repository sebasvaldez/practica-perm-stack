export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`realtive inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3
       py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline 
       focus-visible:outline-2 focus-visible:focusring-offset-2 
       disable:opacity-50
       disable:cursor-not-allowed ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
};
