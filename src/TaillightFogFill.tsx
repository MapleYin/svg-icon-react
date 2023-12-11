import React from 'react'

export default function TaillightFogFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.0793 19.9684' className={className}>
      <path
        d='M19.5357 9.97934C19.5552 7.21596 19.3047 5.07543 18.7231 3.0516C18.1262 0.933044 16.5231 0.0507196 14.1481 0.0507196L13.7117 0.0507196C7.01211 0.0507196 0 4.65971 0 9.97934C0 15.2899 7.01211 19.8975 13.7117 19.8975L14.1481 19.8975C16.5147 19.8975 18.1269 19.0159 18.7231 16.9064C19.3047 14.8735 19.5552 12.742 19.5357 9.97934ZM28.4664 5.07113L20.0936 5.07113C20.1102 5.22953 20.1338 5.41655 20.1665 5.57495L28.4664 5.58335C28.5894 5.58335 28.718 5.48334 28.718 5.3227C28.718 5.19906 28.5901 5.07113 28.4664 5.07113ZM28.4664 9.71869L20.4338 9.71869C20.4345 9.91517 20.4345 10.0344 20.4338 10.2302L28.4664 10.2302C28.5901 10.2302 28.718 10.0946 28.718 9.97094C28.718 9.82006 28.5901 9.71869 28.4664 9.71869ZM28.4664 14.3753L20.1665 14.376C20.1338 14.5337 20.1102 14.7194 20.0936 14.8785L28.4664 14.8869C28.5901 14.8869 28.718 14.7505 28.718 14.6269C28.718 14.4669 28.5901 14.3753 28.4664 14.3753ZM23.3258 19.524C23.091 19.8314 23.5091 20.1321 23.7368 19.8267C25.5266 17.5116 25.7397 13.6736 24.4944 10.3787L24.3152 9.92064C22.9745 6.36801 23.0706 2.58354 24.8228 0.434026C25.0492 0.127283 24.6395-0.183173 24.4111 0.131284C22.6206 2.43802 22.3998 6.27533 23.6542 9.57924L23.8243 10.0283C25.1663 13.5907 25.0689 17.3745 23.3258 19.524Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
