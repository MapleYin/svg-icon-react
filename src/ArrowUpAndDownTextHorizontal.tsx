import React from 'react'

export function ArrowUpAndDownTextHorizontal({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.556 22.3457' className={className}>
      <path
        d='M3.12251 22.1049L5.19087 19.3797C5.45914 19.0467 5.29674 18.5833 4.88579 18.5833L2.94292 18.5833L2.94292 3.79397L4.88579 3.79397C5.29537 3.79397 5.46051 3.33127 5.19087 2.98781L3.12251 0.263296C2.8729-0.0580912 2.43023-0.0476419 2.19946 0.263296L0.131785 2.98781C-0.137846 3.33127 0.0272916 3.79397 0.436181 3.79397L2.38042 3.79397L2.38042 18.5833L0.436181 18.5833C0.0272916 18.5833-0.137846 19.0453 0.131785 19.3797L2.19946 22.1049C2.43091 22.4165 2.8729 22.4354 3.12251 22.1049Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.66735 1.50198L29.9394 1.50198C30.0987 1.50198 30.1973 1.40471 30.1973 1.24475C30.1973 1.08547 30.0987 0.979116 29.9394 0.979116L9.66735 0.979116C9.50807 0.979116 9.4108 1.08547 9.4108 1.24475C9.4108 1.40471 9.50807 1.50198 9.66735 1.50198ZM9.66735 8.13147L29.9394 8.13147C30.0987 8.13147 30.1973 8.03352 30.1973 7.87424C30.1973 7.71496 30.0987 7.60792 29.9394 7.60792L9.66735 7.60792C9.50807 7.60792 9.4108 7.71496 9.4108 7.87424C9.4108 8.03352 9.50807 8.13147 9.66735 8.13147ZM9.66735 14.7603L29.9394 14.7603C30.0987 14.7603 30.1973 14.663 30.1973 14.5037C30.1973 14.3438 30.0987 14.2374 29.9394 14.2374L9.66735 14.2374C9.50807 14.2374 9.4108 14.3438 9.4108 14.5037C9.4108 14.663 9.50807 14.7603 9.66735 14.7603ZM9.66735 21.3898L21.7166 21.3898C21.8849 21.3898 21.9829 21.2918 21.9829 21.1325C21.9829 20.9733 21.8849 20.8669 21.7166 20.8669L9.66735 20.8669C9.50807 20.8669 9.4108 20.9733 9.4108 21.1325C9.4108 21.2918 9.50807 21.3898 9.66735 21.3898Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
