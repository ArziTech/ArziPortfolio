import React from "react";
import { cn } from "@/lib/utils";
const H1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h1 className={cn("h1", className)}>{children}</h1>;
};
export default H1;
