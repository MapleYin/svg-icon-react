import React from 'react'

export default function CharacterBubbleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.6125' className={className}>
      <path
        d='M26.4199 5.89513L26.4199 17.0912C26.4199 19.7322 24.6743 21.5078 22.002 21.5078L11.1655 21.5078L6.57775 25.3921C6.44298 25.4969 6.28419 25.6125 6.09972 25.6125C5.87432 25.6125 5.68555 25.4358 5.68555 25.1427L5.68555 21.5078L4.41798 21.5078C1.74492 21.5078 0 19.7699 0 17.0912L0 5.89513C0 3.21641 1.74492 1.47715 4.41798 1.47715L22.002 1.47715C24.6743 1.47715 26.4199 3.24434 26.4199 5.89513ZM12.864 6.19952L8.85332 16.704C8.829 16.7756 8.81787 16.7956 8.81787 16.8436C8.81787 17.0028 8.92217 17.0974 9.1128 17.0974C9.25889 17.0974 9.31505 17.0481 9.38184 16.8567L10.7063 13.3842L15.7039 13.3842L17.0283 16.8567C17.0958 17.0299 17.1513 17.0974 17.3351 17.0974C17.4691 17.0974 17.5923 16.9938 17.5923 16.8624C17.5923 16.7956 17.5818 16.7756 17.5568 16.704L13.5462 6.19952C13.4851 6.02227 13.3739 5.94727 13.2135 5.94727C13.0355 5.94727 12.9251 6.02227 12.864 6.19952ZM15.4901 12.8344L10.92 12.8344L13.1828 6.8755L13.2273 6.8755Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
