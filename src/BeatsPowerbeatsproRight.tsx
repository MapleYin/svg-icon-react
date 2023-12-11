import React from 'react'

export default function BeatsPowerbeatsproRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.9774 22.1192' className={className}>
      <path
        d='M10.1899 0C4.58994 0 0 6.42637 0 14.2881C0 18.0021 0.983399 22.0996 2.06221 22.0996C3.17979 22.0996 3.97354 20.6584 3.98877 19.3834C2.225 18.8897 0.941796 17.2905 0.941796 15.3685C0.941796 14.2806 1.33086 13.3008 2.04766 12.5113C2.39561 6.94825 5.94082 2.04424 10.0538 2.04424C12.481 2.04424 13.5997 3.84365 13.5997 7.21241L3.92246 12.2627C2.51641 12.9999 1.87754 14.1402 1.87754 15.3685C1.87754 17.1218 3.2877 18.5871 5.0962 18.5871C5.97081 18.5871 6.6251 18.3437 7.8917 17.656L12.7558 14.9931C14.8691 13.8325 15.616 12.4265 15.616 9.4295L15.616 6.85879C15.616 2.65313 13.7873 0 10.1899 0ZM5.09981 17.5524C3.88545 17.5524 2.90615 16.5731 2.90615 15.3503C2.90615 14.1366 3.88545 13.1378 5.09981 13.1378C6.3044 13.1378 7.29346 14.1366 7.29346 15.3503C7.29346 16.5542 6.3044 17.5524 5.09981 17.5524ZM5.09981 16.9305C5.96348 16.9305 6.68067 16.2133 6.68067 15.3503C6.68067 14.4775 5.96348 13.7604 5.09981 13.7604C4.22705 13.7604 3.52803 14.4775 3.52803 15.3503C3.52803 16.2133 4.22705 16.9305 5.09981 16.9305Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.09981 17.5524C3.88545 17.5524 2.90615 16.5731 2.90615 15.3503C2.90615 14.1366 3.88545 13.1378 5.09981 13.1378C6.3044 13.1378 7.29346 14.1366 7.29346 15.3503C7.29346 16.5542 6.3044 17.5524 5.09981 17.5524ZM5.09981 16.9305C5.96348 16.9305 6.68067 16.2133 6.68067 15.3503C6.68067 14.4775 5.96348 13.7604 5.09981 13.7604C4.22705 13.7604 3.52803 14.4775 3.52803 15.3503C3.52803 16.2133 4.22705 16.9305 5.09981 16.9305Z'
        fill={color}
        fillOpacity='0.2125'
      />
    </svg>
  )
}