import Image from "next/image";
import { STACKS } from "@/constants/stacks";
import StackTag from "../StackTag/StackTag";
import { StackGroup } from "../Common.styles";

export default function InProgressStacks() {
  return (
    <StackGroup>
      <StackTag
        icon={<Image src={STACKS.typescript.icon} alt="TypeScript" />}
        label={STACKS.typescript.label}
        url={STACKS.typescript.url}
      />
      <StackTag
        icon={<Image src={STACKS.postgresql.icon} alt="PostgreSQL" />}
        label={STACKS.postgresql.label}
        url={STACKS.postgresql.url}
      />
    </StackGroup>
  );
}