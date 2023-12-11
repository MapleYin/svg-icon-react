import React from 'react'

export default function RadioFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 33.0702' className={className}>
      <path
        d='M23.7574 12.965C22.8369 12.9845 22.1033 12.2412 22.1033 11.3402C22.1033 10.4301 22.8369 9.67565 23.7574 9.6861C24.6688 9.70563 25.4108 10.4301 25.4108 11.3402C25.4108 12.2412 24.6688 12.9462 23.7574 12.965ZM23.7574 17.769C22.8369 17.769 22.1033 17.0354 22.1033 16.1149C22.1033 15.2035 22.8369 14.4803 23.7574 14.4803C24.6688 14.4803 25.4108 15.2035 25.4108 16.1149C25.4108 17.0354 24.6688 17.769 23.7574 17.769ZM11.5943 11.0531C11.1313 11.0531 10.7483 10.659 10.7483 10.168C10.7483 9.70563 11.1313 9.30319 11.5943 9.30319C12.0756 9.30319 12.4585 9.70563 12.4585 10.168C12.4585 10.659 12.0756 11.0531 11.5943 11.0531ZM14.7793 11.8691C14.3176 11.8691 13.9535 11.4667 13.9535 11.0133C13.9535 10.5132 14.3176 10.129 14.7793 10.129C15.2717 10.129 15.6351 10.5132 15.6351 11.0133C15.6351 11.4667 15.2717 11.8691 14.7793 11.8691ZM17.2382 13.9719C16.7765 13.9719 16.4124 13.589 16.4124 13.1078C16.4124 12.6349 16.7765 12.2325 17.2382 12.2325C17.7194 12.2325 18.1219 12.6349 18.1219 13.1078C18.1219 13.589 17.7194 13.9719 17.2382 13.9719ZM17.9942 17.0592C17.513 17.0592 17.1301 16.6757 17.1301 16.1951C17.1301 15.7229 17.513 15.34 17.9942 15.34C18.4566 15.34 18.8305 15.7229 18.8305 16.1951C18.8305 16.6757 18.4566 17.0592 17.9942 17.0592ZM17.2382 20.1577C16.7765 20.1577 16.4124 19.7636 16.4124 19.2817C16.4124 18.8095 16.7765 18.4266 17.2382 18.4266C17.7194 18.4266 18.1219 18.8095 18.1219 19.2817C18.1219 19.7636 17.7194 20.1577 17.2382 20.1577ZM14.7793 22.6145C14.3176 22.6145 13.9535 22.2302 13.9535 21.7301C13.9535 21.2677 14.3176 20.8744 14.7793 20.8744C15.2717 20.8744 15.6351 21.2677 15.6351 21.7301C15.6351 22.2302 15.2717 22.6145 14.7793 22.6145ZM11.5943 23.7845C11.1313 23.7845 10.7483 23.3828 10.7483 22.9288C10.7483 22.4287 11.1313 22.0353 11.5943 22.0353C12.0756 22.0353 12.4585 22.4287 12.4585 22.9288C12.4585 23.3828 12.0756 23.7845 11.5943 23.7845ZM8.41777 22.6145C7.91768 22.6145 7.55361 22.2302 7.55361 21.7301C7.55361 21.2677 7.91768 20.8744 8.41777 20.8744C8.8711 20.8744 9.24424 21.2677 9.24424 21.7301C9.24424 22.2302 8.8711 22.6145 8.41777 22.6145ZM5.94981 20.1577C5.46924 20.1577 5.07588 19.7636 5.07588 19.2817C5.07588 18.8095 5.46924 18.4266 5.94981 18.4266C6.41221 18.4266 6.77627 18.8095 6.77627 19.2817C6.77627 19.7636 6.41221 20.1577 5.94981 20.1577ZM5.20352 17.0592C4.74111 17.0592 4.35752 16.6757 4.35752 16.1951C4.35752 15.7229 4.74111 15.34 5.20352 15.34C5.675 15.34 6.05928 15.7229 6.05928 16.1951C6.05928 16.6757 5.675 17.0592 5.20352 17.0592ZM5.94981 13.9719C5.46924 13.9719 5.07588 13.589 5.07588 13.1078C5.07588 12.6349 5.46924 12.2325 5.94981 12.2325C6.41221 12.2325 6.77627 12.6349 6.77627 13.1078C6.77627 13.589 6.41221 13.9719 5.94981 13.9719ZM8.41777 11.8691C7.91768 11.8691 7.55361 11.4667 7.55361 11.0133C7.55361 10.5132 7.91768 10.129 8.41777 10.129C8.8711 10.129 9.24424 10.5132 9.24424 11.0133C9.24424 11.4667 8.8711 11.8691 8.41777 11.8691ZM11.5943 14.3169C11.1313 14.3169 10.7483 13.9339 10.7483 13.4618C10.7483 12.9798 11.1313 12.5858 11.5943 12.5858C12.0756 12.5858 12.4585 12.9798 12.4585 13.4618C12.4585 13.9339 12.0756 14.3169 11.5943 14.3169ZM14.6028 15.6248C14.1411 15.6248 13.738 15.2223 13.738 14.7606C13.738 14.2982 14.1411 13.9042 14.6028 13.9042C15.0841 13.9042 15.4481 14.2982 15.4481 14.7606C15.4481 15.2223 15.0841 15.6248 14.6028 15.6248ZM14.6028 19.1745C14.1411 19.1745 13.738 18.772 13.738 18.3096C13.738 17.8179 14.1411 17.435 14.6028 17.435C15.0841 17.435 15.4481 17.8179 15.4481 18.3096C15.4481 18.772 15.0841 19.1745 14.6028 19.1745ZM11.5943 20.5019C11.1313 20.5019 10.7483 20.1079 10.7483 19.6357C10.7483 19.1545 11.1313 18.7715 11.5943 18.7715C12.0756 18.7715 12.4585 19.1545 12.4585 19.6357C12.4585 20.1079 12.0756 20.5019 11.5943 20.5019ZM8.58516 19.1745C8.11367 19.1745 7.74053 18.772 7.74053 18.3096C7.74053 17.8179 8.11367 17.435 8.58516 17.435C9.04824 17.435 9.45069 17.8179 9.45069 18.3096C9.45069 18.772 9.04824 19.1745 8.58516 19.1745ZM8.58516 15.6248C8.11367 15.6248 7.74053 15.2223 7.74053 14.7606C7.74053 14.2982 8.11367 13.9042 8.58516 13.9042C9.04824 13.9042 9.45069 14.2982 9.45069 14.7606C9.45069 15.2223 9.04824 15.6248 8.58516 15.6248ZM11.5943 17.4035C11.1313 17.4035 10.7483 17.0206 10.7483 16.5484C10.7483 16.0678 11.1313 15.6842 11.5943 15.6842C12.0756 15.6842 12.4585 16.0678 12.4585 16.5484C12.4585 17.0206 12.0756 17.4035 11.5943 17.4035ZM24.1456 6.09528L24.3006 5.60738L7.09238 0.0180275C6.95195-0.038321 6.8081 0.043028 6.75312 0.184144C6.71494 0.305728 6.79697 0.449579 6.91855 0.496845ZM3.18125 27.506L25.8721 27.506C27.9473 27.506 29.054 26.363 29.054 24.3184L29.054 8.73434C29.054 6.68912 27.9473 5.54605 25.8721 5.54605L3.18125 5.54605C1.10674 5.54605 0 6.65211 0 8.73434L0 24.3184C0 26.4007 1.10674 27.506 3.18125 27.506Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
