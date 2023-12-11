import React from 'react'

export default function CheckmarkRectangleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M29.054 3.18829L29.054 18.7724C29.054 20.8169 27.9473 21.96 25.8721 21.96L3.18125 21.96C1.10674 21.96 0 20.8546 0 18.7724L0 3.18829C0 1.10606 1.10674 0 3.18125 0L25.8721 0C27.9473 0 29.054 1.14307 29.054 3.18829ZM19.903 5.87452L13.1959 16.2387L9.34806 11.8421C9.29395 11.7818 9.21329 11.738 9.10967 11.738C8.98467 11.738 8.84971 11.8387 8.84971 11.9909C8.84971 12.0716 8.89287 12.1523 8.94922 12.2309L12.9604 16.8265C13.0348 16.9063 13.0916 16.9444 13.2084 16.9444C13.3064 16.9444 13.373 16.8958 13.4613 16.8265L20.3654 6.16427C20.3834 6.11358 20.4021 6.04132 20.4021 5.99766C20.4021 5.87198 20.2805 5.73067 20.1568 5.73067C20.0637 5.73067 19.9719 5.80655 19.903 5.87452Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}