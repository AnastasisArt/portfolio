import React from "react";
import type { ProjectDict } from "@/lib/i18n/dicts";
import {
    Title,
    Subtitle,
    DetailContent,
    RoleLabel,
    Text, DetailImage,
} from "../Common.styles";
import Image from 'next/image';
import ntarchi from '@/public/images/nt-archi.png';
import ntarchi2 from '@/public/images/nt-archi2.png';
import ntarchi3 from '@/public/images/nt-archi3.png';
import ntarchi4 from '@/public/images/nt-archi4.png';
import ntarchi5 from '@/public/images/nt-archi5.png';
import ntarchi6 from '@/public/images/nt-archi6.png';
import ntarchi7 from '@/public/images/nt-archi7.png';
import ntarchi8 from '@/public/images/nt-archi8.png';

type Props = { dict: ProjectDict<"ntarchi"> };

export default function NTArchiDetails({ dict }: Props) {
  const d = dict.details;

  return (
    <DetailContent>
      <Title className="margin-top">{dict.title}</Title>
      <Subtitle>{dict.subtitle}</Subtitle>

      <RoleLabel>{d.section1Title}</RoleLabel>
      <Text>{d.section1Text1}</Text>
      <Text>{d.section1Text2}</Text>
      <Text>{d.section1Text3}</Text>

      <DetailImage className={"medium"}>
          <Image src={ntarchi} alt={d.projectImage} />
      </DetailImage>

      <RoleLabel>{d.section2Title}</RoleLabel>
      <Text>{d.section2Text1}</Text>
      <Text>{d.section2Text2}</Text>

      <RoleLabel>{d.section3Title}</RoleLabel>
      <Text>{d.section3Text1}</Text>
      <Text>{d.section3Text2}</Text>
      <Text>{d.section3Text3}</Text>

      <DetailImage className={"small"}>
          <Image src={ntarchi2} alt={d.image1Alt} />
      </DetailImage>

      <RoleLabel>{d.section4Title}</RoleLabel>
      <Text>{d.section4Text1}</Text>
      <Text>{d.section4Text2}</Text>
      <DetailImage className={"medium"}>
          <Image src={ntarchi3} alt={d.image2Alt} />
      </DetailImage>

      <RoleLabel>{d.section5Title}</RoleLabel>
      <Text>{d.section5Text1}</Text>
      <Text>{d.section5Text2}</Text>

      <RoleLabel>{d.section6Title}</RoleLabel>
      <Text>{d.section6Text1}</Text>
      <Text>{d.section6Text2}</Text>
      <Text>{d.section6Text3}</Text>

      <RoleLabel>{d.section7Title}</RoleLabel>
      <Text>{d.section7Text1}</Text>
      <DetailImage className={"xsmall"}>
          <Image src={ntarchi4} alt={d.image3Alt} />
      </DetailImage>
      <Text>{d.section7Text2}</Text>
      <Text>{d.section7Text3}</Text>
      <DetailImage className={"xxxsmall"}>
          <Image src={ntarchi5} alt={d.image4Alt} />
      </DetailImage>

      <RoleLabel>{d.section8Title}</RoleLabel>
      <Text>{d.section8Text1}</Text>
      <DetailImage className={"medium"}>
          <Image src={ntarchi6} alt={d.image5Alt} />
      </DetailImage>
      <Text>{d.section8Text2}</Text>

      <RoleLabel>{d.section9Title}</RoleLabel>
      <Text>{d.section9Text1}</Text>
      <Text>{d.section9Text2}</Text>
      <Text>{d.section9Text3}</Text>
      <Text>{d.section9Text4}</Text>

      <RoleLabel>{d.section10Title}</RoleLabel>
      <Text>{d.section10Text1}</Text>
      <Text>{d.section10Text2}</Text>
      <Text>{d.section10Text3}</Text>
      <DetailImage className={"medium"}>
        <Image src={ntarchi7} alt={d.image6Alt} />
      </DetailImage>

      <RoleLabel>{d.section11Title}</RoleLabel>
      <Text>{d.section11Text1}</Text>
      <Text>{d.section11Text2}</Text>
      <Text>{d.section11Text3}</Text>
      <Text>{d.section11Text4}</Text>
      <Text>{d.section11Text5}</Text>
      <Text>{d.section11Text6}</Text>

      <RoleLabel>{d.section12Title}</RoleLabel>
      <Text>{d.section12Text1}</Text>
      <Text>{d.section12Text2}</Text>
      <Text>{d.section12Text3}</Text>
      <DetailImage className={"small"}>
        <Image src={ntarchi8} alt={d.image7Alt} />
      </DetailImage>

      <RoleLabel>{d.section13Title}</RoleLabel>
      <Text>{d.section13Text1}</Text>
      <Text>{d.section13Text2}</Text>
      <Text>{d.section13Text3}</Text>
      <Text>{d.section13Text4}</Text>
    </DetailContent>
  );
}