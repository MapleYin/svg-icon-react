import React from 'react'

export default function RectanglePortraitOnRectanglePortraitFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.7455 31.6815' className={className}>
      <path
        d='M19.1208 4.08917L19.1208 5.40987L8.45099 5.40987C5.88107 5.40987 4.36387 6.91934 4.36387 9.48156L4.36387 25.3993L3.71671 25.3993C1.67149 25.3993 0.528423 24.2919 0.528423 22.2181L0.528423 4.08917C0.528423 2.01465 1.64356 0.907915 3.71671 0.907915L15.9423 0.907915C18.0154 0.907915 19.1208 2.01465 19.1208 4.08917Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M23.8551 9.48156C23.8551 7.41544 22.7406 6.3003 20.6675 6.3003L8.45099 6.3003C6.36876 6.3003 5.26271 7.41544 5.26271 9.48156L5.26271 27.6098C5.26271 29.6843 6.40577 30.7917 8.45099 30.7917L20.6675 30.7917C22.712 30.7917 23.8551 29.6843 23.8551 27.6098Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}