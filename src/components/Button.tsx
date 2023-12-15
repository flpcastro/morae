import { cn } from "@/utils/cn";
import { ComponentProps } from "react";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({ children, isLoading, disabled, className, ...props}: ButtonProps) {
  return (
    <button
     {...props}
      disabled={disabled || isLoading}
      className={cn(
        "bg-dark100 text-white font-medium text-lg leading-5 h-12 py-3 px-8 flex items-center justify-center",
        className
      )} 
    >
      { !isLoading && children }
      { isLoading && <Spinner /> }
    </button>
  )
}