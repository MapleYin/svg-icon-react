import React from 'react'

export default function QuestionmarkFolderFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.7587 21.7588' className={className}>
      <path
        d='M8.82764 0.928418L9.46085 1.54434C10.1696 2.22881 10.6495 2.35146 11.8399 2.35146L24.2161 2.35146C26.2906 2.35146 27.3974 3.49385 27.3974 5.53907L27.3974 18.5344C27.3974 20.5789 26.2913 21.722 24.1821 21.722L3.18125 21.722C1.10674 21.722 0 20.6159 0 18.5344L0 2.66602C0 0.881936 0.88262 0 2.7125 0L6.28741 0C7.59258 0 8.00665 0.133106 8.82764 0.928418ZM12.726 17.0189C12.726 17.4091 13.0556 17.7814 13.4731 17.7814C13.9003 17.7814 14.2208 17.4098 14.2208 17.0189C14.2208 16.6195 13.901 16.2654 13.4731 16.2654C13.0549 16.2654 12.726 16.6202 12.726 17.0189ZM10.4901 8.9291C10.4776 9.06015 10.484 9.16328 10.484 9.34111C10.484 9.529 10.5826 9.63828 10.7532 9.63828C10.9245 9.63828 11.0499 9.53447 11.0259 9.35254L11.0012 9.2251C10.9622 8.08897 12.0838 6.88887 13.685 6.88887C15.3312 6.88887 16.3569 7.76182 16.3569 8.96475C16.3569 9.84024 15.9504 10.4341 14.6743 11.323C13.5761 12.0939 13.2249 12.7385 13.2249 13.6903C13.2249 13.8865 13.2249 14.0555 13.2249 14.2419C13.2249 14.408 13.3467 14.5368 13.4933 14.5368C13.6392 14.5368 13.7428 14.4137 13.7428 14.2383C13.7428 14.0609 13.7428 13.9108 13.7428 13.7335C13.7428 12.9025 14.0691 12.4086 15.1206 11.6871C16.4678 10.7592 16.8935 10.0093 16.8935 8.92295C16.8935 7.49932 15.612 6.37061 13.717 6.37061C11.8206 6.37061 10.6196 7.56719 10.4901 8.9291Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}