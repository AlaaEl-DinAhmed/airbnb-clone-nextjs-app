import { tv } from 'tailwind-variants';

export interface BaseButtonProps {
  label: string;
  id: string;
  children?: React.ReactNode;
  style: {
    color: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    fill: boolean;
  };
}

const button = tv({
  base: 'font-medium border-none rounded-3xl',
  variants: {
    color: {
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      fill: true,
      class:
        'bg-primary-500 border-primary-500 text-white hover:bg-secondary-500 hover:border-secondary-500',
    },
    {
      color: 'secondary',
      fill: true,
      class:
        'bg-secondary-500 border-secondary-500 text-white hover:bg-primary-500 hover:border-primary-500',
    },
    {
      size: ['sm'],
      class: 'w-6 h-6',
    },
    {
      size: ['md'],
      class: 'w-8 h-8',
    },
    {
      size: ['lg'],
      class: 'w-10 h-10',
    },
  ],
});

export function IconButton({ label, id, children, style }: BaseButtonProps) {
  return (
    <button id={id} aria-label={label} className={button(style)}>
      {children}
    </button>
  );
}

export default IconButton;
