import React from 'react'

export default function Bell({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.0078 24.6635' className={className}>
      <path
        d='M0 20.3653C0 20.7029 0.215628 20.9222 0.504013 20.9222L7.88935 20.9222C7.91367 23.1233 9.3207 24.644 11.3232 24.644C13.3258 24.644 14.7237 23.124 14.7481 20.9222L22.1418 20.9222C22.4309 20.9222 22.6465 20.7029 22.6465 20.3653C22.6465 19.0783 21.5327 18.037 20.5591 16.9328C19.1116 15.2898 19.2739 11.9649 18.8082 8.79729C18.3334 5.93575 17.0814 3.55186 14.2199 2.89336C14.0109 1.10537 12.8379 0 11.3232 0C9.8086 0 8.63486 1.10537 8.42656 2.89336C5.55605 3.55186 4.304 5.93575 3.83828 8.79729C3.37256 11.9649 3.53486 15.2898 2.07832 16.9328C1.11309 18.037 0 19.0783 0 20.3653ZM0.554309 20.3993L0.554309 20.2801C0.539369 19.4669 1.59513 18.2281 2.44357 17.3477C4.12491 15.6141 3.83595 11.9767 4.34844 8.93537C4.88887 6.09825 5.91212 4.14766 8.17159 3.5338C8.6503 3.4005 8.93643 3.24356 9.01046 2.81163C9.21573 1.56661 9.98584 0.529208 11.3232 0.529208C12.6516 0.529208 13.4308 1.56661 13.6354 2.81163C13.7101 3.24356 13.9871 3.4005 14.4749 3.5338C16.7344 4.14766 17.7576 6.09825 18.289 8.93537C18.8105 11.9767 18.5216 15.6141 20.1938 17.3477C21.0514 18.2281 22.1071 19.4669 22.0831 20.2801L22.0831 20.3993ZM8.40655 20.9222L14.2309 20.9222C14.1423 22.8791 12.9389 24.1475 11.3232 24.1475C9.70762 24.1475 8.5042 22.8791 8.40655 20.9222Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}