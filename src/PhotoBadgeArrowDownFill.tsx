import React from 'react'

export default function PhotoBadgeArrowDownFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.9274 28.9115' className={className}>
      <path
        d='M35.3055 6.65499L35.3055 15.2149C35.2295 15.2044 35.1513 15.203 35.0728 15.203C33.3625 15.203 31.7878 15.8469 30.5845 16.9078L28.0908 14.7005C27.3659 14.0614 26.579 13.714 25.8305 13.714C25.1637 13.714 24.3963 14.0608 23.6609 14.681L17.5811 19.8942L15.3072 17.7996C14.7045 17.2457 14.06 16.9548 13.4545 16.9548C12.8881 16.9548 12.2735 17.2457 11.6799 17.7619L6.763 21.914L6.763 22.3907C6.763 23.999 7.73497 24.9522 9.32442 24.9522L28.8779 24.9522C28.9475 25.1172 29.0301 25.2752 29.1227 25.4267L9.43272 25.4267C7.35821 25.4267 6.25147 24.3213 6.25147 22.2391L6.25147 6.65499C6.25147 4.57276 7.35821 3.4667 9.43272 3.4667L32.1235 3.4667C34.1987 3.4667 35.3055 4.60977 35.3055 6.65499ZM11.5669 11.5937C11.5669 13.2293 12.8991 14.5615 14.5257 14.5615C16.1425 14.5615 17.474 13.2293 17.474 11.5937C17.474 9.97755 16.1425 8.63487 14.5257 8.63487C12.8991 8.63487 11.5669 9.97755 11.5669 11.5937Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M41.0369 22.0576C41.0369 25.333 38.3377 28.0211 35.0728 28.0211C31.8155 28.0211 29.1184 25.3344 29.1184 22.0576C29.1184 18.7997 31.8155 16.0935 35.0728 16.0935C38.3488 16.0935 41.0369 18.7815 41.0369 22.0576ZM34.6945 18.3168L34.6945 22.8083L34.7266 24.7137L32.6156 22.6118L32.0598 22.0183C31.9866 21.9451 31.8821 21.8922 31.7686 21.8838C31.5232 21.8838 31.3463 22.0489 31.3477 22.2949C31.3483 22.465 31.4265 22.5493 31.6029 22.7244L34.7997 25.9082C34.8958 26.0127 35.0066 26.0447 35.0923 26.0447C35.2149 26.0447 35.2979 25.9841 35.366 25.9082L38.5628 22.7244C38.7399 22.5493 38.8181 22.4462 38.8181 22.2949C38.8181 22.0489 38.6613 21.8915 38.4153 21.8838C38.2927 21.8845 38.1707 21.9451 38.1157 22.0183L37.5494 22.6118L35.4587 24.7137L35.4712 22.8083L35.4712 18.3168C35.4712 18.1078 35.3117 17.9302 35.0923 17.9302C34.8729 17.9302 34.6945 18.1078 34.6945 18.3168Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
