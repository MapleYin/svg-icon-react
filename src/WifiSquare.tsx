import React from 'react'

export default function WifiSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.413 9.72178C3.52315 9.84307 3.66876 9.82491 3.78028 9.70294C5.62413 7.77891 8.14473 6.70245 10.9758 6.70245C13.8075 6.70245 16.3756 7.72305 18.1727 9.70362C18.2751 9.82423 18.4284 9.84239 18.5393 9.7211L19.3943 8.84717C19.5045 8.73702 19.5052 8.61436 19.4146 8.51192C17.6504 6.38506 14.2936 4.87754 10.9758 4.87754C7.6587 4.87754 4.28301 6.36622 2.5377 8.51192C2.44708 8.61436 2.45753 8.73702 2.55792 8.84717Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.59698 12.9155C6.7001 13.0193 6.83389 13.0089 6.95655 12.8869C7.91651 11.8475 9.4751 11.1498 10.9758 11.1603C12.4765 11.1498 14.0357 11.8475 14.9971 12.8876C15.1184 13.0005 15.2528 13.0193 15.3546 12.9155L16.3639 11.9069C16.4559 11.8156 16.4754 11.7007 16.3841 11.6087C15.2876 10.2401 13.1564 9.32491 10.9758 9.32491C8.79581 9.32491 6.65557 10.259 5.56817 11.6087C5.49502 11.7014 5.49571 11.8149 5.5793 11.9069Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.9758 17.0831C11.0789 17.0831 11.1779 17.0238 11.4262 16.7776L13.2071 15.0734C13.2803 14.9912 13.2907 14.9328 13.219 14.8038C12.8222 14.2683 11.9126 13.7813 10.9758 13.7813C10.039 13.7813 9.13008 14.2689 8.73194 14.7981C8.66084 14.9258 8.65381 14.9912 8.74512 15.0734L10.5261 16.7776C10.7736 17.0231 10.8733 17.0831 10.9758 17.0831Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}