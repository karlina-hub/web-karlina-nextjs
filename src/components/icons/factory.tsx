import { IconProps } from "../types";

const FactoryIcon = (props: IconProps) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30 12V30H0V12L10.5 7.5V10.5L18 7.5V12H30ZM22.8 9.75L24 0H28.5L29.7 9.75H22.8ZM13.5 24H16.5V18H13.5V24ZM7.5 24H10.5V18H7.5V24ZM22.5 18H19.5V24H22.5V18Z"
      fill="currentColor"
    />
  </svg>
);

export default FactoryIcon;
