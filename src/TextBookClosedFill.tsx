import React from 'react'

export default function TextBookClosedFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5424' className={className}>
      <path
        d='M5.35656 6.62911C5.21046 6.62911 5.08663 6.50596 5.08663 6.35987C5.08663 6.21241 5.21046 6.08926 5.35656 6.08926L16.6203 6.08926C16.7762 6.08926 16.8909 6.21241 16.8909 6.35987C16.8909 6.50596 16.7762 6.62911 16.6203 6.62911ZM5.35656 9.80802C5.21046 9.80802 5.08663 9.68487 5.08663 9.53741C5.08663 9.39131 5.21046 9.26817 5.35656 9.26817L12.9692 9.26817C13.1166 9.26817 13.2398 9.39131 13.2398 9.53741C13.2398 9.68487 13.1166 9.80802 12.9692 9.80802ZM3.01094 26.5424L19.7986 26.5424C19.9593 26.5424 20.0314 26.4612 20.0314 26.2908C20.0314 26.211 19.9954 26.1242 19.9268 26.0608C17.9669 24.7724 17.4875 22.5463 19.1883 20.5689C19.7038 19.9619 20.0314 19.1616 20.0314 18.0953L20.0314 3.22803C20.0314 1.15352 18.926 0.0467771 16.8528 0.0467771L3.1876 0.0467771C1.10537 0.0467771 0 1.16192 0 3.22803L0 23.7138C0 25.4733 1.12422 26.5424 3.01094 26.5424ZM3.03526 26.0309C1.45284 26.0309 0.511533 25.1629 0.511533 23.6761C0.511533 22.2304 1.44151 21.3876 3.02325 21.3876L16.8741 21.3876C17.427 21.3876 17.8864 21.322 18.3088 21.1823C17.2067 22.9791 17.6075 24.8722 19.1753 26.0309ZM2.47071 20.1636C2.31963 20.1636 2.19014 20.0348 2.19014 19.8739L2.19014 1.7001C2.19014 1.53858 2.31963 1.41885 2.47071 1.41885C2.63155 1.41885 2.76105 1.53858 2.76105 1.7001L2.76105 19.8739C2.76105 20.0348 2.63155 20.1636 2.47071 20.1636Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}