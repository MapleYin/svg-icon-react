import React from 'react'

export function FanBadgeAutomatic({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.5888 28.9856' className={className}>
      <path
        d='M15.8016 4.70225L15.8016 10.3714C16.0626 10.3184 16.3326 10.2915 16.6085 10.2915C16.7776 10.2915 16.9444 10.3015 17.1074 10.3238C17.9147 5.36525 19.6054 3.22217 22.4037 3.22217C26.1337 3.22217 29.4082 6.92549 29.4082 10.8022C29.4082 12.6153 28.2854 13.6894 26.4039 13.6894L20.7421 13.6894C20.7957 13.9533 20.8231 14.2266 20.8231 14.5061C20.8231 14.6721 20.8133 14.8359 20.7918 14.9962C22.0872 15.2077 23.187 15.4794 24.1012 15.8166C23.8791 15.9102 23.663 16.0159 23.4545 16.1338C22.668 15.8757 21.7521 15.6624 20.7008 15.4923C20.3539 16.9414 19.2485 18.101 17.8282 18.5295L17.8859 18.5359L17.8859 24.3015C17.8859 25.8371 18.8003 26.7809 20.3123 26.7809C20.7516 26.7809 21.1889 26.7363 21.618 26.6502C21.7462 26.8058 21.886 26.9508 22.036 27.0852C21.4747 27.2322 20.8955 27.3065 20.3123 27.3065C18.4992 27.3065 17.4252 26.1738 17.4252 24.3015L17.4252 18.6299C17.1613 18.6835 16.888 18.7109 16.6085 18.7109C16.4426 18.7109 16.2788 18.7011 16.1185 18.6796C15.3024 23.6379 13.6117 25.79 10.8231 25.79C7.09308 25.79 3.80949 22.0873 3.80949 18.2008C3.80949 16.3975 4.94074 15.313 6.8131 15.313L12.4749 15.313C12.4217 15.0521 12.3946 14.7821 12.3946 14.5061C12.3946 14.3372 12.4047 14.1706 12.427 14.0077C7.47675 13.1911 5.3253 11.5099 5.3253 8.71153C5.3253 4.98155 9.02794 1.69795 12.9047 1.69727C14.7178 1.69727 15.8016 2.8292 15.8016 4.70225ZM12.5793 15.7827L6.8131 15.7827C5.27814 15.7827 4.33371 16.6979 4.33371 18.2008C4.33371 21.7967 7.32785 25.265 10.8231 25.265C13.3222 25.265 14.874 23.1863 15.6162 18.5872C14.1768 18.241 13.0201 17.1484 12.5833 15.7463ZM12.9482 14.4879C12.9482 16.5016 14.6137 18.1482 16.6085 18.1482C18.6131 18.1482 20.3072 16.5016 20.3072 14.4879C20.3072 12.4645 18.6131 10.7892 16.6085 10.7892C14.5948 10.7892 12.9482 12.4833 12.9482 14.4879ZM18.4152 14.4879C18.4152 15.484 17.6235 16.2478 16.6085 16.2478C15.6117 16.2478 14.848 15.4847 14.848 14.4879C14.848 13.4723 15.6117 12.6806 16.6085 12.6806C17.6046 12.6806 18.4152 13.4918 18.4152 14.4879ZM5.84953 8.71153C5.84953 11.209 7.92544 12.7603 12.5186 13.5117C12.8679 12.0618 13.9745 10.9035 15.3889 10.474L15.3325 10.4678L15.3325 4.70225C15.3325 3.16661 14.4167 2.2215 12.9047 2.2215C9.31789 2.2215 5.84953 5.21632 5.84953 8.71153ZM17.6019 10.4147C19.052 10.7623 20.2102 11.8649 20.6402 13.2812L20.6468 13.2203L26.4039 13.2203C27.9487 13.2203 28.8931 12.3059 28.8931 10.8022C28.8931 7.20704 25.8989 3.738 22.4037 3.738C19.8959 3.738 18.3441 5.81624 17.6019 10.4147Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M32.6991 22.1316C32.6991 25.407 29.9992 28.0867 26.744 28.0867C23.4777 28.0867 20.7798 25.3993 20.7798 22.1316C20.7798 18.8653 23.4777 16.1675 26.744 16.1675C30.02 16.1675 32.6991 18.8556 32.6991 22.1316ZM26.2835 18.2198L23.6791 25.0806C23.6673 25.1174 23.6562 25.1801 23.6562 25.2532C23.6562 25.4602 23.8199 25.6135 24.0646 25.6135C24.2415 25.6135 24.3746 25.539 24.4464 25.332L25.2231 23.1962L28.2676 23.1962L29.0443 25.332C29.116 25.539 29.2582 25.6135 29.4533 25.6135C29.6707 25.6135 29.8436 25.4413 29.8436 25.2532C29.8436 25.1801 29.8234 25.1174 29.8109 25.0806L27.2072 18.2198C27.1145 17.9822 26.9368 17.8952 26.7544 17.8952C26.5343 17.8952 26.3762 17.9822 26.2835 18.2198ZM27.9503 22.4106L25.5404 22.4106L26.7544 19.2341Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
