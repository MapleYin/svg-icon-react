import React from 'react'

export default function CarRearRoadLaneDashed({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.4234 17.5668' className={className}>
      <path
        d='M7.49357 2.07852L7.86819 2.07852C8.01067 2.07852 8.06975 2.02921 8.12679 1.88243L8.84173 0.136625C8.87923 0.0568378 8.81311 0 8.73264 0L8.39075 0C8.29279 0 8.22189 0.0116223 8.19211 0.106839L7.35314 1.85538C7.30451 1.96036 7.38947 2.07852 7.49357 2.07852ZM4.61691 8.16906L5.42395 8.16906C5.5217 8.16906 5.59602 8.12111 5.64534 8.01632L6.58264 5.717C6.62014 5.61836 6.57649 5.51973 6.45696 5.51973L5.75031 5.51973C5.67121 5.51973 5.59552 5.5502 5.54689 5.65587L4.46329 7.90138C4.40353 8.04816 4.47579 8.16906 4.61691 8.16906ZM0.281757 17.5591L1.44397 17.5591C1.68958 17.5591 1.8302 17.4736 1.9347 17.2124L3.99241 12.1082C4.05217 11.9476 3.94856 11.7876 3.7761 11.7876L2.91183 11.7876C2.70119 11.7876 2.56827 11.8696 2.48829 12.0471L0.0474759 17.1201C-0.0638536 17.3505 0.023159 17.5591 0.281757 17.5591ZM25.1946 2.07852L25.5594 2.07852C25.6726 2.07852 25.7576 1.96036 25.7089 1.85538L24.87 0.106839C24.8311 0.0116223 24.77 0 24.6713 0L24.3294 0C24.2489 0 24.1738 0.0568378 24.2113 0.136625L24.9353 1.88243C24.9832 2.02921 25.0514 2.07852 25.1946 2.07852ZM27.6388 8.16906L28.4361 8.16906C28.5779 8.16906 28.6592 8.04816 28.5897 7.90138L27.5159 5.65587C27.4581 5.5502 27.3915 5.51973 27.3117 5.51973L26.596 5.51973C26.4856 5.51973 26.4419 5.61836 26.4794 5.717L27.4167 8.01632C27.466 8.12111 27.5404 8.16906 27.6388 8.16906ZM31.6097 17.5591L32.781 17.5591C33.0389 17.5591 33.1168 17.3505 33.0062 17.1201L30.5745 12.0471C30.4945 11.8696 30.3518 11.7876 30.1502 11.7876L29.2776 11.7876C29.1135 11.7876 29.0015 11.9476 29.0697 12.1082L31.1274 17.2124C31.2319 17.4736 31.3732 17.5591 31.6097 17.5591Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.05363 13.8955C9.05363 14.3475 9.40725 14.7102 9.85989 14.7102L10.595 14.7102C11.0477 14.7102 11.4097 14.3565 11.4097 13.8955L11.4097 13.2046L21.6442 13.2046L21.6442 13.8955C21.6442 14.3565 22.0069 14.7102 22.4588 14.7102L23.1947 14.7102C23.6466 14.7102 24.0093 14.3565 24.0093 13.8955L24.0093 10.0954C24.0093 8.88018 23.6784 8.34395 23.2149 7.71143L22.6241 6.93291L21.8477 4.75567C21.4668 3.68008 20.872 3.23018 19.9897 3.13184C19.5223 3.06484 17.9743 3.03486 16.5315 3.03486C15.0795 3.03486 13.5316 3.06484 13.0642 3.13184C12.1825 3.23018 11.5877 3.68008 11.2062 4.75567L10.4297 6.93291L9.83899 7.71143C9.37541 8.34395 9.05363 8.88018 9.05363 10.0954ZM11.7593 6.47471C11.5201 6.47471 11.412 6.26826 11.5006 6.00254L11.9115 4.85381C12.169 4.11827 12.5416 3.78809 13.2186 3.71065C13.7607 3.64297 14.6914 3.61231 16.5315 3.61231C18.3624 3.61231 19.2925 3.64297 19.8346 3.71065C20.5206 3.78809 20.8849 4.11827 21.1424 4.85381L21.5532 6.00254C21.6418 6.26826 21.5337 6.47471 21.2946 6.47471ZM11.0614 10.7375C10.7615 10.7375 10.5419 10.527 10.5419 10.2271L10.5419 9.09981C10.5419 8.8 10.7615 8.58945 11.0614 8.58945C11.3612 8.58945 11.5808 8.8 11.5808 9.09981L11.5808 10.2271C11.5808 10.527 11.3612 10.7375 11.0614 10.7375ZM14.9249 10.5074C14.6948 10.5074 14.5631 10.3659 14.5631 10.1247L14.5631 9.1834C14.5631 8.95195 14.6948 8.81113 14.9249 8.81113L18.0445 8.81113C18.2752 8.81113 18.4076 8.95195 18.4076 9.1834L18.4076 10.1247C18.4076 10.3659 18.2752 10.5074 18.0445 10.5074ZM21.9868 10.7375C21.6975 10.7375 21.4772 10.5172 21.4772 10.2271L21.4772 9.09981C21.4772 8.80908 21.6975 8.58945 21.9868 8.58945C22.2873 8.58945 22.507 8.8 22.507 9.09981L22.507 10.2271C22.507 10.527 22.2873 10.7375 21.9868 10.7375Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
