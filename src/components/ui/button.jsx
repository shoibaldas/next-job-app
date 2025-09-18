import React from 'react';
import { cn } from '@/lib/utils';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  iconOnly = false,
  disabled = false,
  loading = false,
  customColor = null,
  className,
  ...props
}) => {
  // Base button classes
  const baseClasses = [
    'btn',
    'inline-flex',
    'items-center',
    'justify-center',
    'font-family-primary',
    'font-weight-bold',
    'text-decoration-none',
    'cursor-pointer',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'gap-xs',
    'focus:outline-none',
    'focus:ring-1',
    'focus:ring-offset-2',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:pointer-events-none',
    'rounded-none',
    'border-0'
  ];

  // Variant classes
  const variantClasses = {
    primary: [
      'bg-[#2563EB]',
      'text-text-white',
      'border-[#314DDF]',
      'hover:bg-[#1D4ED8]',
      'hover:transform',
      'hover:-translate-y-1',
      'hover:shadow-md',
      'focus:ring-[#2563EB]'
    ],
    secondary: [
      'bg-white',
      'text-[#262626]',
      'border-[#262626]',
      'hover:bg-gray-100',
      'hover:transform',
      'hover:-translate-y-1',
      'hover:shadow-md',
      'focus:ring-[#262626]'
    ],
    outline: [
      'bg-transparent',
      'text-brand-primary',
      'border-brand-primary',
      'hover:bg-brand-primary',
      'hover:text-text-white',
      'focus:ring-brand-primary'
    ],
    ghost: [
      'bg-transparent',
      'text-text-primary',
      'border-transparent',
      'hover:bg-gray-100',
      'hover:text-text-primary',
      'focus:ring-gray-300'
    ],
    danger: [
      'bg-red-600',
      'text-text-white',
      'border-red-600',
      'hover:bg-red-700',
      'hover:transform',
      'hover:-translate-y-1',
      'hover:shadow-md',
      'focus:ring-red-500'
    ],
    success: [
      'bg-green-600',
      'text-text-white',
      'border-green-600',
      'hover:bg-green-700',
      'hover:transform',
      'hover:-translate-y-1',
      'hover:shadow-md',
      'focus:ring-green-500'
    ]
  };

  const customColorClasses = customColor
    ? [
      customColor.background,
      customColor.text,
      customColor.border || 'border-0',
      customColor.hover,
      customColor.focus
    ]
    : [];

  // Size classes (defaults that can be overridden)
  const sizeClasses = {
    xs: ['text-xs', 'gap-1'],
    sm: ['text-sm', 'gap-1'],
    md: ['text-base', 'gap-2'],
    lg: ['text-lg', 'gap-2'],
    xl: ['text-xl', 'gap-3']
  };

  // Icon-only specific classes
  const iconOnlyClasses = {
    xs: ['p-1', 'w-6', 'h-6'],
    sm: ['p-1.5', 'w-8', 'h-8'],
    md: ['p-2', 'w-10', 'h-10'],
    lg: ['p-3', 'w-12', 'h-12'],
    xl: ['p-4', 'w-14', 'h-14']
  };

  // Combine all classes
  const buttonClasses = cn(
    baseClasses,
    customColor ? customColorClasses : variantClasses[variant] || variantClasses.primary,
    iconOnly ? iconOnlyClasses[size] : sizeClasses[size],
    iconOnly && 'rounded-full',
    className
  );


  // Loading spinner component
  const LoadingSpinner = () => (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  // Render icon
  const renderIcon = () => {
    if (!icon) return null;

    const sizeClass =
      size === 'xs' ? 'w-3 h-3' :
        size === 'sm' ? 'w-4 h-4' :
          size === 'md' ? 'w-5 h-5' :
            size === 'lg' ? 'w-6 h-6' :
              'w-7 h-7';

    const colorClass = customColor?.text || '';

    return React.cloneElement(icon, {
      className: cn('icon', sizeClass, colorClass)
    });
  };


  // Render content based on icon-only or text+icon
  const renderContent = () => {
    if (loading) {
      return (
        <>
          <LoadingSpinner />
          {!iconOnly && children}
        </>
      );
    }

    if (iconOnly) {
      return renderIcon();
    }

    if (icon) {
      return (
        <>
          {iconPosition === 'left' && renderIcon()}
          {children}
          {iconPosition === 'right' && renderIcon()}
        </>
      );
    }

    return children;
  };

  if (props.href) {
    return (
      <a
        className={buttonClasses}
        aria-disabled={disabled || loading || props.href === '#'}
        tabIndex={disabled || loading || props.href === '#' ? -1 : 0}
        {...props}
      >
        {renderContent()}
      </a>
    );
  }
  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading || props.href === '#'}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
