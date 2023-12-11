import React from 'react'

export default function WifiCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM9.92198 16.0096C9.84248 16.1288 9.83545 16.2033 9.92676 16.2765L11.7014 17.9834C11.9573 18.2212 12.0486 18.2805 12.1524 18.2805C12.2556 18.2805 12.3469 18.2219 12.6042 17.9834L14.3697 16.2765C14.4422 16.2033 14.4624 16.1352 14.3899 16.0152C13.9925 15.4783 13.0809 14.9998 12.1524 14.9998C11.2227 14.9998 10.3117 15.479 9.92198 16.0096ZM6.7625 12.8244C6.69004 12.9171 6.68233 13.0398 6.77432 13.1233L7.78428 14.134C7.88809 14.2378 8.02257 14.2112 8.13614 14.0963C9.09747 13.0646 10.6581 12.3655 12.1524 12.3851C13.6454 12.3655 15.2067 13.0646 16.1604 14.097C16.2823 14.2196 16.4161 14.2378 16.5199 14.134L17.5222 13.1233C17.6142 13.0314 17.633 12.9164 17.5417 12.8244C16.4522 11.4629 14.3268 10.5449 12.1524 10.5449C9.97745 10.5449 7.84288 11.4817 6.7625 12.8244ZM3.73633 9.73194C3.64502 9.84415 3.66524 9.95772 3.74815 10.0679L4.61368 10.9445C4.71475 11.0665 4.87013 11.0483 4.97393 10.925C6.81983 8.99893 9.33477 7.93018 12.1524 7.93018C14.9694 7.93018 17.5318 8.95216 19.3323 10.9264C19.4348 11.0477 19.5881 11.0651 19.6912 10.9439L20.5477 10.0679C20.6578 9.95772 20.6592 9.84415 20.5679 9.73194C18.8101 7.61983 15.4568 6.11866 12.1524 6.11866C8.84737 6.11866 5.47598 7.60098 3.73633 9.73194Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}