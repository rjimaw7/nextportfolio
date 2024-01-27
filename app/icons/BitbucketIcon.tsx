import React from "react";

interface Props {
  className?: string;
}

const BitbucketIcon = ({ className }: Props) => {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1808 11.7188C10.057 11.7188 9.21496 12.7488 9.40012 13.7789L16.988 60.2373C17.1755 61.4549 18.205 62.2969 19.4226 62.2969H56.1374C56.9823 62.2969 57.7312 61.6406 57.9187 60.798L65.5997 13.8727C65.7849 12.7488 64.9429 11.8125 63.8191 11.8125L11.1808 11.7188ZM43.4003 45.2502H31.6933L28.6007 28.6723H46.3048L43.4003 45.2502Z"
        fill="#2684FF"
      />
      <path
        d="M63.0703 28.6719H46.2117L43.4004 45.2498H31.6934L17.9238 61.6396C17.9238 61.6396 18.5801 62.2027 19.517 62.2027H56.2318C57.0762 62.2027 57.825 61.5465 58.0125 60.7039L63.0703 28.6719Z"
        fill="url(#paint0_linear_3_6757)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3_6757"
          x1="67.0148"
          y1="33.3418"
          x2="39.075"
          y2="55.1527"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.176" stop-color="#0052CC" />
          <stop offset="1" stop-color="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BitbucketIcon;
