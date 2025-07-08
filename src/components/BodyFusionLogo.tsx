import { cn } from "@/lib/utils";
import { Dumbbell } from 'lucide-react';

export function BodyFusionLogo({ className }: { className?: string }) {
  return (
    <a href="#" className={cn("flex items-center gap-2 text-2xl font-bold tracking-tight font-headline", className)}>
      <Dumbbell className="h-7 w-7 text-primary" />
      <span className="text-primary">
        BodyFusion <span className="text-foreground">SP</span>
      </span>
    </a>
  );
}
