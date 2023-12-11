import React from 'react'

export default function EsimFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.0906 22.0158' className={className}>
      <path
        d='M0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158L5.01289 22.0158L5.01289 19.3914C5.01289 19.2181 5.1165 19.1145 5.28145 19.1145C5.44571 19.1145 5.55772 19.2181 5.55772 19.3914L5.55772 22.0158L8.72686 22.0158L8.72686 19.3914C8.72686 19.2181 8.83047 19.1145 8.99473 19.1145C9.16876 19.1145 9.27169 19.2181 9.27169 19.3914L9.27169 22.0158L12.459 22.0158L12.459 19.3914C12.459 19.2181 12.5619 19.1145 12.7275 19.1145C12.9009 19.1145 13.0038 19.2181 13.0038 19.3914L13.0038 22.0158L16.173 22.0158L16.173 19.3914C16.173 19.2181 16.2766 19.1145 16.4499 19.1145C16.6149 19.1145 16.7178 19.2181 16.7178 19.3914L16.7178 22.0158L18.5481 22.0158C20.6233 22.0158 21.7293 20.8734 21.7293 18.8282L21.7293 3.24414C21.7293 1.19893 20.6233 0.0565428 18.5481 0.0565428L16.7178 0.0565428L16.7178 2.67187C16.7178 2.84522 16.6149 2.94883 16.4499 2.94883C16.2766 2.94883 16.173 2.84522 16.173 2.67187L16.173 0.0565428L13.0038 0.0565428L13.0038 2.67187C13.0038 2.84522 12.9009 2.94883 12.7275 2.94883C12.5619 2.94883 12.459 2.84522 12.459 2.67187L12.459 0.0565428L9.27169 0.0565428L9.27169 2.67187C9.27169 2.84522 9.16876 2.94883 8.99473 2.94883C8.83047 2.94883 8.72686 2.84522 8.72686 2.67187L8.72686 0.0565428L5.55772 0.0565428L5.55772 2.67187C5.55772 2.84522 5.44571 2.94883 5.28145 2.94883C5.1165 2.94883 5.01289 2.84522 5.01289 2.67187L5.01289 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414ZM3.89923 15.3625L3.89923 6.70079C3.89923 6.04376 4.3505 5.62042 5.01729 5.62042L16.7302 5.62042C17.3977 5.62042 17.8482 6.04376 17.8482 6.70079L17.8482 15.3625C17.8482 16.0195 17.3977 16.4513 16.7302 16.4513L5.01729 16.4513C4.3505 16.4513 3.89923 16.0195 3.89923 15.3625Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}