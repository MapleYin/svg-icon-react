import React from 'react'

export default function PersonCropSquareFilledAndAtRectangle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 3.18829C29.054 1.14307 27.9473 0 25.8721 0L3.18125 0C1.10674 0 0 1.10606 0 3.18829L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96ZM3.21124 21.4484C1.42628 21.4484 0.511533 20.526 0.511533 18.7474L0.511533 3.2126C0.511533 1.43468 1.42628 0.511533 3.21124 0.511533L25.8428 0.511533C27.553 0.511533 28.5418 1.43468 28.5418 3.2126L28.5418 18.7474C28.5418 20.526 27.553 21.4484 25.8428 21.4484Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.37979 16.6096L12.3184 16.6096C13.3826 16.6096 13.9413 16.032 13.9413 14.9796L13.9413 7.0544C13.9413 6.00264 13.3826 5.4251 12.3184 5.4251L4.37979 5.4251C3.31622 5.4251 2.75684 5.98379 2.75684 7.0544L2.75684 14.9796C2.75684 16.0418 3.31622 16.6096 4.37979 16.6096ZM4.22169 16.0167C4.18839 15.0124 5.3006 12.908 8.36338 12.908C11.4346 12.908 12.5475 15.0124 12.5135 16.0167ZM8.34454 11.872C7.16768 11.872 6.22452 10.8611 6.22452 9.55733C6.22452 8.29327 7.16768 7.27335 8.34454 7.27335C9.53047 7.27335 10.4736 8.29327 10.4736 9.55733C10.4736 10.8611 9.53047 11.872 8.34454 11.872ZM21.0177 16.6195C22.1041 16.6195 22.8393 16.5051 23.162 16.3831C23.3285 16.3288 23.3953 16.2243 23.3953 16.0955C23.3953 15.9485 23.3271 15.8336 23.1334 15.8336C22.9331 15.8336 22.7607 15.8992 22.3922 15.9655C22.1126 16.015 21.687 16.0512 21.007 16.0512C18.141 16.0512 16.1489 13.9689 16.1489 10.9772C16.1489 8.11729 18.2255 6.03595 21.0799 6.03595C23.9141 6.03595 25.8691 7.89337 25.8691 10.5817C25.8691 12.468 25.3409 13.4329 24.3213 13.4329C23.5996 13.4329 23.1675 12.9268 23.1675 11.9844L23.1675 8.5004C23.1675 8.32208 23.0603 8.21348 22.9015 8.21348C22.7475 8.21348 22.613 8.33545 22.618 8.51534L22.618 9.01875C22.2419 8.51075 21.6194 8.21348 20.9315 8.21348C19.5294 8.21348 18.564 9.40284 18.564 11.0966C18.564 12.8119 19.5294 13.9713 20.9245 13.9713C21.7507 13.9713 22.352 13.6064 22.7406 12.8974C22.9777 13.5966 23.5603 13.9901 24.3333 13.9901C25.6571 13.9901 26.4466 12.7451 26.4466 10.5867C26.4466 7.59395 24.2121 5.46827 21.0799 5.46827C17.9317 5.46827 15.5758 7.81719 15.5758 10.9765C15.5758 14.2649 17.8389 16.6195 21.0177 16.6195ZM20.9075 13.4386C19.8279 13.4386 19.0951 12.4943 19.0951 11.1043C19.0951 9.75196 19.8656 8.74415 20.9082 8.74415C21.9696 8.74415 22.62 9.6046 22.62 11.0198C22.62 12.493 21.9515 13.4386 20.9075 13.4386Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}