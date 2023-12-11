import React from 'react'

export default function FigureWalkMotion({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.5246 25.7543' className={className}>
      <path
        d='M6.0291 2.97364L12.1905 2.97364C12.3632 2.97364 12.4654 2.85118 12.4654 2.70577C12.4654 2.53243 12.3632 2.42881 12.1905 2.42881L6.0291 2.42881C5.84736 2.42881 5.73534 2.53243 5.73534 2.70577C5.73534 2.85118 5.84736 2.97364 6.0291 2.97364ZM0.293069 9.07062L9.32188 9.07062C9.48545 9.07062 9.59746 8.94816 9.59746 8.79366C9.59746 8.6294 9.48545 8.52579 9.32188 8.52579L0.293069 8.52579C0.11133 8.52579 0 8.63008 0 8.79366C0 8.94747 0.11133 9.07062 0.293069 9.07062ZM3.63868 15.1585L8.97764 15.1585C9.14122 15.1585 9.25254 15.0549 9.25254 14.8906C9.25254 14.7173 9.12237 14.6137 8.97764 14.6137L3.63868 14.6137C3.44786 14.6137 3.34492 14.7361 3.34492 14.8906C3.34492 15.0549 3.44786 15.1585 3.63868 15.1585ZM0.604692 21.2605L7.71123 21.2605C7.88389 21.2605 7.98614 21.1568 7.98614 20.9835C7.98614 20.8192 7.86504 20.7156 7.71123 20.7156L0.604692 20.7156C0.413186 20.7156 0.310938 20.8381 0.310938 20.9835C0.310938 21.1568 0.413186 21.2605 0.604692 21.2605Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.4971 24.8953L17.9732 20.7426C18.3073 20.3304 18.375 20.2509 18.5033 19.8198L18.8508 18.7027L17.087 16.4947L16.4529 19.3735L13.0074 23.4663C11.9731 24.6986 13.6588 25.9101 14.4971 24.8953ZM23.0991 24.5606C23.7791 25.9212 25.8086 25.0836 25.07 23.5862L22.6854 18.8044C22.5264 18.4683 22.2718 18.1035 22.0276 17.7526L20.5169 15.5953L20.6243 15.2354C21.0086 14.0371 21.1837 13.3201 21.2625 12.1596L21.5073 8.80264C21.6161 7.1754 20.6368 6.06934 19.1179 6.06934C17.9183 6.06934 17.112 6.66914 15.9926 7.76905L14.2161 9.53438C13.7008 10.049 13.4685 10.4828 13.4099 11.2473L13.2027 13.996C13.1532 14.6649 13.4998 15.1091 14.101 15.1202C14.721 15.1691 15.0683 14.8232 15.1359 14.1236L15.3919 11.0826L16.2729 10.2986C16.5867 10.0148 17.1093 10.1731 17.0807 10.5791L16.8847 13.1123C16.7954 14.3894 17.0814 14.9801 17.9553 16.08L20.3023 19.0156C20.5562 19.3197 20.5764 19.4467 20.6656 19.642ZM27.0607 10.6043L24.3621 10.6043L22.4619 8.48995L22.2841 11.122L23.2372 12.0751C23.6104 12.4392 23.9067 12.548 24.5756 12.548L27.0607 12.548C27.7302 12.548 28.1633 12.1728 28.1633 11.5709C28.1633 10.9795 27.7295 10.6043 27.0607 10.6043ZM20.3398 4.94493C21.7061 4.94493 22.8073 3.84434 22.8073 2.47735C22.8073 1.10127 21.7061 0 20.3398 0C18.9728 0 17.8715 1.10127 17.8715 2.47735C17.8715 3.84434 18.9728 4.94493 20.3398 4.94493Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}