import React from 'react'

export function CameraViewfinder({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.2337 22.9289' className={className}>
      <path
        d='M0.251567 7.07051C0.417684 7.07051 0.511533 6.96622 0.511533 6.8001L0.511533 3.26006C0.511533 1.48145 1.42628 0.558994 3.21124 0.558994L6.74629 0.558994C6.91241 0.558994 7.01671 0.473543 7.01671 0.30811C7.01671 0.141994 6.91241 0.0565428 6.74629 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.23506L0 6.8001C0 6.96622 0.085451 7.07051 0.251567 7.07051ZM22.6208 7.07051C22.7876 7.07051 22.8724 6.96622 22.8724 6.8001L22.8724 3.23506C22.8724 1.19961 21.7663 0.0565428 19.6911 0.0565428L16.1261 0.0565428C15.96 0.0565428 15.8557 0.141994 15.8557 0.30811C15.8557 0.473543 15.96 0.558994 16.1261 0.558994L19.6611 0.558994C21.3714 0.558994 22.3608 1.48145 22.3608 3.26006L22.3608 6.8001C22.3608 6.96622 22.4554 7.07051 22.6208 7.07051ZM3.18125 22.9289L6.74629 22.9289C6.91241 22.9289 7.01671 22.8344 7.01671 22.6683C7.01671 22.5028 6.91241 22.4174 6.74629 22.4174L3.21124 22.4174C1.42628 22.4174 0.511533 21.4949 0.511533 19.7163L0.511533 16.1763C0.511533 16.0102 0.426082 15.9059 0.251567 15.9059C0.0938493 15.9059 0 16.0102 0 16.1763L0 19.7413C0 21.8145 1.10674 22.9289 3.18125 22.9289ZM16.1261 22.9289L19.6911 22.9289C21.7663 22.9289 22.8724 21.7858 22.8724 19.7413L22.8724 16.1763C22.8724 16.0102 22.7869 15.9059 22.6208 15.9059C22.4547 15.9059 22.3608 16.0102 22.3608 16.1763L22.3608 19.7163C22.3608 21.4949 21.3714 22.4174 19.6611 22.4174L16.1261 22.4174C15.96 22.4174 15.8557 22.5028 15.8557 22.6683C15.8557 22.8344 15.96 22.9289 16.1261 22.9289Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.44766 17.1264L17.4254 17.1264C18.4951 17.1264 19.0865 16.5454 19.0865 15.4484L19.0865 8.53057C19.0865 7.442 18.4951 6.85196 17.4254 6.85196L15.3797 6.85196C14.8453 6.85196 14.717 6.83741 14.3409 6.43203L13.7409 5.78252C13.3635 5.39463 13.1704 5.30127 12.5434 5.30127L10.1056 5.30127C9.51622 5.30127 9.26729 5.37579 8.90801 5.78252L8.32618 6.43203C7.95987 6.82764 7.82247 6.85196 7.26924 6.85196L5.44766 6.85196C4.37725 6.85196 3.78653 7.442 3.78653 8.53057L3.78653 15.4484C3.78653 16.5454 4.37725 17.1264 5.44766 17.1264ZM11.4421 15.7008C9.3334 15.7008 7.64395 14.0211 7.64395 11.9026C7.64395 9.79395 9.3334 8.0961 11.4421 8.0961C13.5319 8.0961 15.2207 9.79395 15.2207 11.9026C15.2207 14.0231 13.5319 15.7008 11.4421 15.7008ZM11.4414 15.2153C13.2568 15.2153 14.7255 13.7474 14.7255 11.9026C14.7255 10.0684 13.2568 8.58155 11.4414 8.58155C9.61622 8.58155 8.13849 10.0684 8.13849 11.9026C8.13849 13.7474 9.61622 15.2153 11.4414 15.2153ZM16.4986 10.059C16.1682 10.059 15.8879 9.79825 15.8879 9.45801C15.8879 9.13594 16.1682 8.85635 16.4986 8.85635C16.8382 8.85635 17.0626 9.13594 17.0815 9.45801C17.0996 9.79825 16.8382 10.059 16.4986 10.059Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
