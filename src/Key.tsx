import React from 'react'

export default function Key({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.2829 29.6377' className={className}>
      <path
        d='M7.28203 29.4058C7.38545 29.5233 7.52774 29.5267 7.65773 29.4065L11.5354 25.5288C11.6563 25.3988 11.664 25.2447 11.5347 25.1343L8.9006 22.519L12.4331 18.9956C12.5436 18.904 12.5338 18.7311 12.4045 18.6011L8.77394 14.9601C12.7282 13.5485 14.9216 10.7905 14.9216 7.44092C14.9216 3.32608 11.5942 0 7.46046 0C3.30791 0 0 3.30723 0 7.44092C0 10.6445 1.96152 13.4589 5 14.5118L5 26.7842C5 26.9555 5.0627 27.1574 5.24033 27.3414ZM7.46046 28.8502L5.53038 26.9292L5.53038 14.1246C2.55255 13.2573 0.510849 10.5884 0.510849 7.44092C0.510849 3.62081 3.60264 0.530381 7.46046 0.530381C11.3001 0.530381 14.3912 3.60196 14.3912 7.44092C14.3912 10.5591 12.3488 13.2573 8.24542 14.5065L8.24542 15.2144L11.8489 18.8179L8.4084 22.2284L8.4084 22.7706L10.9693 25.312ZM7.46046 6.65499C8.48292 6.65499 9.29053 5.83829 9.29053 4.82559C9.29053 3.80313 8.48292 2.98712 7.46046 2.98712C6.43799 2.98712 5.63174 3.80313 5.63174 4.82559C5.63174 5.83829 6.43868 6.65499 7.46046 6.65499Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}