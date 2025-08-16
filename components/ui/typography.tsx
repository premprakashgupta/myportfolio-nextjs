import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH1({ text, className }: { text: string, className?: string }) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
      {text}
    </h1>
  );
}
export function TypographyH2({ text, className }: { text: string, className?: string }) {
  return (
    <h1 className={cn("scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0", className)}>
      {text}
    </h1>
  );
}

export function TypographyP({ children, className, ...props }: { children: ReactNode, className?: string }) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props}>
      {children}
    </p>
  )
}
