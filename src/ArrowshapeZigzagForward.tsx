import React from 'react'

export function ArrowshapeZigzagForward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.2164 21.6988' className={className}>
      <path
        d='M2.19093 20.4404L9.19982 20.4404C10.4564 20.4404 11.1082 19.7906 11.1082 18.4621L11.1082 15.2132L17.1035 15.2132L17.1035 20.7292C17.1035 21.1828 17.3325 21.541 17.8141 21.541C18.1346 21.541 18.4119 21.3514 18.6123 21.1628L28.4622 12.0351C29.1251 11.4112 29.2164 11.0982 29.2164 10.7705C29.2164 10.4421 29.1433 10.1298 28.4622 9.50528L18.6123 0.373929C18.4176 0.181251 18.1359 0 17.8064 0C17.3325 0 17.1035 0.353225 17.1035 0.806841L17.1035 6.43555L8.51485 6.43555C7.2583 6.43555 6.60644 7.08604 6.60644 8.41456L6.60644 10.4521L2.19093 10.4521C0.934377 10.4521 0.282519 11.1116 0.282519 12.4402L0.282519 18.4621C0.282519 19.7906 0.934377 20.4404 2.19093 20.4404ZM2.18097 19.9226C1.2503 19.9226 0.794736 19.437 0.794736 18.4904L0.794736 12.4021C0.794736 11.4562 1.2503 10.9699 2.18097 10.9699L6.60781 10.9699L6.60781 13.5009C6.60781 14.3275 6.77793 14.7641 7.4999 15.3788L10.5967 17.9759L10.5967 18.4904C10.5967 19.437 10.1404 19.9226 9.21886 19.9226ZM17.846 21.0087C17.7016 21.0087 17.6151 20.8936 17.6151 20.731L17.6151 15.0289C17.6151 14.7918 17.5433 14.7103 17.3055 14.7103L8.49581 14.7103C7.57422 14.7103 7.11797 14.2247 7.11797 13.2788L7.11797 8.40186C7.11797 7.45596 7.57422 6.96973 8.49581 6.96973L17.3055 6.96973C17.5433 6.96973 17.6151 6.88887 17.6151 6.65108L17.6151 0.785755C17.6151 0.641322 17.7113 0.545033 17.8649 0.545033C18.017 0.545033 18.1126 0.639954 18.2271 0.744641L28.2144 9.96485C28.5697 10.3111 28.6919 10.5269 28.6919 10.7705C28.6919 11.0142 28.5886 11.2299 28.2144 11.5762L18.2173 20.8091C18.0477 20.9605 17.9423 21.0087 17.846 21.0087Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
