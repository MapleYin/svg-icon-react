import React from 'react'

export function CarseatLeftUpAndDown({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8222 32.1297' className={className}>
      <path
        d='M0.132809 20.0759C0.978612 23.625 2.40683 24.6913 4.51631 24.6913L17.6083 24.6913C19.1327 24.6913 20.2815 23.749 20.6664 22.1772L25.3392 3.03106C25.8572 0.919732 24.696 0 23.414 0C21.7261 0 19.9593 1.44015 20.5215 4.67452L20.6183 4.31983C17.3568 5.98507 15.3899 11.2497 15.9377 16.8038L16.0906 16.5868C13.4107 16.0713 10.244 15.7985 6.9877 15.7985C1.55615 15.7985-0.579693 17.0522 0.132809 20.0759ZM0.621393 19.9439C-0.017669 17.3602 1.86543 16.3101 6.9877 16.3101C10.1166 16.3101 13.3581 16.5838 15.8064 17.0684C16.2273 17.1522 16.4669 16.9586 16.4299 16.5189C15.9823 11.543 17.7478 6.44445 20.811 4.76613C21.0318 4.67023 20.9821 4.53644 20.9655 4.33077C20.6971 1.70001 22.0329 0.511533 23.377 0.511533C24.3976 0.511533 25.2637 1.28233 24.8597 2.96397L20.1856 22.0388C19.8513 23.3786 18.8805 24.1791 17.6083 24.1791L4.51631 24.1791C2.71406 24.1791 1.42901 23.306 0.621393 19.9439Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.52959 26.6151C5.14073 26.6151 5.0419 26.9874 5.20069 27.2514L7.95254 31.7883C8.14834 32.1068 8.56378 32.0872 8.73936 31.7883L11.5296 27.2325C11.6891 26.9686 11.5882 26.6151 11.2 26.6151Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.52959 13.8663L11.2 13.8663C11.5882 13.8663 11.6891 13.5129 11.5296 13.2489L8.73936 8.69316C8.56378 8.39423 8.14766 8.3747 7.95254 8.69316L5.20069 13.2301C5.04121 13.494 5.14073 13.8663 5.52959 13.8663Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
