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
import zonaImg from '@/public/images/zona.png'
import zona1Img from "@/public/images/zona1.png";
import zona2Img from "@/public/images/zona2.png";
import zona3Img from "@/public/images/zona3.png";
import zona4Img from "@/public/images/zona4.png";

type Props = { dict: ProjectDict<"zona"> };

export default function ZonaDetails({ dict }: Props) {
  const d = dict.details;

  return (
    <DetailContent>
      <div className="header">
        <Subtitle>{dict.subtitle}</Subtitle>
        <Title className="no-margin">{dict.title}</Title>
      </div>

      <RoleLabel>{d.section1Title}</RoleLabel>
      <Text>{d.section1Text1}</Text>
      <Text>{d.section1Text2}</Text>
      <Text>{d.section1Text3}</Text>

      <DetailImage className={"medium"}>
        <Image src={zonaImg} alt={d.projectImage} />
      </DetailImage>

      <RoleLabel>{d.section2Title}</RoleLabel>
      <Text>{d.section2Text1}</Text>
      <Text>{d.section2Text2}</Text>
      <Text>{d.section2Text3}</Text>

      <DetailImage className={"full"}>
        <Image src={zona1Img} alt={d.image1Alt} />
      </DetailImage>

      <RoleLabel>{d.section3Title}</RoleLabel>
      <Text>{d.section3Text1}</Text>
      <Text>{d.section3Text2}</Text>

      <DetailImage className="small">
        <Image src={zona2Img} alt={d.image2Alt} />
      </DetailImage>

      <RoleLabel>{d.section4Title}</RoleLabel>
      <Text>{d.section4Text1}</Text>
      <Text>{d.section4Text2}</Text>

      <RoleLabel>{d.section5Title}</RoleLabel>
      <Text>{d.section5Text1}</Text>
      <Text>{d.section5Text2}</Text>

      <RoleLabel>{d.section6Title}</RoleLabel>
      <Text>{d.section6Text1}</Text>
      <Text>{d.section6Text2}</Text>
      <Text>{d.section6Text3}</Text>

      <RoleLabel>{d.section7Title}</RoleLabel>
      <Text>{d.section7Text1}</Text>
      <DetailImage className="small">
        <Image src={zona3Img} alt={d.image3Alt} />
      </DetailImage>
      <Text>{d.section7Text2}</Text>
      <Text>{d.section7Text3}</Text>

      <RoleLabel>{d.section8Title}</RoleLabel>
      <Text>{d.section8Text1}</Text>
      <Text>{d.section8Text2}</Text>
      <Text>{d.section8Text3}</Text>

      <RoleLabel>{d.section9Title}</RoleLabel>
      <Text>{d.section9Text1}</Text>
      <Text>{d.section9Text2}</Text>

      <RoleLabel>{d.section10Title}</RoleLabel>
      <Text>{d.section10Text1}</Text>
      <Text>{d.section10Text2}</Text>

      <DetailImage className="large">
        <Image src={zona4Img} alt={d.image4Alt} />
      </DetailImage>

      <RoleLabel>{d.section11Title}</RoleLabel>
      <Text>{d.section11Text1}</Text>
      <Text>{d.section11Text2}</Text>
    </DetailContent>
  );
}