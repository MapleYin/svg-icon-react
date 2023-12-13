import React from 'react'

export function DropTriangle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.1327 24.0359' className={className}>
      <path
        d='M2.58057 23.5766L23.1992 23.5766C24.8225 23.5766 25.7714 22.4142 25.7714 21.0707C25.7714 20.5211 25.6326 19.9519 25.3104 19.3862L15.0377 1.18516C14.5587 0.328224 13.7108 0 12.8902 0C12.0599 0 11.2218 0.328224 10.7337 1.18516L0.461035 19.3862C0.147168 19.9436 0 20.5211 0 21.0707C0 22.4142 0.948928 23.5766 2.58057 23.5766ZM2.59102 23.0405C1.25186 23.0405 0.548545 22.1355 0.548545 21.0519C0.548545 20.5772 0.681161 20.0817 0.947078 19.5967L11.2093 1.43331C11.584 0.752255 12.2469 0.529013 12.8902 0.529013C13.5336 0.529013 14.1867 0.752255 14.5698 1.43331L24.8236 19.5883C25.0986 20.0733 25.2312 20.5772 25.2312 21.0519C25.2312 22.1355 24.5272 23.0405 23.179 23.0405Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.8812 19.1924C14.936 19.1924 16.2969 17.8615 16.2969 15.8562C16.2969 15.0612 15.9685 14.0154 15.4346 12.8625C14.8779 11.66 14.1346 10.3956 13.3442 9.18467C13.2152 8.99639 13.0953 8.90713 12.8812 8.90713C12.6754 8.90713 12.5464 8.99639 12.4272 9.18467C11.6361 10.3956 10.8935 11.66 10.3361 12.8625C9.80293 14.0154 9.47451 15.0612 9.47451 15.8562C9.47451 17.8615 10.8354 19.1924 12.8812 19.1924Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
