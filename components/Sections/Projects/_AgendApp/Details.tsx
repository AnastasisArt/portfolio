import React from "react";
import Image from "next/image";
import type { ProjectDict } from "@/lib/i18n/dicts";
import {
  Title,
  DetailContent,
  DetailImage,
  RoleLabel,
  Text,
} from "../Common.styles";
import agendapp1 from "@/public/images/agendapp1.png";
import agendapp2 from "@/public/images/agendapp2.png";
import agendapp3 from "@/public/images/agendapp3.png";
import agendapp4 from "@/public/images/agendapp4.png";
import agendapp5 from "@/public/images/agendapp5.png";
import agendapp6 from "@/public/images/agendapp6.png";
import agendapp7 from "@/public/images/agendapp7.png";

type Props = { dict: ProjectDict<"agendapp"> };

export default function AgendAppDetails({ dict }: Props) {
  const d = dict.details;

  return (
    <DetailContent>
      <Title className="margin-top">{dict.title}</Title>

      <RoleLabel>{d.section1Title}</RoleLabel>
      <Text>{d.section1Text1}</Text>
      <Text>{d.section1Text2}</Text>

      <DetailImage className="small">
        <Image src={agendapp1} alt={d.projectImage} />
      </DetailImage>

      <RoleLabel>{d.section2Title}</RoleLabel>
      <Text>{d.section2Text1}</Text>
      <Text>{d.section2Text2}</Text>
      <Text>{d.section2Text3}</Text>
      <Text>{d.section2Text4}</Text>
      <Text>{d.section2Text5}</Text>

      <RoleLabel>{d.section3Title}</RoleLabel>
      <Text>{d.section3Text1}</Text>
      <Text>{d.section3Text2}</Text>
      <Text>{d.section3Text3}</Text>
      <Text>{d.section3Text4}</Text>

      <RoleLabel>{d.section4Title}</RoleLabel>
      <Text>{d.section4Text1}</Text>
      <Text>{d.section4Text2}</Text>
      <Text>{d.section4Text3}</Text>

      <DetailImage className="full">
        <Image src={agendapp2} alt={d.image1Alt} />
      </DetailImage>

      <RoleLabel>{d.section5Title}</RoleLabel>
      <Text>{d.section5Text1}</Text>
      <Text>{d.section5Text2}</Text>
      <Text>{d.section5Text3}</Text>
      <Text>{d.section5Text4}</Text>
      <Text>{d.section5Text5}</Text>

      <RoleLabel>{d.section6Title}</RoleLabel>
      <Text>{d.section6Text1}</Text>
      <DetailImage className="medium">
        <Image src={agendapp3} alt={d.image2Alt} />
      </DetailImage>
      <Text>{d.section6Text2}</Text>
      <Text>{d.section6Text3}</Text>

      <RoleLabel>{d.section7Title}</RoleLabel>
      <Text>{d.section7Text1}</Text>
      <Text>{d.section7Text2}</Text>
      <Text>{d.section7Text3}</Text>

      <DetailImage className="small">
        <Image src={agendapp4} alt={d.image3Alt} />
      </DetailImage>

      <RoleLabel>{d.section8Title}</RoleLabel>
      <Text>{d.section8Text1}</Text>
      <Text>{d.section8Text2}</Text>

      <RoleLabel>{d.section9Title}</RoleLabel>
      <Text>{d.section9Text1}</Text>
      <Text>{d.section9Text2}</Text>

      <RoleLabel>{d.section10Title}</RoleLabel>
      <Text>{d.section10Text1}</Text>
      <Text>{d.section10Text2}</Text>
      <Text>{d.section10Text3}</Text>

      <DetailImage className="xsmall">
        <Image src={agendapp5} alt={d.image4Alt} />
      </DetailImage>

      <RoleLabel>{d.section11Title}</RoleLabel>
      <Text>{d.section11Text1}</Text>
      <Text>{d.section11Text2}</Text>

      <DetailImage className="medium">
        <Image src={agendapp6} alt={d.image5Alt} />
      </DetailImage>

      <DetailImage className="xxxsmall">
        <Image src={agendapp7} alt={d.image6Alt} />
      </DetailImage>

      <RoleLabel>{d.section12Title}</RoleLabel>
      <Text>{d.section12Text1}</Text>
      <Text>{d.section12Text2}</Text>
      <Text>{d.section12Text3}</Text>
      <Text>{d.section12Text4}</Text>
    </DetailContent>
  );
}