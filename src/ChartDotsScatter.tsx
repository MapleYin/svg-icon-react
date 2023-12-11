import React from 'react'

export default function ChartDotsScatter({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7793 23.2102' className={className}>
      <path
        d='M0.517679 23.2002L26.1573 23.2002C26.281 23.2002 26.418 23.1379 26.418 22.9584C26.418 22.788 26.281 22.7257 26.1573 22.7257L0.688487 22.7257C0.55333 22.7257 0.511533 22.6748 0.511533 22.5487L0.511533 0.269731C0.511533 0.146779 0.449226 0 0.269731 0C0.0811547 0 0 0.146779 0 0.269731L0 22.6734C0 23.0023 0.188771 23.2002 0.517679 23.2002Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M21.8013 7.56211C22.6185 7.56211 23.269 6.89208 23.269 6.09443C23.269 5.31562 22.6185 4.63515 21.8013 4.63515C20.9925 4.63515 20.3232 5.31562 20.3232 6.09443C20.3232 6.89208 20.9925 7.56211 21.8013 7.56211Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.9771 15.5992C17.7942 15.5992 18.4447 14.9383 18.4447 14.1406C18.4447 13.3618 17.7942 12.6729 16.9771 12.6729C16.1683 12.6729 15.4989 13.3618 15.4989 14.1406C15.4989 14.9383 16.1683 15.5992 16.9771 15.5992Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.5507 9.49502C12.3588 9.49502 13.01 8.82499 13.01 8.02734C13.01 7.24921 12.3588 6.55966 11.5507 6.55966C10.7328 6.55966 10.0635 7.24921 10.0635 8.02734C10.0635 8.82499 10.7328 9.49502 11.5507 9.49502Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.72647 17.5335C7.53458 17.5335 8.18575 16.8635 8.18575 16.0658C8.18575 15.287 7.53458 14.6065 6.72647 14.6065C5.9086 14.6065 5.23926 15.287 5.23926 16.0658C5.23926 16.8635 5.9086 17.5335 6.72647 17.5335Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
