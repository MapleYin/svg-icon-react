import React from 'react'

export default function CarRearRoadLane({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.4159 17.5668' className={className}>
      <path
        d='M0.27767 17.5591L1.43988 17.5591C1.68549 17.5591 1.8268 17.4736 1.93061 17.2124L8.83832 0.136625C8.87582 0.0568378 8.80903 0 8.72924 0L8.38734 0C8.27962 0 8.22689 0.0116223 8.1887 0.106839L0.0433884 17.1201C-0.0588592 17.3505 0.0197552 17.5591 0.27767 17.5591ZM31.6056 17.5591L32.7769 17.5591C33.0355 17.5591 33.1141 17.3505 33.0021 17.1201L24.8582 0.106839C24.8277 0.0116223 24.7659 0 24.6679 0L24.326 0C24.2455 0 24.1697 0.0568378 24.2078 0.136625L31.124 17.2124C31.2278 17.4736 31.36 17.5591 31.6056 17.5591Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.04955 13.8955C9.04955 14.3475 9.40316 14.7102 9.8642 14.7102L10.591 14.7102C11.0429 14.7102 11.4056 14.3565 11.4056 13.8955L11.4056 13.2046L21.6485 13.2046L21.6485 13.8955C21.6485 14.3565 22.0021 14.7102 22.4547 14.7102L23.1899 14.7102C23.6425 14.7102 24.0045 14.3565 24.0045 13.8955L24.0045 10.0954C24.0045 8.88018 23.6828 8.34395 23.2108 7.71143L22.6201 6.93291L21.8429 4.75567C21.4621 3.68008 20.8672 3.23018 19.9856 3.13184C19.5182 3.06484 17.9703 3.03486 16.5274 3.03486C15.0838 3.03486 13.5268 3.06484 13.0685 3.13184C12.1778 3.23018 11.5829 3.68008 11.2021 4.75567L10.4249 6.93291L9.83422 7.71143C9.37132 8.34395 9.04955 8.88018 9.04955 10.0954ZM11.7545 6.47471C11.5154 6.47471 11.4079 6.26826 11.4965 6.00254L11.9067 4.85381C12.1642 4.11827 12.5375 3.78809 13.2145 3.71065C13.7657 3.64297 14.6867 3.61231 16.5274 3.61231C18.3583 3.61231 19.2884 3.64297 19.8305 3.71065C20.5165 3.78809 20.8801 4.11827 21.1376 4.85381L21.5485 6.00254C21.6461 6.26826 21.5289 6.47471 21.2898 6.47471ZM11.0573 10.7375C10.7568 10.7375 10.5371 10.527 10.5371 10.2271L10.5371 9.09981C10.5371 8.8 10.7568 8.58945 11.0573 8.58945C11.3564 8.58945 11.576 8.8 11.576 9.09981L11.576 10.2271C11.576 10.527 11.3564 10.7375 11.0573 10.7375ZM14.9208 10.5074C14.6901 10.5074 14.5583 10.3659 14.5583 10.1247L14.5583 9.1834C14.5583 8.95195 14.6901 8.81113 14.9208 8.81113L18.0397 8.81113C18.2704 8.81113 18.4029 8.95195 18.4029 9.1834L18.4029 10.1247C18.4029 10.3659 18.2704 10.5074 18.0397 10.5074ZM21.9828 10.7375C21.6927 10.7375 21.4724 10.5172 21.4724 10.2271L21.4724 9.09981C21.4724 8.80908 21.6927 8.58945 21.9828 8.58945C22.2916 8.58945 22.5022 8.8 22.5022 9.09981L22.5022 10.2271C22.5022 10.527 22.2916 10.7375 21.9828 10.7375Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}