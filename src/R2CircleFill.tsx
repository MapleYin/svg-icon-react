import React from 'react'

export default function R2CircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM7.11465 7.27393C6.91562 7.27393 6.81474 7.38594 6.81474 7.58497L6.81474 16.7204C6.81474 16.9006 6.95332 17.0328 7.1335 17.0328C7.31299 17.0328 7.43409 16.9013 7.43409 16.7204L7.43409 12.7446L9.36025 12.7446L11.1466 16.8522C11.212 16.9892 11.3011 17.0328 11.4401 17.0328C11.638 17.0328 11.7464 16.8899 11.7464 16.7434C11.7464 16.6981 11.7325 16.6384 11.7166 16.594L9.95528 12.5761C10.9241 12.2708 11.6576 11.4264 11.6576 9.97296C11.6576 8.37539 10.7512 7.27393 9.05782 7.27393ZM13.2818 9.72666C13.2818 9.83575 13.3618 10.0016 13.5631 10.0016C13.7065 10.0016 13.8221 9.90753 13.8205 9.77393C13.9711 8.58487 14.4771 7.72647 15.5112 7.72647C16.6773 7.72647 17.1615 8.86895 17.1615 9.83936C17.1615 10.7153 16.8921 11.4635 16.0995 12.5883L13.3623 16.4282C13.276 16.5459 13.2714 16.637 13.2714 16.7329C13.2714 16.9133 13.4072 16.9953 13.577 16.9953L17.6518 16.9953C17.8063 16.9953 17.9317 16.8776 17.9317 16.7147C17.9317 16.5589 17.8056 16.4335 17.6518 16.4335L14.0963 16.4335L14.0963 16.391L16.5203 12.9276C17.3918 11.6703 17.7 10.7991 17.7 9.81641C17.7 8.36719 16.9723 7.16602 15.4938 7.16602C14.1422 7.16602 13.2818 8.44668 13.2818 9.72666ZM11.046 9.98409C11.046 11.2463 10.4033 12.1631 9.01123 12.1631L7.43409 12.1631L7.43409 7.83438L8.99238 7.83438C10.2253 7.83438 11.046 8.55567 11.046 9.98409Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
