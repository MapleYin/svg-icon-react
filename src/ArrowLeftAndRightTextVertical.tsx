import React from 'react'

export default function ArrowLeftAndRightTextVertical({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.6815 26.0156' className={className}>
      <path
        d='M0.240576 3.12545L2.96578 5.19381C3.30787 5.46208 3.77125 5.29059 3.77125 4.88873L3.77125 2.94586L19.549 2.94586L19.549 4.88873C19.549 5.29831 20.011 5.46344 20.3544 5.19381L23.0796 3.12545C23.401 2.87516 23.3906 2.43248 23.0796 2.19332L20.3544 0.124958C20.011-0.134907 19.549 0.0302302 19.549 0.438436L19.549 2.37428L3.77125 2.37428L3.77125 0.438436C3.77125 0.0302302 3.30015-0.134907 2.96578 0.124958L0.240576 2.19332C-0.0710458 2.42408-0.0892098 2.87516 0.240576 3.12545Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M21.3422 8.70349L21.3422 25.7536C21.3422 25.9129 21.4402 26.0108 21.5995 26.0108C21.7587 26.0108 21.8651 25.9129 21.8651 25.7536L21.8651 8.70349C21.8651 8.54421 21.7587 8.44626 21.5995 8.44626C21.4402 8.44626 21.3422 8.54421 21.3422 8.70349ZM14.7134 8.70349L14.7134 25.7536C14.7134 25.9129 14.8107 26.0108 14.97 26.0108C15.1293 26.0108 15.2363 25.9129 15.2363 25.7536L15.2363 8.70349C15.2363 8.54421 15.1293 8.44626 14.97 8.44626C14.8107 8.44626 14.7134 8.54421 14.7134 8.70349ZM8.08393 8.70349L8.08393 25.7536C8.08393 25.9129 8.18189 26.0108 8.34117 26.0108C8.50045 26.0108 8.60679 25.9129 8.60679 25.7536L8.60679 8.70349C8.60679 8.54421 8.50045 8.44626 8.34117 8.44626C8.18189 8.44626 8.08393 8.54421 8.08393 8.70349ZM1.45513 8.70349L1.45513 17.5391C1.45513 17.6984 1.55239 17.7964 1.71167 17.7964C1.87095 17.7964 1.97799 17.6984 1.97799 17.5391L1.97799 8.70349C1.97799 8.54421 1.87095 8.44626 1.71167 8.44626C1.55239 8.44626 1.45513 8.54421 1.45513 8.70349Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
