import React from 'react'

export default function FolderFillBadgePersonCrop({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40.2564 24.9467' className={className}>
      <path
        d='M33.4018 13.7078L33.6413 13.6956L33.6413 20.1283C33.6413 22.1729 32.5353 23.3159 30.4261 23.3159L9.4252 23.3159C7.35069 23.3159 6.24395 22.2099 6.24395 20.1283L6.24395 9.20616L26.9788 9.20616C27.9437 11.8252 30.479 13.7078 33.4018 13.7078ZM15.0716 2.52237L15.7048 3.13828C16.4136 3.82276 16.8935 3.94541 18.0839 3.94541L27.2159 3.94541C26.7857 4.82793 26.5478 5.81596 26.5478 6.85391C26.5478 7.47936 26.6337 8.08623 26.8013 8.66065L6.24395 8.66065L6.24395 4.25997C6.24395 2.47588 7.12657 1.59395 8.95645 1.59395L12.5314 1.59395C13.8365 1.59395 14.2506 1.72705 15.0716 2.52237Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M39.3659 6.85391C39.3659 10.1293 36.6667 12.809 33.4018 12.809C30.1445 12.809 27.4474 10.1307 27.4474 6.85391C27.4474 3.5876 30.1445 0.889751 33.4018 0.889751C36.6778 0.889751 39.3659 3.57784 39.3659 6.85391ZM29.4617 10.4902L29.4617 10.5579C30.3873 11.7406 31.8145 12.301 33.4206 12.301C35.0268 12.301 36.3513 11.7776 37.3516 10.5579L37.3516 10.5273C37.0064 9.79141 35.505 8.71065 33.4018 8.71065C31.3265 8.71065 29.8258 9.79141 29.4617 10.4902ZM31.2958 5.23594C31.2958 6.57178 32.1572 7.63985 33.3836 7.63985C34.619 7.63985 35.4986 6.57178 35.4986 5.23594C35.4986 4.04522 34.6002 2.93878 33.3836 2.93878C32.1942 2.93878 31.2958 4.04522 31.2958 5.23594Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
