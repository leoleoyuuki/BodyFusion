import { cn } from "@/lib/utils";
import { Dumbbell } from "lucide-react";

export function BodyFusionLogo({ className }: { className?: string }) {
  return (
    <a href="#" className={cn("flex items-center gap-2", className)}>
      <Dumbbell className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold font-headline">
        BodyFusion
      </span>
    </a>
  );
}
