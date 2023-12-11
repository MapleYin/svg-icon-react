import React from 'react'

export default function ArrowtriangleUpArrowtriangleDownWindowLeft({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.4505 21.3092' className={className}>
      <path
        d='M12.981 1.41494L21.9008 8.19288C22.6924 8.79913 23.0892 9.37062 23.0892 10.6786L23.0892 18.1768C23.0892 20.3805 22.1319 21.3092 19.8891 21.3092L3.2001 21.3092C0.948244 21.3092 0 20.3805 0 18.1768L0 2.71417C0 1.05088 1.0041 0.0474608 2.65968 0.0474608L9.1962 0.0474608C10.6205 0.0474608 11.6986 0.441504 12.981 1.41494ZM4.35099 12.013C3.95372 12.013 3.86192 12.3664 4.02139 12.6304L6.81094 17.1861C6.98721 17.4851 7.39425 17.5039 7.59845 17.1861L10.3503 12.6485C10.5098 12.3846 10.4103 12.013 10.0214 12.013ZM2.69874 0.558994C1.32364 0.558994 0.511533 1.3795 0.511533 2.73848L0.511533 8.1169C0.511533 9.41026 1.39835 10.3048 2.69874 10.3048L21.3034 10.3048C22.207 10.3048 22.482 9.29718 21.808 8.78712L12.7082 1.821C11.4042 0.832431 10.5226 0.558994 9.1962 0.558994Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.59845 3.19239L10.3503 7.72999C10.5098 7.99395 10.4103 8.36554 10.0214 8.36554L4.35099 8.36554C3.95372 8.36554 3.86192 8.01212 4.02139 7.74815L6.81094 3.19239C6.98721 2.89346 7.39425 2.87461 7.59845 3.19239Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
