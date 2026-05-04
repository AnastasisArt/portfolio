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
      <div className="header">
        <Subtitle>{dict.subtitle}</Subtitle>
        <Title className="no-margin">{dict.title}</Title>
      </div>

      <Text></Text>
    </DetailContent>
  );
}