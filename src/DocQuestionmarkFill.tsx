import React from 'react'

export default function DocQuestionmarkFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5424' className={className}>
      <path
        d='M4.53878 16.5809C4.37452 16.5809 4.24502 16.4507 4.24502 16.2969C4.24502 16.1521 4.37452 16.0227 4.53878 16.0227L15.568 16.0227C15.7315 16.0227 15.861 16.1521 15.861 16.2969C15.861 16.4507 15.7315 16.5809 15.568 16.5809ZM4.53878 20.5815C4.37452 20.5815 4.24502 20.4611 4.24502 20.308C4.24502 20.1542 4.37452 20.0331 4.53878 20.0331L10.0017 20.0331C10.1743 20.0331 10.3038 20.1542 10.3038 20.308C10.3038 20.4611 10.1743 20.5815 10.0017 20.5815ZM9.85157 10.8547C9.6916 10.8547 9.56348 10.7188 9.56348 10.54C9.56348 10.3711 9.56348 10.2217 9.56348 10.0625C9.56348 9.15723 9.88057 8.55449 10.9077 7.86231C12.0353 7.0627 12.4175 6.54766 12.4175 5.76485C12.4175 4.69093 11.5019 3.90792 10.0217 3.90792C8.59288 3.90792 7.61573 4.96768 7.64337 5.98662L7.66104 6.10157C7.67735 6.29121 7.52676 6.39297 7.34913 6.39297C7.17217 6.39297 7.06719 6.28574 7.06719 6.08311C7.06719 5.91777 7.06787 5.82715 7.07901 5.69951C7.19668 4.47383 8.2921 3.34473 10.0537 3.34473C11.792 3.34473 13.0019 4.40166 13.0019 5.71465C13.0019 6.72305 12.5928 7.42208 11.3487 8.26006C10.4249 8.92227 10.1403 9.3458 10.1403 10.0945C10.1403 10.2446 10.1403 10.385 10.1403 10.5351C10.1403 10.7252 9.99268 10.8547 9.85157 10.8547ZM9.83272 13.8073C9.41934 13.8073 9.10361 13.4657 9.10361 13.0816C9.10361 12.7053 9.41865 12.3455 9.83272 12.3455C10.2363 12.3455 10.5695 12.7046 10.5695 13.0816C10.5695 13.4664 10.235 13.8073 9.83272 13.8073ZM0 23.3611C0 25.4356 1.10537 26.5424 3.1876 26.5424L16.8528 26.5424C18.926 26.5424 20.0314 25.4356 20.0314 23.3611L20.0314 3.23643C20.0314 1.16192 18.926 0.0551754 16.8528 0.0551754L3.1876 0.0551754C1.10537 0.0551754 0 1.16192 0 3.23643Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}