import React from 'react'

export default function SquareAndArrowDownOnSquare({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.0798 33.5201' className={className}>
      <path
        d='M26.7185 15.8444L26.7185 29.4072C26.7185 31.4804 25.6208 32.5955 23.5463 32.5955L9.7714 32.5955C7.6962 32.5955 6.59014 31.4804 6.59014 29.4072L6.59014 27.8612L7.10167 27.8612L7.10167 29.3829C7.10167 31.1608 8.09044 32.0833 9.80069 32.0833L23.5079 32.0833C25.2922 32.0833 26.216 31.1608 26.216 29.3829L26.216 15.8687C26.216 14.0907 25.2273 13.1683 23.5079 13.1683L20.9818 13.1683L20.9818 12.6568L23.5463 12.6568C25.6124 12.6568 26.7185 13.7621 26.7185 15.8444Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M20.9818 11.1101L20.9818 24.682C20.9818 26.7182 19.8758 27.8612 17.8006 27.8612L3.18125 27.8612C1.10674 27.8612 0 26.7552 0 24.682L0 11.1101C0 9.03692 1.10674 7.93155 3.18125 7.93155L8.35175 7.93155L8.35175 8.434L3.21124 8.434C1.42628 8.434 0.511533 9.35646 0.511533 11.1344L0.511533 24.6577C0.511533 26.4356 1.42628 27.3581 3.21124 27.3581L17.7706 27.3581C19.4809 27.3581 20.4703 26.4356 20.4703 24.6577L20.4703 11.1344C20.4703 9.35646 19.4809 8.434 17.7706 8.434L12.6301 8.434L12.6301 7.93155L17.8006 7.93155C19.8758 7.93155 20.9818 9.07394 20.9818 11.1101Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.4909 20.1506C10.5514 20.1506 10.6195 20.1179 10.6709 20.0756L15.4812 15.2281C15.5284 15.1802 15.5534 15.1322 15.5534 15.0704C15.5534 14.9398 15.4296 14.8173 15.3255 14.8173C15.2566 14.8173 15.1773 14.8598 15.1301 14.9084L12.4708 17.557L10.737 19.3019L10.7509 17.5925L10.7509 2.14688C10.7509 1.99669 10.632 1.8792 10.4909 1.8792C10.3498 1.8792 10.231 1.99669 10.231 2.14688L10.231 17.5925L10.2448 19.3208L8.49288 17.557L5.842 14.9084C5.78565 14.8598 5.70567 14.8173 5.63682 14.8173C5.51456 14.8173 5.41026 14.9398 5.41026 15.0704C5.41026 15.1322 5.43457 15.1802 5.49161 15.2281L10.3109 20.0756C10.3623 20.1179 10.4305 20.1506 10.4909 20.1506Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}