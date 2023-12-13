import React from 'react'

export function ArrowUturnDownSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.2557' className={className}>
      <path
        d='M21.96 3.1792L21.96 18.7724C21.96 20.8078 20.8532 21.9509 18.778 21.9509L3.18125 21.9509C1.10674 21.9509 0 20.8455 0 18.7724L0 3.1792C0 1.10606 1.10674 0 3.18125 0L18.778 0C20.8532 0 21.96 1.14307 21.96 3.1792ZM8.24082 9.6626L8.24082 14.6698L8.27148 15.8681L7.86514 15.3677L5.37266 12.8452C5.29883 12.7707 5.22022 12.7275 5.14092 12.7275C5.00889 12.7275 4.86416 12.8339 4.86416 13.0113C4.86416 13.092 4.86963 13.1602 4.93574 13.2256L8.1834 16.3972C8.26133 16.4835 8.39717 16.5455 8.50508 16.5455C8.64092 16.5455 8.73975 16.4842 8.83653 16.3972L12.0772 13.2249C12.1426 13.1602 12.1662 13.0913 12.1662 13.0106C12.1662 12.8339 12.0319 12.7275 11.8901 12.7275C11.8004 12.7275 11.7134 12.7707 11.6389 12.8452L9.17882 15.3366L8.74073 15.8674L8.7714 14.6698L8.7714 9.6626C8.7714 7.4168 10.1354 5.93497 12.1949 5.93497C14.2166 5.93497 15.5854 7.40909 15.5854 9.66328L15.5854 11.6858C15.5854 11.8206 15.6903 11.9354 15.8419 11.9354C16.0214 11.9354 16.1068 11.8199 16.1068 11.6845L16.1068 9.66328C16.1068 7.11367 14.549 5.38623 12.1949 5.38623C9.80362 5.38623 8.24082 7.11299 8.24082 9.6626Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
