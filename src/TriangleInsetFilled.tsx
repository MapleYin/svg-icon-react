import React from 'react'

export default function TriangleInsetFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.1327 24.0359' className={className}>
      <path
        d='M2.58057 23.5766L23.1992 23.5766C24.8225 23.5766 25.7714 22.4142 25.7714 21.0707C25.7714 20.5211 25.6326 19.9519 25.3104 19.3862L15.0377 1.18516C14.5587 0.328224 13.7108 0 12.8902 0C12.0599 0 11.2218 0.328224 10.7337 1.18516L0.461035 19.3862C0.147168 19.9436 0 20.5211 0 21.0707C0 22.4142 0.948928 23.5766 2.58057 23.5766ZM2.59102 23.0405C1.25186 23.0405 0.548545 22.1355 0.548545 21.0519C0.548545 20.5772 0.681161 20.0817 0.947078 19.5967L11.2093 1.43331C11.584 0.752255 12.2469 0.529013 12.8902 0.529013C13.5336 0.529013 14.1867 0.752255 14.5698 1.43331L24.8236 19.5883C25.0986 20.0733 25.2312 20.5772 25.2312 21.0519C25.2312 22.1355 24.5272 23.0405 23.179 23.0405Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M2.99738 21.4609L22.7629 21.4609C23.3356 21.4609 23.6929 20.8895 23.3649 20.3202L13.5286 2.8423C13.2188 2.30021 12.533 2.30021 12.2414 2.8423L2.39533 20.3202C2.06671 20.8902 2.42531 21.4609 2.99738 21.4609Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
