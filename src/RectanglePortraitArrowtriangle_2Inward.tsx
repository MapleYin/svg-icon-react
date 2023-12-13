import React from 'react'

export function RectanglePortraitArrowtriangle_2Inward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.8626 23.3035' className={className}>
      <path
        d='M10.0394 23.3035L17.4619 23.3035C19.5065 23.3035 20.6495 22.1975 20.6495 20.1223L20.6495 3.23643C20.6495 1.16123 19.5442 0.0551754 17.4619 0.0551754L10.0394 0.0551754C7.95713 0.0551754 6.85176 1.16123 6.85176 3.23643L6.85176 20.1223C6.85176 22.1975 7.99483 23.3035 10.0394 23.3035ZM10.0644 22.792C8.28575 22.792 7.3633 21.8025 7.3633 20.0839L7.3633 3.26573C7.3633 1.49054 8.28575 0.566708 10.0644 0.566708L17.4376 0.566708C19.2155 0.566708 20.138 1.49054 20.138 3.26573L20.138 20.0839C20.138 21.8025 19.2155 22.792 17.4376 22.792Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0 14.5146C0 14.9034 0.371583 15.0023 0.627152 14.8435L5.17315 12.0916C5.49092 11.8958 5.47207 11.4811 5.17315 11.3048L0.617386 8.51455C0.352736 8.35576 0 8.44688 0 8.84414ZM27.5013 14.5146L27.5013 8.84414C27.5013 8.44688 27.1479 8.35508 26.893 8.51455L22.3281 11.3048C22.0292 11.4804 22.0188 11.8965 22.3281 12.0916L26.8741 14.8435C27.129 15.0029 27.5013 14.9034 27.5013 14.5146Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
