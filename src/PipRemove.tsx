import React from 'react'

export function PipRemove({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.2492 23.8194' className={className}>
      <path
        d='M24.7973 3.23506L24.7973 8.92042L24.2857 8.92042L24.2857 3.26006C24.2857 1.48145 23.2963 0.558994 21.586 0.558994L3.21124 0.558994C1.42628 0.558994 0.511533 1.48145 0.511533 3.26006L0.511533 15.8815C0.511533 17.6602 1.50098 18.5826 3.21124 18.5826L11.507 18.5826L11.507 19.0942L3.18125 19.0942C1.10606 19.0942 0 17.979 0 15.9059L0 3.23506C0 1.1626 1.10606 0.0474608 3.18125 0.0474608L21.616 0.0474608C23.6912 0.0474608 24.7973 1.1626 24.7973 3.23506Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M30.8879 12.108L30.8879 20.6311C30.8879 22.6763 29.7812 23.8194 27.7066 23.8194L14.6883 23.8194C12.6138 23.8194 11.507 22.7133 11.507 20.6311L11.507 12.108C11.507 10.0349 12.6138 8.92042 14.6883 8.92042L27.7066 8.92042C29.7812 8.92042 30.8879 10.0635 30.8879 12.108ZM17.4309 12.8915C17.4309 12.9903 17.4468 13.0585 17.5401 13.1435L20.7704 16.3744L17.5401 19.5956C17.4468 19.6897 17.4309 19.7494 17.4309 19.8476C17.4309 20.0089 17.5581 20.118 17.7369 20.118C17.8546 20.118 17.8962 20.093 17.9993 19.9899L21.201 16.7959L24.3949 19.9899C24.4974 20.1014 24.5669 20.118 24.6566 20.118C24.8361 20.118 24.9634 20.0089 24.9634 19.8476C24.9634 19.7578 24.9391 19.689 24.8541 19.604L21.6238 16.3744L24.8548 13.1428C24.9404 13.0571 24.9641 12.9897 24.9641 12.8908C24.9641 12.7393 24.8277 12.6218 24.6573 12.6218C24.5599 12.6218 24.4917 12.6461 24.3879 12.7499L21.201 15.9439L18.007 12.7506C17.9032 12.6384 17.8546 12.6141 17.7369 12.6141C17.5581 12.6141 17.4309 12.7309 17.4309 12.8915Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
