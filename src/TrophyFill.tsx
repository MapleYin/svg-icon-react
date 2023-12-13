import React from 'react'

export function TrophyFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.0868 25.0121' className={className}>
      <path
        d='M0 3.22081C0 7.56896 1.64307 9.78937 4.99416 11.7095C6.09738 13.4676 7.5839 14.8194 8.99571 15.6324L8.99571 20.6416L6.27716 20.6416C5.23663 20.6416 4.60362 21.2522 4.60362 22.3054L4.60362 24.736C4.60362 24.8883 4.70294 24.9926 4.8797 24.9926L15.8451 24.9926C16.0226 24.9926 16.1219 24.8883 16.1219 24.736L16.1219 22.3054C16.1219 21.2522 15.4889 20.6416 14.4484 20.6416L11.7298 20.6416L11.7298 15.6324C13.1416 14.8194 14.6281 13.4676 15.7314 11.7095C19.0824 9.78937 20.7255 7.56896 20.7255 3.22081C20.7255 2.37315 20.0993 1.79444 19.1568 1.79444L17.4703 1.79444C17.4866 0.725391 16.818 0 15.782 0L4.94347 0C3.96339 0 3.23888 0.651368 3.26427 1.79444L1.57784 1.79444C0.626173 1.79444 0 2.37315 0 3.22081ZM0.535555 3.23106C0.535555 2.69425 0.903425 2.3173 1.44932 2.3173L3.26993 2.3173L3.26993 5.74483C3.26993 7.56807 3.73165 9.25391 4.44864 10.7047C1.91319 9.09093 0.535555 6.84298 0.535555 3.23106ZM16.2769 10.7047C16.9939 9.25391 17.4647 7.56807 17.4647 5.74483L17.4647 2.3173L19.2755 2.3173C19.8221 2.3173 20.199 2.69425 20.199 3.23106C20.199 6.84298 18.8123 9.09093 16.2769 10.7047Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
