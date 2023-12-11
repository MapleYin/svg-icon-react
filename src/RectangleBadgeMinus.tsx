import React from 'react'

export default function RectangleBadgeMinus({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.6486 28.9856' className={className}>
      <path
        d='M35.6661 6.692L35.6661 22.2761C35.6661 24.3206 34.5594 25.4637 32.4842 25.4637L12.8309 25.4637C12.9273 25.2996 13.014 25.1293 13.0881 24.9522L32.4549 24.9522C34.1651 24.9522 35.1539 24.0297 35.1539 22.2511L35.1539 6.71632C35.1539 4.93839 34.1651 4.01525 32.4549 4.01525L9.82335 4.01525C8.03839 4.01525 7.12365 4.93839 7.12365 6.71632L7.12365 15.2914C7.03579 15.2795 6.94539 15.2777 6.8546 15.2777C6.77283 15.2777 6.69137 15.2792 6.61211 15.2902L6.61211 6.692C6.61211 4.60977 7.71885 3.50371 9.79337 3.50371L32.4842 3.50371C34.5594 3.50371 35.6661 4.64678 35.6661 6.692Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.8181 22.1316C12.8181 25.407 10.1189 28.0867 6.8546 28.0867C3.59669 28.0867 0.899517 25.3993 0.899517 22.1316C0.899517 18.8653 3.59669 16.1675 6.8546 16.1675C10.13 16.1675 12.8181 18.8556 12.8181 22.1316ZM3.39103 21.6731C3.15548 21.6731 2.94219 21.887 2.94219 22.1316C2.94219 22.3665 3.15548 22.5812 3.39103 22.5812L10.2986 22.5812C10.544 22.5812 10.7572 22.3665 10.7572 22.1316C10.7572 21.887 10.544 21.6731 10.2986 21.6731Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
