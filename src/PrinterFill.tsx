import React from 'react'

export default function PrinterFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.6935 27.4328' className={className}>
      <path
        d='M22.6447 3.35373L22.6447 4.37901L5.70538 4.37901L5.70538 3.35373C5.70538 1.55626 6.49151 0.766317 8.30324 0.766317L20.0469 0.766317C21.8473 0.766317 22.6447 1.55626 22.6447 3.35373Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M27.4326 8.17794L27.4326 19.8503C27.4326 21.8133 26.4655 22.7588 24.5207 22.7588L23.1083 22.7588L23.1083 14.2378C23.1083 12.6887 21.9959 11.5951 20.4468 11.5951L7.92237 11.5951C6.36348 11.5951 5.25176 12.6887 5.25176 14.2378L5.25176 22.7588L3.81144 22.7588C1.85753 22.7588 0.890435 21.8133 0.890435 19.8503L0.890435 8.17794C0.890435 6.20519 1.8462 5.26876 3.81144 5.26876L24.5207 5.26876C26.4655 5.26876 27.4326 6.20519 27.4326 8.17794ZM19.8201 8.64601C19.8201 9.45226 20.4694 10.0366 21.2478 10.0366C21.9702 10.0366 22.6293 9.40548 22.6293 8.64601C22.6293 7.91447 21.9702 7.2463 21.2478 7.2463C20.4694 7.2463 19.8201 7.91447 19.8201 8.64601Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.15128 24.8341C6.15128 25.8686 6.84327 26.5424 7.86866 26.5424L20.4914 26.5424C21.5252 26.5424 22.2179 25.8686 22.2179 24.8341L22.2179 14.2378C22.2179 13.1841 21.5096 12.4849 20.4468 12.4849L7.92237 12.4849C6.85958 12.4849 6.15128 13.1841 6.15128 14.2378ZM9.31535 17.5526C9.1504 17.5526 9.02023 17.4308 9.02023 17.2847C9.02023 17.1302 9.1504 17.0091 9.31535 17.0091L19.0461 17.0091C19.2194 17.0091 19.3405 17.1302 19.3405 17.2847C19.3405 17.4308 19.2194 17.5526 19.0461 17.5526ZM9.31535 22.0273C9.1504 22.0273 9.02023 21.8971 9.02023 21.7433C9.02023 21.5965 9.1504 21.4747 9.31535 21.4747L19.0461 21.4747C19.2194 21.4747 19.3405 21.5965 19.3405 21.7433C19.3405 21.8971 19.2194 22.0273 19.0461 22.0273Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}