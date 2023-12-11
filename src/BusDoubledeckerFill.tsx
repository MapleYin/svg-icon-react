import React from 'react'

export default function BusDoubledeckerFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.4888 31.633' className={className}>
      <path
        d='M1.34365 27.9397C1.34365 28.785 2.02022 29.4706 2.8753 29.4706L4.24932 29.4706C5.11348 29.4706 5.78096 28.794 5.78096 27.9397L5.78096 26.0244C7.76485 26.1632 9.9169 26.242 12.0494 26.242C14.1742 26.242 16.3256 26.1639 18.3095 26.0244L18.3095 27.9397C18.3095 28.794 18.977 29.4706 19.8411 29.4706L21.2151 29.4706C22.0702 29.4706 22.7468 28.785 22.7468 27.9397L22.7468 2.67022C22.7468 1.26074 21.9001 0.627051 20.569 0.46875C17.9309 0.166016 14.9301 0 12.0494 0C9.16173 0 6.15255 0.166016 3.52149 0.46875C2.18965 0.627051 1.34365 1.26074 1.34365 2.67022ZM3.26211 9.86992L3.26211 3.41836C3.26211 2.76221 3.63799 2.34385 4.28165 2.27481C7.25782 1.99024 9.67247 1.84375 12.0494 1.84375C14.418 1.84375 16.8333 1.99092 19.8095 2.27481C20.4531 2.34385 20.829 2.76221 20.829 3.41836L20.829 9.86992ZM3.26211 10.749L20.829 10.749L20.829 17.2777C20.829 17.9339 20.4531 18.3613 19.8095 18.4213C17.262 18.6773 14.6505 18.8056 12.0494 18.8056C9.44903 18.8056 6.82911 18.6779 4.28165 18.4213C3.63799 18.3613 3.26211 17.9339 3.26211 17.2777ZM5.20079 22.9711C4.54395 22.9711 4.06426 22.5005 4.06426 21.8443C4.06426 21.1875 4.54395 20.7078 5.20079 20.7078C5.85694 20.7078 6.32687 21.1875 6.32687 21.8443C6.32687 22.5005 5.85694 22.9711 5.20079 22.9711ZM9.22706 22.6595C8.73194 22.6595 8.41124 22.3388 8.41124 21.8437C8.41124 21.3576 8.74034 21.0285 9.22706 21.0285L14.8634 21.0285C15.3501 21.0285 15.6792 21.3576 15.6792 21.8437C15.6792 22.3388 15.3585 22.6595 14.8634 22.6595ZM18.9274 22.9711C18.2614 22.9711 17.8006 22.5005 17.8006 21.8443C17.8006 21.1875 18.2614 20.7078 18.9274 20.7078C19.5835 20.7078 20.0632 21.1875 20.0632 21.8443C20.0632 22.5005 19.5835 22.9711 18.9274 22.9711ZM1.62061 13.273L1.62061 7.07354L0.731155 7.07354C0.221486 7.07354 0 7.3377 0 7.76222L0 12.5843C0 13.0179 0.221486 13.273 0.731155 13.273ZM22.5068 13.273L23.3963 13.273C23.906 13.273 24.1275 13.0179 24.1275 12.5843L24.1275 7.76222C24.1275 7.3377 23.906 7.07354 23.3963 7.07354L22.5068 7.07354Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
