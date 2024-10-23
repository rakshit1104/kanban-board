// components/Icons.js
export const Icons = {
    // Display dropdown icon
    ChevronDown: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10L4 6H12L8 10Z" fill="#374151"/>
      </svg>
    ),
  
    // Priority icons
    SignalUrgent: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.66666 13.3333H5.33333V2.66666H2.66666V13.3333ZM6.66666 13.3333H9.33333V6.66666H6.66666V13.3333ZM10.6667 13.3333H13.3333V9.33333H10.6667V13.3333Z" fill="#FC7840"/>
      </svg>
    ),
  
    SignalHigh: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.66666 13.3333H5.33333V6.66666H2.66666V13.3333ZM6.66666 13.3333H9.33333V6.66666H6.66666V13.3333ZM10.6667 13.3333H13.3333V9.33333H10.6667V13.3333Z" fill="#FC7840"/>
      </svg>
    ),
  
    SignalMedium: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.66666 13.3333H5.33333V6.66666H2.66666V13.3333ZM6.66666 13.3333H9.33333V9.33333H6.66666V13.3333Z" fill="#FC7840"/>
      </svg>
    ),
  
    SignalLow: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.66666 13.3333H5.33333V9.33333H2.66666V13.3333Z" fill="#FC7840"/>
      </svg>
    ),
  
    NoPriority: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8.5C2 7.67157 2.67157 7 3.5 7C4.32843 7 5 7.67157 5 8.5C5 9.32843 4.32843 10 3.5 10C2.67157 10 2 9.32843 2 8.5Z" fill="#787486"/>
        <path d="M7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5C10 9.32843 9.32843 10 8.5 10C7.67157 10 7 9.32843 7 8.5Z" fill="#787486"/>
        <path d="M12 8.5C12 7.67157 12.6716 7 13.5 7C14.3284 7 15 7.67157 15 8.5C15 9.32843 14.3284 10 13.5 10C12.6716 10 12 9.32843 12 8.5Z" fill="#787486"/>
      </svg>
    ),
  
    // Add icon
    Plus: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V14M2 8H14" stroke="#787486" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  
    // Feature Request icon
    FeatureRequest: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7" stroke="#787486" strokeWidth="1.5"/>
        <path d="M8 4V8.5M8 11.5V12" stroke="#787486" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  };
  
  export default Icons;