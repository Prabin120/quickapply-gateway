
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardHoverProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
  cardClassName?: string;
}

export const CardHover = forwardRef<HTMLDivElement, CardHoverProps>(
  (
    {
      className,
      containerClassName,
      cardClassName,
      children,
      direction = "right",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group/card relative h-full w-full",
          containerClassName
        )}
        {...props}
      >
        <div
          className={cn(
            "absolute inset-0 duration-300 transition-all ease-out-expo group-hover/card:opacity-100 opacity-0",
            direction === "right"
              ? "group-hover/card:translate-x-3 group-hover/card:translate-y-3"
              : "group-hover/card:-translate-x-3 group-hover/card:translate-y-3",
            "bg-primary/10 rounded-xl z-[1]"
          )}
        ></div>
        <div
          className={cn(
            "relative h-full rounded-xl bg-white z-[2] overflow-hidden",
            "duration-300 transition-all ease-out-expo shadow-sm hover:shadow-xl",
            "border border-border",
            cardClassName
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

CardHover.displayName = "CardHover";
