import React from 'react'

export default function Faxmachine({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.9222 25.9002' className={className}>
      <path
        d='M21.755 2.58741L21.755 4.17266L21.2008 4.17266L21.2008 2.59805C21.2008 1.07403 20.6734 0.528524 19.1494 0.528524L7.41143 0.528524C5.89649 0.528524 5.36007 1.07403 5.36007 2.59805L5.36007 4.17266L4.80586 4.17266L4.80586 2.58741C4.80586 0.789943 5.592 0 7.4128 0L19.1571 0C20.9575 0 21.755 0.789943 21.755 2.58741Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M26.5609 7.10001L26.5609 18.98C26.5609 20.943 25.5938 21.8983 23.6301 21.8983L21.7684 21.8983L21.7684 21.3754L23.6224 21.3754C25.316 21.3754 26.0207 20.6603 26.0207 18.9673L26.0207 7.1127C26.0207 5.41973 25.316 4.6962 23.6224 4.6962L2.93848 4.6962C1.24483 4.6962 0.548545 5.41973 0.548545 7.1127L0.548545 18.9673C0.548545 20.6603 1.24483 21.3754 2.93848 21.3754L4.80156 21.3754L4.80156 21.8983L2.93985 21.8983C0.967092 21.8983 0 20.943 0 18.98L0 7.10001C0 5.12793 0.956448 4.17266 2.93985 4.17266L23.6301 4.17266C25.5938 4.17266 26.5609 5.12793 26.5609 7.10001Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.4792 12.7381L8.4792 13.6146C8.4792 13.9473 8.31045 14.1251 7.96797 14.1251L7.09219 14.1251C6.75879 14.1251 6.58096 13.9473 6.58096 13.6146L6.58096 12.7381C6.58096 12.3963 6.75879 12.2269 7.09219 12.2269L7.96797 12.2269C8.31045 12.2269 8.4792 12.3963 8.4792 12.7381ZM12.316 12.7381L12.316 13.6146C12.316 13.9473 12.1382 14.1251 11.8048 14.1251L10.9283 14.1251C10.5865 14.1251 10.4178 13.9473 10.4178 13.6146L10.4178 12.7381C10.4178 12.3963 10.5865 12.2269 10.9283 12.2269L11.8048 12.2269C12.1382 12.2269 12.316 12.3963 12.316 12.7381ZM16.1431 12.7381L16.1431 13.6146C16.1431 13.9473 15.9743 14.1251 15.6409 14.1251L14.7651 14.1251C14.4227 14.1251 14.2539 13.9473 14.2539 13.6146L14.2539 12.7381C14.2539 12.3963 14.4227 12.2269 14.7651 12.2269L15.6409 12.2269C15.9743 12.2269 16.1431 12.3963 16.1431 12.7381ZM19.9799 12.7381L19.9799 13.6146C19.9799 13.9473 19.8111 14.1251 19.4687 14.1251L18.5929 14.1251C18.2595 14.1251 18.0816 13.9473 18.0816 13.6146L18.0816 12.7381C18.0816 12.3963 18.2595 12.2269 18.5929 12.2269L19.4687 12.2269C19.8111 12.2269 19.9799 12.3963 19.9799 12.7381ZM8.4792 8.38037L8.4792 9.25616C8.4792 9.59864 8.31045 9.76739 7.96797 9.76739L7.09219 9.76739C6.75879 9.76739 6.58096 9.59864 6.58096 9.25616L6.58096 8.38037C6.58096 8.04698 6.75879 7.86914 7.09219 7.86914L7.96797 7.86914C8.31045 7.86914 8.4792 8.04698 8.4792 8.38037ZM12.316 8.38037L12.316 9.25616C12.316 9.59864 12.1382 9.76739 11.8048 9.76739L10.9283 9.76739C10.5865 9.76739 10.4178 9.59864 10.4178 9.25616L10.4178 8.38037C10.4178 8.04698 10.5865 7.86914 10.9283 7.86914L11.8048 7.86914C12.1382 7.86914 12.316 8.04698 12.316 8.38037ZM16.1431 8.38037L16.1431 9.25616C16.1431 9.59864 15.9743 9.76739 15.6409 9.76739L14.7651 9.76739C14.4227 9.76739 14.2539 9.59864 14.2539 9.25616L14.2539 8.38037C14.2539 8.04698 14.4227 7.86914 14.7651 7.86914L15.6409 7.86914C15.9743 7.86914 16.1431 8.04698 16.1431 8.38037ZM19.9799 8.38037L19.9799 9.25616C19.9799 9.59864 19.8111 9.76739 19.4687 9.76739L18.5929 9.76739C18.2595 9.76739 18.0816 9.59864 18.0816 9.25616L18.0816 8.38037C18.0816 8.04698 18.2595 7.86914 18.5929 7.86914L19.4687 7.86914C19.8111 7.86914 19.9799 8.04698 19.9799 8.38037Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.51748 25.7761L19.0525 25.7761C20.9208 25.7761 21.7684 24.9424 21.7684 23.079L21.7684 19.9769C21.7684 18.1045 20.9208 17.2799 19.0525 17.2799L7.51748 17.2799C5.63506 17.2799 4.80156 18.1045 4.80156 19.9769L4.80156 23.079C4.80156 24.9424 5.64004 25.7761 7.51748 25.7761ZM7.45245 25.2532C5.89444 25.2532 5.34171 24.6823 5.34171 23.1236L5.34171 19.9226C5.34171 18.3736 5.89444 17.8027 7.45245 17.8027L19.1091 17.8027C20.6671 17.8027 21.2191 18.3736 21.2191 19.9226L21.2191 23.1236C21.2191 24.6823 20.6671 25.2532 19.1091 25.2532ZM8.24756 21.4997C8.24756 21.77 8.4377 21.9595 8.70802 21.9595L17.8724 21.9595C18.1232 21.9595 18.3133 21.77 18.3133 21.4997C18.3133 21.2671 18.1232 21.077 17.8724 21.077L8.70802 21.077C8.4377 21.077 8.24756 21.2671 8.24756 21.4997Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
