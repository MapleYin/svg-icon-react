import React from 'react'

export default function TextformatSizeSmaller({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.8836 13.2855' className={className}>
      <path
        d='M0.271099 13.2729C0.429695 13.2729 0.486532 13.2117 0.552647 13.0567L2.38047 8.36866L8.14043 8.36866L9.96826 13.0567C10.0357 13.204 10.073 13.2729 10.2693 13.2729C10.388 13.2729 10.5223 13.186 10.5223 13.0247C10.5223 12.9649 10.5098 12.8954 10.4855 12.8343L5.5295 0.195514C5.49425 0.0686544 5.39922 0 5.26465 0C5.10351 0 5.02734 0.076369 4.98369 0.195514L0.0354499 12.8343C0.0118166 12.9031 0 12.9643 0 13.0247C0 13.1867 0.115432 13.2729 0.271099 13.2729ZM2.60606 7.83291L5.25645 1.04112L5.26446 1.04112L7.91621 7.83291Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
