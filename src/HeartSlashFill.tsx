import React from 'react'

export function HeartSlashFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2363 26.1972' className={className}>
      <path
        d='M18.5849 20.2526C17.1802 21.4553 15.5988 22.6285 13.8994 23.7657C13.7642 23.8584 13.5859 23.9329 13.4333 23.9329C13.289 23.9329 13.1107 23.8584 12.9755 23.7657C6.46539 19.409 1.67779 14.5225 1.67779 9.51949C1.67779 7.69402 2.25805 6.10248 3.25032 4.91891ZM25.1881 9.51949C25.1881 12.6489 23.3188 15.7327 20.325 18.6697L5.07672 3.42183C5.98139 2.93433 7.0287 2.66704 8.16568 2.66704C10.304 2.66704 12.4848 3.95181 13.4333 5.94878C14.3824 3.95113 16.5619 2.66704 18.7099 2.66704C22.4352 2.66704 25.1881 5.53638 25.1881 9.51949Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M23.1177 23.5061C23.2227 23.6104 23.3965 23.6104 23.5002 23.5061C23.6226 23.383 23.6051 23.2287 23.5002 23.1237L1.3734 0.998296C1.28795 0.912161 1.11412 0.87515 0.990972 0.998296C0.886673 1.10191 0.886673 1.26734 0.990972 1.38004Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
