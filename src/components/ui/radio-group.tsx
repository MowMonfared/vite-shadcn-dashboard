import * as React from 'react';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid w-full gap-2', className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        `
          peer relative flex aspect-square size-5 shrink-0
          items-center justify-center rounded-full
          border border-input bg-background outline-none
          transition-colors

          after:absolute after:-inset-x-3 after:-inset-y-2

          data-[state=checked]:border-foreground
          data-[state=checked]:bg-foreground

          focus-visible:border-ring
          focus-visible:ring-3
          focus-visible:ring-ring/50

          disabled:cursor-not-allowed
          disabled:opacity-50

          aria-invalid:border-destructive
          aria-invalid:ring-3
          aria-invalid:ring-destructive/20
        `,
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-full items-center justify-center"
      >
        <span className="size-2 rounded-full bg-background" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
