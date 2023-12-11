import React from 'react'

export default function AlignVerticalCenter({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.6789 21.3399' className={className}>
      <path
        d='M2.98994 10.9404L0.270609 10.9404C0.123146 10.9404 0 10.8236 0 10.6755C0 10.528 0.123146 10.4112 0.270609 10.4112L2.98994 10.4112ZM26.3176 10.6755C26.3176 10.8236 26.1945 10.9404 26.047 10.9404L23.3933 10.9404L23.3933 10.4112L26.047 10.4112C26.1945 10.4112 26.3176 10.528 26.3176 10.6755ZM14.8356 10.9404L11.5477 10.9404L11.5477 10.4112L14.8356 10.4112Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.52364 21.3399L10.0224 21.3399C10.9196 21.3399 11.5477 20.7195 11.5477 19.8209L11.5477 1.53077C11.5477 0.632132 10.9196 0.0125003 10.0224 0.0125003L4.52364 0.0125003C3.61797 0.0125003 2.98994 0.632132 2.98994 1.53077L2.98994 19.8209C2.98994 20.7195 3.61797 21.3399 4.52364 21.3399ZM4.54796 20.8254C3.93907 20.8254 3.5128 20.3991 3.5128 19.7909L3.5128 1.56007C3.5128 0.952548 3.93907 0.535361 4.54796 0.535361L9.99805 0.535361C10.5985 0.535361 11.0248 0.952548 11.0248 1.56007L11.0248 19.7909C11.0248 20.3991 10.5985 20.8254 9.99805 20.8254ZM16.3602 17.3645L21.8687 17.3645C22.7652 17.3645 23.3933 16.7358 23.3933 15.8455L23.3933 5.50548C23.3933 4.61592 22.7652 3.98721 21.8687 3.98721L16.3602 3.98721C15.4636 3.98721 14.8356 4.61592 14.8356 5.50548L14.8356 15.8455C14.8356 16.7358 15.4636 17.3645 16.3602 17.3645ZM16.3943 16.8409C15.7847 16.8409 15.3584 16.4153 15.3584 15.8071L15.3584 5.54454C15.3584 4.93634 15.7847 4.51007 16.3943 4.51007L21.8437 4.51007C22.4441 4.51007 22.8704 4.93634 22.8704 5.54454L22.8704 15.8071C22.8704 16.4153 22.4441 16.8409 21.8437 16.8409Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
