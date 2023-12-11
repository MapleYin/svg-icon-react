import React from 'react'

export default function SharedWithYouCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM8.10762 17.8143C8.10762 18.1817 8.40469 18.4279 8.84395 18.4279L16.5254 18.4279C16.9737 18.4279 17.2799 18.1817 17.2799 17.8143C17.2799 16.3857 15.4991 14.4655 12.6707 14.4655C9.85069 14.4655 8.10762 16.3857 8.10762 17.8143ZM5.17695 12.4125C4.56875 12.4125 4.26465 12.7159 4.26465 13.3241L4.26465 14.7038C4.26465 15.3113 4.56875 15.6336 5.17695 15.6336L6.56367 15.6336C7.17119 15.6336 7.46758 15.3113 7.46758 14.7038L7.46758 13.3241C7.46758 12.7348 7.17119 12.4125 6.56367 12.4125ZM17.2622 8.82051C16.6533 8.82051 16.3311 9.16162 16.3311 9.7503L16.3311 13.5978C16.3311 14.2053 16.6533 14.5464 17.2622 14.5464L19.2474 14.5464C19.8556 14.5464 20.1597 14.2053 20.1597 13.5978L20.1597 9.7503C20.1597 9.16162 19.8556 8.82051 19.2474 8.82051ZM10.5434 11.0882C10.5434 12.4302 11.487 13.4583 12.6896 13.4583C13.8998 13.4583 14.8351 12.4302 14.8351 11.0882C14.8351 9.8293 13.8998 8.74805 12.6896 8.74805C11.487 8.74805 10.5434 9.82998 10.5434 11.0882ZM6.72725 5.95098C6.10928 5.95098 5.80518 6.27393 5.80518 6.88213L5.80518 10.1025C5.80518 10.6912 6.10928 11.0135 6.72725 11.0135L9.93623 11.0135C9.946 9.54903 11.0241 8.27764 12.4656 8.15L12.4656 6.88213C12.4656 6.27393 12.142 5.95098 11.5429 5.95098Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}