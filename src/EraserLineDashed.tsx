import React from 'react'

export function EraserLineDashed({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.2706 25.072' className={className}>
      <path
        d='M19.9603 23.4297C19.9603 23.5715 19.8513 23.6897 19.7088 23.6897L11.9959 23.6897L12.5077 23.1782L19.7088 23.1782C19.8513 23.1782 19.9603 23.2873 19.9603 23.4297Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M30.0169 23.4297C30.0169 23.5715 29.9078 23.6897 29.766 23.6897L21.8112 23.6897C21.6785 23.6897 21.5603 23.5715 21.5603 23.4297C21.5603 23.2873 21.6785 23.1782 21.8112 23.1782L29.766 23.1782C29.9078 23.1782 30.0169 23.2873 30.0169 23.4297Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.80407 17.7888L7.15621 23.1403C8.36071 24.335 10.0839 24.367 11.264 23.1778L23.4488 10.9833C24.2492 10.1926 24.2576 9.04155 23.4461 8.24887L16.6955 1.49897C15.9028 0.687445 14.7524 0.695159 13.9611 1.50532L1.76725 13.681C0.577989 14.8612 0.610021 16.585 1.80407 17.7888ZM2.16199 17.4218C1.17634 16.4355 1.14636 15.0275 2.13767 14.0439L14.324 1.84917C14.9131 1.26851 15.7492 1.26851 16.3382 1.84849L23.0965 8.60679C23.6856 9.19585 23.6849 10.0313 23.0959 10.6204L10.9005 22.8158C9.91755 23.7987 8.50954 23.7687 7.5239 22.7824ZM3.40954 12.5964L12.3856 21.5907L12.7612 21.1962L3.77742 12.2131Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
