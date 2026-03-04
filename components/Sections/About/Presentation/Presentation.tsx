import React from "react";
import { Container, Title, Subtitle, Text } from "./styles";
import type { Common } from "@/lib/i18n/dicts";

type Props = Pick<Common, "subtitle_role" | "about_text">;

export default function Presentation({ subtitle_role, about_text }: Props) {
  return (
    <Container>
      <Title>
        initializing{" "}
        <span className="ana">
          Ana <span className="dots" />
        </span>
      </Title>

      <Subtitle>{subtitle_role}</Subtitle>

      <Text>
        {about_text.intro_regular1}{" "}
        <strong>{about_text.intro_strong1}</strong>
        {about_text.intro_regular2}{" "}
        <strong>{about_text.intro_strong2}</strong>
        {about_text.intro_regular3}
      </Text>
      <Text>{about_text.part1}</Text>
      <Text>{about_text.part2}</Text>
      <Text>{about_text.part3}</Text>
      <Text>{about_text.part4}</Text>
    </Container>
  );
}
