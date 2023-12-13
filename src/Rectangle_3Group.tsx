import React from 'react'

export function Rectangle_3Group({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.7368 20.9813' className={className}>
      <path
        d='M1.51895 9.82989L14.437 9.82989C15.4131 9.82989 15.956 9.38965 15.956 8.30322L15.956 1.57774C15.956 0.491311 15.4131 0.0517571 14.437 0.0517571L1.51895 0.0517571C0.543557 0.0517571 0 0.491311 0 1.57774L0 8.30322C0 9.38965 0.543557 9.82989 1.51895 9.82989ZM1.53692 9.30703C0.803818 9.30703 0.52286 9.02676 0.52286 8.2916L0.52286 1.59845C0.52286 0.862606 0.803818 0.574617 1.53692 0.574617L14.419 0.574617C15.1612 0.574617 15.4331 0.862606 15.4331 1.59845L15.4331 8.2916C15.4331 9.02676 15.1612 9.30703 14.419 9.30703ZM4.73253 20.9813L16.0547 20.9813C17.0301 20.9813 17.5736 20.5501 17.5736 19.4637L17.5736 14.3348C17.5736 13.2581 17.0301 12.8179 16.0547 12.8179L4.73253 12.8179C3.75645 12.8179 3.21289 13.2581 3.21289 14.3348L3.21289 19.4637C3.21289 20.5501 3.75645 20.9813 4.73253 20.9813ZM4.7589 20.4584C4.01671 20.4584 3.73575 20.1781 3.73575 19.4437L3.73575 14.3555C3.73575 13.6196 4.01671 13.3407 4.7589 13.3407L16.036 13.3407C16.7698 13.3407 17.0508 13.6196 17.0508 14.3555L17.0508 19.4437C17.0508 20.1781 16.7698 20.4584 16.036 20.4584ZM21.3167 19.7469L30.8566 19.7469C31.841 19.7469 32.3755 19.3157 32.3755 18.2286L32.3755 3.0004C32.3755 1.91465 31.841 1.47442 30.8566 1.47442L21.3167 1.47442C20.3406 1.47442 19.7978 1.91465 19.7978 3.0004L19.7978 18.2286C19.7978 19.3157 20.3406 19.7469 21.3167 19.7469ZM21.3431 19.2324C20.6016 19.2324 20.3206 18.9528 20.3206 18.2086L20.3206 3.02179C20.3206 2.28595 20.6016 1.99728 21.3431 1.99728L30.8379 1.99728C31.5808 1.99728 31.8526 2.28595 31.8526 3.02179L31.8526 18.2086C31.8526 18.9528 31.5808 19.2324 30.8379 19.2324Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
