import React from 'react'

export default function CarseatRightBackrestUpAndDownFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.9307 24.7004' className={className}>
      <path
        d='M31.4358 20.0752C32.1392 17.0516 30.0117 15.7979 24.5718 15.7979C21.3094 15.7979 18.1784 16.0649 15.4886 16.5755L15.6528 16.7947C16.1716 11.308 14.2405 6.04425 11.0591 4.36563L11.1439 4.74786C11.661 1.4628 9.91818 0 8.16954 0C6.83224 0 5.69366 0.955081 6.19767 3.03038L10.8795 22.1856C11.2554 23.7484 12.4041 24.6906 13.9376 24.6906L27.0516 24.6906C29.1611 24.6906 30.5893 23.6243 31.4358 20.0752Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.93926 13.024L4.57774 7.51123C4.48506 7.13349 4.10938 7.13368 3.90674 7.34677L0.146094 11.1456C-0.110352 11.4027-0.0190432 11.8084 0.340529 11.9199L5.39639 13.4881C5.70215 13.5919 6.03194 13.4018 5.93926 13.024Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.4341 9.15693C17.5268 9.52695 17.9025 9.53378 18.1233 9.3207L21.8846 5.56025C22.141 5.30312 22.0114 4.88837 21.6902 4.78593L16.5959 3.18007C16.2908 3.07626 15.9799 3.26776 16.0726 3.64482Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
