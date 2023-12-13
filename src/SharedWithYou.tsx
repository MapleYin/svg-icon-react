import React from 'react'

export function SharedWithYou({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.2229 21.8502' className={className}>
      <path
        d='M5.6544 12.9273L5.6544 15.314C5.6544 16.3664 5.08662 16.944 4.02305 16.944L1.62227 16.944C0.559375 16.944 0 16.3853 0 15.314L0 12.9273C0 11.8566 0.559375 11.298 1.62227 11.298L4.02305 11.298C5.08662 11.298 5.6544 11.8748 5.6544 12.9273Z'
        fill={color}
        fillOpacity='0.425'
      />
      <path
        d='M14.3729 1.63701L14.3729 4.01419C11.9746 4.23171 10.1753 6.41145 10.1418 8.8837L4.31817 8.8837C3.25528 8.8837 2.6959 8.31592 2.6959 7.2544L2.6959 1.63701C2.6959 0.566406 3.25528 0.00771463 4.31817 0.00771463L12.7506 0.00771463C13.8135 0.00771463 14.3729 0.566406 14.3729 1.63701Z'
        fill={color}
        fillOpacity='0.425'
      />
      <path
        d='M27.8615 6.66504L27.8615 13.3914C27.8615 14.4439 27.3022 15.0207 26.2393 15.0207L22.7581 15.0207C21.6855 15.0207 21.1261 14.4627 21.1261 13.3914L21.1261 6.66504C21.1261 5.59375 21.6855 5.03506 22.7581 5.03506L26.2393 5.03506C27.3022 5.03506 27.8615 5.6126 27.8615 6.66504Z'
        fill={color}
        fillOpacity='0.425'
      />
      <path
        d='M14.7739 13.1432C16.9076 13.1432 18.5186 11.3256 18.5186 8.96748C18.5186 6.77696 16.8706 4.88242 14.7739 4.88242C12.6766 4.88242 11.0286 6.77901 11.0286 8.95977C11.0286 11.3256 12.6396 13.1432 14.7739 13.1432ZM8.02198 21.8502L21.4784 21.8502C22.2502 21.8502 22.7676 21.4067 22.7676 20.7589C22.7676 18.285 19.6848 14.8876 14.7551 14.8876C9.80655 14.8876 6.72374 18.285 6.72374 20.7589C6.72374 21.4067 7.24112 21.8502 8.02198 21.8502Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
