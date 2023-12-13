import React from 'react'

export function DialLowFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.6509 22.644' className={className}>
      <path
        d='M13.1451 21.4211C17.6869 21.4211 21.412 17.6799 21.412 13.1444C21.412 8.61036 17.6869 4.87823 13.1451 4.87823C8.60264 4.87823 4.87754 8.61036 4.87754 13.1444C4.87754 15.2475 5.68399 17.174 6.99825 18.6443L13.0998 12.5058C13.2034 12.4022 13.3766 12.421 13.4879 12.5058C13.5922 12.5926 13.5922 12.7902 13.4879 12.8945L7.36749 19.0527C8.86642 20.51 10.9088 21.4211 13.1451 21.4211Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.39835 22.6258C4.81719 22.6258 5.15382 22.2885 5.15382 21.8696C5.15382 21.4417 4.81719 21.1135 4.39835 21.1135C3.96973 21.1135 3.64219 21.4417 3.64219 21.8696C3.64219 22.2885 3.96973 22.6258 4.39835 22.6258ZM0.756156 13.8818C1.17501 13.8818 1.51231 13.5542 1.51231 13.1354C1.51231 12.7067 1.17501 12.3792 0.756156 12.3792C0.327541 12.3792 0 12.7067 0 13.1354C0 13.5542 0.327541 13.8818 0.756156 13.8818ZM4.39835 5.16769C4.81719 5.16769 5.15382 4.83038 5.15382 4.41153C5.15382 3.9836 4.81719 3.65537 4.39835 3.65537C3.96973 3.65537 3.64219 3.9836 3.64219 4.41153C3.64219 4.83038 3.96973 5.16769 4.39835 5.16769ZM13.1451 1.51163C13.5731 1.51163 13.9006 1.18409 13.9006 0.755472C13.9006 0.336623 13.5731 0 13.1451 0C12.7256 0 12.389 0.336623 12.389 0.755472C12.389 1.18409 12.7256 1.51163 13.1451 1.51163ZM21.8919 5.16769C22.3198 5.16769 22.6474 4.83038 22.6474 4.41153C22.6474 3.9836 22.3198 3.65537 21.8919 3.65537C21.4724 3.65537 21.1358 3.9836 21.1358 4.41153C21.1358 4.83038 21.4724 5.16769 21.8919 5.16769ZM25.5334 13.8818C25.962 13.8818 26.2896 13.5542 26.2896 13.1354C26.2896 12.7067 25.962 12.3792 25.5334 12.3792C25.1146 12.3792 24.7779 12.7067 24.7779 13.1354C24.7779 13.5542 25.1146 13.8818 25.5334 13.8818ZM21.8919 22.6258C22.3198 22.6258 22.6474 22.2885 22.6474 21.8696C22.6474 21.4417 22.3198 21.1135 21.8919 21.1135C21.4724 21.1135 21.1358 21.4417 21.1358 21.8696C21.1358 22.2885 21.4724 22.6258 21.8919 22.6258Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
