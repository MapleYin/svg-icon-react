import React from 'react'

export default function RectanglePortraitBadgePlusFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.1284 33.4186' className={className}>
      <path
        d='M26.8944 6.67452L26.8944 26.7992C26.8944 28.8737 25.789 29.9805 23.7158 29.9805L12.7788 29.9805C13.3706 28.9761 13.7078 27.8077 13.7078 26.5647C13.7078 22.7956 10.622 19.7151 6.863 19.7105L6.863 6.67452C6.863 4.60001 7.96837 3.49327 10.0506 3.49327L23.7158 3.49327C25.789 3.49327 26.8944 4.60001 26.8944 6.67452Z'
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
