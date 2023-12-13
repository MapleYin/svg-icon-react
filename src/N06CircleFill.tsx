import React from 'react'

export function N06CircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM5.73935 12.1706C5.73935 14.2815 6.20771 17.4396 8.46387 17.4396C10.72 17.4396 11.1877 14.2815 11.1877 12.1706C11.1877 10.0598 10.72 6.90166 8.46387 6.90166C6.20771 6.90166 5.73935 10.0598 5.73935 12.1706ZM12.7572 12.417C12.7572 14.7397 13.4009 17.4396 15.5683 17.4396C17.256 17.4396 18.1401 15.7976 18.1401 13.9682C18.1401 12.2481 17.3185 10.5963 15.6542 10.5963C14.4158 10.5963 13.643 11.5669 13.4234 12.7626L13.3745 12.7626C13.3745 12.6774 13.3745 12.6188 13.3745 12.5337C13.3745 10.7119 13.6607 7.50528 15.5851 7.50528C16.5118 7.50528 17.0596 8.21085 17.3205 9.10762C17.3685 9.29571 17.4185 9.47149 17.6449 9.47149C17.8042 9.47149 17.9282 9.38741 17.9282 9.19727C17.9282 9.10596 17.8899 8.93086 17.8229 8.71035C17.5124 7.6418 16.6932 6.91211 15.5969 6.91211C13.2989 6.91211 12.7572 10.2224 12.7572 12.417ZM17.5208 13.9736C17.5208 15.3169 16.8704 16.8464 15.5669 16.8464C14.2307 16.8464 13.5453 15.2849 13.5453 13.8787C13.5453 12.5899 14.2977 11.1749 15.5481 11.1749C16.8648 11.1749 17.5222 12.6206 17.5208 13.9736ZM10.5454 12.1706C10.5454 13.8922 10.2644 16.845 8.46387 16.845C6.66329 16.845 6.38233 13.8922 6.38233 12.1706C6.38233 10.4483 6.66329 7.48712 8.46387 7.48712C10.2644 7.48712 10.5454 10.4483 10.5454 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
