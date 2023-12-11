import React from 'react'

export default function ArrowUpAndDownRighttriangleUpRighttriangleDownFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.2945 25.6733' className={className}>
      <path
        d='M24.9302 24.8543L24.9302 14.8941C24.9302 13.7135 24.4952 13.2876 23.3237 13.2876L8.16318 13.2876C7.82372 13.2876 7.56884 13.4912 7.56884 13.8463C7.56884 14.0467 7.66766 14.2087 7.9037 14.3793L23.6349 25.4838C23.8055 25.5917 24.0067 25.6537 24.1885 25.6537C24.5812 25.6537 24.9302 25.3982 24.9302 24.8543ZM24.9302 0.808503C24.9302 0.264651 24.5812 0 24.1885 0C24.0067 0 23.8055 0.0620121 23.6349 0.179005L7.9037 11.2744C7.66766 11.4541 7.56884 11.607 7.56884 11.8172C7.56884 12.1716 7.82372 12.3661 8.16318 12.3661L23.3237 12.3661C24.4952 12.3661 24.9302 11.9409 24.9302 10.7597Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.94295 19.5791L2.96288 19.5791L2.96288 6.07461L4.92479 6.07461C5.32597 6.07461 5.48563 5.61036 5.23553 5.25781L3.15087 2.15733C2.85174 1.72148 2.50448 1.72217 2.20604 2.15733L0.120686 5.25781C-0.130781 5.61036 0.0288878 6.07461 0.43143 6.07461L2.40106 6.07461L2.40106 19.5791L0.450278 19.5791C0.0477354 19.5791-0.111933 20.0434 0.13885 20.3966L2.2242 23.4971C2.52332 23.9413 2.87059 23.942 3.16903 23.4971L5.2537 20.3966C5.5038 20.0434 5.34481 19.5791 4.94295 19.5791Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}