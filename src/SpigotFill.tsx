import React from 'react'

export default function SpigotFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.1087 20.2598' className={className}>
      <path
        d='M11.6506 0.966113L6.2334 0.235059C5.30313 0.108106 4.62178 0.729493 4.62178 1.6291C4.62178 2.54825 5.30313 3.16055 6.2334 3.0336L11.6506 2.31162ZM12.4251 3.23604C13.3279 3.23604 14.0132 2.52286 14.0132 1.6291C14.0132 0.727636 13.3279 0.0235325 12.4251 0.0235325C11.5132 0.0235325 10.8 0.727636 10.8 1.6291C10.8 2.52286 11.5132 3.23604 12.4251 3.23604ZM13.1989 0.966113L13.1989 2.31162L18.6161 3.0336C19.5471 3.16055 20.2278 2.54825 20.2278 1.6291C20.2278 0.729493 19.5471 0.108106 18.6161 0.235059ZM12.0207 2.44796L12.0207 4.93897L12.8658 4.93897L12.8658 2.44796ZM9.48917 7.02003L15.3311 7.02003L15.3311 5.34171C15.3311 4.80655 14.9554 4.4211 14.4293 4.4211L10.3909 4.4211C9.86486 4.4211 9.48917 4.80655 9.48917 5.34171ZM12.4056 17.8752C14.8188 17.8752 15.9961 16.5458 17.292 15.643C17.7299 15.3441 18.315 15.0972 18.8687 15.0972C20.192 15.0972 20.9946 15.9879 20.9946 17.3345L20.9946 19.7369C20.9946 20.1637 21.0817 20.2598 21.4993 20.2598L25.2155 20.2598C25.6234 20.2598 25.7474 20.1448 25.7474 19.7369L25.7474 18.3528C25.7474 13.2024 23.1308 9.84122 18.1555 9.84122L17.3411 9.84122C17.0915 9.84122 16.8662 9.70177 16.7867 9.46466L15.877 6.97951C15.79 6.7589 15.6401 6.64806 15.3691 6.64806L9.43233 6.64806C9.16134 6.64806 9.01143 6.7589 8.92442 6.97951L8.01534 9.46466C7.93585 9.70177 7.70987 9.84122 7.46026 9.84122L0.242291 9.84122L0.242291 15.2041L6.0549 15.2041C6.78029 15.2041 6.93136 15.2648 7.36925 15.5587C8.68214 16.4461 10.0008 17.8752 12.4056 17.8752ZM0.251567 16.9777C0.393367 16.9777 0.511533 16.8686 0.511533 16.7268L0.511533 8.30206C0.511533 8.16026 0.393367 8.0421 0.251567 8.0421C0.118166 8.0421 0 8.16026 0 8.30206L0 16.7268C0 16.8686 0.118166 16.9777 0.251567 16.9777Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}