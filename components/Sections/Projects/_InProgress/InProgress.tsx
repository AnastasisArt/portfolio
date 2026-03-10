import React from "react";
import Image from "next/image";
import inProgressImg from "@/public/images/devine.png";
import {
  Container,
  Left,
  Right,
  Title,
  Text,
  Subtitle,
  RoleLabel,
} from "../Common.styles";
import InProgressProjectStacks from "./stacks";
import type { ProjectDict } from "@/lib/i18n/dicts";

type Props = { dict: ProjectDict<"inprogress">; };

export default function InProgress({ dict }: Props) {
  return (
    <Container>
      <Left>
        <Image src={inProgressImg} alt={dict.imageAlt} />
      </Left>

      <Right>
        <Title className="no-margin">{dict.title}</Title>

        <Subtitle>{dict.subtitle}</Subtitle>
        <Text>{dict.description}</Text>

        <RoleLabel>{dict.dataModelingTitle}</RoleLabel>
        <Text>{dict.dataModeling}</Text>

        <InProgressProjectStacks />
      </Right>
    </Container>
  );
}