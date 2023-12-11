import React from 'react'

export default function PhotoStack({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.4559 30.2658' className={className}>
      <path
        d='M23.4966 2.98614L7.5986 2.98614C7.70894 2.65711 8.01192 2.43427 8.38926 2.43427L22.7143 2.43427C23.0845 2.43427 23.3864 2.65711 23.4966 2.98614Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.8186 5.65934C25.7054 5.64757 25.587 5.64483 25.4672 5.64483L5.62735 5.64483C5.51063 5.64483 5.39533 5.64739 5.28516 5.65879C5.38226 5.31848 5.66892 5.10996 6.06192 5.10996L25.0326 5.10996C25.4331 5.10996 25.7213 5.31871 25.8186 5.65934Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.80313 27.3948L25.2187 27.3948C27.1043 27.3948 28.0226 26.4702 28.0226 24.5477L28.0226 23.3105L22.0373 17.8514C21.4178 17.28 20.7914 16.9898 20.0079 16.9898C19.2237 16.9898 18.702 17.2695 18.0344 17.8325L12.5279 22.5562L10.4878 20.6212C9.95205 20.1245 9.49736 19.8629 8.81016 19.8629C8.17178 19.8629 7.72822 20.1252 7.21133 20.6114L3 24.5302C3 26.4702 3.91826 27.3948 5.80313 27.3948ZM5.62735 27.8204L25.4672 27.8204C27.5417 27.8204 28.6484 26.6774 28.6484 24.6321L28.6484 11.2785C28.6484 9.23331 27.5417 8.09092 25.4672 8.09092L5.62735 8.09092C3.55215 8.09092 2.44609 9.20538 2.44609 11.2785L2.44609 24.6321C2.44609 26.7053 3.55215 27.8204 5.62735 27.8204ZM5.66572 27.3089C3.88145 27.3089 2.95762 26.3864 2.95762 24.6078L2.95762 11.3028C2.95762 9.52492 3.88145 8.60246 5.66572 8.60246L25.4379 8.60246C27.1481 8.60246 28.1369 9.52492 28.1369 11.3028L28.1369 24.6078C28.1369 26.3864 27.1481 27.3089 25.4379 27.3089Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.8831 17.9607C13.4561 17.9607 14.7633 16.6605 14.7633 15.0512C14.7633 13.4698 13.4561 12.134 11.8831 12.134C10.2906 12.134 9.00224 13.4698 9.00224 15.0512C9.00224 16.6605 10.2906 17.9607 11.8831 17.9607Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}