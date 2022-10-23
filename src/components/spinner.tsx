export const Spinner = () => {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <g fill="none" fillRule="evenodd" strokeWidth="4">
        <circle
          strokeOpacity=".5"
          cx="20"
          cy="20"
          r="18"
          stroke="currentColor"
        />
        <g transform="translate(2 2)">
          <path d="M36 18c0-9.94-8.06-18-18-18" stroke="currentColor">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
};
