import React from 'react'

export function Ipod({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.1619 23.0289' className={className}>
      <path
        d='M0 20.0606C0 22.0423 0.962112 23.0289 2.93047 23.0289L11.8701 23.0289C13.8378 23.0289 14.8006 22.0423 14.8006 20.0606L14.8006 2.96836C14.8006 0.986623 13.8378 0 11.8701 0L2.93047 0C0.962112 0 0 0.986623 0 2.96836ZM0.511533 7.99815L0.511533 2.93164C0.511533 1.23507 1.24552 0.511533 2.94551 0.511533L11.8551 0.511533C13.5551 0.511533 14.2891 1.23507 14.2891 2.93164L14.2891 7.99815C14.2891 9.70381 13.5551 10.4183 11.8551 10.4183L2.94551 10.4183C1.24552 10.4183 0.511533 9.70381 0.511533 7.99815ZM7.41915 21.0144C4.90255 21.0144 2.84766 18.9783 2.84766 16.4624C2.84766 13.9458 4.90255 11.9098 7.41915 11.9098C9.91622 11.9098 11.9627 13.9458 11.9627 16.4624C11.9627 18.9783 9.91622 21.0144 7.41915 21.0144ZM7.41915 20.094C5.39093 20.094 3.74991 18.4523 3.74991 16.4624C3.74991 14.4719 5.39093 12.8302 7.41915 12.8302C9.40967 12.8302 11.0416 14.4719 11.0416 16.4624C11.0416 18.4523 9.40967 20.094 7.41915 20.094Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
