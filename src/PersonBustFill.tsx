import React from 'react'

export default function PersonBustFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3195 24.4135' className={className}>
      <path
        d='M9.98819 8.56504C12.1762 8.55733 13.8493 6.67344 13.8493 4.22949C13.8493 1.95088 12.1392 0 9.98819 0C7.81837 0 6.08028 1.95088 6.11729 4.22949C6.11729 6.67344 7.78135 8.56436 9.98819 8.56504ZM3.01543 17.4375L16.8869 17.4375C17.7136 17.4375 18.29 16.9856 18.29 16.2922C18.29 13.6833 15.0403 10.2352 9.9505 10.2352C4.87041 10.2352 1.62149 13.6833 1.62149 16.2922C1.62149 16.9856 2.19786 17.4375 3.01543 17.4375ZM0.251567 24.3912L19.7066 24.3912C19.8484 24.3912 19.9582 24.2731 19.9582 24.1306C19.9582 23.9888 19.8484 23.8797 19.7066 23.8797L18.9533 23.8797L18.9533 19.2732C18.9533 18.7189 18.5497 18.3279 17.999 18.3279L1.95919 18.3279C1.4085 18.3279 1.00489 18.7189 1.00489 19.2732L1.00489 23.8797L0.251567 23.8797C0.118166 23.8797 0 23.9888 0 24.1306C0 24.2731 0.118166 24.3912 0.251567 24.3912ZM6.89103 21.9327C6.63663 21.9327 6.43448 21.739 6.43448 21.4755C6.43448 21.2211 6.63663 21.0196 6.89103 21.0196L13.077 21.0196C13.3411 21.0196 13.5426 21.2211 13.5426 21.4755C13.5426 21.739 13.3411 21.9327 13.077 21.9327Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
