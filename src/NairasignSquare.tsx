import React from 'react'

export default function NairasignSquare({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.90781 11.2814C6.90781 11.4389 7.02412 11.5559 7.21924 11.5559L7.76523 11.5559L7.76523 16.2581C7.76523 16.4433 7.91289 16.5539 8.04151 16.5539C8.18897 16.5539 8.31846 16.4433 8.31846 16.2581L8.31846 11.5559L10.871 11.5559L13.5758 16.3194C13.653 16.4739 13.765 16.5358 13.9055 16.5358C14.0793 16.5358 14.2129 16.4112 14.2129 16.2018L14.2129 11.5565L14.7603 11.5565C14.9547 11.5565 15.071 11.4207 15.071 11.2633C15.071 11.1045 14.9547 10.97 14.7603 10.97L14.2129 10.97L14.2129 6.09112C14.2129 5.91504 14.0834 5.80439 13.9359 5.80439C13.7892 5.80439 13.6688 5.91504 13.6688 6.09112L13.6688 10.97L11.1902 10.97L8.41075 6.02979C8.32442 5.88438 8.21309 5.82187 8.07198 5.82187C7.90791 5.82187 7.76523 5.93731 7.76523 6.14678L7.76523 10.9875L7.21924 10.9875C7.01572 10.9875 6.90781 11.122 6.90781 11.2814ZM8.31846 10.9875L8.31846 7.02022L10.568 10.9875ZM11.5205 11.5565L13.6688 11.5565L13.6688 15.3304Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
