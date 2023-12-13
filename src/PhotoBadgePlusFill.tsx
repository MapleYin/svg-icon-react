import React from 'react'

export function PhotoBadgePlusFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.9274 28.9115' className={className}>
      <path
        d='M35.3055 6.65499L35.3055 15.2149C35.2295 15.2044 35.1513 15.203 35.0728 15.203C33.3625 15.203 31.7878 15.8469 30.5845 16.9078L28.0908 14.7005C27.3659 14.0614 26.579 13.714 25.8305 13.714C25.1637 13.714 24.3963 14.0608 23.6609 14.681L17.5811 19.8942L15.3072 17.7996C14.7045 17.2457 14.06 16.9548 13.4545 16.9548C12.8881 16.9548 12.2735 17.2457 11.6799 17.7619L6.763 21.914L6.763 22.3907C6.763 23.999 7.73497 24.9522 9.32442 24.9522L28.8779 24.9522C28.9475 25.1172 29.0301 25.2752 29.1227 25.4267L9.43272 25.4267C7.35821 25.4267 6.25147 24.3213 6.25147 22.2391L6.25147 6.65499C6.25147 4.57276 7.35821 3.4667 9.43272 3.4667L32.1235 3.4667C34.1987 3.4667 35.3055 4.60977 35.3055 6.65499ZM11.5669 11.5937C11.5669 13.2293 12.8991 14.5615 14.5257 14.5615C16.1425 14.5615 17.474 13.2293 17.474 11.5937C17.474 9.97755 16.1425 8.63487 14.5257 8.63487C12.8991 8.63487 11.5669 9.97755 11.5669 11.5937Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M41.0369 22.0576C41.0369 25.333 38.3377 28.0211 35.0728 28.0211C31.8155 28.0211 29.1184 25.3344 29.1184 22.0576C29.1184 18.7997 31.8155 16.0935 35.0728 16.0935C38.3488 16.0935 41.0369 18.7815 41.0369 22.0576ZM34.6239 18.6317L34.6239 21.599L31.6287 21.599C31.3904 21.599 31.1792 21.7635 31.1792 22.0576C31.1792 22.342 31.3904 22.5155 31.6287 22.5155L34.6239 22.5155L34.6239 25.5017C34.6239 25.7588 34.7884 25.9512 35.0728 25.9512C35.3669 25.9512 35.5314 25.7588 35.5314 25.5017L35.5314 22.5155L38.4986 22.5155C38.7558 22.5155 38.9572 22.342 38.9572 22.0576C38.9572 21.7635 38.7558 21.599 38.4986 21.599L35.5314 21.599L35.5314 18.6317C35.5314 18.3935 35.3669 18.1732 35.0728 18.1732C34.7884 18.1732 34.6239 18.3935 34.6239 18.6317Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
