import React from 'react'

export default function DocAppendFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5424' className={className}>
      <path
        d='M6.88692 12.6338C5.22178 12.6338 3.93272 11.478 3.93272 9.4252C3.93272 8.22109 4.41348 7.20547 5.13682 6.40469C5.87764 5.57734 7.01543 5.03252 7.82803 5.03252C8.00567 5.03252 8.10879 5.11817 8.10879 5.26309C8.10879 5.43526 7.95254 5.5084 7.796 5.5334C7.0459 5.65967 6.41934 5.92198 5.76963 6.50401C5.20098 7.03086 4.82423 7.71123 4.65323 8.3916L4.7877 8.3916C5.36339 7.69102 6.12325 7.40215 6.85362 7.40215C8.37725 7.40215 9.48028 8.42686 9.48028 10.0146C9.48028 11.4855 8.30342 12.6338 6.88692 12.6338ZM13.5709 12.6331C11.9044 12.6331 10.6244 11.4773 10.6244 9.42451C10.6244 8.22041 11.0968 7.21387 11.8201 6.404C12.5687 5.57871 13.6897 5.03184 14.5113 5.03184C14.689 5.03184 14.7928 5.11748 14.7928 5.26241C14.7928 5.43457 14.6358 5.50772 14.48 5.53272C13.7285 5.65967 13.1097 5.92129 12.4606 6.50469C11.8836 7.03155 11.5075 7.71123 11.3365 8.39092L11.471 8.39092C12.0551 7.69941 12.8065 7.40147 13.5362 7.40147C15.0606 7.40147 16.1643 8.43525 16.1643 10.0139C16.1643 11.4849 14.9867 12.6331 13.5709 12.6331ZM4.54942 16.5695C4.38379 16.5695 4.2627 16.4387 4.2627 16.2933C4.2627 16.1395 4.38379 16.0184 4.54942 16.0184L15.5489 16.0184C15.7223 16.0184 15.8434 16.1395 15.8434 16.2933C15.8434 16.4387 15.7223 16.5695 15.5489 16.5695ZM4.54942 20.5596C4.38379 20.5596 4.2627 20.4385 4.2627 20.284C4.2627 20.1379 4.38379 20.0161 4.54942 20.0161L10.0101 20.0161C10.175 20.0161 10.2961 20.1379 10.2961 20.284C10.2961 20.4385 10.175 20.5596 10.0101 20.5596ZM0 23.3611C0 25.4356 1.10537 26.5424 3.1876 26.5424L16.8528 26.5424C18.926 26.5424 20.0314 25.4356 20.0314 23.3611L20.0314 3.23643C20.0314 1.16192 18.926 0.0551754 16.8528 0.0551754L3.1876 0.0551754C1.10537 0.0551754 0 1.16192 0 3.23643Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}