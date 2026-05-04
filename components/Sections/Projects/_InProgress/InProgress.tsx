import React from "react";
import Image from "next/image";
import inProgressImg from "@/public/images/devine2.png";
import { Container, Left, Right, Title, Text, Subtitle, ViewDetailsLink } from "../Common.styles";
import InProgressProjectStacks from "./Stacks";
import type {Common, ProjectDict} from "@/lib/i18n/dicts";

type Props = {
  dict: ProjectDict<"inprogress">;
  common: Common;
  detailsHref: string;
};

export default function InProgress({ dict, common, detailsHref }: Props) {
  return (
    <Container>
      <Left>
        <Image src={inProgressImg} alt={dict.details.projectImage} priority />
      </Left>

      <Right>
        <Title className="no-margin margin-top" as="h3">{dict.title}</Title>
        <Subtitle as="p">{dict.subtitle}</Subtitle>

        <Text>{dict.description1}</Text>
        <Text>{dict.description2}</Text>

        <ViewDetailsLink href={detailsHref}>
          {common.viewDetails}
        </ViewDetailsLink>

        <InProgressProjectStacks />
      </Right>
    </Container>
  );
}