import React from 'react'

export function BriefcaseFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.5974 23.1346' className={className}>
      <path
        d='M11.798 14.5252C11.0937 14.5252 10.678 14.1103 10.678 13.4241L10.678 12.4455C7.0502 12.2377 3.51524 11.55 0 10.2514L0 9.69101C4.09942 11.3751 8.47608 11.9965 13.6226 11.9965C18.7788 11.9965 23.1639 11.3751 27.236 9.69101L27.236 10.2514C23.7306 11.55 20.2047 12.2377 16.558 12.4455L16.558 13.4241C16.558 14.1103 16.1515 14.5252 15.4381 14.5252ZM2.90196 23.1157L24.3341 23.1157C26.2696 23.1157 27.236 22.1779 27.236 20.2263L27.236 7.39913C27.236 5.44678 26.2696 4.50898 24.3341 4.50898L2.90196 4.50898C0.967092 4.50898 0 5.44678 0 7.39913L0 20.2263C0 22.1779 0.967092 23.1157 2.90196 23.1157ZM7.85254 4.86661L8.36905 4.86661L8.36905 2.20635C8.36905 1.14874 9.05489 0.528524 10.2158 0.528524L17.0105 0.528524C18.1812 0.528524 18.867 1.14874 18.867 2.20635L18.867 4.86524L19.3835 4.86524L19.3835 2.18731C19.3835 0.827639 18.4834 0 16.9721 0L10.2458 0C8.74131 0 7.85254 0.827639 7.85254 2.18731Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
