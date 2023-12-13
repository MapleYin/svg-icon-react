import React from 'react'

export function PhoneDownFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.4715 11.2733' className={className}>
      <path
        d='M14.0408 0.360749C9.19012 0.378913 4.33904 1.48516 1.78045 4.04376C0.582693 5.23311 0.00515378 6.63868 0.000173812 8.30997C-0.00617349 9.10421 0.159648 10.1877 0.773515 10.7932C1.13055 11.1586 1.67176 11.3671 2.42166 11.2317L7.00721 10.4128C7.45262 10.3326 7.86756 10.1632 8.18983 9.85977C8.57274 9.50548 8.79119 8.92725 8.80028 8.0713L8.83797 6.76544C8.83797 6.59737 8.89793 6.43204 9.03397 6.30509C9.14207 6.19493 9.26336 6.12725 9.40985 6.07911C10.1212 5.83702 11.7868 5.52227 14.0597 5.52227C16.3053 5.52227 17.9695 5.77071 18.6822 6.09796C18.8273 6.16426 18.9389 6.20538 19.0106 6.28624C19.1285 6.39503 19.1696 6.52266 19.1878 6.69981L19.2722 8.0713C19.3274 8.92725 19.5556 9.48663 19.9288 9.85977C20.2511 10.182 20.6569 10.3326 21.1212 10.4128L25.3988 11.1661C26.215 11.3119 26.8589 11.0937 27.3011 10.6242C27.8137 10.0851 28.1178 9.23341 28.11 8.18917C28.1121 6.53604 27.4487 5.14864 26.3438 4.04376C23.8027 1.50333 18.9474 0.341901 14.0408 0.360749Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
