import React from 'react'

export default function ArrowtriangleLeftAndLineVerticalAndArrowtriangleRightFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.3761 24.8852' className={className}>
      <path
        d='M0.438538 13.2165L10.6968 19.4624C11.2588 19.8026 11.914 19.5085 11.914 18.925L11.914 5.96495C11.914 5.38077 11.2581 5.09434 10.6968 5.44297L0.438538 11.767C-0.145838 12.1317-0.146521 12.8511 0.438538 13.2165ZM17.0025 24.8852C17.1507 24.8852 17.2675 24.762 17.2675 24.6139L17.2675 0.318754C17.2675 0.170607 17.1507 0.0565428 17.0025 0.0565428C16.8641 0.0565428 16.7383 0.170607 16.7383 0.318754L16.7383 24.6139C16.7383 24.762 16.8641 24.8852 17.0025 24.8852ZM33.5763 13.2165C34.1522 12.8511 34.1606 12.1129 33.5763 11.767L23.318 5.44297C22.7567 5.09434 22.0917 5.38077 22.0917 5.96495L22.0917 18.925C22.0917 19.5085 22.756 19.8026 23.318 19.4624Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}