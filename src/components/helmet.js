import cn from "classnames";

export const HelmetImg = ({ color, choosenUser }) => {
  return (
    <svg
      className={cn(
        "group-hover:border-[3px] border-violet-400 rounded-full order-spacing-3",
        choosenUser &&
          "border-[3px] border-violet-400 rounded-full order-spacing-3"
      )}
      width="70"
      height="70"
      viewBox="0 0 66 74"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.087 73.7555C20.386 73.5912 18.7506 73.0817 17.2879 72.2681C16.3346 71.7422 15.4471 71.0847 14.6664 70.3123C14.2719 69.9343 13.9104 69.5234 13.5734 69.0878C10.8944 65.6364 7.20465 58.8649 4.6407 53.8274C3.90932 52.3893 3.28478 50.7129 2.75062 48.8885C1.64122 45.1083 0.950927 40.7283 0.67974 36.7591C0.589344 35.4524 0.540039 34.1787 0.540039 32.9953C0.540039 29.3138 1.14815 25.7801 2.2822 22.4848C5.78298 12.2536 14.2309 4.33991 24.7743 1.58695C25.67 1.34863 26.5822 1.15141 27.5108 0.995269C28.7352 0.781607 29.9843 0.641904 31.2581 0.58438C31.7676 0.551509 32.2771 0.535075 32.7948 0.535075C32.8523 0.526857 32.9099 0.526855 32.9674 0.526855H33.0578C33.1153 0.526855 33.1728 0.526857 33.2304 0.535075C33.7481 0.535075 34.2576 0.551509 34.7671 0.58438C36.0409 0.641904 37.29 0.781607 38.5144 0.995269C39.443 1.15141 40.3552 1.34863 41.2509 1.58695C51.8025 4.33991 60.2422 12.2618 63.743 22.4848C64.877 25.7801 65.4851 29.3138 65.4851 32.9953C65.4851 34.1787 65.4358 35.4524 65.3454 36.7591C65.0743 40.7365 64.384 45.1165 63.2746 48.8885C62.7404 50.7129 62.1158 52.3893 61.3845 53.8274C58.8205 58.8731 55.1307 65.6364 52.4517 69.0878C52.1148 69.5234 51.7532 69.9343 51.3588 70.3123C50.5781 71.0847 49.6906 71.7422 48.7373 72.2681C47.2746 73.0817 45.6392 73.5912 43.9381 73.7555H22.087Z"
        fill="white"
      />
      <path
        className="mask"
        d="M33.0159 54.7478C32.153 54.7478 31.2902 54.9451 30.5177 55.3231L30.1972 55.4792C27.9044 56.5968 25.3487 57.1885 22.8012 57.1885C21.3631 57.1885 19.9332 57.0077 18.5444 56.6461L17.0981 56.2681C10.3019 54.4931 5.08366 49.1597 3.49762 42.3472C2.64297 38.6903 2.39644 35.0991 2.76624 31.6641C3.02921 29.2316 5.05079 27.399 7.46681 27.399C7.76265 27.399 8.05849 27.4237 8.35433 27.4812C17.3199 29.1987 24.6995 29.9301 33.0159 29.9301C41.3323 29.9301 48.7118 29.1905 57.6774 27.4812C57.9733 27.4237 58.2691 27.399 58.565 27.399C60.981 27.399 63.0026 29.2316 63.2655 31.6641C63.6353 35.0909 63.3888 38.6903 62.5341 42.3472C60.9399 49.1597 55.7298 54.4931 48.9337 56.2681L47.4874 56.6461C46.0986 57.0077 44.6687 57.1885 43.2306 57.1885C40.6831 57.1885 38.1273 56.5968 35.8346 55.4792L35.5141 55.3231C34.7416 54.9533 33.8788 54.7478 33.0159 54.7478Z"
        fill="#275183"
      />
      <path
        d="M33.0158 52.2824C31.7914 52.2824 30.5669 52.5618 29.4411 53.1124L29.1206 53.2685C26.0307 54.7806 22.4971 55.134 19.1689 54.2629L17.7225 53.8849C11.8468 52.3481 7.27773 47.6969 5.89714 41.7883C5.14111 38.5669 4.8617 35.1976 5.21506 31.9351C5.35477 30.6039 6.57921 29.6588 7.89406 29.9136C16.7528 31.6064 24.4036 32.4036 33.0158 32.4118C41.6281 32.4118 49.2788 31.6147 58.1376 29.9136C59.4524 29.6588 60.6687 30.6121 60.8166 31.9351C61.1699 35.1976 60.8823 38.5751 60.1345 41.7883C58.7539 47.7051 54.1848 52.3481 48.3091 53.8849L46.8628 54.2629C43.5346 55.134 40.0009 54.7806 36.911 53.2685L36.5906 53.1124C35.4647 52.5618 34.2403 52.2824 33.0158 52.2824Z"
        fill="#A5CDFF"
      />
      <path
        d="M10.5 32.0502L11.4615 48.4858C12.3819 49.398 13.4173 50.1869 14.5514 50.8279L13.4502 32.5269C12.4805 32.3871 11.4944 32.2228 10.5 32.0502Z"
        fill="white"
      />
      <path
        d="M14.8965 32.7406L16.0798 51.584C16.7455 51.8634 17.4275 52.1099 18.1425 52.2907L19.5888 52.6687C20.6407 52.9399 21.7254 53.0796 22.8102 53.0796C23.2375 53.0796 23.6566 53.0467 24.0839 53.0056L23.3443 33.661C20.5585 33.4555 17.7727 33.1515 14.8965 32.7406Z"
        fill="white"
      />
      <path
        d="M59.181 32.1078C59.1482 31.7709 58.877 31.5161 58.5647 31.5161C58.5236 31.5161 58.4907 31.5161 58.4496 31.5244C57.8415 31.6394 57.2498 31.7462 56.6499 31.8531L56.124 46.6862C57.2499 45.133 58.0798 43.3498 58.5318 41.4186C59.2714 38.2547 59.4933 35.0334 59.181 32.1078Z"
        fill="white"
      />
      <path
        className="helmet"
        d="M24.7821 1.58694V22.3533C24.7821 24.3995 23.0071 26.0102 20.9691 25.8047C13.8771 25.098 8.73279 24.0543 2.29004 22.4847C5.7826 12.2618 14.2305 4.3399 24.7821 1.58694Z"
      />
      <path
        className="helmet"
        d="M41.251 1.58694V22.3533C41.251 24.3995 43.026 26.0102 45.064 25.8047C52.156 25.098 57.3003 24.0543 63.743 22.4847C60.2505 12.2618 51.8026 4.3399 41.251 1.58694Z"
      />
      <path
        className="mask"
        d="M32.9996 26.1334C32.0381 26.1334 31.2656 25.3528 31.2656 24.3995V2.26903C31.2656 1.31576 32.0299 0.535073 32.9749 0.526855C32.9914 0.526855 33.0078 0.526855 33.016 0.526855C33.0325 0.526855 33.0489 0.526855 33.0571 0.526855C34.0104 0.526855 34.7664 1.31576 34.7664 2.26903V24.3995C34.7664 25.361 33.9857 26.1334 33.0324 26.1334H32.9996Z"
        fill="#275183"
      />
      <path
        className="helmet"
        d="M22.0873 73.7555C20.3862 73.5912 18.7508 73.0817 17.2881 72.2681C20.8382 64.7653 26.5495 58.3472 33.0169 58.2814C39.4843 58.3472 45.1956 64.7735 48.7457 72.2681C47.283 73.0817 45.6476 73.5912 43.9465 73.7555H22.0873Z"
      />
      <path
        className="helmet"
        d="M19.8923 62.1766C17.846 64.5433 16.0957 67.3374 14.6658 70.3204C14.2713 69.9424 13.9097 69.5315 13.5728 69.096C10.8938 65.6445 7.20402 58.8731 4.64008 53.8356C3.9087 52.3974 3.28416 50.721 2.75 48.8967C6.30008 55.6517 12.9154 59.0949 18.8979 59.6948C20.1388 59.8099 20.7058 61.2398 19.8923 62.1766Z"
      />
      <path
        className="helmet"
        d="M46.1398 62.1766C48.1861 64.5433 49.9364 67.3374 51.3663 70.3204C51.7608 69.9424 52.1224 69.5315 52.4593 69.096C55.1383 65.6445 58.8281 58.8731 61.392 53.8356C62.1234 52.3974 62.748 50.721 63.2821 48.8967C59.732 55.6517 53.1167 59.0949 47.1342 59.6948C45.8933 59.8099 45.3263 61.2398 46.1398 62.1766Z"
      />
    </svg>
  );
};
