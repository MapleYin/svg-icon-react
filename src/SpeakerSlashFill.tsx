import React from 'react'

export function SpeakerSlashFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.7286 25.3616' className={className}>
      <path
        d='M16.9478 22.0054L16.9478 22.2447C16.9478 22.6781 16.739 23.0258 16.277 23.0258C15.9579 23.0258 15.691 22.855 15.501 22.6671L9.68785 17.1742C9.55455 17.0409 9.38287 16.9739 9.15465 16.9739L5.07203 16.9739C4.10894 16.9739 3.28248 16.1474 3.28248 15.2145L3.28248 10.3063C3.28248 9.78524 3.53018 9.30174 3.91338 8.97192ZM16.9478 3.08472L16.9478 18.6832L6.79233 8.52807L9.15465 8.52807C9.38287 8.52807 9.55455 8.47085 9.68785 8.33755L15.501 2.67134C15.6853 2.48911 15.9656 2.31831 16.2756 2.31831C16.739 2.31831 16.9478 2.6604 16.9478 3.08472Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M20.584 24.3624C20.6883 24.4673 20.8621 24.4673 20.9664 24.3624C21.0888 24.2392 21.0707 24.0849 20.9664 23.9806L1.3734 4.38832C1.28727 4.30218 1.11343 4.26517 0.990288 4.38832C0.886673 4.49193 0.886673 4.66645 0.990288 4.77006Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
