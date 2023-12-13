import React from 'react'

export function CameraOnRectangleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.3158 25.5989' className={className}>
      <path
        d='M25.3355 4.12481L25.3355 5.51573C25.2658 5.4513 25.1871 5.37779 25.0977 5.29454L24.291 4.5131C23.3976 3.6798 22.6174 3.3382 21.2538 3.3382L16.7822 3.3382C15.408 3.3382 14.6369 3.69181 13.7471 4.51105L12.9454 5.29591C12.1511 6.03507 12.2003 6.00489 11.5869 6.00489L9.80099 6.00489C7.23877 6.00489 5.7293 7.52209 5.7293 10.0829L5.7293 19.9839L3.71036 19.9839C1.64424 19.9839 0.528423 18.8688 0.528423 16.7956L0.528423 4.12481C0.528423 2.05235 1.64424 0.937212 3.71036 0.937212L22.1535 0.937212C24.2196 0.937212 25.3355 2.05235 25.3355 4.12481Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.80099 24.7091L28.2351 24.7091C30.3103 24.7091 31.417 23.603 31.417 21.5208L31.417 10.0829C31.417 8.00978 30.3103 6.89465 28.2351 6.89465L26.4802 6.89465C25.4226 6.89465 25.1848 6.59377 24.4633 5.90656L23.6661 5.15978C22.9378 4.46574 22.3784 4.22863 21.2538 4.22863L16.7822 4.22863C15.6576 4.22863 15.0996 4.46642 14.3706 5.15978L13.5784 5.90656C12.8569 6.60012 12.6135 6.89465 11.565 6.89465L9.80099 6.89465C7.72579 6.89465 6.61905 8.00978 6.61905 10.0829L6.61905 21.5208C6.61905 23.603 7.72579 24.7091 9.80099 24.7091ZM19.0191 21.7895C15.52 21.7895 12.6942 18.9447 12.6942 15.4276C12.6942 11.9111 15.52 9.06633 19.0191 9.06633C22.5167 9.06633 25.3426 11.9111 25.3426 15.4276C25.3426 18.9447 22.5167 21.7895 19.0191 21.7895ZM27.1403 11.9838C26.5155 11.9838 26.01 11.4873 26.01 10.8534C26.01 10.2196 26.5155 9.72238 27.1403 9.72238C27.7742 9.72238 28.2714 10.2196 28.2714 10.8534C28.2714 11.4873 27.7742 11.9838 27.1403 11.9838ZM19.0191 21.2464C22.2156 21.2464 24.8086 18.6437 24.8086 15.4276C24.8086 12.2121 22.2156 9.6094 19.0191 9.6094C15.8211 9.6094 13.2281 12.2121 13.2281 15.4276C13.2281 18.6437 15.8211 21.2464 19.0191 21.2464Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
