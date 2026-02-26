//Util to insert separators between menu items
import type { ReactNode } from "react";

export function intersperse(
  items: ReactNode[],
  separator: (index: number)=> ReactNode
): ReactNode[] {
  const result: ReactNode[] = [];
  for (let index = 0; index < items.length; index += 1) {
    if (index > 0) result.push(separator(index));
    result.push(items[index]);
  }

  return result;
}
