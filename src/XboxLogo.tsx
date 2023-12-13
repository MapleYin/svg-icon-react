import React from 'react'

export function XboxLogo({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.4844 26.1426' className={className}>
      <path
        d='M5.14648 13.4375C6.5625 11.1523 7.86133 9.19922 9.45312 7.27539C9.49219 7.23633 9.49219 7.19727 9.45312 7.1582C8.7207 6.41602 8.04688 5.79102 7.46094 5.3418C6.5918 4.66797 5.3125 3.68164 4.27734 3.68164C4.07227 3.68164 3.95508 3.7207 3.89648 3.7793C2.71484 4.92188 1.71875 6.40625 1.04492 7.94922C0.351562 9.61914 0 11.2988 0 13.0664C0 15.957 0.888672 18.5938 2.65625 20.957C2.68555 21.0059 2.75391 20.9766 2.73438 20.9277C2.66602 20.752 2.63672 20.4297 2.63672 20.1367C2.63672 19.4824 2.75391 18.7695 2.95898 18.1152C3.58398 16.2988 4.25781 14.834 5.14648 13.4375ZM16.6602 7.27539C18.252 9.19922 19.5605 11.1523 20.9766 13.4375C21.8555 14.834 22.5293 16.2988 23.1641 18.1152C23.3691 18.7695 23.4863 19.4824 23.4863 20.1367C23.4863 20.4297 23.4473 20.752 23.3887 20.9277C23.3691 20.9766 23.4375 21.0059 23.4668 20.957C25.2344 18.5938 26.123 15.957 26.123 13.0664C26.123 11.2988 25.7617 9.61914 25.0781 7.94922C24.3945 6.40625 23.3984 4.92188 22.2266 3.7793C22.168 3.7207 22.0508 3.68164 21.8457 3.68164C20.8105 3.68164 19.5215 4.66797 18.6621 5.3418C18.0762 5.79102 17.4023 6.41602 16.6602 7.1582C16.6309 7.19727 16.6309 7.23633 16.6602 7.27539ZM6.30859 1.88477C6.24023 1.91406 6.25977 2.01172 6.33789 2.00195C6.5918 1.95312 6.9043 1.91406 7.20703 1.91406C8.30078 1.91406 9.32617 2.20703 10.6152 2.70508C11.1621 2.91016 11.6309 3.125 12.0801 3.36914C12.4805 3.55469 12.7832 3.73047 12.959 3.82812C13.0273 3.86719 13.0957 3.86719 13.1543 3.82812C13.3301 3.73047 13.6426 3.55469 14.043 3.36914C14.4922 3.125 14.9609 2.91016 15.5078 2.70508C16.7871 2.20703 17.8223 1.91406 18.916 1.91406C19.2188 1.91406 19.5215 1.95312 19.7852 2.00195C19.8633 2.01172 19.8828 1.91406 19.8145 1.88477C18.8184 1.30859 17.793 0.839844 16.6992 0.537109C15.5859 0.175781 14.375 0 13.0566 0C11.7383 0 10.5371 0.175781 9.42383 0.537109C8.33008 0.839844 7.30469 1.30859 6.30859 1.88477ZM4.07227 21.8652C4.07227 22.2656 4.19922 22.5879 4.66797 23.0176C6.66016 24.873 9.81445 26.123 13.0566 26.123C16.3086 26.123 19.4629 24.873 21.4551 23.0176C21.9238 22.5879 22.0508 22.2656 22.0508 21.8652C22.0508 21.377 21.9043 20.8301 21.6016 20.2246C21.0059 18.8672 19.8926 17.3242 18.8477 16.084C17.0605 14.0234 15.1367 12.0215 13.2031 10.5859C13.1445 10.5371 13.1055 10.5078 13.0566 10.5078C13.0078 10.5078 12.9785 10.5371 12.9199 10.5859C10.9863 12.0215 9.05273 14.0234 7.26562 16.084C6.2207 17.3242 5.11719 18.8672 4.52148 20.2246C4.21875 20.8301 4.07227 21.377 4.07227 21.8652Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
