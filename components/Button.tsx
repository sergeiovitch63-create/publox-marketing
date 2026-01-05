import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface BaseButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

interface ButtonWithHref extends BaseButtonProps {
  href: string;
}

interface ButtonWithoutHref extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> {
  href?: never;
}

type ButtonProps = ButtonWithHref | ButtonWithoutHref;

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'px-6 py-3 rounded-pill font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2';
  const variantClasses = {
    primary: 'bg-button-primary-bg text-white hover:opacity-90',
    secondary: 'bg-pastel-blue text-text-primary hover:bg-opacity-80',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

