import React from 'react'

export default function HomepodminiFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.4571 21.9018' className={className}>
      <path
        d='M12.0434 21.9018C17.1577 21.9018 18.6674 21.1503 20.1527 19.7821C22.5647 17.5578 24.0958 14.2983 24.0958 10.6767C24.0958 7.26016 22.8154 4.15499 19.7826 2.08145C19.5073 1.91104 19.1483 2.00049 19.1286 2.26963C18.8655 3.78692 16.1458 4.69258 12.0434 4.69258C7.95 4.69258 5.23028 3.78692 4.96787 2.26963C4.94824 2.00049 4.58915 1.91104 4.31386 2.08145C1.28037 4.15499 0 7.26016 0 10.6767C0 14.2983 1.53115 17.5578 3.94307 19.7821C5.42842 21.1503 6.92969 21.9018 12.0434 21.9018Z'
        fill={color}
        fillOpacity='0.425'
      />
      <path
        d='M12.0434 3.80215C15.9913 3.80215 18.277 3.12695 18.277 1.94287C18.277 0.758106 15.9913 0.0919926 12.0434 0.0919926C8.1045 0.0919926 5.81954 0.758106 5.81954 1.94287C5.81954 3.12695 8.1045 3.80215 12.0434 3.80215Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
