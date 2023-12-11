import React from 'react'

export default function BellSlash({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.7461 25.975' className={className}>
      <path
        d='M7.37012 7.26729C7.0953 7.9509 6.88793 8.7302 6.72669 9.59114C6.20511 12.6324 6.49407 16.2698 4.82112 18.0034C3.96429 18.8839 2.90853 20.1227 2.93255 20.9358L2.93255 21.0551L21.153 21.0551L21.6757 21.5779L17.1263 21.5779C17.102 23.7798 15.6949 25.2997 13.6924 25.2997C11.6892 25.2997 10.2919 23.7791 10.2669 21.5779L2.87317 21.5779C2.58479 21.5779 2.36916 21.3587 2.36916 21.0211C2.36916 19.7341 3.48225 18.6928 4.45656 17.5886C5.90402 15.9456 5.74172 12.6206 6.21652 9.45305C6.36841 8.5198 6.60394 7.63735 6.95378 6.85079ZM10.7848 21.5779C10.8818 23.5349 12.0768 24.8032 13.6924 24.8032C15.3073 24.8032 16.5114 23.5349 16.6091 21.5779ZM16.5884 3.54912C19.4596 4.20762 20.711 6.59151 21.1774 9.45305C21.6431 12.6206 21.4808 15.9456 22.9373 17.5886C23.9019 18.6928 25.0157 19.7341 25.0157 21.0211C25.0157 21.1979 24.9565 21.3423 24.8582 21.4392L24.4613 21.0423L24.4613 20.9358C24.4763 20.1227 23.4205 18.8839 22.5721 18.0034C20.8907 16.2698 21.1797 12.6324 20.6665 9.59114C20.1268 6.75401 19.1035 4.80343 16.8434 4.18956C16.3654 4.05626 16.0792 3.89933 16.0136 3.46739C15.7999 2.22237 15.0298 1.18497 13.6924 1.18497C12.3641 1.18497 11.5849 2.22237 11.3796 3.46739C11.3147 3.89933 11.0285 4.05626 10.5498 4.18956C9.79122 4.39566 9.17094 4.75245 8.66419 5.24612L8.29459 4.87654C8.9433 4.24728 9.76512 3.78629 10.7957 3.54912C11.004 1.76114 12.1771 0.655763 13.6924 0.655763C15.2071 0.655763 16.3801 1.76114 16.5884 3.54912Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M2.81994 1.42784L26.3681 24.9837C26.4731 25.0887 26.6378 25.0887 26.7414 24.9837C26.8639 24.8606 26.8457 24.7063 26.7414 24.602L3.19397 1.0545C3.10784 0.969048 2.95285 0.931353 2.81994 1.0545C2.71633 1.1588 2.71633 1.32423 2.81994 1.42784Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}