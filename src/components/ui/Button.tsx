import { FC, HtmlHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm uppercase transition-color foucs:outline-none focus:ring-2 focus:ring-slate-600",
  {
    variants: {
      variant: {
        default: "bg-blue-800 text-white hover:bg-blue-600",
        ghost: "bg-slate-800 text-white hover:bg-slate-600",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
        full: "h-9 w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      type="button"
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 h-2 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
};

export default Button;
