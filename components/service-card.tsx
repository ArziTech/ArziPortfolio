import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  className?: string;
  service_package: string;
  price: string;
  children?: React.ReactNode;
}
const ServiceCard = ({
  className,
  service_package,
  price,
  children,
}: ServiceCardProps) => {
  return (
    <CardSpotlight
      className={cn(
        "min-h-96 min-w-80 max-w-full lg:min-w-96" + " lg:max-w-[25rem]",
        className
      )}
    >
      <h3 className="text-xl font-bold relative z-20 mt-2 text-white">
        {service_package}
      </h3>
      <p className={"font-bold text-5xl relative z-20"}>{price}</p>

      {children}
    </CardSpotlight>
  );
};
export default ServiceCard;
