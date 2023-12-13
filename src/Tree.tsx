import React from 'react'

export function Tree({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.6353 29.6307' className={className}>
      <path
        d='M11.8621 23.3038C12.7074 23.3038 13.6413 23.1762 14.6324 22.7856C15.6235 23.1762 16.5665 23.3038 17.4118 23.3038C19.8356 23.3038 21.5952 22.1955 22.188 21.5705C23.2161 22.1167 24.1298 22.3609 24.9933 22.3609C27.601 22.3609 29.2739 20.6384 29.2739 17.933C29.2739 16.5004 28.6762 15.0637 27.249 13.7099C28.4105 12.61 28.8338 11.3692 28.8338 9.89874C28.8338 7.13956 26.629 4.8627 24.0701 4.70528C24.1353 2.00606 21.4651 0 18.5712 0C17.0632 0 15.6438 0.608398 14.6324 1.76914C13.6302 0.608398 12.2024 0 10.6937 0C7.79981 0 5.13868 2.00606 5.2045 4.70528C2.64492 4.8627 0.431055 7.13956 0.431055 9.89874C0.431055 11.3692 0.863477 12.61 2.0249 13.7099C0.588672 15.0637 0 16.5004 0 17.933C0 20.6384 1.67295 22.3609 4.28067 22.3609C5.14415 22.3609 6.04874 22.1167 7.07686 21.5705C7.67872 22.1955 9.4293 23.3038 11.8621 23.3038ZM11.8621 22.7676C9.0337 22.7676 7.57794 21.3504 7.20499 20.8162C6.13458 21.5414 5.18848 21.833 4.28067 21.833C1.90704 21.833 0.52784 20.4043 0.52784 17.933C0.52784 16.5672 1.09854 15.2373 2.55186 13.9486C2.69386 13.8185 2.70021 13.611 2.55323 13.4822C1.39151 12.4524 0.958211 11.3376 0.958211 9.92208C0.958211 7.27813 3.07276 5.21944 5.47452 5.2213C5.66466 5.21358 5.75529 5.06866 5.74347 4.90421C5.42755 2.40763 7.91202 0.527157 10.6907 0.527157C12.3382 0.527157 13.6665 1.1919 14.6324 2.75069C15.6074 1.1919 16.9371 0.527157 18.5832 0.527157C21.3619 0.527157 23.8373 2.40763 23.5214 4.90421C23.5096 5.06866 23.6002 5.21358 23.791 5.2213C26.1921 5.21944 28.3067 7.27813 28.3067 9.92208C28.3067 11.3376 27.8824 12.4524 26.7207 13.4822C26.5737 13.611 26.5801 13.8185 26.713 13.9486C28.1663 15.2373 28.737 16.5672 28.737 17.933C28.737 20.4043 27.3578 21.833 24.9933 21.833C24.0855 21.833 23.1394 21.5414 22.0599 20.8162C21.696 21.3504 20.2312 22.7676 17.4118 22.7676C16.5372 22.7676 15.6318 22.6393 14.6324 22.2146C13.6422 22.6393 12.7367 22.7676 11.8621 22.7676Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.6324 29.3825C15.3273 29.3825 15.9067 29.1581 15.9067 28.8935C15.9067 28.3413 15.7009 27.6876 15.7009 24.906C15.7009 22.261 17.4133 18.6429 18.4429 17.2497L17.5468 16.1986C16.6906 17.7386 15.6524 19.7854 15.2437 20.9189L15.2437 16.2784L14.0303 16.2784L14.0303 20.9195C13.6125 19.777 12.5833 17.7379 11.7272 16.1986L10.8227 17.2497C11.8606 18.6429 13.5731 22.261 13.5731 24.906C13.5731 27.6876 13.3673 28.3413 13.3673 28.8935C13.3673 29.1581 13.9376 29.3825 14.6324 29.3825Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.49337 18.2675C10.8022 18.2675 11.7343 17.1919 12.1359 15.5093C12.8655 16.1526 13.5644 16.4799 14.6324 16.4799C15.7096 16.4799 16.4084 16.1526 17.129 15.5093C17.5306 17.1919 18.4627 18.2675 20.7806 18.2675C20.9337 18.2675 21.0555 18.1373 21.0555 17.9919C21.0555 17.8388 20.9337 17.7079 20.7806 17.7079C18.5134 17.6786 17.9823 16.4139 17.6751 15.2455C17.5822 14.9055 17.1545 14.6977 16.7841 15.0141C16.3476 15.3805 15.7527 15.9407 14.6324 15.9407C13.5212 15.9407 12.9264 15.3805 12.4808 15.0141C12.1104 14.6977 11.6826 14.9055 11.5988 15.2455C11.2825 16.4139 10.7606 17.6786 8.49337 17.7079C8.34024 17.7079 8.21846 17.8388 8.21846 17.9919C8.21846 18.1373 8.34024 18.2675 8.49337 18.2675Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
