import React from "react";
import Image from "next/image";
import type {Common, ProjectDict} from "@/lib/i18n/dicts";
import AgendappStacks from "./Stacks";
import agendappImg from "@/public/images/agendapp1.png";
import { Role, RoleContent } from "./styles";
import {
  Container,
  Left,
  Right,
  Title,
  Text,
  RoleLabel,
  ViewDetailsLink, Subtitle,
} from "../Common.styles";

type Props = {
  dict: ProjectDict<"agendapp">;
  common: Common;
  detailsHref: string;
};

export default function Agendapp({ dict, common, detailsHref }: Props){
  return (
    <Container>
      <Left>
        <Image src={agendappImg} alt="Agendapp" />
      </Left>

      <Right>
        <Title as="h3" className="no-margin margin-top">{dict.title}</Title>
        <Subtitle as="p">{dict.subtitle}</Subtitle>

        <Text>{dict.intro}</Text>
        <Text>{dict.contribution}</Text>

        <Role>
          <RoleLabel as="span">{dict.roles.graphic} -</RoleLabel>
          <RoleContent>Floriane Monnini</RoleContent>
        </Role>
        <Role>
          <RoleLabel as="span">{dict.roles.backend} -</RoleLabel>
          <RoleContent>Jérôme Duguet,</RoleContent>
          <RoleContent>Jérôme Picavet,</RoleContent>
          <RoleContent>Anastasia Vojkic</RoleContent>
        </Role>
        <Role>
          <RoleLabel as="span">{dict.roles.mobile} -</RoleLabel>
          <RoleContent>Floriane Monnini, </RoleContent>
          <RoleContent>Jérôme Duguet</RoleContent>
        </Role>
        <Role>
          <RoleLabel as="span">{dict.roles.web} -</RoleLabel>
          <RoleContent>Anastasia Vojkic</RoleContent>
        </Role>

        <ViewDetailsLink href={detailsHref}>
          {common.viewDetails}
        </ViewDetailsLink>

        <AgendappStacks />
      </Right>
    </Container>
  );
}
