import React from 'react'

export function FigureSeatedSideAirDistributionMiddle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.6526 23.7111' className={className}>
      <path
        d='M19.1414 6.39227C20.8697 6.39227 22.2912 4.9492 22.2912 3.27947C22.2912 1.5407 20.8697 0.117166 19.1414 0.117166C17.4026 0.117166 16.0363 1.5407 16.0363 3.27947C16.0363 5.16287 17.4026 6.39227 19.1414 6.39227ZM0.413575 22.9187C1.02109 23.5744 2.06172 23.4976 2.79756 22.7234L7.79424 17.5691C7.97002 17.3927 8.09766 17.3438 8.33409 17.4422L12.5814 19.0535C15.0574 19.9874 17.257 18.8228 18.5218 16.5438L20.7401 12.5139C21.7396 10.7179 21.3984 8.8828 19.691 7.98934C18.061 7.07703 16.3536 7.76336 15.3625 9.58866L12.1032 15.5458L9.34405 14.5261C7.95186 14.0071 6.82198 14.1731 5.73252 15.3023L0.530078 20.6812C-0.186914 21.4359-0.126953 22.3594 0.413575 22.9187Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0 3.26609C0 3.40155 0.11885 3.5204 0.254986 3.5204L6.41475 3.5204L6.41475 6.12049C6.41475 6.51034 6.8793 6.66552 7.19054 6.41425L10.5759 3.71629C10.863 3.49686 10.9007 3.06531 10.5759 2.80818L7.19054 0.119995C6.87227-0.129227 6.41475 0.0295635 6.41475 0.413748L6.41475 3.02087L0.254986 3.02087C0.11885 3.02087 0 3.13064 0 3.26609Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
