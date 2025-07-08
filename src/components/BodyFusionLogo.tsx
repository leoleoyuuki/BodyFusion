import { cn } from "@/lib/utils";
import Image from "next/image";

export function BodyFusionLogo({ className }: { className?: string }) {
  return (
    <a href="#" className={cn("flex items-center", className)}>
      <Image
        src="/images/logo.jpg"
        alt="Logo da BodyFusion"
        width={185}
        height={61}
        className="object-contain h-10 w-auto"
        priority
      />
    </a>
  );
}
