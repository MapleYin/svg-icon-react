import React from 'react'

export default function SealFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.4928 27.1714' className={className}>
      <path
        d='M5.59306 23.6523L8.92597 23.6523C9.2539 23.6523 9.48554 23.7297 9.72626 23.9802L12.0935 26.3364C13.1601 27.4134 13.9713 27.4128 15.0379 26.3364L17.4052 23.9802C17.6466 23.7297 17.8782 23.6523 18.2055 23.6523L21.5384 23.6523C23.0756 23.6523 23.6421 23.0774 23.6421 21.5577L23.6421 18.2164C23.6421 17.8884 23.7377 17.6659 23.9693 17.4154L26.3171 15.0488C27.4032 13.9815 27.4025 13.1704 26.3171 12.1128L23.9693 9.73648C23.7377 9.49576 23.6421 9.26412 23.6421 8.93619L23.6421 5.60328C23.6421 4.07584 23.0672 3.50025 21.5384 3.50025L18.2055 3.50025C17.8782 3.50025 17.6466 3.42212 17.4052 3.17232L15.0379 0.824566C13.9531-0.270652 13.1601-0.27905 12.0838 0.824566L9.72626 3.17232C9.49462 3.40396 9.2539 3.50025 8.92597 3.50025L5.59306 3.50025C4.06493 3.50025 3.49003 4.07447 3.49003 5.60328L3.49003 8.93619C3.49003 9.26412 3.39374 9.49576 3.1621 9.73648L0.814346 12.1128C-0.27179 13.1704-0.271107 13.9815 0.814346 15.0488L3.1621 17.4154C3.39374 17.6659 3.49003 17.8884 3.49003 18.2164L3.49003 21.5577C3.49003 23.0858 4.06493 23.6523 5.59306 23.6523Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}