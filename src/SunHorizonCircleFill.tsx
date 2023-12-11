import React from 'react'

export default function SunHorizonCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM4.22198 16.1526C4.06954 16.1526 3.94776 16.271 3.94776 16.4228C3.94776 16.594 4.07022 16.6852 4.22198 16.6852L20.099 16.6852C20.278 16.6852 20.3816 16.594 20.3816 16.4228C20.3816 16.2522 20.2787 16.1526 20.099 16.1526ZM8.45918 13.5907C8.45918 14.2768 8.62949 14.9076 8.9499 15.4729L15.3704 15.4729C15.6999 14.9076 15.8618 14.2768 15.8618 13.5907C15.8618 11.5442 14.215 9.89746 12.1602 9.89746C10.106 9.89746 8.45918 11.5442 8.45918 13.5907ZM4.22266 13.1344C4.06817 13.1344 3.94776 13.2639 3.94776 13.4149C3.94776 13.594 4.06817 13.6962 4.22266 13.6962L6.95137 13.6962C7.14356 13.6962 7.22764 13.6044 7.22764 13.4149C7.22764 13.2632 7.12471 13.1344 6.95137 13.1344ZM17.369 13.1344C17.2047 13.1344 17.1018 13.2632 17.1018 13.4149C17.1018 13.5856 17.2424 13.6962 17.369 13.6962L20.1074 13.6962C20.271 13.6962 20.3816 13.6037 20.3816 13.4149C20.3816 13.245 20.271 13.1344 20.1074 13.1344ZM6.36485 7.84219C6.26739 7.94239 6.26739 8.11436 6.37803 8.20685L8.30557 10.1344C8.36944 10.2262 8.57071 10.2275 8.66114 10.1106C8.80674 9.98311 8.74112 9.79932 8.66817 9.71797L6.73858 7.78907C6.64679 7.66866 6.46436 7.73497 6.36485 7.84219ZM17.5908 7.78907L15.6619 9.71797C15.5876 9.7916 15.5143 9.98311 15.6599 10.1106C15.7594 10.2269 15.96 10.2269 16.0154 10.1344L17.9514 8.20685C18.062 8.11436 18.0627 7.94239 17.9646 7.84219C17.865 7.7336 17.6819 7.66026 17.5908 7.78907ZM11.8796 5.11388L11.8796 7.84258C11.8796 7.99639 12.0084 8.11817 12.1602 8.11817C12.3398 8.11817 12.4498 7.95938 12.4498 7.84258L12.4498 5.11388C12.4498 4.92169 12.3392 4.82989 12.1602 4.82989C11.9902 4.82989 11.8796 4.92169 11.8796 5.11388Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
