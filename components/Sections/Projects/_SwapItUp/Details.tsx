import React from "react";
import type { ProjectDict } from "@/lib/i18n/dicts";
import {
  Title,
  Subtitle,
  DetailContent,
  Text,
} from "../Common.styles";

type Props = { dict: ProjectDict<"swapitup"> };

export default function SwapItUpDetails({ dict }: Props) {
  return (
    <DetailContent>
      <Title className="margin-top">{dict.title}</Title>
      <Subtitle>{dict.subtitle}</Subtitle>

      <Text></Text>
    </DetailContent>
  );
}