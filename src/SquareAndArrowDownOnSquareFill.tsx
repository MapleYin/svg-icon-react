import React from 'react'

export function SquareAndArrowDownOnSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.8691 31.6709' className={className}>
      <path
        d='M27.618 14.8971L27.618 28.4826C27.618 30.5278 26.5112 31.6709 24.436 31.6709L9.8174 31.6709C7.74288 31.6709 6.63614 30.5558 6.63614 28.4826L6.63614 27.8355L18.6903 27.8355C21.2707 27.8355 22.7711 26.2903 22.7711 23.7574L22.7711 11.7095L24.436 11.7095C26.5112 11.7095 27.618 12.8526 27.618 14.8971Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.6595 1.22227L11.6595 6.9752L18.6903 6.9752C20.7655 6.9752 21.8716 8.11827 21.8716 10.1628L21.8716 23.7574C21.8716 25.7936 20.7655 26.9366 18.6903 26.9366L4.07169 26.9366C1.99717 26.9366 0.889751 25.8306 0.889751 23.7574L0.889751 10.1628C0.889751 8.08966 1.99717 6.9752 4.07169 6.9752L11.1486 6.9752L11.1486 1.22227C11.1486 1.07207 11.2584 0.954592 11.3995 0.954592C11.5413 0.954592 11.6595 1.07207 11.6595 1.22227ZM11.1305 7.24581L11.1305 16.6586L11.1353 18.3778L10.5473 17.7878L6.73175 13.9745C6.67609 13.9168 6.59611 13.8743 6.53566 13.8743C6.40499 13.8743 6.30001 13.9968 6.30001 14.1274C6.30001 14.1893 6.32501 14.2372 6.38136 14.2942L11.2105 19.1333C11.2527 19.1749 11.3202 19.2076 11.3807 19.2076C11.4509 19.2076 11.5184 19.1749 11.5607 19.1333L16.3709 14.2942C16.4189 14.2372 16.4432 14.1893 16.4432 14.1274C16.4432 13.9968 16.3284 13.8743 16.2159 13.8743C16.1555 13.8743 16.0762 13.9168 16.0205 13.9745L12.2057 17.7878L11.6268 18.359L11.6406 16.6586L11.6406 7.24581C11.6406 7.11241 11.5252 6.98927 11.3807 6.98927C11.2459 6.98927 11.1305 7.11241 11.1305 7.24581Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
