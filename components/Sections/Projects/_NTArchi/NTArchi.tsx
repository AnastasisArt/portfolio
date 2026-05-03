import React from "react";
import Image from "next/image";
import Link from "next/link";
import ntarchiImg from "@/public/images/nt-archi.png";
import {
  Container,
  Left,
  Right,
  Title,
  Text,
  Subtitle,
  RoleLabel, ViewDetailsLink,
} from "../Common.styles";
import NTArchiStacks from "./Stacks";
import type {Common, ProjectDict} from "@/lib/i18n/dicts";

type Props = {
  dict: ProjectDict<"ntarchi">;
  common: Common;
  detailsHref: string;
};

export default function NTArchi({ dict, common, detailsHref }: Props) {
  return (
    <Container>
      <Left>
        <Image src={ntarchiImg} alt="Nicolas Thurin Architecte" />
      </Left>

      <Right>
        <Title className="no-margin">
          <Link
            href="https://thurin-architecte.fr/"
            className="titleLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.title}
          </Link>{" "}
        </Title>

        <Subtitle>{dict.subtitle}</Subtitle>
        <Text>{dict.description}</Text>

        <RoleLabel>{dict.frontendTitle}</RoleLabel>
        <Text>{dict.frontend}</Text>

        <RoleLabel>{dict.backendTitle}</RoleLabel>
        <Text>{dict.backend}</Text>

        <RoleLabel>{dict.deploymentTitle}</RoleLabel>
        <Text>{dict.deployment}</Text>

        <ViewDetailsLink href={detailsHref}>
          {common.viewDetails}
        </ViewDetailsLink>

        <NTArchiStacks />
      </Right>
    </Container>
  );
}
