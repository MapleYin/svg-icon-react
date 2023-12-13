import React from 'react'

export function BubbleMiddleTop({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 26.7533' className={className}>
      <path
        d='M13.2128 0C13.0054 0 12.8559 0.114942 12.7161 0.311528L10.2075 4.10674L4.41798 4.10674C1.74492 4.10674 0 5.84532 0 8.51496L0 19.7201C0 22.3988 1.74492 24.1381 4.41798 24.1381L22.002 24.1381C24.6743 24.1381 26.4199 22.3618 26.4199 19.7201L26.4199 8.51496C26.4199 5.87393 24.6743 4.10674 22.002 4.10674L16.2181 4.10674L13.7095 0.311528C13.5613 0.114942 13.4202 0 13.2128 0ZM13.2128 0.504502L15.8285 4.44981C15.9167 4.5424 15.989 4.60919 16.1876 4.60919L21.9649 4.60919C24.2645 4.60919 25.9084 6.1839 25.9084 8.55265L25.9084 19.6831C25.9084 22.0609 24.2645 23.6266 21.9649 23.6266L4.45499 23.6266C2.08985 23.6266 0.511533 22.0609 0.511533 19.6831L0.511533 8.55265C0.511533 6.1839 2.08985 4.60919 4.45499 4.60919L10.238 4.60919C10.4366 4.60919 10.5089 4.5424 10.5971 4.44981Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
