import React from 'react'

export default function PyramidFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.0358 27.7512' className={className}>
      <path
        d='M0.329161 20.515C-0.331677 21.6733 0.0207634 22.8095 1.22252 23.3434L10.1559 27.3256C10.7093 27.5733 11.1322 27.7185 11.5641 27.7512L11.5641 1.67548C11.3087 1.75498 11.0888 1.91963 10.9633 2.12402ZM23.3362 20.5163L12.7105 2.12539C12.5752 1.91191 12.3567 1.75634 12.1096 1.66777L12.1096 27.7435C12.5332 27.6828 13.0021 27.537 13.6023 27.2711L22.4519 23.3356C23.6446 22.8018 23.997 21.6747 23.3362 20.5163Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
