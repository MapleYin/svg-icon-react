import React from 'react'

export function MessageBadgeWaveform({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.7355 30.8494' className={className}>
      <path
        d='M31.2517 14.3534C31.2517 15.5222 31.0471 16.622 30.6523 17.6318C30.6156 17.3393 30.5012 17.0728 30.3311 16.8527C30.5833 16.0551 30.7095 15.2167 30.7095 14.3534C30.7095 8.49668 24.9215 3.80928 17.6923 3.80928C10.4624 3.80928 4.67443 8.49668 4.67443 14.3534C4.67443 18.2932 7.23546 21.6929 11.1815 23.5106C11.3285 23.5779 11.3892 23.7399 11.3044 23.9424C10.7644 25.1126 9.69426 26.2557 9.1839 26.8762C9.09738 26.9731 9.1092 27.0227 9.20685 27.0206C10.2482 27.068 12.6877 26.0772 14.9954 24.8438C15.1422 24.7675 15.368 24.7488 15.5273 24.767C16.2376 24.8417 16.9411 24.9066 17.6923 24.9066C19.3606 24.9066 20.9522 24.656 22.4075 24.1888L22.4075 24.7519C20.1704 25.4325 17.7213 25.642 15.3281 25.2903C12.963 26.6192 10.444 27.5453 9.19522 27.5453C8.42159 27.5453 8.25167 27.0683 8.81446 26.4107C9.32569 25.8341 10.1597 24.921 10.7261 23.8908C6.75079 21.9075 4.13223 18.3739 4.13223 14.3534C4.13223 8.26416 10.1118 3.28525 17.6923 3.28525C25.2721 3.28525 31.2517 8.26416 31.2517 14.3534Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M34.1786 26.3175C34.3674 26.3175 34.5228 26.1712 34.5228 25.9824L34.5228 21.092C34.5228 20.8948 34.3674 20.7479 34.1786 20.7479C33.9899 20.7479 33.8436 20.8955 33.8436 21.092L33.8436 25.9824C33.8436 26.1705 33.9899 26.3175 34.1786 26.3175Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M31.624 28.2394C31.8135 28.2394 31.9605 28.0931 31.9605 27.9043L31.9605 19.1701C31.9605 18.973 31.8135 18.8267 31.624 18.8267C31.4366 18.8267 31.2897 18.973 31.2897 19.1701L31.2897 27.9043C31.2897 28.0931 31.4366 28.2394 31.624 28.2394Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M29.0715 29.6374C29.2596 29.6374 29.4066 29.4904 29.4066 29.2933L29.4066 17.7832C29.4066 17.5944 29.2596 17.4475 29.0715 17.4475C28.8827 17.4475 28.7364 17.5944 28.7364 17.7832L28.7364 29.2933C28.7364 29.4911 28.882 29.6374 29.0715 29.6374Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M26.5176 27.5519C26.7064 27.5519 26.8533 27.4049 26.8533 27.2154L26.8533 19.8401C26.8533 19.6611 26.7064 19.496 26.5176 19.496C26.3295 19.496 26.1825 19.6611 26.1825 19.8401L26.1825 27.2154C26.1825 27.4049 26.3295 27.5519 26.5176 27.5519Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M23.9637 25.5703C24.1524 25.5703 24.2994 25.424 24.2994 25.2269L24.2994 21.8392C24.2994 21.6413 24.1524 21.5041 23.9637 21.5041C23.7756 21.5041 23.6293 21.6413 23.6293 21.8392L23.6293 25.2269C23.6293 25.424 23.7756 25.5703 23.9637 25.5703Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
