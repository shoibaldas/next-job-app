import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { ThemeContext } from "@/app/context/ThemeContext";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset transition-colors",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/70 dark:bg-accent-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        primary: "bg-primary text-white",
        outline: "border dark:border-accent bg-transparent text-accent hover:bg-accent hover:text-blue-800"
      },
      size: {
        default: "h-[44px] px-6",
        sm: "h-[48px] px-6",
        lg: "h-[56px] text-sm uppercase tracking-[2px] px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const { theme } = React.useContext(ThemeContext);
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
