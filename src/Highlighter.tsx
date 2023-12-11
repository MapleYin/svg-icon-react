import React from 'react'

export default function Highlighter({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.4837 27.2184' className={className}>
      <path
        d='M0.251567 24.1611L25.8708 24.1611C26.0042 24.1611 26.1224 24.0521 26.1224 23.9096C26.1224 23.7678 26.0042 23.6496 25.8708 23.6496L0.251567 23.6496C0.118166 23.6496 0 23.7678 0 23.9096C0 24.0521 0.118166 24.1611 0.251567 24.1611Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.07129 19.771L10.5178 18.282C10.7472 18.2103 10.8112 18.1671 10.9688 18.0088L23.1865 6.20167C24.0644 5.34336 24.0637 4.32539 23.2033 3.41826L20.5841 0.697071C19.7328-0.191213 18.6876-0.238673 17.8098 0.601465L5.55507 12.3897C5.39745 12.548 5.33544 12.6023 5.26366 12.8227L3.6162 17.2321C3.4622 17.6273 3.47538 17.8654 3.77929 18.1791L5.12431 19.5702C5.41845 19.8741 5.67539 19.9062 6.07129 19.771ZM5.96748 19.272C5.68633 19.3696 5.60205 19.3145 5.46894 19.182L4.20449 17.8715C4.05391 17.7111 4.01758 17.608 4.11455 17.3548L5.81533 12.8916L18.2049 0.958699C18.8148 0.368271 19.5211 0.357821 20.1018 0.957331L22.9333 3.89151C23.514 4.50987 23.4853 5.18819 22.8481 5.78838L10.4774 17.7304ZM2.5581 20.3129L3.52001 20.3129C3.77031 20.3129 3.82529 20.2634 3.96113 20.1771L5.28945 19.2416L4.08974 18.1872L2.38046 19.8384C2.18466 20.0272 2.27802 20.3129 2.5581 20.3129ZM5.6121 12.9098L10.3996 17.8746L10.7802 17.5129L6.00176 12.548ZM16.6605 2.29005L21.439 7.25489L21.8377 6.87501L17.0411 1.91016Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}