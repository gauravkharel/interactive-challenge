const IconPlus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 stroke-purple-300 ${props.className}`}
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path stroke="currentColor" strokeWidth="2" d="M6 1v10M1 6h10" />
  </svg>
);

export default IconPlus;
