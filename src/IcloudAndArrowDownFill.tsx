import React from 'react'

export default function IcloudAndArrowDownFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.6099 29.1002' className={className}>
      <path
        d='M5.63887 21.9047L14.1616 21.9047L14.1616 14.5488C14.1616 14.4184 14.2587 14.3129 14.3899 14.3129C14.5203 14.3129 14.6174 14.4184 14.6174 14.5488L14.6174 21.9047L24.2429 21.9047C27.4609 21.9047 29.2486 19.8968 29.2486 17.1851C29.2486 14.9902 28.0108 13.0103 25.4576 12.3445C25.6985 7.1246 22.0516 3.17314 17.3653 3.17314C13.9013 3.17314 11.6722 5.12851 10.4902 7.51015C7.66524 6.52636 4.38369 8.52314 4.45361 11.846C1.8416 11.946 0 13.9215 0 16.6019C0 19.6304 2.01436 21.9047 5.63887 21.9047Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.3892 29.1002C14.4503 29.1002 14.5178 29.0675 14.5692 29.0259L19.3703 24.1868C19.4274 24.1298 19.4517 24.0818 19.4517 24.02C19.4517 23.8894 19.3278 23.7669 19.2244 23.7669C19.1549 23.7669 19.0756 23.8094 19.0199 23.858L16.3691 26.5066L14.6353 28.2516L14.6491 26.5512L14.6491 21.904C14.6491 21.7629 14.531 21.6454 14.3892 21.6454C14.2481 21.6454 14.1299 21.7629 14.1299 21.904L14.1299 26.5512L14.1438 28.2704L12.3911 26.5066L9.73185 23.858C9.68459 23.8094 9.6046 23.7669 9.53507 23.7669C9.41349 23.7669 9.3085 23.8894 9.3085 24.02C9.3085 24.0818 9.33351 24.1298 9.38077 24.1868L14.2099 29.0259C14.2612 29.0675 14.3287 29.1002 14.3892 29.1002Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
