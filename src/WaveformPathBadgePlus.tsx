import React from 'react'

export function WaveformPathBadgePlus({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 37.5756 28.3752' className={className}>
      <path
        d='M18.8855 0.722062L21.0658 25.2977L23.2003 6.52763C23.2435 6.19003 23.7217 6.18866 23.7571 6.50878L25.9486 21.103L28.0727 10.8574C28.129 10.57 28.5697 10.5518 28.6372 10.8392L29.7911 15.4544L34.0519 15.4544C34.2 15.4544 34.3148 15.5971 34.3148 15.718C34.3148 15.8473 34.2 15.9886 34.0519 15.9886L29.5655 15.9886C29.436 15.9886 29.3086 15.8973 29.2843 15.7811L28.3882 12.2164L26.1881 22.7605C26.1227 23.0899 25.6751 23.0899 25.6319 22.7605L23.5184 8.71134L21.3157 28.0722C21.2726 28.4391 20.7818 28.4202 20.7589 28.0722L18.6112 3.92678L16.4538 28.128C16.4309 28.4572 15.9408 28.4579 15.8977 28.128L13.695 8.71134L12.718 15.2365C12.5809 14.9946 12.4232 14.7663 12.2477 14.5523L13.4556 6.50878C13.5099 6.1705 13.9693 6.1705 14.0124 6.52763L16.1476 25.2977L18.3273 0.722062C18.36 0.373327 18.8534 0.373327 18.8855 0.722062ZM9.14006 10.8951L9.45758 12.4211C9.07822 12.2606 8.68083 12.1359 8.26958 12.0503L8.55734 10.8951C8.64298 10.5462 9.06623 10.5462 9.14006 10.8951Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 18.7534C12.809 22.0288 10.1098 24.7176 6.85391 24.7176C3.5876 24.7176 0.890435 22.0302 0.890435 18.7534C0.890435 15.4962 3.5876 12.7893 6.85391 12.7893C10.13 12.7893 12.809 15.4773 12.809 18.7534ZM6.396 15.3275L6.396 18.2955L3.40987 18.2955C3.17159 18.2955 2.95128 18.46 2.95128 18.7534C2.95128 19.0476 3.17159 19.212 3.40987 19.212L6.396 19.212L6.396 22.1981C6.396 22.4546 6.56046 22.6567 6.85391 22.6567C7.13897 22.6567 7.30343 22.4546 7.30343 22.1981L7.30343 19.212L10.2798 19.212C10.5369 19.212 10.7293 19.0476 10.7293 18.7534C10.7293 18.46 10.5369 18.2955 10.2798 18.2955L7.30343 18.2955L7.30343 15.3275C7.30343 15.0899 7.13897 14.8696 6.85391 14.8696C6.56046 14.8696 6.396 15.0899 6.396 15.3275Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
