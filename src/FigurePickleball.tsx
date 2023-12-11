import React from 'react'

export default function FigurePickleball({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.6515 27.0615' className={className}>
      <path
        d='M11.1594 5.50752C12.5355 5.50752 13.6647 4.37832 13.6647 2.98409C13.6647 1.61709 12.5355 0.487893 11.1594 0.487893C9.77423 0.487893 8.64503 1.61709 8.64503 2.98409C8.64503 4.37832 9.77423 5.50752 11.1594 5.50752ZM20.7272 7.90713C20.2648 7.44541 19.538 7.4461 19.0763 7.90713L16.2676 10.697L13.4575 7.87715C12.917 7.31709 12.0431 6.96416 11.1594 6.96416L3.61495 6.96416C3.09464 6.96416 2.6629 7.26895 2.48575 7.7795L0.67862 13.2023C0.394049 14.0462 0.894147 14.6251 1.46466 14.7632C2.02403 14.9104 2.64405 14.6746 2.89864 13.9388L4.46026 9.33067L6.94601 9.33067C7.19083 9.33067 7.34776 9.51827 7.26964 9.76309L5.73731 14.351C5.24561 15.8533 5.68849 17.288 7.36798 18.0238L12.2788 20.1755L13.9388 25.9805C14.1452 26.6982 14.8134 26.9235 15.3728 26.7763C15.9433 26.6194 16.4238 26.0893 16.1986 25.3228L14.381 18.9773C14.2917 18.6432 14.1159 18.4074 13.7323 18.231L9.90187 16.541L11.9447 10.4117C12.0235 10.1565 12.3276 10.0588 12.5152 10.2736L15.4223 13.2023C15.884 13.664 16.6498 13.664 17.1115 13.2023L20.7272 9.58663C21.2084 9.10538 21.2084 8.38838 20.7272 7.90713ZM6.15724 18.4197L5.5504 21.8654L0.600495 24.6253C-0.0976505 25.0082-0.117182 25.7357 0.187604 26.2657C0.491705 26.747 1.11104 27.0511 1.76876 26.6786L7.20128 23.6719C7.54444 23.4759 7.6714 23.2506 7.78019 22.9061L8.85646 19.6947L6.99005 18.8794C6.68663 18.7518 6.39366 18.5767 6.15724 18.4197ZM21.7798 5.70098C22.0719 5.55039 22.2895 5.28692 22.2895 5.04932L22.2895 0.88262C22.2895 0.364552 21.9549 0 21.4634 0L18.3478 0C17.8479 0 17.4944 0.364552 17.4944 0.88262L17.4944 5.04932C17.4944 5.28692 17.7127 5.55039 18.0041 5.70098L19.9014 6.66914ZM19.6131 8.74131L20.1904 8.74131L20.1904 5.44092L19.6131 5.44092Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
