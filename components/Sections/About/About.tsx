import React from "react";
import InitializingAna from "./Presentation/Presentation";
import anaImage from "@/public/images/ana.png";
import { Wrapper, LeftSection, RightSection, Photo } from "./styles";
import type { Common } from "@/lib/i18n/dicts";

type Props = {
  subtitle_role: Common["subtitle_role"];
  about_text: Common["about_text"];
};

export default function About({ subtitle_role, about_text }: Props) {
  return (
    <Wrapper id="me">
      <LeftSection>
        <InitializingAna
          subtitle_role={subtitle_role}
          about_text={about_text}
        />
      </LeftSection>

      <RightSection>
        <Photo src={anaImage.src} alt="Ana" />
      </RightSection>
    </Wrapper>
  );
}
