import React from 'react'

export default function CursorarrowMotionlines({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.6816 25.1209' className={className}>
      <path
        d='M21.4189 11.3116C21.4189 11.4555 21.3014 11.5639 21.1401 11.5639L12.063 11.5639L11.6175 11.0614L21.1401 11.0614C21.3014 11.0614 21.4189 11.1782 21.4189 11.3116Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.5947 8.13204C18.5947 8.26681 18.4863 8.38429 18.325 8.38429L9.24368 8.38429L8.79011 7.87276L18.325 7.87276C18.4863 7.87276 18.5947 7.98956 18.5947 8.13204Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.7544 4.95313C15.7544 5.08722 15.6369 5.2047 15.4846 5.2047L6.42437 5.2047L5.9708 4.69317L15.4846 4.69317C15.6369 4.69317 15.7544 4.80997 15.7544 4.95313Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.9379 1.77354C12.9379 1.90763 12.8288 2.02511 12.6674 2.02511L3.60506 2.02511L3.15149 1.51358L12.6674 1.51358C12.8288 1.51358 12.9379 1.63037 12.9379 1.77354Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.1198 23.2451L6.80016 13.0468L6.43424 13.4555L11.7651 13.6506C12.1265 13.6631 12.3523 13.2424 12.0967 12.931L1.6605 1.1625C1.39859 0.863575 0.861866 1.08389 0.88003 1.47959L1.25464 16.875C1.2728 17.2651 1.76118 17.4609 2.00493 17.1746L5.72593 13.4109L5.00523 13.6145L9.26079 23.9829C9.34439 24.201 9.61763 24.295 9.85181 24.2024L10.8877 23.811C11.1134 23.719 11.2131 23.4625 11.1198 23.2451Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
