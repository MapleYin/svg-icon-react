import React from 'react'

export function DocFillBadgePlus({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.1284 33.4186' className={className}>
      <path
        d='M16.422 12.207C16.422 13.3581 16.9993 13.9543 18.1504 13.9543L26.8944 13.9543L26.8944 26.7992C26.8944 28.8731 25.789 29.9805 23.7158 29.9805L12.7788 29.9805C13.3706 28.9761 13.7078 27.8077 13.7078 26.5647C13.7078 22.7956 10.622 19.7151 6.863 19.7105L6.863 6.67452C6.863 4.60001 8.00606 3.49327 10.0506 3.49327L16.422 3.49327ZM17.8566 4.11407L26.2735 12.5106C26.446 12.6831 26.66 12.8683 26.6836 13.0639L18.3089 13.0639C17.6292 13.0639 17.3124 12.7471 17.3124 12.0674L17.3124 3.70332C17.4892 3.7542 17.6855 3.94161 17.8566 4.11407Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 26.5647C12.809 29.8394 10.1182 32.519 6.85391 32.519C3.59669 32.519 0.889751 29.8414 0.889751 26.5647C0.889751 23.2977 3.59669 20.6005 6.85391 20.6005C10.13 20.6005 12.809 23.2886 12.809 26.5647ZM6.39532 23.1388L6.39532 26.1061L3.40919 26.1061C3.17159 26.1061 2.95128 26.2705 2.95128 26.5647C2.95128 26.849 3.17159 27.0135 3.40919 27.0135L6.39532 27.0135L6.39532 30.0087C6.39532 30.2561 6.56046 30.4582 6.85391 30.4582C7.13897 30.4582 7.30343 30.2561 7.30343 30.0087L7.30343 27.0135L10.2798 27.0135C10.5362 27.0135 10.7384 26.849 10.7384 26.5647C10.7384 26.2705 10.5362 26.1061 10.2798 26.1061L7.30343 26.1061L7.30343 23.1388C7.30343 22.9005 7.13897 22.6802 6.85391 22.6802C6.56046 22.6802 6.39532 22.9005 6.39532 23.1388Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
