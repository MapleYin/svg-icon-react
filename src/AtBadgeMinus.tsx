import React from 'react'

export function AtBadgeMinus({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 39.5738 27.2719' className={className}>
      <path
        d='M19.618 26.7903C21.4875 26.7903 23.1097 26.6461 24.1275 26.4503C24.3995 26.4008 24.6318 26.2975 24.8244 26.2975C24.9894 26.2975 25.0839 26.392 25.0839 26.5381C25.0839 26.6849 24.9851 26.7472 24.8248 26.7908C23.843 27.1081 22.0254 27.2719 19.6506 27.2719C12.029 27.2719 6.6963 21.7289 6.64623 13.9043C6.71404 13.9139 6.78386 13.915 6.85391 13.915C6.95293 13.915 7.05149 13.9128 7.14749 13.8999C7.2012 21.4581 12.3146 26.7903 19.618 26.7903ZM32.5805 12.8394C32.5805 17.9317 30.8357 20.8259 27.8265 20.8259C25.7603 20.8259 24.3492 19.5023 24.022 17.2557L23.9606 17.2557C23.1542 19.5861 21.6412 20.7707 19.4304 20.7707C16.1736 20.7707 13.9534 18.0776 13.9534 14.1094C13.9534 10.0691 16.1652 7.32227 19.4367 7.32227C21.6337 7.32227 23.4085 8.62149 23.979 10.6806L24.041 10.6806L24.041 7.60587C24.041 7.44747 24.1376 7.32227 24.2933 7.32227C24.4399 7.32227 24.5442 7.44747 24.5442 7.60587L24.5442 16.2702C24.5442 18.78 25.7773 20.3267 27.7898 20.3267C30.5047 20.3267 32.0703 17.5928 32.0703 12.8162C32.0703 5.96944 27.0458 1.0837 19.7659 1.0837C17.0217 1.0837 14.5425 1.86005 12.5248 3.22522L12.2185 2.81683C14.3156 1.40453 16.9015 0.602835 19.7855 0.602835C27.3379 0.602835 32.5805 5.64434 32.5805 12.8394ZM14.4786 14.1178C14.4786 17.7221 16.5302 20.2976 19.3943 20.2976C22.1865 20.2976 24.0397 17.7473 24.0397 13.8748C24.0397 10.1357 22.2619 7.81154 19.395 7.81154C16.577 7.81154 14.4786 10.5149 14.4786 14.1178Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 7.06104C12.809 10.3364 10.1182 13.0252 6.85391 13.0252C3.5876 13.0252 0.890435 10.3378 0.890435 7.06104C0.890435 3.80381 3.5876 1.09687 6.85391 1.09687C10.13 1.09687 12.809 3.78496 12.809 7.06104ZM3.39103 6.60244C3.14571 6.60244 2.93243 6.81641 2.93243 7.06104C2.93243 7.30498 3.14571 7.51963 3.39103 7.51963L10.2986 7.51963C10.5342 7.51963 10.7482 7.30498 10.7482 7.06104C10.7482 6.81641 10.5342 6.60244 10.2986 6.60244Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
