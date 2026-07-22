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
        icon={<Image src={STACKS.nest.icon} alt="NestJS" />}
        label={STACKS.nest.label}
        url={STACKS.nest.url}
      />
      <StackTag
        icon={<Image src={STACKS.postgresql.icon} alt="PostgreSQL" />}
        label={STACKS.postgresql.label}
        url={STACKS.postgresql.url}
      />
      <StackTag
        icon={<Image src={STACKS.typeorm.icon} alt="TypeORM" />}
        label={STACKS.typeorm.label}
        url={STACKS.typeorm.url}
      />
      <StackTag
        icon={<Image src={STACKS.redis.icon} alt="Redis" />}
        label={STACKS.redis.label}
        url={STACKS.redis.url}
      />
      <StackTag
        icon={<Image src={STACKS.openapi.icon} alt="OpenAPI" />}
        label={STACKS.openapi.label}
        url={STACKS.openapi.url}
      />
      <StackTag
        icon={<Image src={STACKS.swagger.icon} alt="Swagger" />}
        label={STACKS.swagger.label}
        url={STACKS.swagger.url}
      />
      <StackTag
        icon={<Image src={STACKS.next.icon} alt="Next.js" />}
        label={STACKS.next.label}
        url={STACKS.next.url}
      />
      <StackTag
        icon={<Image src={STACKS.styled.icon} alt="Styled Components" />}
        label={STACKS.styled.label}
        url={STACKS.styled.url}
      />
      <StackTag
        icon={<Image src={STACKS.docker.icon} alt="Docker" />}
        label={STACKS.docker.label}
        url={STACKS.docker.url}
      />
      <StackTag
        icon={<Image src={STACKS.linux.icon} alt="Linux" />}
        label={STACKS.linux.label}
        url={STACKS.linux.url}
      />
      <StackTag
        icon={<Image src={STACKS.githubactions.icon} alt="GitHub Actions" />}
        label={STACKS.githubactions.label}
        url={STACKS.githubactions.url}
      />
      <StackTag
        icon={<Image src={STACKS.ghcr.icon} alt="GitHub Container Registry" />}
        label={STACKS.ghcr.label}
        url={STACKS.ghcr.url}
      />
      <StackTag
        icon={<Image src={STACKS.caddy.icon} alt="Caddy" />}
        label={STACKS.caddy.label}
        url={STACKS.caddy.url}
      />
      <StackTag
        icon={<Image src={STACKS.cloudflare.icon} alt="Cloudflare R2" />}
        label={STACKS.cloudflare.label}
        url={STACKS.cloudflare.url}
      />
      <StackTag
        icon={<Image src={STACKS.git.icon} alt="Git" />}
        label={STACKS.git.label}
        url={STACKS.git.url}
      />
    </StackGroup>
  );
}