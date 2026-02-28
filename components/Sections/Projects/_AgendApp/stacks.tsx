import Image from 'next/image';
import { STACKS } from '@/constants/stacks';
import StackTag from '../StackTag/StackTag';
import { StackGroup } from '../Common.styles';

export default function AgendappStacks() {
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
        icon={<Image src={STACKS.react.icon} alt="React" />}
        label={STACKS.react.label}
        url={STACKS.react.url}
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
        icon={<Image src={STACKS.i18next.icon} alt="i18next" />}
        label={STACKS.i18next.label}
        url={STACKS.i18next.url}
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
        icon={<Image src={STACKS.git.icon} alt="GIT" />}
        label={STACKS.git.label}
        url={STACKS.git.url}
      />
      <StackTag
        icon={<Image src={STACKS.docker.icon} alt="Docker" />}
        label={STACKS.docker.label}
        url={STACKS.docker.url}
      />
      <StackTag
        icon={<Image src={STACKS.swagger.icon} alt="Swagger" />}
        label={STACKS.swagger.label}
        url={STACKS.swagger.url}
      />
    </StackGroup>
  );
}