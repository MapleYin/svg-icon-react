import React from 'react'

export default function HandDraw({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.2639 24.5401' className={className}>
      <path
        d='M5.97374 4.37975C2.99277 6.19107 1.06009 9.64423 1.0715 13.9089C1.07082 14.0907 0.96017 14.2027 0.80636 14.2034C0.671397 14.2041 0.539169 14.0432 0.539169 13.8887C0.539169 9.46386 2.59171 5.72577 5.86242 3.79022C5.8767 3.9813 5.91324 4.17832 5.97374 4.37975Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M19.2032 23.0879C23.2736 21.6026 25.6239 17.98 23.6764 12.6357L22.9317 10.6009C21.9544 7.89447 20.4384 6.85384 18.4891 7.55199C18.0044 6.84476 17.1696 6.55316 16.2293 6.88724C15.868 7.02328 15.5185 7.23675 15.1703 7.51722C14.7004 6.81566 13.8608 6.53109 12.9269 6.87494C12.5892 6.99076 12.2333 7.21126 11.9061 7.47015L10.3043 3.06459C9.88665 1.91126 8.8428 1.54329 7.95266 1.86742C6.9969 2.2097 6.47248 3.16205 6.89084 4.30629L11.0182 15.653C11.0384 15.7116 11.0279 15.7701 10.9694 15.7897C10.9205 15.8092 10.8633 15.7897 10.8054 15.7227L7.85716 12.408C7.19876 11.6546 6.43089 11.4845 5.77473 11.7041C4.85286 12.041 4.31252 12.9699 4.68977 13.9649C4.78879 14.1879 4.94143 14.4709 5.11428 14.6849L9.72903 20.3078C12.2596 23.383 15.5948 24.3998 19.2032 23.0879ZM19.0348 22.6528C15.6782 23.8728 12.4351 22.7603 10.1416 19.9452L5.54505 14.323C5.39085 14.1304 5.26595 13.9476 5.16966 13.6867C4.95823 13.1019 5.26321 12.4397 5.91702 12.2087C6.39075 12.035 6.92464 12.2276 7.40335 12.7628L10.222 15.955C10.4707 16.2324 10.7531 16.3 11.0626 16.1808C11.4042 16.0602 11.6275 15.7354 11.4783 15.3275L7.40159 4.12904C7.10569 3.29926 7.36663 2.59096 8.11331 2.31322C8.86838 2.04525 9.49289 2.42699 9.79787 3.25678L12.6323 11.0499C12.7054 11.2394 12.8333 11.4068 13.0312 11.3336C13.2388 11.2605 13.2239 11.0515 13.1507 10.8621L12.0815 7.92006C12.3767 7.67094 12.7409 7.44975 13.0487 7.33461C13.9021 7.02758 14.5936 7.39184 14.9558 8.37582L15.7039 10.4299C15.8141 10.7311 15.9609 10.777 16.1035 10.7227C16.2267 10.6782 16.3326 10.5432 16.2224 10.242L15.3839 7.93237C15.6791 7.68324 16.0434 7.47114 16.3511 7.356C17.2045 7.04897 17.896 7.40414 18.2582 8.38813L18.7756 9.81967C18.8858 10.1299 19.0325 10.1758 19.1752 10.1215C19.3075 10.0763 19.4049 9.94203 19.2941 9.63178L18.6954 7.98871C20.2656 7.4144 21.5375 8.35688 22.4146 10.7571L23.1686 12.8419C24.9802 17.801 22.8737 21.2585 19.0348 22.6528Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
