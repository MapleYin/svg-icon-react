import React from 'react'

export default function FigureKickboxing({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.5413 27.6674' className={className}>
      <path
        d='M2.51504 5.02032C3.89043 5.02032 5.01963 3.89112 5.01963 2.50459C5.01963 1.1292 3.89043 0 2.51504 0C1.1292 0 0 1.1292 0 2.50459C0 3.89112 1.1292 5.02032 2.51504 5.02032ZM1.19893 14.6296L5.9626 14.6296L6.24786 14.9149C6.82676 15.4938 7.59395 15.779 8.35977 15.779C8.99795 15.779 9.59776 15.583 10.1467 15.1897L15.8847 10.8779L21.6102 7.44922C22.1514 7.11582 22.3467 6.41768 22.0231 5.85762C21.6701 5.31709 20.9727 5.14063 20.4126 5.47471L9.53848 11.9778L6.50381 8.95225C6.425 8.87412 6.47383 8.77578 6.57217 8.77578L9.34249 8.77578C9.99952 8.77578 10.5303 8.26455 10.5303 7.62569L10.5303 2.53838C10.5303 1.88906 9.99952 1.35967 9.34249 1.35967C8.70362 1.35967 8.18331 1.88906 8.18331 2.53838L8.18331 6.47696L2.34766 6.47696C1.08106 6.47696 0.0299805 7.49873 0.0299805 8.77578L0.0299805 13.4613C0.0299805 14.0898 0.541211 14.6296 1.19893 14.6296ZM2.26045 12.3698L2.26045 11.2511C2.26045 11.0844 2.45576 10.9958 2.56455 11.1228L3.79209 12.3698ZM8.53624 27.4385C9.13536 27.5466 9.79376 27.1539 9.92139 26.5151L11.0813 20.6899C11.1196 20.5434 11.1196 20.4157 11.1001 20.2588L10.8748 15.8213C10.005 16.449 9.20508 16.7232 8.35977 16.7232C8.24258 16.7232 8.11563 16.7043 7.98936 16.7036L8.74268 20.4548L7.62325 26.0533C7.49561 26.6915 7.9085 27.3109 8.53624 27.4385ZM9.93184 4.27647C10.8943 4.27647 11.6895 3.50088 11.6895 2.53838C11.6895 1.56543 10.8943 0.789159 9.93184 0.789159C8.97842 0.789159 8.18331 1.56543 8.18331 2.53838C8.18331 3.50088 8.97842 4.27647 9.93184 4.27647Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
