import { useBreakpointValue } from "@chakra-ui/react";

export const Logo = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  });

  return isWideVersion ? (
    <svg
      width="185"
      height="46"
      viewBox="0 0 185 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-ath="url(#clip0_39_25)">
        <path
          d="M3.66966 18.1292L6.27676 28.1523C6.84638 30.3431 7.37218 32.3916 7.74463 34.4291H7.86512C8.31425 32.4354 8.96054 30.3212 9.6178 28.1523L12.8383 18.1292H15.8507L18.907 27.988C19.6409 30.3541 20.2105 32.4354 20.6596 34.4291H20.813C21.1934 32.2703 21.6944 30.1345 22.3137 28.0318L25.129 18.173H28.6781L22.3137 37.8906H19.0275L16.0151 28.4809C15.3249 26.2901 14.7553 24.3293 14.2624 22.007H14.2405C13.7465 24.1983 13.1284 26.3598 12.3892 28.4809L9.21249 37.8577H5.92623L0 18.1292H3.66966Z"
          fill="#47585B"
        />
        <path
          d="M49.6993 27.8346C49.6993 35.1301 44.6494 38.3068 39.8405 38.3068C34.4948 38.3068 30.376 34.3962 30.376 28.1523C30.376 21.5798 34.703 17.6801 40.1582 17.6801C45.8653 17.6801 49.6993 21.7989 49.6993 27.8346ZM34.0457 28.0318C34.0457 32.3587 36.5323 35.6121 40.0377 35.6121C43.543 35.6121 46.0296 32.3916 46.0296 27.9442C46.0296 24.6031 44.3646 20.3639 40.1253 20.3639C35.886 20.3639 34.0457 24.2855 34.0457 28.0318Z"
          fill="#47585B"
        />
        <path
          d="M54.2343 24.2855C54.2343 21.9632 54.2343 19.9038 54.07 18.1292H57.2139L57.3344 21.996H57.4987C57.8382 20.79 58.5512 19.7227 59.5352 18.9472C60.5193 18.1718 61.7238 17.7282 62.9758 17.6801C63.3191 17.6763 63.6615 17.7168 63.9945 17.8006V21.1854C63.5948 21.1013 63.1871 21.0609 62.7786 21.0649C60.2482 21.0649 58.4517 22.9819 57.9697 25.6657C57.8557 26.2321 57.7934 26.8078 57.7835 27.3855V37.9015H54.2343V24.2855Z"
          fill="#47585B"
        />
        <path
          d="M67.7409 8.91672H71.3229V37.8577H67.7409V8.91672Z"
          fill="#47585B"
        />
        <path
          d="M94.3925 8.91672V32.764C94.3925 34.5167 94.3925 36.5103 94.5568 37.8577H91.3362L91.1829 34.429H91.0953C90.4558 35.6525 89.4822 36.6695 88.2878 37.3617C87.0933 38.054 85.727 38.3931 84.3475 38.3397C79.5824 38.3397 75.9127 34.3085 75.9127 28.3166C75.9127 21.7441 79.9439 17.7129 84.7528 17.7129C85.9246 17.6369 87.0954 17.8763 88.1433 18.406C89.1913 18.9358 90.0782 19.7367 90.7119 20.7253H90.7885V8.91672H94.3925ZM90.8104 26.1586C90.8154 25.65 90.7603 25.1426 90.6461 24.6469C90.389 23.4619 89.731 22.4017 88.7831 21.6454C87.8352 20.8891 86.6555 20.4829 85.4429 20.4953C81.7294 20.4953 79.5276 23.7816 79.5276 28.1632C79.5276 32.1506 81.4884 35.4587 85.3552 35.4587C86.5896 35.4549 87.7853 35.0275 88.7424 34.2479C89.6994 33.4683 90.3599 32.3837 90.6133 31.1756C90.7471 30.6532 90.8133 30.1157 90.8104 29.5763V26.1586Z"
          fill="#47585B"
        />
        <path
          d="M104.678 13.397V18.1292H109.816V20.813H104.678V31.4495C104.678 33.9032 105.38 35.2835 107.373 35.2835C108.075 35.3122 108.778 35.2309 109.455 35.0425L109.619 37.7263C108.599 38.1028 107.518 38.2849 106.431 38.263C105.712 38.2997 104.994 38.1795 104.327 37.9109C103.659 37.6423 103.057 37.2317 102.564 36.7075C101.546 35.6121 101.173 33.9032 101.173 31.581V20.813H98.1169V18.1292H101.173V14.5034L104.678 13.397Z"
          fill="#FFBA08"
        />
        <path
          d="M113.858 24.2855C113.858 21.9632 113.858 19.9038 113.694 18.1292H116.838L116.958 21.996H117.122C117.462 20.79 118.175 19.7227 119.159 18.9472C120.143 18.1718 121.348 17.7282 122.6 17.6801C122.943 17.6763 123.285 17.7168 123.618 17.8006V21.1854C123.219 21.1013 122.811 21.0609 122.402 21.0649C119.872 21.0649 118.021 22.9819 117.593 25.6657C117.489 26.2184 117.434 26.7793 117.429 27.3417V37.8577H113.88L113.858 24.2855Z"
          fill="#FFBA08"
        />
        <path
          d="M131.352 12.5864C131.352 13.1761 131.118 13.7417 130.701 14.1588C130.284 14.5758 129.718 14.8101 129.128 14.8101C128.539 14.8101 127.973 14.5758 127.556 14.1588C127.139 13.7417 126.905 13.1761 126.905 12.5864C126.897 12.2894 126.95 11.994 127.06 11.7182C127.17 11.4423 127.335 11.1918 127.546 10.9817C127.756 10.7717 128.006 10.6066 128.282 10.4964C128.558 10.3862 128.853 10.3332 129.15 10.3408C129.443 10.3392 129.734 10.3966 130.005 10.5094C130.276 10.6223 130.521 10.7883 130.726 10.9977C130.932 11.2072 131.093 11.4557 131.2 11.7286C131.308 12.0015 131.359 12.2932 131.352 12.5864ZM127.354 37.8577V18.1402H130.947V37.8577H127.354Z"
          fill="#FFBA08"
        />
        <path
          d="M136.928 24.5703C136.928 22.0399 136.84 20.0024 136.763 18.1292H139.984L140.137 21.5141H140.214C140.924 20.2981 141.951 19.2986 143.187 18.6231C144.422 17.9476 145.818 17.6216 147.225 17.6801C151.99 17.6801 155.583 21.7112 155.583 27.7032C155.583 34.8015 151.201 38.3069 146.611 38.3069C145.418 38.3595 144.231 38.1015 143.168 37.5581C142.104 37.0147 141.199 36.2046 140.543 35.2068H140.455V45.92H136.928V24.5703ZM140.466 29.8283C140.478 30.3214 140.533 30.8125 140.63 31.2962C140.931 32.495 141.623 33.5591 142.598 34.3192C143.572 35.0794 144.773 35.4921 146.009 35.4916C149.799 35.4916 152.001 32.3916 152.001 27.8237C152.001 23.8692 149.919 20.4953 146.129 20.4953C144.863 20.5312 143.645 20.9862 142.666 21.7892C141.686 22.5921 141.001 23.6974 140.718 24.9318C140.567 25.4073 140.483 25.9012 140.466 26.3996V29.8283Z"
          fill="#FFBA08"
        />
        <path
          d="M-1.09542 35.2178C100.231 44.6384 159.822 18.1292 159.822 18.1292C159.822 18.1292 117.922 47.9137 -2.63997 42.1408"
          fill="#F5F8FA"
        />
        <path
          d="M101.217 32.8626C138.034 27.2212 158.179 18.2387 158.179 18.2387C158.179 18.2387 137.366 32.4792 102.751 37.0033"
          stroke="#FFBA08"
          strokeMiterlimit="10"
        />
        <path
          d="M5.38947 35.9846C37.3468 38.59 69.497 37.5426 101.217 32.8626"
          stroke="#47585B"
          strokeMiterlimit="10"
        />
        <path
          d="M174.676 22.489C174.106 18.9179 173.581 15.544 173.022 12.0277L172.124 12.7617C170.123 14.5258 167.823 15.9171 165.332 16.8695C164.94 17.0413 164.512 17.1132 164.086 17.0787C163.659 17.0443 163.248 16.9047 162.889 16.6723C161.345 15.6864 159.745 14.7663 158.157 13.8242C158.395 13.4763 158.728 13.2045 159.117 13.0413C159.505 12.8781 159.933 12.8304 160.348 12.9041C161.599 13.0374 162.858 13.0996 164.116 13.0903C164.511 13.0841 164.894 12.9538 165.212 12.7178C169.593 8.99341 173.975 5.25437 178.357 1.50073C179.495 0.498454 180.97 -0.037461 182.486 9.17108e-06C183.845 9.17108e-06 184.414 0.898254 183.834 2.19085C183.513 2.83889 183.07 3.41907 182.53 3.8997C181.248 5.0718 179.912 6.17818 178.576 7.28455C178.402 7.4121 178.259 7.57649 178.157 7.7659C178.055 7.95531 177.996 8.16502 177.984 8.37997C177.699 12.0825 177.349 15.785 177.064 19.4875C177.061 19.8625 176.967 20.2312 176.79 20.5615C176.612 20.8918 176.357 21.1737 176.045 21.3826C175.57 21.7273 175.113 22.0966 174.676 22.489Z"
          fill="#47585B"
        />
        <path
          d="M162.604 6.92306C163.623 6.04672 164.335 4.90749 165.978 5.15943C167.621 5.41138 169.265 5.42233 170.995 5.54283L171.554 5.61951C170.305 6.71493 169.166 7.63508 168.016 8.58809C167.95 8.63572 167.875 8.6691 167.796 8.68608C167.717 8.70306 167.635 8.70327 167.556 8.68668C166.022 8.2047 164.488 7.71176 162.966 7.20786C162.856 7.175 162.78 7.06546 162.604 6.92306Z"
          fill="#47585B"
        />
      </g>
      <defs>
        <clipPath id="clip0_39_25">
          <rect width="184.064" height="45.92" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="81"
      height="20"
      viewBox="0 0 81 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_49_110)">
        <path
          d="M1.61489 7.89594L2.76218 12.2614C3.01285 13.2156 3.24424 14.1078 3.40814 14.9952H3.46117C3.65881 14.1269 3.94322 13.206 4.23246 12.2614L5.6497 7.89594H6.97536L8.3203 12.1898C8.64328 13.2204 8.89395 14.1269 9.09159 14.9952H9.15908C9.32648 14.0549 9.54697 13.1247 9.81949 12.2089L11.0584 7.91502H12.6202L9.81949 16.5028H8.37332L7.04767 12.4045C6.74397 11.4503 6.4933 10.5963 6.27638 9.58487H6.26674C6.04936 10.5393 5.77736 11.4807 5.45206 12.4045L4.0541 16.4885H2.60793L0 7.89594H1.61489Z"
          fill="#47585B"
        />
        <path
          d="M21.8709 12.1231C21.8709 15.3006 19.6486 16.6842 17.5324 16.6842C15.18 16.6842 13.3674 14.981 13.3674 12.2615C13.3674 9.39891 15.2716 7.70044 17.6722 7.70044C20.1837 7.70044 21.8709 9.49433 21.8709 12.1231ZM14.9823 12.209C14.9823 14.0936 16.0766 15.5105 17.6192 15.5105C19.1617 15.5105 20.256 14.1079 20.256 12.1709C20.256 10.7157 19.5233 8.86933 17.6577 8.86933C15.7922 8.86933 14.9823 10.5773 14.9823 12.209Z"
          fill="#47585B"
        />
        <path
          d="M23.8667 10.5771C23.8667 9.5657 23.8667 8.66875 23.7944 7.89585H25.1779L25.231 9.58001H25.3033C25.4527 9.05475 25.7664 8.58986 26.1995 8.25213C26.6325 7.91439 27.1626 7.72118 27.7135 7.70024C27.8646 7.69861 28.0153 7.71625 28.1619 7.75272V9.22696C27.9859 9.1903 27.8065 9.17271 27.6268 9.17447C26.5132 9.17447 25.7227 10.0094 25.5106 11.1783C25.4604 11.425 25.4329 11.6757 25.4286 11.9273V16.5075H23.8667V10.5771Z"
          fill="#47585B"
        />
        <path
          d="M29.8104 3.88354H31.3867V16.4885H29.8104V3.88354Z"
          fill="#47585B"
        />
        <path
          d="M41.5388 3.88354V14.27C41.5388 15.0334 41.5388 15.9017 41.6111 16.4885H40.1939L40.1264 14.9952H40.0878C39.8064 15.5281 39.378 15.971 38.8523 16.2725C38.3267 16.574 37.7254 16.7217 37.1183 16.6984C35.0214 16.6984 33.4065 14.9427 33.4065 12.333C33.4065 9.47038 35.1805 7.71465 37.2967 7.71465C37.8124 7.68155 38.3276 7.78578 38.7888 8.01652C39.25 8.24726 39.6403 8.59607 39.9191 9.02667H39.9528V3.88354H41.5388ZM39.9625 11.3931C39.9647 11.1716 39.9404 10.9506 39.8902 10.7347C39.777 10.2185 39.4875 9.7568 39.0703 9.42739C38.6532 9.09799 38.134 8.92106 37.6004 8.92648C35.9662 8.92648 34.9973 10.3578 34.9973 12.2662C34.9973 14.0028 35.8602 15.4437 37.5618 15.4437C38.105 15.442 38.6312 15.2558 39.0524 14.9163C39.4736 14.5767 39.7642 14.1044 39.8757 13.5782C39.9346 13.3506 39.9638 13.1165 39.9625 12.8816V11.3931Z"
          fill="#47585B"
        />
        <path
          d="M46.0654 5.83484V7.89591H48.3262V9.0648H46.0654V13.6974C46.0654 14.7661 46.3739 15.3673 47.2512 15.3673C47.5602 15.3798 47.8692 15.3444 48.1671 15.2623L48.2395 16.4312C47.7907 16.5952 47.3149 16.6745 46.8367 16.665C46.5204 16.6809 46.2043 16.6286 45.9105 16.5116C45.6166 16.3947 45.352 16.2158 45.135 15.9875C44.6867 15.5104 44.5228 14.7661 44.5228 13.7547V9.0648H43.1779V7.89591H44.5228V6.31671L46.0654 5.83484Z"
          fill="#FFBA08"
        />
        <path
          d="M50.1049 10.5771C50.1049 9.5657 50.1049 8.66875 50.0326 7.89585H51.4161L51.4691 9.58001H51.5414C51.6908 9.05475 52.0046 8.58986 52.4377 8.25213C52.8707 7.91439 53.4008 7.72118 53.9517 7.70024C54.1028 7.69861 54.2535 7.71625 54.4 7.75272V9.22695C54.2241 9.1903 54.0447 9.1727 53.865 9.17447C52.7514 9.17447 51.9367 10.0094 51.7487 11.1783C51.7029 11.419 51.6787 11.6633 51.6764 11.9083V16.4884H50.1145L50.1049 10.5771Z"
          fill="#FFBA08"
        />
        <path
          d="M57.8034 5.48178C57.8034 5.73864 57.7003 5.98499 57.5168 6.16662C57.3333 6.34825 57.0844 6.45029 56.8248 6.45029C56.5653 6.45029 56.3164 6.34825 56.1329 6.16662C55.9494 5.98499 55.8463 5.73864 55.8463 5.48178C55.8429 5.35245 55.8662 5.2238 55.9147 5.10365C55.9632 4.98351 56.0359 4.87438 56.1283 4.7829C56.2208 4.69142 56.331 4.61949 56.4524 4.5715C56.5738 4.52351 56.7038 4.50045 56.8345 4.50372C56.9636 4.50305 57.0915 4.52802 57.2106 4.57718C57.3297 4.62633 57.4377 4.69866 57.528 4.78987C57.6184 4.88108 57.6893 4.98932 57.7366 5.10818C57.7839 5.22703 57.8067 5.35408 57.8034 5.48178ZM56.0439 16.4885V7.90067H57.6251V16.4885H56.0439Z"
          fill="#FFBA08"
        />
        <path
          d="M60.2571 10.7013C60.2571 9.59922 60.2186 8.71182 60.1848 7.89598H61.6021L61.6695 9.37021H61.7033C62.0156 8.84062 62.4679 8.40531 63.0115 8.11109C63.5551 7.81687 64.1694 7.67487 64.7884 7.70037C66.8854 7.70037 68.4665 9.45609 68.4665 12.0658C68.4665 15.1574 66.5383 16.6841 64.5185 16.6841C63.9934 16.7071 63.4712 16.5947 63.0031 16.358C62.535 16.1214 62.1369 15.7685 61.8479 15.334H61.8093V20H60.2571V10.7013ZM61.8142 12.9914C61.8197 13.2062 61.8439 13.4201 61.8865 13.6307C62.0187 14.1529 62.3234 14.6163 62.7523 14.9474C63.1811 15.2785 63.7095 15.4582 64.2534 15.458C65.9213 15.458 66.8902 14.1078 66.8902 12.1183C66.8902 10.396 65.9743 8.92651 64.3064 8.92651C63.7493 8.94211 63.2132 9.14032 62.7822 9.49003C62.3512 9.83974 62.0497 10.3212 61.925 10.8588C61.8588 11.0659 61.8215 11.281 61.8142 11.4981V12.9914Z"
          fill="#FFBA08"
        />
        <path
          d="M-0.482043 15.3387C44.1082 19.4417 70.3321 7.89594 70.3321 7.89594C70.3321 7.89594 51.8934 20.8683 -1.16174 18.3539"
          fill="#F5F8FA"
        />
        <path
          d="M44.542 14.3128C60.7439 11.8557 69.6089 7.94348 69.6089 7.94348C69.6089 7.94348 60.4499 14.1458 45.2169 16.1162"
          stroke="#FFBA08"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M2.3717 15.6725C16.435 16.8073 30.5832 16.3511 44.542 14.3128"
          stroke="#47585B"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M76.8689 9.7948C76.6182 8.23945 76.3868 6.76999 76.141 5.2385L75.7457 5.55816C74.8655 6.32651 73.8532 6.93247 72.7569 7.34728C72.5846 7.42209 72.3961 7.45341 72.2085 7.43842C72.0209 7.42343 71.84 7.36261 71.682 7.2614C71.0023 6.83201 70.2985 6.43125 69.5995 6.02094C69.7042 5.86943 69.8509 5.75104 70.0219 5.67996C70.1929 5.60887 70.381 5.58812 70.5636 5.62018C71.1144 5.67825 71.668 5.70533 72.2219 5.70128C72.3958 5.69859 72.5644 5.64184 72.7039 5.53907C74.6322 3.91693 76.5604 2.28843 78.4886 0.653573C78.9896 0.21704 79.6386 -0.0163728 80.3059 -5.29999e-05C80.9037 -5.29999e-05 81.1544 0.391169 80.8989 0.954146C80.7577 1.23639 80.563 1.48909 80.3252 1.69842C79.7612 2.20892 79.1731 2.69079 78.585 3.17266C78.5087 3.22821 78.4458 3.29981 78.4008 3.3823C78.3558 3.4648 78.3298 3.55614 78.3247 3.64976C78.1994 5.26235 78.0451 6.87495 77.9198 8.48755C77.9187 8.65087 77.8773 8.81145 77.7991 8.95531C77.721 9.09916 77.6085 9.22194 77.4715 9.31293C77.2623 9.46307 77.0611 9.62391 76.8689 9.7948Z"
          fill="#47585B"
        />
        <path
          d="M71.5565 3.01512C72.0048 2.63344 72.3182 2.13726 73.0413 2.24699C73.7643 2.35673 74.4874 2.3615 75.2491 2.41398L75.4949 2.44738C74.9454 2.92447 74.444 3.32524 73.9379 3.74031C73.909 3.76106 73.8761 3.7756 73.8412 3.78299C73.8064 3.79039 73.7703 3.79048 73.7354 3.78325C73.0605 3.57333 72.3857 3.35863 71.7156 3.13917C71.6674 3.12486 71.6336 3.07715 71.5565 3.01512Z"
          fill="#47585B"
        />
      </g>
      <defs>
        <clipPath id="clip0_49_110">
          <rect width="81" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
