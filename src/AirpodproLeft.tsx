import React from 'react'

export function AirpodproLeft({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.492 22.0749' className={className}>
      <path
        d='M7.80421 12.6272L7.80421 20.4418C7.80421 20.8906 7.55411 21.1352 7.01173 21.1352L6.00723 21.1352C5.45645 21.1352 5.21543 20.8906 5.21543 20.4418L5.21543 11.9722C5.92669 12.2384 6.74903 12.4583 7.80421 12.6272Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.1004 4.45074C11.1977 4.59822 11.324 4.87681 11.4671 5.2235C8.95959 5.57385 7.16387 7.67993 7.16387 9.97448C7.16387 10.56 7.26004 11.0981 7.44176 11.5762C6.35459 11.4042 5.59448 11.1566 4.89873 10.8302C2.5791 9.73102 0.938479 7.76881 0.938479 5.23424C0.938479 2.74 2.64258 0.987165 5.26026 0.939704C7.45548 0.892243 9.88506 2.07613 11.1004 4.45074ZM3.0046 3.26588C2.87217 3.4276 2.87286 3.69742 3.03594 3.82985L4.60645 5.12487C4.75841 5.24752 5.02052 5.24616 5.17042 5.06491C5.29308 4.91227 5.26378 4.66969 5.09229 4.51002L3.55948 3.215C3.37891 3.06441 3.12725 3.09371 3.0046 3.26588Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.1827 13.0381C13.3827 13.0381 15.1915 11.2782 15.1915 9.12418C15.1915 7.37135 13.9395 6.10035 12.2172 6.10035C9.86407 6.10035 8.09893 7.96227 8.09893 9.97448C8.09893 11.8544 9.29318 13.0381 11.1827 13.0381ZM11.6506 11.6946C11.3731 11.438 11.5775 10.8416 12.217 10.0346C12.8307 9.31012 13.3894 8.98922 13.7053 9.23746C14.0289 9.48571 13.7973 10.0828 13.185 10.8604C12.5804 11.6394 11.9749 11.9428 11.6506 11.6946Z'
        fill={color}
        fillOpacity='0.425'
      />
    </svg>
  )
}
