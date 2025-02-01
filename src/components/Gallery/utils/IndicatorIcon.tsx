import { IndicatorIconProps } from '../types';

export const IndicatorIcon = ({ children, onClick, className = '' }: IndicatorIconProps) => (
  <button
    onClick={(e) => {
      e.stopPropagation(); // Prevent event bubbling
      onClick(); // Call the provided onClick function
    }}
    className={`absolute top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white border-2 border-white hover:bg-black/70 transition-colors ${className}`}
  >
    {children}
  </button>
);
