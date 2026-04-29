import Image from 'next/image';
import { STACKS } from '@/constants/stacks';
import StackTag from '../StackTag/StackTag';
import { StackGroup } from '../Common.styles';

export default function NTArchiStacks() {
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
        icon={<Image src={STACKS.styled.icon} alt="Styled-components" />}
        label={STACKS.styled.label}
        url={STACKS.styled.url}
      />
      <StackTag
        icon={<Image src={STACKS.reacthookform.icon} alt="React Hook Form" />}
        label={STACKS.reacthookform.label}
        url={STACKS.reacthookform.url}
      />
      <StackTag
        icon={<Image src={STACKS.git.icon} alt="GIT" />}
        label={STACKS.git.label}
        url={STACKS.git.url}
      />
      <StackTag
        icon={<Image src={STACKS.linux.icon} alt="Linux" />}
        label={STACKS.linux.label}
        url={STACKS.linux.url}
      />
      <StackTag
        icon={<Image src={STACKS.docker.icon} alt="Docker" />}
        label={STACKS.docker.label}
        url={STACKS.docker.url}
      />
      <StackTag
        icon={<Image src={STACKS.tailwind.icon} alt="TailwindCSS" />}
        label={STACKS.tailwind.label}
        url={STACKS.tailwind.url}
      />
      <StackTag
        icon={<Image src={STACKS.illustrator.icon} alt="Illustrator" />}
        label={STACKS.illustrator.label}
        url={STACKS.illustrator.url}
      />
      <StackTag
        icon={<Image src={STACKS.photoshop.icon} alt="Photoshop" />}
        label={STACKS.photoshop.label}
        url={STACKS.photoshop.url}
      />
    </StackGroup>
  );
}