import { ICONS } from "@/constants/icons";
import type { IconKey } from "@/constants/icons";
import type { IconBaseProps } from "react-icons";

type IconProps = {
  name: IconKey;
  size?: number;
  color?: string;
} & IconBaseProps;

export function Icon({
  name,
  size = 18,
  color = "currentColor",
  ...props
}: IconProps) {
  const IconComponent = ICONS[name];
  return <IconComponent size={size} color={color} {...props} />;
}
