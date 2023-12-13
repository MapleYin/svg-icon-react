import React from 'react'

export function CarWindowLeftExclamationmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.0329 21.3092' className={className}>
      <path
        d='M27.8593 17.9649C28.2968 17.9649 28.6716 17.5733 28.6716 17.1469C28.6716 16.6821 28.2975 16.3282 27.8593 16.3282C27.4016 16.3282 27.0463 16.6821 27.0463 17.1469C27.0463 17.5733 27.412 17.9649 27.8593 17.9649ZM27.8593 13.143C27.9954 13.143 28.1122 13.0255 28.1045 12.888L28.1377 3.59415C28.13 3.41914 28.0259 3.31504 27.8593 3.31504C27.692 3.31504 27.5788 3.41914 27.5802 3.59415L27.6043 12.888C27.6057 13.0255 27.7225 13.143 27.8593 13.143Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M19.8891 21.3092C22.1319 21.3092 23.0892 20.3805 23.0892 18.1768L23.0892 10.6786C23.0892 9.37062 22.6924 8.79913 21.9008 8.19288L12.981 1.41494C11.6986 0.441504 10.6205 0.0474608 9.1962 0.0474608L2.65968 0.0474608C1.0041 0.0474608 0 1.05088 0 2.71417L0 18.1768C0 20.3805 0.948244 21.3092 3.2001 21.3092ZM21.3034 10.3048L2.69874 10.3048C1.39835 10.3048 0.511533 9.41026 0.511533 8.1169L0.511533 2.73848C0.511533 1.3795 1.32364 0.558994 2.69874 0.558994L9.1962 0.558994C10.5226 0.558994 11.4042 0.832431 12.7082 1.821L21.808 8.78712C22.482 9.29718 22.207 10.3048 21.3034 10.3048Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
