import { cn } from "@/lib/utils";
import React from "react";

export default function ContentContainer({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return (
    <div className={cn("w-full flex justify-center", classNames)}>
      <div className="container px-[1rem] sm:px-[1.5rem]">{children}</div>
    </div>
  );
}
