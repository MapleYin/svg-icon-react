import React from 'react'

export default function CharacterBubble({
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
        d='M9.10147 17.2967C9.24688 17.2967 9.31143 17.2481 9.37755 17.0574L10.7006 13.5806L15.7096 13.5806L17.0326 17.0574C17.1085 17.2292 17.1633 17.2967 17.3464 17.2967C17.4882 17.2967 17.6107 17.1938 17.6107 17.0631C17.6107 16.997 17.5995 16.977 17.5661 16.897L13.5526 6.37188C13.4921 6.1876 13.3816 6.11328 13.2135 6.11328C13.0369 6.11328 12.9181 6.1876 12.8576 6.37188L8.84404 16.897C8.81133 16.977 8.79951 16.997 8.79951 17.0449C8.79951 17.2126 8.90313 17.2967 9.10147 17.2967ZM10.9137 13.0153L13.1828 7.05557L13.2273 7.05557L15.4965 13.0153Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
