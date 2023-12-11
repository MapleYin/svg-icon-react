import React from 'react'

export default function SquareResizeUp({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3086 22.0018' className={className}>
      <path
        d='M0.604886 8.1586C0.933794 8.1586 1.20137 7.8917 1.20137 7.55371C1.20137 7.22549 0.933794 6.95791 0.604886 6.95791C0.26758 6.95791 0 7.22549 0 7.55371C0 7.8917 0.26758 8.1586 0.604886 8.1586ZM0.604886 4.70723C0.933794 4.70723 1.20137 4.43965 1.20137 4.10235C1.20137 3.77412 0.933794 3.50654 0.604886 3.50654C0.26758 3.50654 0 3.77412 0 4.10235C0 4.43965 0.26758 4.70723 0.604886 4.70723ZM0.604886 1.25587C0.933794 1.25587 1.20137 0.988286 1.20137 0.650979C1.20137 0.322071 0.933794 0.0551754 0.604886 0.0551754C0.26758 0.0551754 0 0.322071 0 0.650979C0 0.988286 0.26758 1.25587 0.604886 1.25587ZM4.06602 1.25587C4.40401 1.25587 4.6709 0.988286 4.6709 0.650979C4.6709 0.322071 4.40401 0.0551754 4.06602 0.0551754C3.73779 0.0551754 3.47022 0.322071 3.47022 0.650979C3.47022 0.988286 3.73779 1.25587 4.06602 1.25587ZM7.52647 1.25587C7.85538 1.25587 8.12296 0.988286 8.12296 0.650979C8.12296 0.322071 7.85538 0.0551754 7.52647 0.0551754C7.18916 0.0551754 6.92158 0.322071 6.92158 0.650979C6.92158 0.988286 7.18916 1.25587 7.52647 1.25587ZM10.9778 1.25587C11.3067 1.25587 11.5743 0.988286 11.5743 0.650979C11.5743 0.322071 11.3067 0.0551754 10.9778 0.0551754C10.6405 0.0551754 10.373 0.322071 10.373 0.650979C10.373 0.988286 10.6405 1.25587 10.9778 1.25587ZM14.4481 1.25587C14.777 1.25587 15.0445 0.988286 15.0445 0.650979C15.0445 0.322071 14.777 0.0551754 14.4481 0.0551754C14.1107 0.0551754 13.8432 0.322071 13.8432 0.650979C13.8432 0.988286 14.1107 1.25587 14.4481 1.25587ZM17.8994 1.25587C18.2283 1.25587 18.4959 0.988286 18.4959 0.650979C18.4959 0.322071 18.2283 0.0551754 17.8994 0.0551754C17.5621 0.0551754 17.2945 0.322071 17.2945 0.650979C17.2945 0.988286 17.5621 1.25587 17.8994 1.25587ZM21.3515 1.25587C21.6797 1.25587 21.9473 0.988286 21.9473 0.650979C21.9473 0.322071 21.6797 0.0551754 21.3515 0.0551754C21.0135 0.0551754 20.7459 0.322071 20.7459 0.650979C20.7459 0.988286 21.0135 1.25587 21.3515 1.25587ZM21.3515 4.70723C21.6797 4.70723 21.9473 4.43965 21.9473 4.10235C21.9473 3.77412 21.6797 3.50654 21.3515 3.50654C21.0135 3.50654 20.7459 3.77412 20.7459 4.10235C20.7459 4.43965 21.0135 4.70723 21.3515 4.70723ZM21.3515 8.1586C21.6797 8.1586 21.9473 7.8917 21.9473 7.55371C21.9473 7.22549 21.6797 6.95791 21.3515 6.95791C21.0135 6.95791 20.7459 7.22549 20.7459 7.55371C20.7459 7.8917 21.0135 8.1586 21.3515 8.1586ZM21.3515 11.6288C21.6797 11.6288 21.9473 11.3612 21.9473 11.0239C21.9473 10.695 21.6797 10.4281 21.3515 10.4281C21.0135 10.4281 20.7459 10.695 20.7459 11.0239C20.7459 11.3612 21.0135 11.6288 21.3515 11.6288ZM21.3515 15.0802C21.6797 15.0802 21.9473 14.8133 21.9473 14.4753C21.9473 14.1471 21.6797 13.8795 21.3515 13.8795C21.0135 13.8795 20.7459 14.1471 20.7459 14.4753C20.7459 14.8133 21.0135 15.0802 21.3515 15.0802ZM21.3515 18.5322C21.6797 18.5322 21.9473 18.2647 21.9473 17.9357C21.9473 17.5984 21.6797 17.3309 21.3515 17.3309C21.0135 17.3309 20.7459 17.5984 20.7459 17.9357C20.7459 18.2647 21.0135 18.5322 21.3515 18.5322ZM21.3515 22.0018C21.6797 22.0018 21.9473 21.7349 21.9473 21.3969C21.9473 21.0687 21.6797 20.8011 21.3515 20.8011C21.0135 20.8011 20.7459 21.0687 20.7459 21.3969C20.7459 21.7349 21.0135 22.0018 21.3515 22.0018ZM17.8994 22.0018C18.2283 22.0018 18.4959 21.7349 18.4959 21.3969C18.4959 21.0687 18.2283 20.8011 17.8994 20.8011C17.5621 20.8011 17.2945 21.0687 17.2945 21.3969C17.2945 21.7349 17.5621 22.0018 17.8994 22.0018ZM14.4299 22.0018C14.7581 22.0018 15.0257 21.7349 15.0257 21.3969C15.0257 21.0687 14.7581 20.8011 14.4299 20.8011C14.0919 20.8011 13.8243 21.0687 13.8243 21.3969C13.8243 21.7349 14.0919 22.0018 14.4299 22.0018Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.517679 21.9718L10.5957 21.9718C10.9253 21.9718 11.1134 21.783 11.1134 21.4541L11.1134 12.5524L10.9293 12.7359C10.8207 12.8535 10.7087 12.9196 10.5869 12.981L10.5869 21.2125C10.5869 21.3386 10.4893 21.4362 10.3541 21.4362L0.759286 21.4362C0.633211 21.4362 0.535555 21.3386 0.535555 21.2125L0.535555 11.6456C0.535555 11.5195 0.633211 11.4219 0.759286 11.4219L8.97626 11.4219C9.04462 11.2792 9.12959 11.147 9.2584 11.0182L9.38184 10.8863L0.517679 10.8863C0.188771 10.8863 0 11.0751 0 11.4131L0 21.4541C0 21.783 0.188771 21.9718 0.517679 21.9718Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.89756 12.0778C10.0068 12.1878 10.1725 12.1955 10.2908 12.0778L15.1545 7.29161L16.6365 8.77501C16.8798 9.01827 17.2094 8.87677 17.2896 8.5129L18.1587 4.44063C18.2298 4.10674 17.9559 3.86143 17.6213 3.94161L13.5686 4.7919C13.2033 4.87208 13.0632 5.1626 13.3064 5.40655L14.7808 6.89903L9.89756 11.6762C9.78896 11.7848 9.78056 11.9686 9.89756 12.0778Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}