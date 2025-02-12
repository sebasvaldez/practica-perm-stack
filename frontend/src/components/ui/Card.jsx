export const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-zinc-900 p-8 rounded-md ${className}`}
      style={{ width: "400px" }}
    >
      {children}
    </div>
  );
};
