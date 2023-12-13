import React from 'react'

export function CatCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.39708 19.4308L7.75665 19.4308C8.40186 19.4308 8.84698 19.0352 8.84698 18.4401C8.84698 17.9657 8.54219 17.5772 8.01846 17.4977L8.01846 16.088C8.01846 15.3903 8.2376 15.0381 8.55352 14.5339C9.14933 14.8239 10.2484 14.997 11.1721 14.997C12.0299 14.997 12.9295 14.905 13.8276 14.702C13.9378 15.311 14.1304 15.9787 14.1304 16.1875C14.1304 17.1399 14.0509 17.5309 14.0509 18.2816C14.0509 19.0352 14.3934 19.4308 15.0658 19.4308L15.5112 19.4308C16.1558 19.4308 16.5918 19.0429 16.5918 18.4401C16.5918 17.9714 16.2827 17.5772 15.7554 17.4802L15.7554 16.9823C15.7554 13.7172 18.3232 14.5988 18.3176 10.0266C19.4854 10.0315 20.3225 9.23624 20.3225 8.69005C20.3225 8.01006 19.558 7.25469 18.749 6.66397C18.5537 6.00831 18.3105 5.38809 17.9176 5.38809C17.589 5.38809 17.2969 5.73038 16.8418 6.47257C16.3626 6.86866 15.8882 7.60264 15.4563 8.23262L14.8992 9.0751C14.7577 9.26387 14.6748 9.3334 14.4845 9.3334C12.4125 9.3334 11.2284 8.99161 9.03819 8.99161C7.82637 8.99161 7.14346 9.49122 6.7794 10.0431C6.62745 10.2795 6.51798 10.3479 6.21954 10.2747C5.2294 10.0292 4.61056 9.22344 4.61056 8.20352C4.61056 6.78799 5.73516 5.79102 7.3251 5.79102C7.89014 5.79102 8.50967 5.94454 9.19122 6.19844C9.56827 6.35108 9.70479 5.83321 9.38633 5.69942C8.68047 5.42461 7.98712 5.27881 7.3251 5.27881C5.38243 5.27881 4.09903 6.46387 4.09903 8.20352C4.09903 9.44717 4.92022 10.4446 6.1334 10.7535C6.33555 10.7981 6.40801 10.9312 6.35215 11.1989C6.2502 11.6972 6.23135 12.1648 6.23135 12.4432C6.23135 14.2419 5.34337 14.9036 5.58819 15.7553L6.34923 18.5015C6.52296 19.1573 6.93741 19.4308 7.39708 19.4308ZM17.974 7.88819C17.9924 7.68292 18.172 7.51827 18.3773 7.53731C18.5909 7.54659 18.7653 7.73526 18.7477 7.93985C18.7377 8.16397 18.5393 8.31045 18.3249 8.30118C18.1203 8.28214 17.955 8.11163 17.974 7.88819Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
