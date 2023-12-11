import React from 'react'

export default function MusicNoteList({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.3694 24.2139' className={className}>
      <path
        d='M0.28809 14.2858L12.3587 14.2858C12.5243 14.2858 12.6468 14.1634 12.6468 14.0159C12.6468 13.8698 12.5236 13.7467 12.3587 13.7467L0.28809 13.7467C0.123146 13.7467 0 13.8698 0 14.0159C0 14.1634 0.122463 14.2858 0.28809 14.2858Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.28809 10.1345L12.3587 10.1345C12.5243 10.1345 12.6468 10.0113 12.6468 9.86456C12.6468 9.71846 12.5236 9.58691 12.3587 9.58691L0.28809 9.58691C0.123146 9.58691 0 9.71846 0 9.86456C0 10.0113 0.122463 10.1345 0.28809 10.1345Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.28809 5.98379L12.3587 5.98379C12.5236 5.98379 12.6468 5.86065 12.6468 5.70479C12.6468 5.55869 12.5236 5.43555 12.3587 5.43555L0.28809 5.43555C0.123146 5.43555 0 5.55869 0 5.70479C0 5.86065 0.123146 5.98379 0.28809 5.98379Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M24.0081 5.83926L24.0081 1.49893C24.0081 1.01924 23.6365 0.727147 23.1673 0.817772L17.5489 2.02217C17.061 2.13301 16.806 2.4251 16.806 2.88867L16.8897 16.2396C16.8841 17.0482 16.4535 17.6058 15.7313 17.7502L13.7573 18.1701C11.5318 18.6325 10.4515 19.6911 10.4515 21.4117C10.4515 23.0778 11.6963 24.2139 13.5375 24.2139C15.2638 24.2139 17.6782 23.0401 17.6782 19.6909L17.6782 8.7751C17.6782 7.94483 17.9155 7.64258 18.7229 7.45977L23.5459 6.39346C23.8366 6.33282 24.0081 6.13975 24.0081 5.83926Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
