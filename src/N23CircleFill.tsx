import React from 'react'

export default function N23CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM13.3038 8.77168C13.2166 9.04375 13.2062 9.26905 13.2062 9.39239C13.2062 9.58184 13.3043 9.70294 13.4817 9.70294C13.7005 9.70294 13.7246 9.56417 13.7685 9.3461C13.9281 8.37208 14.5031 7.50597 15.5952 7.50597C16.7305 7.50597 17.3613 8.42774 17.3613 9.56368C17.3613 10.7407 16.6042 11.6827 15.4244 11.6827L14.8179 11.6827C14.618 11.6827 14.5562 11.827 14.5562 11.9619C14.5562 12.115 14.6648 12.2495 14.8179 12.2495L15.444 12.2495C16.7961 12.2495 17.623 13.0024 17.623 14.5032C17.623 15.7055 16.9971 16.8073 15.6622 16.8073C14.43 16.8073 13.7335 15.8506 13.6052 14.9336C13.5788 14.7155 13.5177 14.5929 13.3003 14.5929C13.1326 14.5929 13.0304 14.721 13.0304 14.8971C13.0304 15.0581 13.0778 15.3477 13.1371 15.5437C13.4719 16.6254 14.3488 17.4005 15.6434 17.4005C17.1594 17.4005 18.2534 16.2482 18.2534 14.4606C18.2534 13.153 17.6281 12.0673 16.3032 11.9501L16.3032 11.9201C17.4388 11.6349 17.9695 10.5718 17.9695 9.4962C17.9695 8.01221 17.0542 6.92325 15.5952 6.92325C14.3677 6.92325 13.6379 7.66612 13.3038 8.77168ZM6.59052 9.59834C6.59052 9.70879 6.6705 9.88506 6.88359 9.88506C7.03672 9.88506 7.15371 9.78194 7.15147 9.64698C7.3041 8.39092 7.83731 7.49415 8.93008 7.49415C10.1625 7.49415 10.6662 8.69385 10.6662 9.72149C10.6662 10.6379 10.3856 11.4258 9.554 12.6078L6.66328 16.6494C6.58467 16.7775 6.57099 16.8693 6.57099 16.9673C6.57099 17.1574 6.725 17.2499 6.88838 17.2499L11.1878 17.2499C11.3521 17.2499 11.4788 17.1218 11.4788 16.9575C11.4788 16.7912 11.3514 16.6554 11.1878 16.6554L7.43975 16.6554L7.43975 16.6129L9.99639 12.9681C10.909 11.6417 11.2381 10.7308 11.2381 9.68946C11.2381 8.17119 10.4692 6.90166 8.91191 6.90166C7.49131 6.90166 6.59052 8.25069 6.59052 9.59834Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
