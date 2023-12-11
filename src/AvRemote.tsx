import React from 'react'

export default function AvRemote({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12.8862 27.5701' className={className}>
      <path
        d='M2.54444 27.5331L9.98956 27.5331C11.6598 27.5331 12.5249 26.6707 12.5249 24.978L12.5249 2.5544C12.5249 0.871487 11.6598 0 9.98956 0L2.54444 0C0.865139 0 0 0.871487 0 2.5544L0 24.978C0 26.6707 0.865139 27.5331 2.54444 27.5331ZM2.55743 27.0046C1.21983 27.0046 0.529891 26.3069 0.529891 24.9721L0.529891 2.56104C0.529891 1.22618 1.21983 0.528524 2.55743 0.528524L9.97657 0.528524C11.3051 0.528524 12.0041 1.22618 12.0041 2.56104L12.0041 24.9721C12.0041 26.3069 11.3051 27.0046 9.97657 27.0046ZM6.88204 3.71094L9.57667 3.71094C9.98887 3.71094 10.2937 3.40616 10.2937 2.99395C10.2937 2.58174 9.98887 2.27696 9.57667 2.27696L6.88204 2.27696C6.46983 2.27696 6.16505 2.58174 6.16505 2.99395C6.16505 3.40616 6.46983 3.71094 6.88204 3.71094ZM3.04346 8.81329C3.69981 8.81329 4.19083 8.32227 4.19083 7.66592C4.19083 7.02002 3.69981 6.51016 3.04346 6.51016C2.3878 6.51016 1.88702 7.02002 1.88702 7.66592C1.88702 8.32227 2.3878 8.81329 3.04346 8.81329ZM6.25792 8.81329C6.91358 8.81329 7.4046 8.32227 7.4046 7.66592C7.4046 7.02002 6.91358 6.51016 6.25792 6.51016C5.60157 6.51016 5.10147 7.02002 5.10147 7.66592C5.10147 8.32227 5.60157 8.81329 6.25792 8.81329ZM9.48213 8.81329C10.1385 8.81329 10.6386 8.32227 10.6386 7.66592C10.6386 7.02002 10.1385 6.51016 9.48213 6.51016C8.82579 6.51016 8.33477 7.02002 8.33477 7.66592C8.33477 8.32227 8.82579 8.81329 9.48213 8.81329ZM3.04346 12.3387C3.69981 12.3387 4.19083 11.8379 4.19083 11.1822C4.19083 10.5454 3.69981 10.0349 3.04346 10.0349C2.3878 10.0349 1.88702 10.5454 1.88702 11.1822C1.88702 11.8379 2.3878 12.3387 3.04346 12.3387ZM6.25792 12.3387C6.91358 12.3387 7.4046 11.8379 7.4046 11.1822C7.4046 10.5454 6.91358 10.0349 6.25792 10.0349C5.60157 10.0349 5.10147 10.5454 5.10147 11.1822C5.10147 11.8379 5.60157 12.3387 6.25792 12.3387ZM9.48213 12.3387C10.1385 12.3387 10.6386 11.8379 10.6386 11.1822C10.6386 10.5454 10.1385 10.0349 9.48213 10.0349C8.82579 10.0349 8.33477 10.5454 8.33477 11.1822C8.33477 11.8379 8.82579 12.3387 9.48213 12.3387ZM3.04346 15.8543C3.69981 15.8543 4.19083 15.3633 4.19083 14.7076C4.19083 14.0617 3.69981 13.5512 3.04346 13.5512C2.3878 13.5512 1.88702 14.0617 1.88702 14.7076C1.88702 15.3633 2.3878 15.8543 3.04346 15.8543ZM6.25792 15.8543C6.91358 15.8543 7.4046 15.3444 7.4046 14.7076C7.4046 14.0513 6.91358 13.5512 6.25792 13.5512C5.60157 13.5512 5.10147 14.0513 5.10147 14.7076C5.10147 15.3444 5.60157 15.8543 6.25792 15.8543ZM9.48213 15.8543C10.1385 15.8543 10.6386 15.3444 10.6386 14.7076C10.6386 14.0513 10.1385 13.5512 9.48213 13.5512C8.82579 13.5512 8.33477 14.0513 8.33477 14.7076C8.33477 15.3444 8.82579 15.8543 9.48213 15.8543ZM2.77003 24.2234C3.26036 24.2234 3.64395 23.8398 3.64395 23.3404L3.64395 18.749C3.64395 18.2496 3.26036 17.866 2.77003 17.866C2.27061 17.866 1.88702 18.2496 1.88702 18.749L1.88702 23.3404C1.88702 23.8398 2.27061 24.2234 2.77003 24.2234ZM5.64268 20.4328L6.86338 20.4328C7.26583 20.4328 7.45342 20.225 7.45342 19.8428L7.45342 19.0225C7.45342 18.6396 7.26583 18.4324 6.86338 18.4324L5.64268 18.4324C5.26046 18.4324 5.05264 18.6396 5.05264 19.0225L5.05264 19.8428C5.05264 20.225 5.26046 20.4328 5.64268 20.4328ZM5.64268 23.657L6.86338 23.657C7.26583 23.657 7.45342 23.4499 7.45342 23.067L7.45342 22.2467C7.45342 21.8645 7.26583 21.6566 6.86338 21.6566L5.64268 21.6566C5.26046 21.6566 5.05264 21.8645 5.05264 22.2467L5.05264 23.067C5.05264 23.4499 5.26046 23.657 5.64268 23.657ZM9.75557 24.2234C10.255 24.2234 10.6386 23.8398 10.6386 23.3404L10.6386 18.749C10.6386 18.2496 10.255 17.866 9.75557 17.866C9.26524 17.866 8.88165 18.2496 8.88165 18.749L8.88165 23.3404C8.88165 23.8398 9.26524 24.2234 9.75557 24.2234Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
