import React from 'react'

export default function VideoBadgeEllipsis({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.8436 28.4256' className={className}>
      <path
        d='M28.9467 8.13859L28.9467 11.3743L34.4764 6.98555C34.929 6.63897 35.2922 6.42002 35.7734 6.42002C36.444 6.42002 36.8998 6.89044 36.8998 7.74034L36.8998 20.6664C36.8998 21.5254 36.444 21.9951 35.7734 21.9951C35.2922 21.9951 34.929 21.7762 34.4764 21.4212L28.9467 17.0324L28.9467 20.2675C28.9467 22.8827 27.5347 24.3018 24.9006 24.3018L13.1312 24.3018C13.2051 24.142 13.27 23.9774 13.322 23.8068L24.7606 23.8068C27.2444 23.8068 28.4352 22.5762 28.4352 20.1219L28.4352 8.28488C28.4352 5.83898 27.2444 4.59924 24.7606 4.59924L10.7982 4.59924C8.31437 4.59924 7.12365 5.83898 7.12365 8.28488L7.12365 14.7316C7.03553 14.7196 6.94492 14.7178 6.85391 14.7178C6.77236 14.7178 6.69111 14.7192 6.61211 14.7302L6.61211 8.13859C6.61211 5.52335 8.01417 4.11339 10.6582 4.11339L24.9006 4.11339C27.5347 4.11339 28.9467 5.52335 28.9467 8.13859ZM34.844 7.35011L28.9467 11.9547L28.9467 16.4514L34.844 21.056C35.2091 21.3366 35.4995 21.5433 35.7725 21.5433C36.1403 21.5433 36.3833 21.2696 36.3833 20.7251L36.3833 7.69005C36.3833 7.13712 36.1403 6.87189 35.7725 6.87189C35.4995 6.87189 35.2091 7.07785 34.844 7.35011Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.8181 21.5717C12.8181 24.8471 10.1182 27.5352 6.85391 27.5352C3.59669 27.5352 0.889751 24.8484 0.889751 21.5717C0.889751 18.3145 3.59669 15.6166 6.85391 15.6166C10.13 15.6166 12.8181 18.2956 12.8181 21.5717ZM2.96094 21.5528C2.96094 21.9796 3.30821 22.3276 3.71612 22.3276C4.12471 22.3276 4.47266 21.9796 4.49083 21.5528C4.50059 21.1638 4.14356 20.8061 3.71612 20.8061C3.30821 20.8061 2.96094 21.1449 2.96094 21.5528ZM6.13506 21.5528C6.13506 21.9796 6.4837 22.3276 6.89093 22.3276C7.29884 22.3276 7.63839 21.9796 7.65655 21.5528C7.6754 21.1638 7.3086 20.8061 6.89093 20.8061C6.4837 20.8061 6.13506 21.1449 6.13506 21.5528ZM9.217 21.5528C9.217 21.9796 9.56427 22.3276 9.97286 22.3276C10.3808 22.3276 10.7287 21.9796 10.7378 21.5528C10.7567 21.1638 10.3996 20.8061 9.97286 20.8061C9.56427 20.8061 9.217 21.1449 9.217 21.5528Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}