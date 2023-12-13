import React from 'react'

export function LockDocFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5424' className={className}>
      <path
        d='M9.55899 8.76895C9.55899 9.92003 10.1363 10.5162 11.2874 10.5162L20.0314 10.5162L20.0314 23.3611C20.0314 25.435 18.926 26.5424 16.8528 26.5424L3.1876 26.5424C1.10537 26.5424 0 25.4356 0 23.3611L0 3.23643C0 1.16192 1.14307 0.0551754 3.1876 0.0551754L9.55899 0.0551754ZM7.42783 14.929L7.42783 16.5017C6.61846 16.4953 6.22354 16.8657 6.22354 17.7469L6.22354 22.1144C6.22354 22.9892 6.61211 23.3603 7.40948 23.3603L12.6421 23.3603C13.4304 23.3603 13.828 22.9892 13.828 22.1144L13.828 17.7469C13.828 16.8657 13.4324 16.4953 12.6237 16.5017L12.6237 14.929C12.6237 13.2881 11.5797 12.2002 10.0167 12.2002C8.45303 12.2002 7.42783 13.2881 7.42783 14.929ZM12.1544 14.941L12.1544 16.501L7.89717 16.501L7.89717 14.941C7.89717 13.5618 8.74834 12.6759 10.0167 12.6759C11.3025 12.6759 12.1544 13.5618 12.1544 14.941ZM10.9936 0.67598L19.4106 9.07255C19.583 9.24502 19.797 9.43018 19.8206 9.62578L11.4459 9.62578C10.7662 9.62578 10.4494 9.30899 10.4494 8.6293L10.4494 0.265234C10.6262 0.316113 10.8225 0.503516 10.9936 0.67598Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
