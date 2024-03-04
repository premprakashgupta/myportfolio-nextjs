import { cn } from "@/lib/utils";

export function TypographyH1({ text ,className}: { text: string,className?:string }) {
    return (
      <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",className)}>
        {text}
      </h1>
    );
  }
export function TypographyH2({ text ,className}: { text: string,className?:string }) {
    return (
      <h1 className={cn("scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0",className)}>
        {text}
      </h1>
    );
  }
  