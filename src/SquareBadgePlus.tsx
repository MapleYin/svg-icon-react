import React from 'react'

export default function SquareBadgePlus({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.5553 28.9856' className={className}>
      <path
        d='M28.5721 6.72901L28.5721 22.3131C28.5721 24.3583 27.4653 25.5007 25.3901 25.5007L12.8083 25.5007C12.9073 25.3373 12.9954 25.1669 13.0702 24.9892L25.3608 24.9892C27.0711 24.9892 28.0605 24.0667 28.0605 22.2888L28.0605 6.75333C28.0605 4.9754 27.0711 4.05294 25.3608 4.05294L9.82335 4.05294C8.03839 4.05294 7.12365 4.9754 7.12365 6.75333L7.12365 15.2914C7.03579 15.2795 6.94539 15.2777 6.8546 15.2777C6.77283 15.2777 6.69137 15.2792 6.61211 15.2902L6.61211 6.72901C6.61211 4.64678 7.71885 3.54141 9.79337 3.54141L25.3901 3.54141C27.4653 3.54141 28.5721 4.68379 28.5721 6.72901Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.8181 22.1316C12.8181 25.407 10.1189 28.0867 6.8546 28.0867C3.59669 28.0867 0.899517 25.3993 0.899517 22.1316C0.899517 18.8653 3.59669 16.1675 6.8546 16.1675C10.13 16.1675 12.8181 18.8556 12.8181 22.1316ZM6.40508 18.7058L6.40508 21.6731L3.40987 21.6731C3.17159 21.6731 2.96036 21.8382 2.96036 22.1316C2.96036 22.416 3.17159 22.5812 3.40987 22.5812L6.40508 22.5812L6.40508 25.5764C6.40508 25.8237 6.56954 26.0252 6.8546 26.0252C7.14806 26.0252 7.31251 25.8237 7.31251 25.5764L7.31251 22.5812L10.2805 22.5812C10.5369 22.5812 10.7384 22.416 10.7384 22.1316C10.7384 21.8382 10.5369 21.6731 10.2805 21.6731L7.31251 21.6731L7.31251 18.7058C7.31251 18.4675 7.14806 18.2472 6.8546 18.2472C6.56954 18.2472 6.40508 18.4675 6.40508 18.7058Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
