import React from 'react'

export default function HandThumbsupFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.2822 23.9184' className={className}>
      <path
        d='M0 15.239C0 18.4261 1.8919 21.1272 4.55596 21.1272L7.14151 21.1272C4.96807 19.8176 3.94746 17.6954 3.97539 15.1309C4.03125 12.1512 5.11368 10.4666 5.86661 9.29288L4.16124 9.29288C1.74473 9.29288 0 11.8963 0 15.239ZM4.86651 15.1413C4.86651 19.0963 8.00909 22.1356 13.0395 22.1356L14.518 22.1356C15.9281 22.1356 16.9365 22.0547 17.5461 21.8971C18.3662 21.6984 19.2129 21.1676 19.2129 20.1417C19.2129 19.7275 19.095 19.4311 18.957 19.1856C18.8593 19.0475 18.8697 18.9478 18.9981 18.8892C19.6871 18.5851 20.2402 18 20.2402 17.1422C20.2402 16.6491 20.0923 16.2244 19.8552 15.9008C19.7276 15.7334 19.7653 15.6044 19.9724 15.4956C20.4459 15.2285 20.773 14.5897 20.773 13.8888C20.773 13.4041 20.6147 12.8622 20.3197 12.5874C20.1425 12.448 20.1906 12.3392 20.3866 12.1816C20.6948 11.8956 20.9208 11.4214 20.9208 10.8C20.9208 9.75528 20.1118 8.89747 19.0364 8.89747L15.2293 8.89747C14.2816 8.89747 13.612 8.40372 13.612 7.61427C13.612 6.15528 15.4358 3.49258 15.4358 1.58867C15.4358 0.591407 14.7851 0 13.9461 0C13.1671 0 12.7835 0.523731 12.3783 1.33272C10.7701 4.47735 8.62003 7.01241 6.98321 9.16456C5.56466 11.0085 4.86651 12.5874 4.86651 15.1413Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}