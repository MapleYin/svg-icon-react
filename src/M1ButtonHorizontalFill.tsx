import React from 'react'

export function M1ButtonHorizontalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.8677 20.86' className={className}>
      <path
        d='M27.5064 8.321L27.5064 12.5194C27.5064 18.3924 25.7084 20.8495 19.2236 20.8495L8.28273 20.8495C1.78887 20.8495 0 18.3924 0 12.5194L0 8.321C0 2.44805 1.78887 0 8.28273 0L19.2236 0C25.7084 0 27.5064 2.44805 27.5064 8.321ZM13.6741 5.70431L11.1055 14.6345L11.0287 14.6345L8.43077 5.70431C8.33809 5.4042 8.15636 5.22725 7.92188 5.22725C7.59883 5.22725 7.42207 5.41241 7.42207 5.73614L7.42207 15.3069C7.42207 15.4857 7.54248 15.6439 7.72832 15.6439C7.90508 15.6439 8.03458 15.5039 8.03458 15.3069L8.03458 6.42628L8.07637 6.42628L10.5885 15.0948C10.6609 15.3268 10.7709 15.5226 11.058 15.5226C11.3465 15.5226 11.4544 15.3638 11.5353 15.0941L14.0397 6.42628L14.0717 6.42628L14.0717 15.3069C14.0717 15.5228 14.218 15.6439 14.3961 15.6439C14.5749 15.6439 14.7024 15.4857 14.7024 15.3069L14.7024 5.73614C14.7024 5.39219 14.5347 5.22725 14.2109 5.22725C13.9381 5.22725 13.7668 5.38604 13.6741 5.70431ZM18.4075 5.4585L16.5676 6.99571C16.4806 7.07022 16.4515 7.13067 16.4515 7.23292C16.4515 7.39444 16.5496 7.5212 16.7195 7.5212C16.8052 7.5212 16.849 7.48985 16.9033 7.45577L18.5732 6.09435L18.5732 15.2819C18.5732 15.4601 18.7263 15.6132 18.9044 15.6132C19.0623 15.6132 19.2154 15.4601 19.2154 15.2819L19.2154 5.59054C19.2154 5.40489 19.063 5.24405 18.8767 5.24405C18.6895 5.24405 18.5357 5.34424 18.4075 5.4585Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
