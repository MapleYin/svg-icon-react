import React from 'react'

export function KCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM15.1053 6.74834L9.18634 12.7L9.13614 12.7L9.13614 6.86612C9.13614 6.7127 9.03184 6.60498 8.87344 6.60498C8.71709 6.60498 8.60303 6.7127 8.60303 6.86612L8.60303 17.5264C8.60303 17.67 8.71709 17.7868 8.87344 17.7868C9.03184 17.7868 9.13614 17.67 9.13614 17.5264L9.13614 13.5146L10.8571 11.7908L15.4277 17.564C15.5629 17.7312 15.6065 17.768 15.7653 17.768C15.9008 17.768 16.0351 17.6623 16.0351 17.4912C16.0351 17.3749 15.9633 17.2949 15.9076 17.2338L11.2569 11.3734L15.5484 7.04854C15.6172 6.98878 15.6408 6.92129 15.6408 6.84063C15.6408 6.71065 15.5247 6.60498 15.4018 6.60498C15.273 6.60498 15.2236 6.63067 15.1053 6.74834Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
