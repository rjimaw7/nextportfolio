import React from "react";

interface Props {
  className?: string;
}

const MongoDBIcon = ({ className }: Props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.5849 25.085C52.5253 27.8055 53.2026 30.5828 53.4253 33.4615C53.7019 37.0328 53.5753 40.5789 52.8224 44.0916C52.8019 44.1883 52.7585 44.2791 52.7263 44.3729C52.4901 44.3734 52.2493 44.3441 52.0185 44.3799C50.0679 44.6863 48.119 45.0039 46.1702 45.3197C44.1558 45.6461 42.1384 45.9596 40.1274 46.3082C39.4149 46.4312 38.5331 46.2842 38.2454 47.2697C38.2372 47.2967 38.1552 47.3014 38.1077 47.3166L38.205 41.4273L38.106 27.2172L39.0446 27.0561C40.5798 26.8047 42.1149 26.5498 43.6513 26.3055C45.4847 26.0143 47.3198 25.7313 49.1544 25.4471C49.9636 25.3211 50.7739 25.2057 51.5849 25.085V25.085Z"
        fill="#439934"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.1691 64.4847C35.1789 63.6333 34.1541 62.8194 33.2049 61.9241C28.0972 57.1065 24.3613 51.4364 22.5215 44.6003C22.0146 42.7188 21.6765 40.8069 21.5681 38.8628C21.492 37.5022 21.3818 36.1294 21.4779 34.7759C21.734 31.1759 22.2543 27.6104 23.3101 24.1429L23.3681 24.062C23.4707 24.1985 23.6183 24.3192 23.6705 24.4733C24.7012 27.5085 25.7242 30.546 26.742 33.5853C29.94 43.136 33.134 52.6892 36.3373 62.2376C36.4 62.4239 36.5623 62.5769 36.6789 62.745L36.1691 64.4847V64.4847Z"
        fill="#45A538"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.5847 25.0853C50.7737 25.206 49.9628 25.3214 49.1536 25.4462C47.3191 25.7304 45.4839 26.0134 43.6505 26.3046C42.1142 26.5489 40.579 26.8038 39.0439 27.0552L38.1052 27.2163L38.0982 26.604C38.0671 26.1007 38.0138 25.5979 38.0079 25.0946C37.9675 21.8849 37.9423 18.6751 37.9025 15.4653C37.8778 13.4562 37.8409 11.4476 37.7999 9.43896C37.7747 8.19092 37.7478 6.94229 37.6915 5.696C37.6611 5.02627 37.5532 4.36006 37.5093 3.69033C37.4847 3.30537 37.5187 2.91748 37.5263 2.53076C38.005 3.4583 38.4732 4.39287 38.9653 5.31338C39.7429 6.76885 40.9816 7.84111 42.0966 9.01123C46.5046 13.6354 49.6341 19.012 51.5847 25.0853V25.0853Z"
        fill="#46A037"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.107 47.3161C38.1545 47.3008 38.2371 47.2962 38.2447 47.2692C38.5324 46.2837 39.4143 46.4307 40.1268 46.3077C42.1377 45.9596 44.1551 45.6456 46.1695 45.3192C48.1184 45.0034 50.0672 44.6858 52.0178 44.3794C52.2486 44.343 52.4895 44.3729 52.7256 44.3723C52.3611 45.6731 52.074 47.002 51.6117 48.2671C51.0867 49.702 50.4516 51.1024 49.7771 52.4753C48.7675 54.5229 47.5179 56.4433 46.0547 58.1958C44.9303 59.5481 43.677 60.7979 42.4207 62.0325C41.7264 62.7151 40.9078 63.2712 40.1461 63.8846L39.9486 63.7499L39.2373 63.1417L38.5014 61.5286C37.9987 59.6469 37.7244 57.7114 37.6846 55.7641L37.698 55.4354L37.7982 54.0139C37.8316 53.5288 37.8762 53.0442 37.8967 52.5579C37.9723 50.8106 38.0379 49.0633 38.107 47.3161V47.3161Z"
        fill="#409433"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.1071 47.3163C38.038 49.0636 37.9724 50.8108 37.898 52.5587C37.8774 53.045 37.8329 53.5296 37.7995 54.0147L37.3513 54.1841C36.3558 51.2532 35.3597 48.3534 34.3853 45.446C32.7739 40.636 31.1819 35.8185 29.573 31.0073C28.2734 27.124 26.9648 23.2437 25.6472 19.3665C25.5856 19.1849 25.4087 19.0431 25.2856 18.8825L28.1544 13.6079C28.2528 13.779 28.3829 13.939 28.445 14.1229C29.7737 18.05 31.0955 21.9793 32.4106 25.9108C34.1192 31.0261 35.8173 36.1454 37.5247 41.2612C37.5927 41.4657 37.7052 41.6544 37.8124 41.8835L38.205 41.4265L38.1071 47.3163V47.3163Z"
        fill="#4FAA41"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.2863 18.8828C25.4094 19.0434 25.5857 19.1852 25.6479 19.3668C26.9655 23.244 28.2741 27.1243 29.5736 31.0076C31.1826 35.8187 32.7746 40.6363 34.3859 45.4463C35.3598 48.3531 36.3559 51.2535 37.352 54.1844L37.8002 54.015L37.7 55.4365L37.6092 55.7641C37.4533 57.3203 37.3221 58.8801 37.1322 60.4328C37.0367 61.2109 36.834 61.975 36.6799 62.7455C36.5639 62.5773 36.401 62.4244 36.3383 62.2381C33.135 52.6891 29.941 43.1365 26.743 33.5857C25.7255 30.5463 24.7017 27.509 23.6715 24.4738C23.6193 24.3197 23.4723 24.199 23.3691 24.0625L25.2863 18.8828V18.8828Z"
        fill="#4AA73C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.2044 41.427L37.8118 41.884C37.7046 41.6549 37.5921 41.4656 37.5241 41.2617C35.8173 36.1459 34.1187 31.0266 32.4101 25.9113C31.0949 21.9798 29.7731 18.0505 28.4444 14.1234C28.3829 13.9395 28.2528 13.7789 28.1538 13.6084L31.7017 8.94141C31.8136 9.09082 31.9729 9.22383 32.031 9.39199C33.0159 12.2754 33.9921 15.1623 34.9624 18.051C35.8688 20.7486 36.7618 23.4504 37.6788 26.1445C37.7403 26.325 37.9542 26.4527 38.0972 26.6051L38.1042 27.2174C38.1382 31.9529 38.1716 36.6902 38.2044 41.427V41.427Z"
        fill="#57AE47"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.0981 26.6037C37.9552 26.4514 37.7413 26.3236 37.6798 26.1432C36.7628 23.449 35.8698 20.7473 34.9634 18.0496C33.9931 15.1609 33.0169 12.2746 32.0319 9.39063C31.9739 9.22246 31.8146 9.08945 31.7026 8.94004C32.8563 7.81035 33.9743 6.64023 35.1743 5.5627C36.2413 4.60527 37.0991 3.57871 37.1384 2.06582C37.1401 2.00312 37.1729 1.94043 37.2233 1.76465L37.5274 2.52988C37.5198 2.91719 37.4853 3.30449 37.5104 3.68945C37.5544 4.35918 37.6622 5.02539 37.6927 5.69512C37.7489 6.94141 37.7759 8.19004 37.8011 9.43809C37.8415 11.4467 37.8784 13.4553 37.9036 15.4645C37.9429 18.6742 37.9687 21.884 38.0091 25.0937C38.0138 25.5982 38.0665 26.1004 38.0981 26.6037V26.6037Z"
        fill="#60B24F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.6787 62.7451C36.8328 61.9746 37.0355 61.21 37.1311 60.4324C37.3215 58.8803 37.4521 57.3199 37.608 55.7637L37.6467 55.7578L37.6854 55.7643C37.7252 57.7116 37.9995 59.647 38.5021 61.5287C38.399 61.6646 38.2531 61.7859 38.1986 61.9395C37.7727 63.1406 37.3713 64.3512 36.943 65.5523C36.8844 65.7164 36.7215 65.8441 36.6066 65.9883L36.1689 64.4848L36.6787 62.7451V62.7451Z"
        fill="#A9AA88"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.6069 65.9889C36.7218 65.8447 36.8853 65.717 36.9433 65.5529C37.3716 64.3518 37.7735 63.1418 38.1989 61.94C38.2534 61.7865 38.3987 61.6652 38.5024 61.5293L39.2378 63.143C39.0925 63.3492 38.8921 63.535 38.8112 63.7646L37.4026 67.9008C37.3446 68.0666 37.1466 68.1838 37.0142 68.3238L36.6069 65.9889V65.9889Z"
        fill="#B6B598"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.0142 68.3234C37.1472 68.184 37.3446 68.0662 37.4026 67.9004L38.8112 63.7643C38.8915 63.5352 39.0925 63.3488 39.2378 63.1426L39.9497 63.7502C39.6058 64.09 39.4147 64.4826 39.5296 64.9789L39.3134 65.6867C39.2149 65.808 39.0726 65.9135 39.0239 66.0523C38.5323 67.4603 38.063 68.876 37.5679 70.284C37.5052 70.4627 37.3312 70.6027 37.2081 70.7598C37.1442 69.9471 37.0792 69.1361 37.0142 68.3234V68.3234Z"
        fill="#C2C1A7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.2087 70.7596C37.3311 70.602 37.5052 70.4619 37.5685 70.2838C38.0636 68.8764 38.5329 67.4607 39.0245 66.0521C39.0731 65.9139 39.2149 65.8078 39.314 65.6865L39.0157 68.9355C38.936 69.0275 38.8206 69.1078 38.7825 69.215C38.4456 70.1607 38.128 71.1135 37.7899 72.0592C37.7202 72.2543 37.5866 72.4266 37.4823 72.6088C37.3897 72.4875 37.2239 72.3703 37.2163 72.2437C37.1864 71.751 37.2069 71.2547 37.2087 70.7596V70.7596Z"
        fill="#CECDB7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.4819 72.6088C37.5862 72.426 37.7198 72.2537 37.7896 72.0592C38.1282 71.1141 38.4452 70.1613 38.7821 69.215C38.8202 69.1078 38.9362 69.0281 39.0153 68.9355L39.0224 71.0684L38.3087 72.8988L37.4819 72.6088V72.6088Z"
        fill="#DBDAC7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.3086 72.8993L39.0223 71.0688L39.1693 73.2345L38.3086 72.8993V72.8993Z"
        fill="#EBE9DC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.5296 64.9792C39.4147 64.4829 39.6052 64.0897 39.9497 63.7505L40.1472 63.8853L39.5296 64.9792V64.9792Z"
        fill="#CECDB7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.6853 55.7646L37.6466 55.7582L37.6079 55.7641L37.6987 55.4365L37.6853 55.7646V55.7646Z"
        fill="#4FAA41"
      />
    </svg>
  );
};

export default MongoDBIcon;
