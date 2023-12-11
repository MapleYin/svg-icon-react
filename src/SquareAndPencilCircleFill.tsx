import React from 'react'

export default function SquareAndPencilCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM8.0752 6.77061C6.94346 6.77061 6.22783 7.496 6.22783 8.62637L6.22783 16.3058C6.22783 17.4459 6.94346 18.1608 8.0752 18.1608L15.7433 18.1608C16.8732 18.1608 17.5979 17.4459 17.5979 16.3058L17.5979 8.7462L17.024 9.32072L17.024 16.3198C17.024 17.0908 16.5194 17.5856 15.7335 17.5856L8.09473 17.5856C7.29786 17.5856 6.80235 17.0908 6.80235 16.3198L6.80235 8.63956C6.80235 7.84971 7.29786 7.34581 8.09473 7.34581L15.0616 7.34581L15.6361 6.77061ZM11.33 12.4077L10.8907 13.2156C10.8008 13.4053 11.0002 13.5572 11.1528 13.4784L11.9635 13.0517L18.0686 6.94659L17.4239 6.31241ZM18.2445 5.4834L17.8618 5.87452L18.5155 6.5087L18.915 6.10577C19.1515 5.86866 19.0872 5.6254 18.9891 5.52793L18.8971 5.43662C18.7626 5.30147 18.4991 5.22813 18.2445 5.4834Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}