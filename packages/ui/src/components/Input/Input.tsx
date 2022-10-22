import { InputHTMLAttributes } from 'react';
import cn from 'classnames';

export type InputProps = {
  error?: string;
  helper?: string;
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, name, error, helper, ...props }: InputProps) => {
  const getInputClasses = () => {
    let style = cn(
      'block',
      'px-4',
      'pb-2.5',
      'pt-4',
      'w-full',
      'text-sm',
      'bg-transparent',
      'rounded-lg',
      'border',
      'appearance-none',
      'focus:outline-none',
      'peer'
    );

    if (props.disabled) {
      style = cn(style, 'bg-gray-100', 'hover:cursor-not-allowed');
    }

    if (error) {
      return cn(style, 'text-red-500', 'border-red-500');
    }

    return cn(style, 'text-gray-900', 'border-gray-200', 'focus:border-black');
  };

  const getSpanClasses = () => {
    let style = cn(
      'hover:cursor-text',
      'select-none',
      'absolute',
      'text-base',
      'duration-300',
      'transform',
      '-translate-y-4',
      'scale-75',
      'top-[0.25rem]',
      'z-1',
      'origin-[0]',
      'ml-2',
      'left-1',
      'px-2',
      'peer-focus:px-2',
      'peer-placeholder-shown:scale-100',
      'peer-placeholder-shown:-translate-y-1/2',
      'peer-placeholder-shown:top-1/2',
      'peer-placeholder-shown:py-0.5',
      'peer-placeholder-shown:text-sm',
      'peer-focus:top-[0.12rem]',
      'peer-focus:py-0.5',
      'peer-focus:scale-75',
      'peer-focus:-translate-y-4',
      'peer-focus:text-base'
    );

    if (props.placeholder !== label) {
      style = cn(
        'hover:cursor-text',
        'select-none',
        'absolute',
        'text-base',
        'duration-300',
        'transform',
        '-translate-y-4',
        'scale-75',
        'top-[0.25rem]',
        'z-1',
        'origin-[0]',
        'ml-2',
        'left-1',
        'px-2',
        'peer-focus:px-2',
        'peer-focus:top-[0.25rem]',
        'peer-focus:py-0',
        'peer-focus:scale-75',
        'peer-focus:-translate-y-4',
        'peer-focus:text-base'
      );
    }

    if (props.disabled) {
      return cn(
        style,
        'bg-gray-100',
        'rounded',
        'hover:cursor-not-allowed',
        'text-gray-400'
      );
    }

    if (error) {
      return cn(style, 'text-red-500', 'bg-white');
    }

    return cn(style, 'text-gray-500', 'peer-focus:text-black', 'bg-white');
  };

  return (
    <div>
      <div className="relative">
        <input id={name} className={getInputClasses()} {...props} />
        <label htmlFor={name} className={getSpanClasses()}>
          {label}
        </label>
      </div>
      {error && (
        <p className={cn('text-red-500', 'text-xs', 'mt-2', 'ml-2')}>{error}</p>
      )}
      {helper && <p className={cn('text-xs', 'mt-2', 'ml-2')}>{helper}</p>}
    </div>
  );
};
