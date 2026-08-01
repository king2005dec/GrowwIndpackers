import * as Icons from "lucide-react";
import type { ComponentType } from "react";

type IconProps = { className?: string | undefined; strokeWidth?: number | undefined };

export function Icon({
  name,
  className,
  strokeWidth = 1.9,
}: {
  name: string;
  className?: string | undefined;
  strokeWidth?: number | undefined;
}) {
  const map = Icons as unknown as Record<string, ComponentType<IconProps>>;
  const Cmp = map[name] ?? Icons.Circle;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
