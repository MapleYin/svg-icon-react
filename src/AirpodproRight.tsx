import React from 'react'

export function AirpodproRight({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.4852 22.0749' className={className}>
      <path
        d='M10.9118 20.4418C10.9118 20.8906 10.6799 21.1352 10.12 21.1352L9.11485 21.1352C8.57315 21.1352 8.32237 20.8906 8.32237 20.4418L8.32237 12.6273C9.37579 12.4587 10.1982 12.2394 10.9118 11.9739Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.1972 5.23424C15.1972 7.76881 13.5566 9.73102 11.2285 10.8302C10.5328 11.1566 9.77267 11.4042 8.6855 11.5762C8.86722 11.0981 8.96339 10.56 8.96339 9.97448C8.96339 7.67989 7.16762 5.57379 4.66009 5.22349C4.80328 4.87681 4.92952 4.59821 5.02686 4.45074C6.24152 2.07613 8.67179 0.892243 10.867 0.939704C13.4931 0.987165 15.1972 2.74 15.1972 5.23424ZM12.5678 3.215L11.035 4.51002C10.8635 4.66969 10.8335 4.91227 10.9568 5.06491C11.1067 5.24616 11.3682 5.24752 11.5208 5.12487L13.0913 3.82985C13.2628 3.69742 13.2544 3.4276 13.122 3.26588C13 3.09371 12.7574 3.06441 12.5678 3.215Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.94454 13.0381C6.8334 13.0381 8.02833 11.8544 8.02833 9.97448C8.02833 7.96227 6.26319 6.10035 3.91006 6.10035C2.1878 6.10035 0.944142 7.37135 0.944142 9.12418C0.944142 11.2782 2.74385 13.0381 4.94454 13.0381ZM4.47598 11.6946C4.15166 11.9428 3.54688 11.6394 2.94229 10.8604C2.32998 10.0828 2.09834 9.48571 2.42198 9.23746C2.73789 8.98922 3.2959 9.31012 3.91026 10.0346C4.54981 10.8416 4.7542 11.438 4.47598 11.6946Z'
        fill={color}
        fillOpacity='0.425'
      />
    </svg>
  )
}
