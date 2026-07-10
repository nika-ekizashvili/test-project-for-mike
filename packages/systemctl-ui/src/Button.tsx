import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading = false, ...props }, ref) => {
    const variantStyles: Record<string, string> = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
      danger: 'bg-red-600 hover:bg-red-700 text-white',
    };

    const sizeStyles: Record<string, string> = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const baseStyles =
      'font-semibold rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

    const className = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      props.className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={className}
        {...props}
      >
        {isLoading ? 'Loading...' : props.children}
      </button>
    );
  }
);

Button.displayName = 'Button';
