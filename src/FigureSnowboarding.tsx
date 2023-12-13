import React from 'react'

export function FigureSnowboarding({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.8142 22.4313' className={className}>
      <path
        d='M16.3519 5.01963C17.7378 5.01963 18.8572 3.89043 18.8572 2.49619C18.8572 1.11035 17.7378 0 16.3519 0C14.9668 0 13.8285 1.11035 13.8285 2.49619C13.8285 3.89043 14.9668 5.01963 16.3519 5.01963ZM7.35467 20.0778C7.89519 20.3931 8.6617 20.2355 9.01463 19.6761L11.8526 15.1475L14.918 15.3239L13.002 18.3893C12.6296 18.9591 12.7963 19.7444 13.3856 20.0778C13.9555 20.3931 14.6731 20.2361 15.0261 19.6761L18.0119 14.9215C18.5029 14.1445 18.0907 13.1423 17.0006 13.0153L11.9809 12.4553C11.4802 12.4058 11.3121 11.8764 11.5485 11.513L13.6214 8.38907C13.7497 8.19239 14.0238 8.15196 14.2107 8.26143L21.8333 12.8389C22.3933 13.173 23.1787 12.9958 23.4932 12.4364C23.8176 11.8471 23.6404 11.1106 23.0615 10.7758L8.0033 1.73877C7.8157 1.6209 7.60994 1.57207 7.40281 1.57207L2.57078 1.57207C1.90261 1.57207 1.36208 2.10283 1.36208 2.75147C1.36208 3.42803 1.90261 3.96924 2.57078 3.96924L7.04988 3.96924L9.15271 5.22676C9.39754 5.37325 9.45613 5.6292 9.29988 5.86495L6.70535 9.77422C5.30066 11.8848 6.44168 14.6669 9.09275 15.0094L6.97107 18.3893C6.60769 18.9591 6.76531 19.7054 7.35467 20.0778ZM3.06179 22.4201L21.3911 22.4201C22.6318 22.4201 23.5628 22.1823 24.3229 21.531C24.4552 21.421 24.4999 21.2322 24.3954 21.1055C24.2916 20.9508 24.1008 20.9628 23.9497 21.0909C23.257 21.628 22.5455 21.8526 21.3911 21.8526L3.06179 21.8526C1.90808 21.8526 1.19587 21.628 0.522045 21.0909C0.363255 20.983 0.193331 20.9683 0.0881549 21.0741C-0.0470022 21.2184-0.0218073 21.4099 0.129952 21.531C0.890109 22.1823 1.82175 22.4201 3.06179 22.4201Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
