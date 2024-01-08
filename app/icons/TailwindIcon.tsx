import React from "react";

interface Props {
  className?: string;
}

const TailwindIcon = ({ className }: Props) => {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.7502 32.8559C5.68301 32.8559 4.39453 33.8977 3.88184 35.9619C4.65762 34.9231 5.56641 34.5404 6.5918 34.8035C7.17773 34.95 7.60371 35.376 8.07012 35.8588C8.83242 36.6346 9.71133 37.5299 11.632 37.5299C13.6963 37.5299 14.9848 36.4881 15.4975 34.4238C14.7217 35.4627 13.8129 35.8453 12.7875 35.5822C12.2016 35.4357 11.7785 35.0098 11.3092 34.527C10.5469 33.7512 9.66797 32.8559 7.7502 32.8559V32.8559ZM3.86836 37.5C1.80117 37.5 0.512695 38.5389 0 40.6055C0.775781 39.5643 1.68457 39.1846 2.70996 39.4477C3.2959 39.5941 3.72187 40.0201 4.18828 40.5029C4.95059 41.2787 5.82949 42.174 7.7502 42.174C9.81445 42.174 11.1029 41.1322 11.6156 39.068C10.8398 40.1068 9.93105 40.4895 8.90566 40.2234C8.31973 40.077 7.89668 39.6539 7.42734 39.1711C6.67852 38.3924 5.79961 37.5 3.86836 37.5Z"
        fill="url(#paint0_linear_3_7048)"
      />
      <path
        d="M23.2479 36.7676H21.8996V39.3908C21.8996 40.0934 22.3525 40.0769 23.2473 40.0336V41.0889C21.4309 41.3086 20.7143 40.8094 20.7143 39.3908V36.7676H19.7158V35.6391H20.7143V34.1742L21.8861 33.8244V35.6391H23.2314V36.7676H23.2479ZM28.4041 35.6391H29.576V41.0889H28.4041V40.2967C27.9922 40.8691 27.3494 41.2219 26.4998 41.2219C25.0191 41.2219 23.7904 39.9603 23.7904 38.349C23.7904 36.7242 25.0191 35.4791 26.5004 35.4791C27.3494 35.4791 27.9922 35.8289 28.4047 36.4014L28.4041 35.6391ZM26.6738 40.1068C27.6559 40.1068 28.4047 39.3744 28.4047 38.3654C28.4047 37.3535 27.6559 36.6211 26.6738 36.6211C25.6947 36.6211 24.9459 37.3535 24.9459 38.3654C24.9623 39.3744 25.6947 40.1068 26.6744 40.1068H26.6738ZM31.5377 34.8199C31.1281 34.8199 30.7918 34.4672 30.7918 34.0711C30.7918 33.6615 31.1281 33.3252 31.5377 33.3252C31.9479 33.3252 32.2865 33.6615 32.2865 34.0711C32.3 34.4672 31.9473 34.8199 31.5377 34.8199ZM30.9518 41.0889V35.6396H32.1236V41.0889H30.9518ZM33.4854 41.0889V33.1353H34.6572V41.0889H33.4854ZM42.3207 35.6396H43.5658L41.8514 41.0889H40.693L39.5645 37.4133L38.4225 41.0889H37.267L35.5525 35.6396H36.7971L37.8518 39.4043L38.9943 35.6391H40.1229L41.2484 39.4043L42.3207 35.6396ZM45.0143 34.8193C44.6047 34.8193 44.2684 34.4678 44.2684 34.0711C44.2684 33.6615 44.6047 33.3252 45.0143 33.3252C45.4244 33.3252 45.7631 33.6615 45.7631 34.0711C45.7766 34.4672 45.4402 34.8199 45.0143 34.8199V34.8193ZM44.4283 41.0889V35.6396H45.6002V41.0889H44.4283ZM49.8348 35.4932C51.05 35.4932 51.9289 36.3281 51.9289 37.7332V41.0889H50.757V37.8662C50.757 37.0307 50.2742 36.6076 49.5418 36.6076C48.766 36.6076 48.1502 37.0605 48.1502 38.1727V41.1023H46.9783V35.6555H48.1502V36.358C48.5164 35.7721 49.1023 35.4926 49.8348 35.4926V35.4932ZM57.5252 33.4582H58.6971V41.0889H57.5252V40.2967C57.115 40.8691 56.4699 41.2219 55.6209 41.2219C54.1397 41.2219 52.9109 39.9603 52.9109 38.349C52.9109 36.7242 54.1397 35.4791 55.6209 35.4791C56.4699 35.4791 57.115 35.8289 57.5252 36.4014V33.4582ZM55.7967 40.1068C56.7764 40.1068 57.5252 39.3744 57.5252 38.3654C57.5252 37.3535 56.7764 36.6211 55.7967 36.6211C54.8152 36.6211 54.0664 37.3535 54.0664 38.3654C54.0664 39.3744 54.8152 40.1068 55.7973 40.1068H55.7967ZM62.6357 41.2353C60.9975 41.2353 59.7523 39.9768 59.7523 38.3654C59.7523 36.7377 60.9811 35.4926 62.6357 35.4926C63.7074 35.4926 64.6297 36.0492 65.0691 36.9006L64.0572 37.4865C63.824 36.9738 63.2814 36.651 62.6223 36.651C61.6566 36.651 60.9377 37.3834 60.9377 38.3654C60.9377 39.3445 61.6701 40.0769 62.6223 40.0769C63.2814 40.0769 63.8076 39.7406 64.0736 39.2443L65.0826 39.8139C64.6432 40.6793 63.7074 41.2353 62.6357 41.2353ZM67.0467 37.1338C67.0467 38.1299 69.9764 37.5299 69.9764 39.5508C69.9764 40.6359 69.0242 41.2353 67.8523 41.2353C66.7672 41.2353 65.9773 40.7361 65.6252 39.9603L66.6371 39.3744C66.8105 39.8736 67.25 40.1666 67.8523 40.1666C68.3785 40.1666 68.7746 39.9902 68.7746 39.5508C68.7746 38.5852 65.8449 39.1248 65.8449 37.1777C65.8449 36.1523 66.7238 35.509 67.8359 35.509C68.7312 35.509 69.4771 35.9185 69.8598 36.6346L68.8613 37.1936C68.6715 36.7676 68.2918 36.5777 67.8359 36.5777C67.4129 36.5613 67.0467 36.7535 67.0467 37.1338ZM72.0705 37.1338C72.0705 38.1299 75.0002 37.5299 75.0002 39.5508C75.0002 40.6359 74.048 41.2353 72.8762 41.2353C71.791 41.2353 71.0012 40.7361 70.6496 39.9603L71.6609 39.3744C71.8367 39.8736 72.2762 40.1666 72.8762 40.1666C73.4023 40.1666 73.7984 39.9902 73.7984 39.5508C73.7984 38.5852 70.8687 39.1248 70.8687 37.1777C70.8687 36.1523 71.7477 35.509 72.8627 35.509C73.7551 35.509 74.501 35.9185 74.8836 36.6346L73.8875 37.1936C73.6953 36.7676 73.3156 36.5777 72.8621 36.5777C72.4367 36.5613 72.0705 36.7535 72.0705 37.1338Z"
        fill="#2D3748"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3_7048"
          x1="-0.414654"
          y1="35.8099"
          x2="12.9754"
          y2="43.5303"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2298BD" />
          <stop offset="1" stopColor="#0ED7B5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TailwindIcon;