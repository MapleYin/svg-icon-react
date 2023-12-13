import React from 'react'

export function DocBadgeArrowUpFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.1284 33.4186' className={className}>
      <path
        d='M16.422 12.207C16.422 13.3581 16.9993 13.9543 18.1504 13.9543L26.8944 13.9543L26.8944 26.7992C26.8944 28.8731 25.789 29.9805 23.7158 29.9805L12.7788 29.9805C13.3706 28.9761 13.7078 27.8077 13.7078 26.5647C13.7078 22.7956 10.622 19.7151 6.863 19.7105L6.863 6.67452C6.863 4.60001 8.00606 3.49327 10.0506 3.49327L16.422 3.49327ZM17.8566 4.11407L26.2735 12.5106C26.446 12.6831 26.66 12.8683 26.6836 13.0639L18.3089 13.0639C17.6292 13.0639 17.3124 12.7471 17.3124 12.0674L17.3124 3.70332C17.4892 3.7542 17.6855 3.94161 17.8566 4.11407Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 26.5647C12.809 29.8394 10.1182 32.519 6.85391 32.519C3.59669 32.519 0.889751 29.8414 0.889751 26.5647C0.889751 23.2977 3.59669 20.6005 6.85391 20.6005C10.13 20.6005 12.809 23.2886 12.809 26.5647ZM6.57178 22.5647L3.37501 25.7484C3.20762 25.9326 3.11973 26.0169 3.12813 26.1877C3.12676 26.4239 3.30372 26.5891 3.54063 26.5891C3.66329 26.5898 3.76778 26.5284 3.84093 26.4546L4.39679 25.8701L6.49795 23.7683L6.47569 25.6736L6.47569 30.1651C6.47569 30.365 6.64493 30.5427 6.86436 30.5427C7.09288 30.5427 7.24327 30.365 7.24327 30.1651L7.24327 25.6736L7.23917 23.7683L9.32149 25.8701L9.89688 26.4546C9.95118 26.5284 10.0738 26.5975 10.1965 26.5891C10.4327 26.5904 10.5992 26.4239 10.5992 26.1877C10.5992 26.0357 10.5204 25.9326 10.344 25.7484L7.14649 22.5647C7.07901 22.4985 6.98702 22.4372 6.86436 22.4372C6.77872 22.4372 6.67628 22.4692 6.57178 22.5647Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
