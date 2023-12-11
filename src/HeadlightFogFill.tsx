import React from 'react'

export default function HeadlightFogFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.0793 19.9684' className={className}>
      <path
        d='M0.251567 5.07113C0.127932 5.07113 0 5.19906 0 5.3227C0 5.48334 0.128615 5.58335 0.251567 5.58335L8.55148 5.57495C8.58351 5.41655 8.60783 5.22953 8.63351 5.07113ZM0.251567 9.71869C0.127932 9.71869 0 9.82006 0 9.97094C0 10.0946 0.127932 10.2302 0.251567 10.2302L8.29328 10.2302C8.29259 10.0344 8.29259 9.91517 8.29328 9.71869ZM0.251567 14.3753C0.127932 14.3753 0 14.4669 0 14.6269C0 14.7505 0.127932 14.8869 0.251567 14.8869L8.63351 14.8785C8.60783 14.7194 8.58351 14.5337 8.55148 14.376ZM3.9043 19.524C3.66953 19.8314 4.0792 20.1321 4.31602 19.8267C6.10578 17.5116 6.31886 13.6736 5.06447 10.3787L4.89366 9.92064C3.54396 6.36801 3.64982 2.58354 5.3922 0.434026C5.62766 0.127283 5.2089-0.183173 4.98048 0.131284C3.19912 2.43802 2.97832 6.27533 4.2334 9.57924L4.40352 10.0283C5.74483 13.5907 5.64737 17.3745 3.9043 19.524Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.18234 9.97934C9.17189 12.742 9.4133 14.8735 10.004 16.9064C10.6002 19.0159 12.2033 19.8975 14.5699 19.8975L15.0154 19.8975C21.715 19.8975 28.718 15.2899 28.718 9.97934C28.718 4.65971 21.715 0.0507196 15.0154 0.0507196L14.5699 0.0507196C12.204 0.0507196 10.5918 0.933044 10.004 3.0516C9.4133 5.07543 9.17189 7.21596 9.18234 9.97934Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}