import React from 'react'

export default function GlobeDesk({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.2709 26.5268' className={className}>
      <path
        d='M5.82813 4.53331L6.18604 4.15654L2.1213 0.0917983C2.02472-0.00410199 1.86836-0.00410199 1.77246 0.0917983C1.6668 0.197464 1.6668 0.363581 1.77246 0.468563ZM21.0048 19.3416L20.6853 19.02C18.5723 21.1525 15.6145 22.4466 12.3148 22.4466C5.717 22.4466 0.511533 17.2509 0.511533 10.6439C0.511533 7.34502 1.82511 4.38653 3.93673 2.26583L3.62285 1.93789C1.38037 4.16289 0 7.23184 0 10.6439C0 17.4332 5.5249 22.949 12.3148 22.949C15.7192 22.949 18.7882 21.5771 21.0048 19.3416ZM18.8227 16.7932L18.4418 17.1386L22.4703 21.1762C22.576 21.2812 22.7232 21.2812 22.8282 21.1762C22.9339 21.0705 22.9339 20.9051 22.8282 20.7994ZM12.0542 22.8274L12.0542 26.066L12.5657 26.066L12.5657 22.8274ZM8.67754 26.5268L16.0918 26.5268C16.2343 26.5268 16.3434 26.4086 16.3434 26.2668C16.3434 26.1243 16.2343 26.0152 16.0918 26.0152L8.67754 26.0152C8.53506 26.0152 8.41689 26.1243 8.41689 26.2668C8.41689 26.4086 8.53506 26.5268 8.67754 26.5268ZM12.3148 19.855C17.4132 19.855 21.5266 15.7423 21.5266 10.6439C21.5266 5.54492 17.4132 1.43223 12.3148 1.43223C7.21651 1.43223 3.10313 5.54492 3.10313 10.6439C3.10313 15.7423 7.21651 19.855 12.3148 19.855ZM12.3148 19.3321C7.43624 19.3321 3.62599 15.5128 3.62599 10.6439C3.62599 5.76534 7.43624 1.94601 12.3148 1.94601C17.1844 1.94601 21.0037 5.76534 21.0037 10.6439C21.0037 15.5128 17.1844 19.3321 12.3148 19.3321Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}