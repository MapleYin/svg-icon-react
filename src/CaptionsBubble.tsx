import React from 'react'

export default function CaptionsBubble({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.6406' className={className}>
      <path
        d='M6.07774 25.6406C6.25158 25.6406 6.4047 25.53 6.5218 25.4358L11.1259 21.5226L22.002 21.5226C24.6743 21.5226 26.4199 19.7463 26.4199 17.1053L26.4199 5.90919C26.4199 3.2584 24.6743 1.49121 22.002 1.49121L4.41798 1.49121C1.74492 1.49121 0 3.23047 0 5.90919L0 17.1053C0 19.784 1.74492 21.5226 4.41798 21.5226L5.68623 21.5226L5.68623 25.1907C5.68623 25.4668 5.86163 25.6406 6.07774 25.6406ZM6.1714 25.0855L6.1714 21.2773C6.1714 21.0903 6.0921 21.011 5.90577 21.011L4.45499 21.011C2.08985 21.011 0.511533 19.4454 0.511533 17.0676L0.511533 5.93712C0.511533 3.56837 2.08985 1.99366 4.45499 1.99366L21.9649 1.99366C24.2645 1.99366 25.9084 3.56837 25.9084 5.93712L25.9084 17.0676C25.9084 19.4454 24.2645 21.011 21.9649 21.011L11.2957 21.011C11.0074 21.011 10.8668 21.0724 10.5915 21.3029Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.91984 12.9344L10.0636 12.9344C10.2153 12.9344 10.3442 12.8056 10.3442 12.6531C10.3442 12.493 10.2153 12.3726 10.0636 12.3726L3.91984 12.3726C3.75831 12.3726 3.6295 12.493 3.6295 12.6531C3.6295 12.8056 3.75831 12.9344 3.91984 12.9344ZM13.1676 12.9344L22.5189 12.9344C22.6714 12.9344 22.8002 12.8056 22.8002 12.6531C22.8002 12.493 22.6714 12.3726 22.5189 12.3726L13.1676 12.3726C13.0067 12.3726 12.8779 12.493 12.8779 12.6531C12.8779 12.8056 13.0067 12.9344 13.1676 12.9344ZM3.91984 15.6185L6.25196 15.6185C6.40372 15.6185 6.53253 15.4897 6.53253 15.3288C6.53253 15.1757 6.40372 15.0469 6.25196 15.0469L3.91984 15.0469C3.75831 15.0469 3.6295 15.1757 3.6295 15.3288C3.6295 15.4897 3.75831 15.6185 3.91984 15.6185ZM9.34688 15.6185L16.3378 15.6185C16.4986 15.6185 16.6274 15.4897 16.6274 15.3288C16.6274 15.1757 16.4986 15.0469 16.3378 15.0469L9.34688 15.0469C9.19512 15.0469 9.06631 15.1757 9.06631 15.3288C9.06631 15.4897 9.19512 15.6185 9.34688 15.6185ZM19.4418 15.6185L22.5189 15.6185C22.6714 15.6185 22.8002 15.4897 22.8002 15.3288C22.8002 15.1757 22.6714 15.0469 22.5189 15.0469L19.4418 15.0469C19.281 15.0469 19.1612 15.1757 19.1612 15.3288C19.1612 15.4897 19.281 15.6185 19.4418 15.6185Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}