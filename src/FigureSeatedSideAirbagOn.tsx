import React from 'react'

export function FigureSeatedSideAirbagOn({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.633 23.5967' className={className}>
      <path
        d='M19.1317 6.46133C20.8509 6.46133 22.2717 5.02735 22.2717 3.34854C22.2717 1.60977 20.8509 0.186231 19.1317 0.186231C17.3929 0.186231 16.0168 1.60977 16.0168 3.34854C16.0168 5.23194 17.3929 6.46133 19.1317 6.46133ZM16.8883 18.515C17.5092 18.121 18.0547 17.397 18.5904 16.4232L20.7303 12.5648C21.7123 10.7778 21.3789 8.9421 19.6722 8.04864C18.0422 7.13633 16.3445 7.82403 15.343 9.63956L13.0335 13.8638ZM0.421973 22.9592C1.02109 23.6155 2.06104 23.5297 2.79756 22.7646L7.77539 17.6291C7.95186 17.4526 8.07813 17.4038 8.32432 17.5022L12.5357 19.0931C13.6058 19.5012 14.6248 19.4042 15.4528 19.1844L12.7595 15.8403L9.3252 14.5763C7.93301 14.0664 6.80313 14.224 5.72207 15.3623L0.530078 20.7224C-0.186914 21.4771-0.127637 22.4005 0.421973 22.9592ZM19.5857 23.0693C19.9831 22.7702 20.0124 22.375 19.6533 21.9176L16.8883 18.515C16.4924 18.789 15.982 19.0463 15.4528 19.1844L18.4904 22.8804C18.83 23.2813 19.2511 23.3796 19.5857 23.0693Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.90967 11.7614C9.1794 11.7614 11.7503 9.04336 11.7503 5.93897C11.7503 2.64971 9.1794 0 5.90967 0C2.63086 0 0 2.64971 0 5.93897C0 9.04336 2.63086 11.7614 5.90967 11.7614Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
