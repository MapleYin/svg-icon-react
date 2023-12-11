import React from 'react'

export default function Mouth({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.4173 14.1676' className={className}>
      <path
        d='M0.636213 6.01729C5.71853 12.1559 10.2261 14.1319 15.5234 14.1319C20.8207 14.1319 25.3374 12.1559 30.4197 6.01729C31.7204 4.44044 30.8416 3.1126 29.4449 2.94951C25.2499 2.45625 23.7917 0 20.8003 0C18.0216 0 16.7136 2.04424 15.5234 2.04424C14.3424 2.04424 13.0337 0 10.2556 0C7.25515 0 5.80604 2.45625 1.61102 2.94951C0.214333 3.1126-0.664472 4.44044 0.636213 6.01729ZM1.11961 5.71368C0.292566 4.78194 0.428601 3.65265 1.83924 3.43487L2.47362 3.33175C5.6662 2.83048 7.7659 0.524911 10.2813 0.524911C11.3951 0.524911 12.2761 0.938975 13.0167 1.38937C13.9208 1.92989 14.6995 2.56007 15.5234 2.56007C16.3564 2.56007 17.1163 1.92989 18.0211 1.38937C18.7799 0.938975 19.6427 0.524911 20.7746 0.524911C23.29 0.524911 25.3897 2.83048 28.5823 3.33175L29.2076 3.43487C30.6273 3.65265 30.7543 4.78194 29.9363 5.71368C28.4265 7.49074 23.5731 13.607 15.5234 13.607C7.48281 13.607 2.62939 7.49074 1.11961 5.71368ZM15.5234 7.50626C17.3525 7.50626 18.0149 6.19991 20.0336 6.23761C23.0104 6.2837 27.4594 7.24396 30.6398 4.49181C31.102 4.09503 30.5802 3.7005 30.2889 3.97393C27.9762 6.16875 24.7775 5.92784 21.9401 5.7752C21.2865 5.7334 20.642 5.70137 20.0449 5.70137C18.4871 5.70137 17.6908 6.2376 16.9143 6.60166C16.5008 6.80108 16.0686 6.9791 15.5234 6.9791C14.9782 6.9791 14.5363 6.80108 14.1227 6.60166C13.3463 6.21944 12.5688 5.70137 11.011 5.70137C10.451 5.70137 9.87205 5.725 9.26522 5.75635C6.39921 5.90967 3.10829 6.20508 0.76698 3.97393C0.475767 3.7005-0.0461074 4.09503 0.416101 4.49181C3.59648 7.25235 8.04549 6.2837 11.0223 6.23761C13.041 6.19991 13.7034 7.50626 15.5234 7.50626Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}