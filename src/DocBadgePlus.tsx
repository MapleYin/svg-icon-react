import React from 'react'

export default function DocBadgePlus({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.6267 33.4186' className={className}>
      <path
        d='M17.6057 4.11407L26.0227 12.5106C26.4859 12.9836 26.6435 13.355 26.6435 14.1289L26.6435 26.7992C26.6435 28.8731 25.5381 29.9805 23.4649 29.9805L12.7795 29.9805C12.8815 29.8178 12.9714 29.6473 13.0473 29.4689L23.4399 29.4689C25.2186 29.4689 26.141 28.5542 26.141 26.7692L26.141 13.7566L17.9408 13.7566C16.9301 13.7566 16.3688 13.2973 16.3688 12.1846L16.3688 3.99572L9.82472 3.99572C8.0461 3.99572 7.12365 4.98517 7.12365 6.7045L7.12365 19.7237C7.03579 19.7118 6.94539 19.7101 6.8546 19.7101C6.77283 19.7101 6.69137 19.7115 6.61211 19.7225L6.61211 6.67452C6.61211 4.60001 7.75518 3.49327 9.79971 3.49327L15.9795 3.49327C16.7697 3.49327 17.1368 3.64317 17.6057 4.11407ZM16.8917 12.1716C16.8917 12.9371 17.189 13.2337 17.9538 13.2337L25.9809 13.2337L16.8917 4.15587Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.8181 26.5647C12.8181 29.8394 10.1189 32.519 6.8546 32.519C3.59669 32.519 0.899517 29.8414 0.899517 26.5647C0.899517 23.2977 3.59669 20.6005 6.8546 20.6005C10.13 20.6005 12.8181 23.2886 12.8181 26.5647ZM6.40508 23.1388L6.40508 26.1061L3.40987 26.1061C3.17159 26.1061 2.96036 26.2705 2.96036 26.5647C2.96036 26.849 3.17159 27.0135 3.40987 27.0135L6.40508 27.0135L6.40508 30.0087C6.40508 30.2561 6.56954 30.4582 6.8546 30.4582C7.14806 30.4582 7.31251 30.2561 7.31251 30.0087L7.31251 27.0135L10.2805 27.0135C10.5369 27.0135 10.7384 26.849 10.7384 26.5647C10.7384 26.2705 10.5369 26.1061 10.2805 26.1061L7.31251 26.1061L7.31251 23.1388C7.31251 22.9005 7.14806 22.6802 6.8546 22.6802C6.56954 22.6802 6.40508 22.9005 6.40508 23.1388Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}