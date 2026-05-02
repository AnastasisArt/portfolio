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
  Status,
  RoleLabel,
  ViewDetailsLink,
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
        <Title>
          {dict.title} <Status>({dict.inProgress})</Status>
        </Title>

        <Text>{dict.intro}</Text>
        <Text>{dict.intro2}</Text>
        <Text>{dict.contribution}</Text>
        <Text>{dict.contribution2}</Text>

        <Role>
          <RoleLabel>{dict.roles.graphic} -</RoleLabel>
          <RoleContent>Floriane Monnini</RoleContent>
        </Role>
        <Role>
          <RoleLabel>{dict.roles.backend} -</RoleLabel>
          <RoleContent>Jérôme Duguet,</RoleContent>
          <RoleContent>Jérôme Picavet,</RoleContent>
          <RoleContent>Anastasia Vojkic</RoleContent>
        </Role>
        <Role>
          <RoleLabel>{dict.roles.mobile} -</RoleLabel>
          <RoleContent>Floriane Monnini, </RoleContent>
          <RoleContent>Jérôme Duguet</RoleContent>
        </Role>
        <Role>
          <RoleLabel>{dict.roles.web} -</RoleLabel>
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
