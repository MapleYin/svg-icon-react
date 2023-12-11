import React from 'react'

export default function DocBadgeClockFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.1284 33.4186' className={className}>
      <path
        d='M16.422 12.207C16.422 13.3581 16.9993 13.9543 18.1504 13.9543L26.8944 13.9543L26.8944 26.7992C26.8944 28.8731 25.789 29.9805 23.7158 29.9805L12.7788 29.9805C13.3706 28.9761 13.7078 27.8077 13.7078 26.5647C13.7078 22.7956 10.622 19.7151 6.863 19.7105L6.863 6.67452C6.863 4.60001 8.00606 3.49327 10.0506 3.49327L16.422 3.49327ZM17.8566 4.11407L26.2735 12.5106C26.446 12.6831 26.66 12.8683 26.6836 13.0639L18.3089 13.0639C17.6292 13.0639 17.3124 12.7471 17.3124 12.0674L17.3124 3.70332C17.4892 3.7542 17.6855 3.94161 17.8566 4.11407Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 26.5647C12.809 29.8394 10.1182 32.519 6.85391 32.519C3.59669 32.519 0.889751 29.8414 0.889751 26.5647C0.889751 23.2977 3.59669 20.6005 6.85391 20.6005C10.13 20.6005 12.809 23.2886 12.809 26.5647ZM6.42667 22.5485L6.42667 26.4955L3.68126 26.4955C3.42686 26.4955 3.23175 26.6899 3.23175 26.9262C3.23175 27.2085 3.42618 27.4029 3.68126 27.4029L6.8671 27.4029C7.12218 27.4029 7.33478 27.1903 7.33478 26.9262L7.33478 22.5485C7.33478 22.3039 7.14034 22.1095 6.8671 22.1095C6.6211 22.1095 6.42667 22.3039 6.42667 22.5485Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}