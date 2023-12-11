import React from 'react'

export default function Wave_3BackwardCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.11924 12.1329C7.11924 15.1346 8.01426 17.9652 9.75069 20.4481C9.84248 20.5915 9.98292 20.6158 10.1242 20.5358C10.2669 20.4182 10.2892 20.2596 10.1987 20.1435C8.56612 18.0464 7.66681 15.2705 7.66681 12.1329C7.66681 8.99464 8.56544 6.22013 10.1987 4.12306C10.2892 4.00694 10.2669 3.84835 10.1242 3.73067C9.99131 3.64932 9.8418 3.67432 9.75069 3.80928C8.01426 6.29356 7.11924 9.13262 7.11924 12.1329Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.3125 12.1329C11.3125 14.4721 11.9557 16.4949 13.2079 18.0854C13.2983 18.2099 13.4472 18.2335 13.5619 18.1528C13.6851 18.0735 13.7457 17.9143 13.6546 17.7786C12.4712 16.2807 11.8524 14.3419 11.8524 12.1329C11.8524 9.92393 12.4712 7.98585 13.6546 6.48722C13.7457 6.35225 13.6851 6.19298 13.5619 6.11368C13.4472 6.03233 13.2983 6.05664 13.2079 6.17208C11.9557 7.77862 11.3125 9.80079 11.3125 12.1329Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.4604 12.1329C15.4604 13.4701 15.8789 14.7878 16.6261 15.7589C16.7431 15.8827 16.9205 15.907 17.0255 15.8096C17.1793 15.6814 17.1555 15.5222 17.0455 15.367C16.384 14.494 16.0002 13.3274 16.0002 12.1329C16.0002 10.937 16.384 9.7711 17.0455 8.89952C17.1562 8.74434 17.18 8.58438 17.0255 8.45625C16.9205 8.35948 16.7438 8.38379 16.6261 8.50694C15.8789 9.47168 15.4604 10.7894 15.4604 12.1329Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
