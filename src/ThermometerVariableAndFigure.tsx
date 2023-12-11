import React from 'react'

export default function ThermometerVariableAndFigure({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.2109 27.6125' className={className}>
      <path
        d='M12.8812 16.4535C12.8812 16.9954 13.3143 17.4292 13.838 17.4292C14.3799 17.4292 14.8039 16.9954 14.8039 16.4535L14.8039 11.9869C14.8039 11.8175 14.9434 11.678 15.1128 11.678C15.2913 11.678 15.4308 11.8175 15.4308 11.9869L15.4308 25.689C15.4308 26.2713 15.9043 26.7448 16.4957 26.7448C17.078 26.7448 17.56 26.2713 17.56 25.689L17.56 17.2877C17.56 17.1183 17.7001 16.9781 17.8695 16.9781C18.039 16.9781 18.1791 17.1183 18.1791 17.2877L18.1791 25.689C18.1791 26.2713 18.6527 26.7448 19.2441 26.7448C19.8264 26.7448 20.3083 26.2713 20.3083 25.689L20.3083 11.9869C20.3083 11.8175 20.4478 11.678 20.6172 11.678C20.7957 11.678 20.9352 11.8175 20.9352 11.9869L20.9352 16.4535C20.9352 16.9954 21.3599 17.4292 21.9018 17.4292C22.4248 17.4292 22.8495 16.9954 22.8495 16.4535L22.8495 11.4757C22.8495 8.95927 21.0201 7.28886 18.5759 7.28886L17.1639 7.28886C14.719 7.28886 12.8812 8.95927 12.8812 11.4757ZM17.8695 5.84287C19.2365 5.84287 20.3378 4.74228 20.3378 3.37529C20.3378 1.99921 19.2365 0.897941 17.8695 0.897941C16.4942 0.897941 15.402 1.99921 15.402 3.37529C15.402 4.74228 16.4942 5.84287 17.8695 5.84287Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.91084 27.5832C9.19307 27.5832 11.8196 24.9378 11.8196 21.6919C11.8196 19.935 11.0936 18.4019 9.55265 17.1919C9.15069 16.8835 9.07325 16.6539 9.07325 16.0894L9.07325 3.33936C9.07325 1.38838 7.75733 0 5.91084 0C4.05391 0 2.74639 1.38838 2.74639 3.33936L2.74639 16.0894C2.74639 16.6539 2.66055 16.8835 2.26699 17.1919C0.716993 18.4019 0 19.935 0 21.6919C0 24.9378 2.62656 27.5832 5.91084 27.5832ZM5.91084 27.1015C2.93399 27.1015 0.492196 24.6681 0.492196 21.6919C0.492196 20.0735 1.1422 18.6107 2.59952 17.5475C3.07325 17.2007 3.25675 16.7722 3.25675 16.1813L3.25675 3.33438C3.25675 1.68311 4.35567 0.51036 5.91084 0.51036C7.46397 0.51036 8.56289 1.68311 8.56289 3.33438L8.56289 16.1813C8.56289 16.7722 8.73731 17.2007 9.21104 17.5475C10.6684 18.6107 11.3184 20.0735 11.3184 21.6919C11.3184 24.6681 8.88633 27.1015 5.91084 27.1015Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.91016 4.39698C6.49903 4.39698 6.97276 3.92393 6.97276 3.33438C6.97276 2.74552 6.49903 2.27247 5.91016 2.27247C5.32061 2.27247 4.84756 2.74552 4.84756 3.33438C4.84756 3.92393 5.32061 4.39698 5.91016 4.39698ZM5.91016 7.05723C6.49903 7.05723 6.97276 6.58418 6.97276 5.99532C6.97276 5.40577 6.49903 4.93272 5.91016 4.93272C5.32061 4.93272 4.84756 5.40577 4.84756 5.99532C4.84756 6.58418 5.32061 7.05723 5.91016 7.05723ZM5.91016 9.69092C6.49903 9.69092 6.97276 9.21719 6.97276 8.62832C6.97276 8.03946 6.49903 7.56573 5.91016 7.56573C5.32061 7.56573 4.84756 8.03946 4.84756 8.62832C4.84756 9.21719 5.32061 9.69092 5.91016 9.69092ZM5.91016 12.3519C6.49903 12.3519 6.97276 11.8781 6.97276 11.2893C6.97276 10.7004 6.49903 10.2267 5.91016 10.2267C5.32061 10.2267 4.84756 10.7004 4.84756 11.2893C4.84756 11.8781 5.32061 12.3519 5.91016 12.3519ZM5.91016 25.4204C7.96768 25.4204 9.61982 23.7683 9.61982 21.6912C9.61982 20.2519 8.81748 19.0546 7.62022 18.426C7.13672 18.165 6.97276 17.9627 6.97276 17.228L6.97276 13.932C6.97276 13.3425 6.49903 12.8694 5.91016 12.8694C5.32061 12.8694 4.84756 13.3425 4.84756 13.932L4.84756 17.228C4.84756 17.9627 4.68292 18.165 4.19034 18.426C3.00216 19.0546 2.19981 20.2519 2.19981 21.6912C2.19981 23.7683 3.85196 25.4204 5.91016 25.4204Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
