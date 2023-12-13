import React from 'react'

export function Scooter({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.4229 24.7691' className={className}>
      <path
        d='M4.11553 24.7691C6.38985 24.7691 8.23106 22.9279 8.23106 20.6536C8.23106 18.38 6.38985 16.5381 4.11553 16.5381C1.84121 16.5381 0 18.38 0 20.6536C0 22.9279 1.84121 24.7691 4.11553 24.7691ZM4.11553 24.2307C2.14317 24.2307 0.539168 22.626 0.539168 20.6536C0.539168 18.6722 2.14317 17.0772 4.11553 17.0772C6.09697 17.0772 7.69189 18.6722 7.69189 20.6536C7.69121 22.6267 6.09697 24.23 4.11553 24.2307ZM4.11553 21.5864C4.62725 21.5864 5.04766 21.1653 5.04766 20.6536C5.04766 20.1426 4.62793 19.7215 4.11553 19.7215C3.60313 19.7215 3.18408 20.1419 3.1834 20.6536C3.1918 21.1653 3.61153 21.5864 4.11553 21.5864ZM26.946 24.7691C29.2203 24.7691 31.0615 22.9279 31.0615 20.6536C31.0615 18.38 29.2203 16.5381 26.946 16.5381C24.6717 16.5381 22.8305 18.38 22.8305 20.6536C22.8305 22.9279 24.6717 24.7691 26.946 24.7691ZM26.946 24.2307C24.9736 24.2307 23.3696 22.626 23.3696 20.6536C23.3696 18.6722 24.9736 17.0772 26.946 17.0772C28.9184 17.0772 30.5224 18.6722 30.5224 20.6536C30.5224 22.626 28.9184 24.2307 26.946 24.2307ZM26.946 21.5864C27.457 21.5864 27.8781 21.1653 27.8781 20.6536C27.8781 20.1426 27.4577 19.7215 26.946 19.7215C26.4336 19.7215 26.0146 20.1419 26.0139 20.6536C26.0132 21.1653 26.4329 21.5864 26.946 21.5864ZM4.08155 20.9108L18.0047 20.9108C18.2736 20.9108 18.348 20.8377 18.4759 20.698L25.1478 13.1727L24.8824 12.7251L18.18 20.2687C18.0719 20.3769 18.0601 20.388 17.9317 20.388L4.08155 20.388ZM17.4523 0.276762C17.4523 0.417194 17.5685 0.53331 17.7089 0.53331L21.4679 0.53331C21.6039 0.53331 21.6807 0.572372 21.7184 0.706356L26.7042 20.6364L27.2041 20.5092L22.1537 0.434768C22.0819 0.164454 21.9107 0.0104493 21.6176 0.0104493L17.7089 0.0104493C17.5685 0.0104493 17.4523 0.135646 17.4523 0.276762Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
