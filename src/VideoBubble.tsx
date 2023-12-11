import React from 'react'

export default function VideoBubble({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.6406' className={className}>
      <path
        d='M6.07774 25.6406C6.25158 25.6406 6.4047 25.53 6.5218 25.4358L11.1259 21.5226L22.002 21.5226C24.6743 21.5226 26.4199 19.7463 26.4199 17.1053L26.4199 5.90919C26.4199 3.2584 24.6743 1.49121 22.002 1.49121L4.41798 1.49121C1.74492 1.49121 0 3.23047 0 5.90919L0 17.1053C0 19.784 1.74492 21.5226 4.41798 21.5226L5.68623 21.5226L5.68623 25.1907C5.68623 25.4668 5.86163 25.6406 6.07774 25.6406ZM6.1714 25.0855L6.1714 21.2773C6.1714 21.0903 6.0921 21.011 5.90577 21.011L4.45499 21.011C2.08985 21.011 0.511533 19.4454 0.511533 17.0676L0.511533 5.93712C0.511533 3.56837 2.08985 1.99366 4.45499 1.99366L21.9649 1.99366C24.2645 1.99366 25.9084 3.56837 25.9084 5.93712L25.9084 17.0676C25.9084 19.4454 24.2645 21.011 21.9649 21.011L11.2957 21.011C11.0074 21.011 10.8668 21.0724 10.5915 21.3029Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.24522 16.3556L14.8781 16.3556C16.1561 16.3556 16.8431 15.6692 16.8431 14.4011L16.8431 8.64268C16.8431 7.37383 16.1504 6.68819 14.8725 6.68819L8.24522 6.68819C6.94278 6.68819 6.26143 7.37383 6.26143 8.64268L6.26143 14.4011C6.26143 15.6692 6.94912 16.3556 8.24522 16.3556ZM17.4819 13.2909L19.6202 14.9945C19.8267 15.1612 20.0156 15.27 20.2402 15.27C20.5623 15.27 20.8015 15.0379 20.8015 14.6118L20.8015 8.43057C20.8015 8.00586 20.5623 7.77373 20.2402 7.77373C20.0156 7.77373 19.826 7.88252 19.6202 8.04854L17.4819 9.73399Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
