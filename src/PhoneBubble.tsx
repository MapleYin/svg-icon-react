import React from 'react'

export default function PhoneBubble({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.6406' className={className}>
      <path
        d='M6.07774 25.6406C6.25158 25.6406 6.4047 25.53 6.5218 25.4358L11.1259 21.5226L22.002 21.5226C24.6743 21.5226 26.4199 19.7463 26.4199 17.1053L26.4199 5.90919C26.4199 3.2584 24.6743 1.49121 22.002 1.49121L4.41798 1.49121C1.74492 1.49121 0 3.23047 0 5.90919L0 17.1053C0 19.784 1.74492 21.5226 4.41798 21.5226L5.68623 21.5226L5.68623 25.1907C5.68623 25.4668 5.86163 25.6406 6.07774 25.6406ZM6.1714 25.0855L6.1714 21.2773C6.1714 21.0903 6.0921 21.011 5.90577 21.011L4.45499 21.011C2.08985 21.011 0.511533 19.4454 0.511533 17.0676L0.511533 5.93712C0.511533 3.56837 2.08985 1.99366 4.45499 1.99366L21.9649 1.99366C24.2645 1.99366 25.9084 3.56837 25.9084 5.93712L25.9084 17.0676C25.9084 19.4454 24.2645 21.011 21.9649 21.011L11.2957 21.011C11.0074 21.011 10.8668 21.0724 10.5915 21.3029Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.65118 14.6772C12.4712 17.4972 16.5893 19.5936 18.9716 17.2112C19.0134 17.1694 19.0077 17.1556 19.0391 17.1326C19.9009 16.2758 19.974 15.5833 19.5175 15.0539C19.4295 14.9378 19.2103 14.821 16.8949 13.233C16.4014 12.8907 15.8118 12.8054 15.1078 13.4821L14.5357 14.0256C14.3893 14.1721 14.1912 14.1986 13.9882 14.0821C13.576 13.8464 12.7144 13.2786 11.882 12.4463C11.0504 11.6147 10.4722 10.7789 10.265 10.359C10.1681 10.1573 10.1919 10.0067 10.3216 9.85889L10.8741 9.23936C11.5236 8.50538 11.4201 7.91788 11.0862 7.44317L9.38614 5.00635C8.76729 4.12589 7.86661 4.88975 7.29356 5.22003C7.21612 5.25909 7.16729 5.32676 7.11846 5.37559C4.75362 7.73975 6.813 11.8397 9.65118 14.6772Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}