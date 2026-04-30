import React from "react";
import type { ProjectDict } from "@/lib/i18n/dicts";
import {
  Title,
  DetailContent,
  Text,
} from "../Common.styles";

type Props = { dict: ProjectDict<"agendapp"> };

export default function AgendAppDetails({ dict }: Props) {
  return (
    <DetailContent>
      <Title className="margin-top">{dict.title}</Title>
      <Text></Text>
    </DetailContent>
  );
}