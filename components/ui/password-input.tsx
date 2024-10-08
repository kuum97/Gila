'use client';

import { forwardRef } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input, InputProps } from '@/components/ui/input';

interface Props extends InputProps {
  handleToggle: () => void;
}

const PasswordInput = forwardRef<HTMLInputElement, Props>(
  ({ className, handleToggle, ...props }, ref) => {
    const disabled = props.value === '' || props.value === undefined || props.disabled;

    return (
      <div className="relative">
        <Input className={className} ref={ref} {...props} />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleToggle}
          disabled={disabled}
          tabIndex={-1}
          className="absolute top-0.5 right-0"
        >
          {props.type === 'password' && !disabled ? (
            <EyeIcon aria-hidden="true" tabIndex={-1} color="#A4A1AA" size={20} />
          ) : (
            <EyeOffIcon aria-hidden="true" tabIndex={-1} color="#A4A1AA" size={20} />
          )}
        </Button>
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
