import React from 'react'

export function CloudMoonBoltCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM10.3651 16.1182C10.1146 16.1182 10.0365 16.204 9.95908 16.3777L9.07178 18.3608C8.96641 18.5723 9.11787 18.7369 9.34883 18.7369L10.0382 18.7369L9.20674 20.7534C9.0832 21.0577 9.49014 21.1924 9.63594 20.9544L11.2087 18.3753C11.3552 18.1457 11.2596 17.9504 10.9902 17.9504L10.1147 17.9504L10.8863 16.4838C11.0015 16.2633 10.8968 16.1182 10.7035 16.1182ZM5.61084 10.6192C4.5421 10.9422 3.69298 11.7736 3.69298 13.0064C3.69298 14.2534 4.65411 15.3229 6.25225 15.3229L13.3143 15.3229C15.0896 15.3229 16.4924 13.9493 16.4924 12.2676C16.4924 10.5879 15.1077 9.32676 13.2647 9.26045C12.5064 7.85059 11.2662 6.8836 9.56045 6.8836C7.53262 6.8836 5.83545 8.53692 5.61084 10.6192ZM16.1216 4.6295C14.3394 4.89971 13.4599 6.77803 13.4657 8.39961C13.52 8.4916 13.582 8.58428 13.6259 8.66787C15.5225 8.85616 16.9664 10.1988 17.0954 11.9978C19.8676 11.5629 20.8061 9.83848 20.8061 9.14981C20.8061 9.02578 20.7447 8.95264 20.6423 8.95264C20.4597 8.95264 19.7241 9.22246 19.0868 9.22246C17.3057 9.22246 16.1461 8.10332 16.1461 6.42188C16.1461 5.60225 16.457 4.9877 16.457 4.8128C16.457 4.67266 16.3469 4.59248 16.1216 4.6295Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
