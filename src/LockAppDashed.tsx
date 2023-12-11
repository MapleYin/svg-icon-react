import React from 'react'

export default function LockAppDashed({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.9637 21.6625' className={className}>
      <path
        d='M1.27207 1.33906C0.363573 2.2378 0 3.44952 0 5.84112L0 6.40039L0.511533 6.40039L0.511533 5.85518C0.511533 3.79024 0.861923 2.49776 1.64181 1.70811C2.43077 0.900301 3.76163 0.558994 5.79864 0.558994L6.52119 0.558994L6.52119 0.0474608L5.79366 0.0474608C3.41251 0.0474608 2.17217 0.429882 1.27207 1.33906ZM7.41094 0.558994L14.1914 0.558994L14.1914 0.0474608L7.41094 0.0474608ZM20.3491 1.32022C19.4302 0.411034 18.2178 0.0474608 15.632 0.0474608L15.0812 0.0474608L15.0812 0.558994L15.9713 0.558994C17.8777 0.558994 19.1527 0.928231 19.9515 1.71788C20.7411 2.51661 21.0908 3.76231 21.0908 5.67852L21.0908 6.40039L21.6024 6.40039L21.6024 6.01778C21.6024 3.41251 21.2576 2.20078 20.3491 1.32022ZM21.0908 14.4282L21.6024 14.4282L21.6024 7.29083L21.0908 7.29083ZM20.3491 20.3988C21.2576 19.4903 21.6024 18.2975 21.6024 15.6922L21.6024 15.3187L21.0908 15.3187L21.0908 16.0315C21.0908 17.9567 20.7223 19.2024 19.9515 19.9921C19.1527 20.7999 17.8777 21.151 15.9713 21.151L15.0812 21.151L15.0812 21.6625L15.632 21.6625C18.2178 21.6625 19.449 21.2989 20.3491 20.3988ZM7.41094 21.6625L14.1914 21.6625L14.1914 21.151L7.41094 21.151ZM1.25322 20.3988C2.17217 21.2989 3.38458 21.6625 5.97032 21.6625L6.52119 21.6625L6.52119 21.151L5.63106 21.151C3.72462 21.151 2.44962 20.7817 1.65089 19.9921C0.861923 19.2024 0.511533 17.9567 0.511533 16.0315L0.511533 15.3187L0 15.3187L0 15.6922C0 18.2975 0.344726 19.5092 1.25322 20.3988ZM0 14.4282L0.511533 14.4282L0.511533 7.29083L0 7.29083Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.18614 15.9354C6.18614 16.993 6.66124 17.4415 7.61348 17.4415L13.9993 17.4415C14.9606 17.4415 15.426 16.993 15.426 15.9354L15.426 10.6023C15.426 9.53966 14.9543 9.08135 13.9907 9.0877L13.9907 7.17032C13.9907 5.15968 12.7053 3.82764 10.8109 3.82764C8.90752 3.82764 7.63116 5.15968 7.63116 7.17032L7.63116 9.0877C6.6585 9.08135 6.18614 9.53966 6.18614 10.6023ZM8.21202 9.08702L8.21202 7.18097C8.21202 5.51222 9.25577 4.40714 10.8109 4.40714C12.357 4.40714 13.4092 5.51222 13.4092 7.18097L13.4092 9.08702Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}