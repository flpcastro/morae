/* eslint-disable react/display-name */
import { cn } from "@/utils/cn";
import { ComponentProps, forwardRef } from "react";
import { XCircle } from "react-feather";

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, id, placeholder, error, className, ...props}, ref) => {
    const inputId = id || name;

    return (
      <>
        <input 
          ref={ref}
          name={name}
          placeholder={placeholder}
          id={inputId}
          {...props}
          className={
            cn(
              "w-80 bg-white border border-dark100 px-3 h-[52px] text-dark100 peer",
              error && "!border-red-500",
              className
            )
          }
        />

        {error && (
          <div className="flex gap-2 items-center text-red-500">
            <XCircle size={18} />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </>
    )
  }
)