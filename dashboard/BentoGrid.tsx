import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={`h-full p-2 grid grid-cols-12 grid-rows-6 gap-2 ${className}`}
    >
      {children}
    </div>
  );
}
