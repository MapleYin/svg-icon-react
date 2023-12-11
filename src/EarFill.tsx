import React from 'react'

export default function EarFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.5697 27.9057' className={className}>
      <path
        d='M18.5697 9.15303C18.5697 15.0895 14.185 14.6745 11.4365 20.6148L10.9016 21.8079C9.84913 24.094 7.96368 25.4286 5.56358 25.4286C2.59746 25.4286 0.595703 23.4234 0.595703 20.4435L0.595703 9.33946C0.595703 3.8084 4.3294 0 9.71944 0C15.0649 0 18.5697 3.62266 18.5697 9.15303ZM3.99346 9.04668L3.99346 15.078C3.99346 15.2178 4.11026 15.3346 4.25909 15.3346C4.39952 15.3346 4.51632 15.2178 4.51632 15.078L4.51632 11.1439L9.17412 11.1439C10.3918 11.1439 11.2613 11.9646 11.2613 13.1041C11.2613 13.6512 10.9822 14.3538 10.6062 14.8164L9.05547 16.7668C8.9998 16.8336 8.97685 16.9024 8.97685 16.9804C8.97685 17.1481 9.11182 17.2272 9.25225 17.2272C9.35176 17.2272 9.41358 17.191 9.49923 17.0747L11.1399 14.9953C11.5659 14.4605 11.8428 13.6501 11.8428 13.0253C11.8428 11.5665 10.7989 10.621 9.14414 10.621L4.51632 10.621L4.51632 9.04668C4.51632 6.00811 6.59268 3.95538 9.63565 3.95538C12.7451 3.95538 14.7231 5.95225 14.7231 9.04668C14.7231 9.1962 14.8406 9.313 14.9895 9.313C15.1292 9.313 15.246 9.1962 15.246 9.04668C15.246 5.64912 13.0294 3.43252 9.63565 3.43252C6.3084 3.43252 3.99346 5.72315 3.99346 9.04668Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}