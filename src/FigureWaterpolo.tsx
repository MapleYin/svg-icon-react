import React from 'react'

export default function FigureWaterpolo({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.8041 21.0236' className={className}>
      <path
        d='M14.8596 7.88467C16.2266 7.88467 17.3649 6.75547 17.3649 5.36963C17.3649 3.99356 16.2266 2.86436 14.8596 2.86436C13.4744 2.86436 12.3361 3.99356 12.3361 5.36963C12.3361 6.75547 13.4744 7.88467 14.8596 7.88467ZM9.49834 13.2648C11.6403 13.7825 12.7671 15.1375 14.2214 15.1375C14.3079 15.1375 14.4035 15.1375 14.481 15.118L15.5277 12.1205C15.6554 11.7571 15.8618 11.6107 16.2447 11.6107L26.4702 11.6107C27.1384 11.6107 27.6985 11.0506 27.6985 10.3824C27.6985 9.73311 27.1384 9.17305 26.4702 9.17305L7.21816 9.17305L5.62656 3.93858C5.42012 3.28926 4.75195 2.90703 4.11377 3.11279C3.4749 3.30039 3.12129 4.00625 3.29844 4.60674L5.0958 10.6077C5.2541 11.1671 5.68584 11.6107 6.29473 11.6107L9.57559 11.6107C9.83994 11.6107 9.97871 11.8164 9.89922 12.0619ZM8.01397 3.58496C9.00576 3.58496 9.82041 2.78916 9.82041 1.80645C9.82041 0.814649 9.00576 0 8.01397 0C7.03125 0 6.23477 0.814649 6.23477 1.80645C6.23477 2.78916 7.03125 3.58496 8.01397 3.58496ZM0.288284 17.6386L1.2917 17.6386C4.30186 17.6386 5.22911 15.5676 7.75655 15.5676C10.284 15.5676 11.2119 17.6386 14.2214 17.6386C17.2315 17.6386 18.1588 15.5676 20.6862 15.5676C23.2137 15.5676 24.1416 17.6386 27.1511 17.6386L28.1545 17.6386C28.3147 17.6386 28.4428 17.5105 28.4428 17.3503C28.4428 17.1985 28.3147 17.0704 28.1545 17.0704L27.1511 17.0704C24.5085 17.0704 23.5869 14.991 20.6862 14.991C17.7855 14.991 16.864 17.0704 14.2214 17.0704C11.5788 17.0704 10.6572 14.991 7.75655 14.991C4.85586 14.991 3.93428 17.0704 1.2917 17.0704L0.288284 17.0704C0.128126 17.0704 0 17.1985 0 17.3503C0 17.5105 0.128126 17.6386 0.288284 17.6386ZM0.694338 20.9692C0.957816 20.9692 1.15088 20.7754 1.15088 20.5126C1.15088 20.2498 0.957816 20.0561 0.694338 20.0561C0.431544 20.0561 0.238477 20.2498 0.238477 20.5126C0.238477 20.7754 0.431544 20.9692 0.694338 20.9692ZM3.02061 20.5856C3.2834 20.5856 3.48623 20.3918 3.48623 20.129C3.48623 19.8662 3.2834 19.6732 3.02061 19.6732C2.7669 19.6732 2.56475 19.8662 2.56475 20.129C2.56475 20.3918 2.7669 20.5856 3.02061 20.5856ZM5.1543 19.6328C5.41709 19.6328 5.61084 19.4307 5.61084 19.1672C5.61084 18.9135 5.41709 18.7113 5.1543 18.7113C4.89151 18.7113 4.69844 18.9135 4.69844 19.1672C4.69844 19.4307 4.89151 19.6328 5.1543 19.6328ZM7.4086 19.1216C7.67139 19.1216 7.87354 18.9194 7.87354 18.6657C7.87354 18.4029 7.67139 18.2001 7.4086 18.2001C7.15489 18.2001 6.95205 18.4029 6.95205 18.6657C6.95205 18.9194 7.15489 19.1216 7.4086 19.1216ZM9.65245 19.6328C9.91592 19.6328 10.109 19.4307 10.109 19.1672C10.109 18.9135 9.91592 18.7113 9.65245 18.7113C9.38965 18.7113 9.19658 18.9135 9.19658 19.1672C9.19658 19.4307 9.38965 19.6328 9.65245 19.6328ZM11.8154 20.5856C12.0782 20.5856 12.2713 20.3918 12.2713 20.129C12.2713 19.8662 12.0782 19.6732 11.8154 19.6732C11.5617 19.6732 11.3589 19.8662 11.3589 20.129C11.3589 20.3918 11.5617 20.5856 11.8154 20.5856ZM14.2409 20.9692C14.4946 20.9692 14.6968 20.7754 14.6968 20.5126C14.6968 20.2498 14.4946 20.0561 14.2409 20.0561C13.9781 20.0561 13.7753 20.2498 13.7753 20.5126C13.7753 20.7754 13.9781 20.9692 14.2409 20.9692ZM16.6573 20.5856C16.9201 20.5856 17.1132 20.3918 17.1132 20.129C17.1132 19.8662 16.9201 19.6732 16.6573 19.6732C16.4036 19.6732 16.2008 19.8662 16.2008 20.129C16.2008 20.3918 16.4036 20.5856 16.6573 20.5856ZM18.8287 19.6328C19.0824 19.6328 19.2853 19.4307 19.2853 19.1672C19.2853 18.9135 19.0824 18.7113 18.8287 18.7113C18.5659 18.7113 18.3631 18.9135 18.3631 19.1672C18.3631 19.4307 18.5659 19.6328 18.8287 19.6328ZM21.0642 19.1216C21.327 19.1216 21.52 18.9194 21.52 18.6657C21.52 18.4029 21.327 18.2001 21.0642 18.2001C20.8014 18.2001 20.6076 18.4029 20.6076 18.6657C20.6076 18.9194 20.8014 19.1216 21.0642 19.1216ZM23.3178 19.6328C23.5806 19.6328 23.7834 19.4307 23.7834 19.1672C23.7834 18.9135 23.5806 18.7113 23.3178 18.7113C23.0641 18.7113 22.8619 18.9135 22.8619 19.1672C22.8619 19.4307 23.0641 19.6328 23.3178 19.6328ZM25.4515 20.5856C25.7143 20.5856 25.908 20.3918 25.908 20.129C25.908 19.8662 25.7143 19.6732 25.4515 19.6732C25.1887 19.6732 24.9956 19.8662 24.9956 20.129C24.9956 20.3918 25.1887 20.5856 25.4515 20.5856ZM27.7498 20.9692C28.0126 20.9692 28.2064 20.7754 28.2064 20.5126C28.2064 20.2498 28.0126 20.0561 27.7498 20.0561C27.487 20.0561 27.2933 20.2498 27.2933 20.5126C27.2933 20.7754 27.487 20.9692 27.7498 20.9692Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
