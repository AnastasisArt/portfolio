import React from "react";
import Image from "next/image";
import type { ProjectDict } from "@/lib/i18n/dicts";
import AgendappStacks from "./Stacks";
import agendappImg from "@/public/images/agendapp.png";
import { Role, RoleContent } from "./styles";
import {
  Container,
  Left,
  Right,
  Title,
  Text,
  Status,
  RoleLabel,
} from "../Common.styles";

type Props = {
  dict: ProjectDict<"agendapp">;
};

export default function Agendapp({ dict }: Props){
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
        <Text>{dict.contribution}</Text>

        <Role>
          <RoleLabel>{dict.roles.graphic} -</RoleLabel>
          <RoleContent>Floriane Monnini</RoleContent>
        </Role>
        <Role>
          <RoleLabel>{dict.roles.backend} -</RoleLabel>
          <RoleContent>Jérôme Duguet, Jérôme Picavet, Anastasia Vojkic</RoleContent>
        </Role>
        <Role>
          <RoleLabel>{dict.roles.mobile} -</RoleLabel>
          <RoleContent>Floriane Monnini, Jérôme Duguet</RoleContent>
        </Role>
        <Role>
          <RoleLabel>{dict.roles.web} -</RoleLabel>
          <RoleContent>Anastasia Vojkic</RoleContent>
        </Role>

        <AgendappStacks />
      </Right>
    </Container>
  );
}
