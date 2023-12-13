import React from 'react'

export function ArrowshapeLeftFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.416 21.5508' className={className}>
      <path
        d='M0 10.7705C0 11.0976 0.0919926 11.4015 0.754882 12.0351L10.6041 21.1621C10.8136 21.3514 11.0818 21.5403 11.403 21.5403C11.8846 21.5403 12.1129 21.1737 12.1129 20.7292L12.1129 15.0875L23.236 15.0875C24.6941 15.0875 25.4548 14.3568 25.4548 12.9371L25.4548 8.73311C25.4548 7.32315 24.6941 6.5918 23.236 6.5918L12.1129 6.5918L12.1129 0.797759C12.1129 0.353225 11.8846 0 11.4107 0C11.0805 0 10.7988 0.181251 10.6041 0.364164L0.754882 9.50459C0.073145 10.1298 0 10.4421 0 10.7705Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
