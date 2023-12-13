import React from 'react'

export function Banknote({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.4837 18.5086' className={className}>
      <path
        d='M2.14552 15.9897C2.14552 16.2286 2.27159 16.3638 2.50919 16.3638L27.6125 16.3638C27.8508 16.3638 27.9769 16.2286 27.9769 15.9897L27.9769 2.53712C27.9769 2.29815 27.8508 2.163 27.6125 2.163L2.50919 2.163C2.27159 2.163 2.14552 2.29815 2.14552 2.53712ZM2.72433 15.6303L2.72433 2.8965C2.72433 2.79406 2.76681 2.75157 2.87902 2.75157L27.2524 2.75157C27.3549 2.75157 27.3974 2.79406 27.3974 2.8965L27.3974 15.6303C27.3974 15.7327 27.3549 15.7752 27.2524 15.7752L2.87902 15.7752C2.76681 15.7752 2.72433 15.7327 2.72433 15.6303ZM15.0812 16.3638C17.4 16.3638 19.8718 13.9423 19.8718 9.24874C19.8718 4.5838 17.4 2.163 15.0812 2.163C12.7476 2.163 10.2506 4.5838 10.2506 9.24874C10.2506 13.9423 12.7287 16.3638 15.0812 16.3638ZM15.0812 15.7999C13.0357 15.7999 10.8215 13.6431 10.8215 9.24874C10.8215 4.88234 13.0357 2.72687 15.0812 2.72687C17.0931 2.72687 19.3016 4.88234 19.3016 9.24874C19.3016 13.6431 17.0931 15.7999 15.0812 15.7999Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0 17.9818C0 18.3114 0.188771 18.5086 0.517679 18.5086L29.604 18.5086C29.9336 18.5086 30.1224 18.3114 30.1224 17.9818L30.1224 0.544241C30.1224 0.215333 29.9336 0.0174803 29.604 0.0174803L0.517679 0.0174803C0.188771 0.0174803 0 0.215333 0 0.544241ZM0.511533 17.7643L0.511533 0.761827C0.511533 0.62667 0.609189 0.529697 0.735264 0.529697L29.3871 0.529697C29.5125 0.529697 29.6102 0.62667 29.6102 0.761827L29.6102 17.7643C29.6102 17.8994 29.5125 17.9971 29.3871 17.9971L0.735264 17.9971C0.609189 17.9971 0.511533 17.8994 0.511533 17.7643Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
