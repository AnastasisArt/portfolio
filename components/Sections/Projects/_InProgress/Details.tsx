import React from "react";
import Image from "next/image";
import type { ProjectDict } from "@/lib/i18n/dicts";
import {
  Title,
  Subtitle,
  DetailContent,
  DetailImage,
  RoleLabel,
  Text,
} from "../Common.styles";
import devine1Img from "@/public/images/devine1.png";
import devine2Img from "@/public/images/devine2.png";
import devine3Img from "@/public/images/devine3.png";

type Props = { dict: ProjectDict<"inprogress"> };

export default function InProgressDetails({ dict }: Props) {
  const d = dict.details;

  return (
    <DetailContent>
      <Title className="no-margin">{dict.title}</Title>
      <Subtitle>{dict.subtitle}</Subtitle>

      <RoleLabel>{d.section1Title}</RoleLabel>
      <Text>{d.section1Text}</Text>

      <RoleLabel>{d.section2Title}</RoleLabel>
      <Text>{d.section2Text1}</Text>
      <Text>{d.section2Text2}</Text>
      <Text>{d.section2Text3}</Text>
      <Text>{d.section2Text4}</Text>

      <DetailImage className={"full"}>
        <Image src={devine1Img} alt={d.image1Alt} />
      </DetailImage>

      <RoleLabel>{d.section3Title}</RoleLabel>
      <Text>{d.section3Text1}</Text>
      <Text>{d.section3Text2}</Text>
      <Text>{d.section3Text3}</Text>

      <RoleLabel>{d.section4Title}</RoleLabel>
      <Text>{d.section4Text1}</Text>
      <Text>{d.section4Text2}</Text>

      <DetailImage className={"small"}>
        <Image src={devine2Img} alt={d.image2Alt} />
      </DetailImage>

      <RoleLabel>{d.section5Title}</RoleLabel>
      <Text>{d.section5Text1}</Text>
      <Text>{d.section5Text2}</Text>
      <Text>{d.section5Text3}</Text>

      <RoleLabel>{d.section6Title}</RoleLabel>
      <Text>{d.section6Text}</Text>

      <DetailImage className={"large"}>
        <Image src={devine3Img} alt={d.image3Alt} />
      </DetailImage>

      <RoleLabel>{d.section7Title}</RoleLabel>
      <Text>{d.section7Text1}</Text>
      <Text>{d.section7Text2}</Text>
      <Text>{d.section7Text3}</Text>
      <Text>{d.section7Text4}</Text>

      <RoleLabel>{d.section8Title}</RoleLabel>
      <Text>{d.section8Text1}</Text>
      <Text>{d.section8Text2}</Text>
    </DetailContent>
  );
}