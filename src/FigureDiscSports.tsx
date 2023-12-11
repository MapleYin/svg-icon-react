import React from 'react'

export default function FigureDiscSports({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.4942 26.0018' className={className}>
      <path
        d='M14.0065 5.01963C15.3728 5.01963 16.5117 3.88975 16.5117 2.49619C16.5117 1.12988 15.3728 0 14.0065 0C12.6129 0 11.483 1.12988 11.483 2.49619C11.483 3.88975 12.6129 5.01963 14.0065 5.01963ZM10.3043 20.2463C10.766 20.708 11.5019 20.708 11.9636 20.2463L16.6986 15.5112C17.3557 14.8542 16.9246 13.6741 15.9517 13.566L10.6189 12.9871C10.1767 12.9383 10.1083 12.6726 10.3043 12.3873L12.2 9.52911C12.396 9.2543 12.7405 9.19502 13.0153 9.37217L16.3646 11.5831C16.541 11.7003 16.767 11.7889 17.0027 11.7889L22.2783 11.7889C22.9068 11.7889 23.4466 11.2679 23.4466 10.6297C23.4466 9.97198 22.9068 9.45098 22.2783 9.45098L17.3375 9.45098L7.10088 2.62422C6.90557 2.4959 6.68028 2.41777 6.44385 2.41777L1.16826 2.41777C0.530078 2.41777 0 2.93877 0 3.59648C0 4.23467 0.530078 4.75567 1.16826 4.75567L6.10909 4.75567L7.98663 6.00342C8.26143 6.18057 8.33956 6.54395 8.15264 6.81875L5.42207 10.9149C4.16455 12.8107 5.26514 15.3543 7.70137 15.4729L13.1423 15.7672L10.3043 18.5863C9.84258 19.0481 9.84258 19.7846 10.3043 20.2463ZM5.93262 15.9371L5.93262 20.0698L2.68174 23.8319C2.26885 24.332 2.3086 25.0985 2.80938 25.5114C3.3792 25.9732 4.11504 25.8155 4.4791 25.3838L7.98663 21.2869C8.18262 21.0421 8.23213 20.7868 8.28028 20.5504L8.94776 16.4854L7.65186 16.417C7.00459 16.3689 6.42432 16.2112 5.93262 15.9371ZM22.2783 7.38858C22.2783 8.20323 23.6035 8.86162 25.1958 8.86162C26.8069 8.86162 28.1328 8.20323 28.1328 7.38858C28.1328 6.59278 26.8069 5.94346 25.1958 5.94346C23.6035 5.94346 22.2783 6.59278 22.2783 7.38858Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}