import React from 'react'

export default function AlignHorizontalRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.8173 26.3344' className={className}>
      <path
        d='M19.8084 11.4995C20.707 11.4995 21.3358 10.8715 21.3358 9.97491L21.3358 4.46642C21.3358 3.56983 20.707 2.9418 19.8084 2.9418L9.47677 2.9418C8.58722 2.9418 7.9585 3.56983 7.9585 4.46642L7.9585 9.97491C7.9585 10.8715 8.58722 11.4995 9.47677 11.4995ZM19.7784 10.9767L9.50675 10.9767C8.89855 10.9767 8.48136 10.5504 8.48136 9.94082L8.48136 4.49142C8.48136 3.89093 8.89855 3.46466 9.50675 3.46466L19.7784 3.46466C20.3866 3.46466 20.8129 3.89093 20.8129 4.49142L20.8129 9.94082C20.8129 10.5504 20.3866 10.9767 19.7784 10.9767ZM19.8084 23.3451C20.707 23.3451 21.3358 22.7171 21.3358 21.8114L21.3358 16.312C21.3358 15.4154 20.707 14.7874 19.8084 14.7874L1.51827 14.7874C0.628713 14.7874 0 15.4154 0 16.312L0 21.8114C0 22.7171 0.628713 23.3451 1.51827 23.3451ZM19.7784 22.8223L1.55665 22.8223C0.949129 22.8223 0.52286 22.396 0.52286 21.7871L0.52286 16.337C0.52286 15.7365 0.949129 15.3103 1.55665 15.3103L19.7784 15.3103C20.3866 15.3103 20.8129 15.7365 20.8129 16.337L20.8129 21.7871C20.8129 22.396 20.3866 22.8223 19.7784 22.8223Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M24.1917 26.3344C24.3392 26.3344 24.456 26.2112 24.456 26.0638L24.456 0.287406C24.456 0.139943 24.3392 0.0167966 24.1917 0.0167966C24.0436 0.0167966 23.9268 0.139943 23.9268 0.287406L23.9268 26.0638C23.9268 26.2112 24.0436 26.3344 24.1917 26.3344Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}