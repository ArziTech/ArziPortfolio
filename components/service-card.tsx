import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  className?: string;
  service_package: string;
  children?: React.ReactNode;
}
const ServiceCard = ({
  className,
  service_package,
  children,
}: ServiceCardProps) => {
  return (
    <CardSpotlight
      className={cn(
        "min-h-96 min-w-80  max-w-full lg:max-w-[25rem]",
        className
      )}
    >
      <h3 className="text-xl h3 !font-medium relative z-20 mt-2 text-white">
        {service_package}
      </h3>

      {children}
    </CardSpotlight>
  );
};
export default ServiceCard;
