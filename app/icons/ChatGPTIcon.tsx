import React from "react";

interface Props {
  className?: string;
}

const ChatGPTIcon = ({ className }: Props) => {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="64" cy="64" r="64" fill="url(#paint0_linear_1_29)" />
      <g filter="url(#filter0_d_1_29)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.3838 16.7594C48.6511 17.7887 45.053 19.8008 41.9863 22.574C39.7042 24.6382 38.5188 26.272 36.6842 29.8827L35.2549 32.6961L33.0315 33.3878C22.8847 36.5446 16.0522 45.681 16.0011 56.1616C15.9842 59.619 16.1583 60.8531 17.0619 63.6737C17.9065 66.3107 18.9477 68.3598 20.7277 70.8886L22.1627 72.9274L21.7558 74.3394C21.5322 75.1161 21.281 77.4564 21.1984 79.54C21.0272 83.8409 21.6348 86.9865 23.3262 90.5564C27.8075 100.015 37.8315 105.614 48.1927 104.447L50.8077 104.152L52.2425 105.5C54.3105 107.443 55.6528 108.348 58.48 109.706C64.0544 112.383 72.0178 112.793 77.7773 110.534C84.2277 108.004 89.182 103.397 91.6404 97.6412C92.1038 96.5567 92.5695 95.5839 92.6752 95.4791C92.7813 95.3747 93.9835 94.9163 95.3474 94.4608C102.942 91.9239 108.512 86.3045 110.938 78.7316C111.842 75.911 112.016 74.6769 111.999 71.2196C111.974 66.1937 110.385 61.4187 107.328 57.1878L105.88 55.1838L106.38 53.0142C107.092 49.9208 107.033 44.9149 106.247 41.8811C104.127 33.6936 98.2064 27.4283 89.8865 24.5667C84.7526 22.9386 80.2603 23.418 77.076 23.6139L75.3818 22.1345C73.2461 20.2692 70.2 18.4604 67.3351 17.3555C63.2152 15.7673 56.6509 15.5829 52.3838 16.7594ZM62.766 22.7152C65.376 23.2616 70.8505 25.9746 70.3293 26.4633C70.1422 26.6387 62.0977 31.2687 55.5829 34.9503C52.6131 36.6287 49.9365 38.3076 49.6344 38.6816C49.1335 39.3024 49.0853 40.5682 49.0786 53.2429C49.0745 61.5335 48.9531 67.1244 48.7778 67.1244C48.3855 67.1244 41.758 63.4192 41.0516 62.805C40.5411 62.3611 40.4967 61.3974 40.5068 50.9983C40.5195 37.9933 40.7384 36.0389 42.5987 32.3212C44.1617 29.1976 47.7042 25.6637 50.7391 24.1999C54.536 22.3688 58.6731 21.8581 62.766 22.7152ZM86.4053 30.2686C90.8206 31.3772 94.9672 34.1611 97.3142 37.5924C99.3438 40.5594 100.281 43.305 100.457 46.7925C100.541 48.4642 100.526 50.0481 100.423 50.3126C100.22 50.8346 99.0189 50.1934 86.4228 42.8401C82.9454 40.8101 79.658 39.0831 79.1174 39.0022C78.0546 38.8431 78.9726 38.36 62.1473 47.9344C57.5471 50.5522 53.7235 52.6939 53.6508 52.6939C53.5781 52.6939 53.5184 50.6103 53.5184 48.0639C53.5184 43.6896 53.5555 43.4107 54.1901 43.0192C54.5595 42.7915 59.1956 40.1475 64.4923 37.1438C73.7984 31.8663 76.1584 30.6905 78.5828 30.123C80.4476 29.6867 84.3785 29.7598 86.4053 30.2686ZM34.4608 51.7352V63.6385L35.1755 64.409C35.5684 64.8325 37.8197 66.2727 40.1781 67.6097C56.0914 76.6307 59.0676 78.3718 58.9929 78.6152C58.8935 78.9389 51.6736 83.1235 51.2143 83.1235C51.0406 83.1235 46.8784 80.8384 41.965 78.0458C37.0514 75.2529 32.4112 72.6221 31.6533 72.1996C29.6421 71.0787 26.5888 68.1794 25.2148 66.0861C23.214 63.0384 22.5537 60.6492 22.554 56.4584C22.5543 51.0846 23.9033 47.7766 27.6049 44.0714C29.3779 42.2967 33.1122 39.8483 34.0638 39.8366C34.3744 39.8329 34.4608 42.4191 34.4608 51.7352ZM77.8253 45.2845C78.1699 45.5226 82.0252 47.7295 86.3926 50.1883C96.9508 56.1331 98.9401 57.4262 101.021 59.6968C106.075 65.2133 107.065 73.3286 103.5 80.0288C101.754 83.3104 98.1238 86.7041 94.965 88.0076L93.8568 88.465L93.8555 76.775C93.8546 65.8913 93.8133 65.0204 93.259 64.1442C92.8782 63.5422 91.4193 62.506 89.2106 61.2688C83.5508 58.0988 69.9228 50.2545 69.2726 49.7928C68.7183 49.3991 68.9915 49.1804 72.6077 47.1228C74.7739 45.8902 76.6929 44.8748 76.8724 44.8666C77.0522 44.8582 77.481 45.0461 77.8253 45.2845ZM69.2408 54.9943L74.3228 57.9096L74.4035 64.0071L74.4839 70.1046L69.3307 73.0488L64.1776 75.9929L62.1759 74.931C61.0747 74.3469 58.7122 73.0171 56.9255 71.9756L53.6772 70.0824L53.5911 64.0727L53.5047 58.063L55.8145 56.7279C57.0847 55.9935 59.4094 54.6442 60.9803 53.7295C62.5516 52.815 63.9095 52.0693 63.9978 52.0728C64.0864 52.0762 66.4457 53.391 69.2408 54.9943ZM83.0836 62.9167C85.1478 64.0529 86.9974 65.1738 87.1933 65.4069C87.4481 65.7102 87.5164 69.3938 87.4325 78.3203C87.3204 90.2722 87.2848 90.9009 86.6 92.9369C83.4704 102.242 74.205 107.449 64.7115 105.238C62.6304 104.754 59.6184 103.391 58.3031 102.339L57.5312 101.722L58.304 101.246C59.4583 100.536 68.3257 95.4603 73.2111 92.7135C75.5695 91.3875 77.8205 89.9497 78.2137 89.5187L78.9284 88.7351V74.7927C78.9284 67.1244 79.0189 60.8503 79.1291 60.8503C79.2397 60.8503 81.019 61.7801 83.0836 62.9167ZM74.2495 84.7331C73.5942 85.3803 53.2627 96.6637 51.6765 97.2607C49.4204 98.1096 44.7814 98.417 42.0978 97.8953C35.9588 96.7026 30.8428 92.3333 28.5203 86.2991C27.6049 83.9209 27.0465 77.4768 27.7558 77.4768C28.1248 77.4768 30.5016 78.8025 42.2922 85.5842C46.0103 87.7227 48.7146 89.0839 49.2453 89.0839C50.1055 89.0839 51.3664 88.4022 66.8586 79.5635L74.3228 75.305L74.4111 79.8957C74.4594 82.4205 74.3867 84.5976 74.2495 84.7331Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_29"
          x="12"
          y="16"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_29"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_29"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_29"
          x1="64"
          y1="0"
          x2="64"
          y2="128"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#BCBCBC" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ChatGPTIcon;