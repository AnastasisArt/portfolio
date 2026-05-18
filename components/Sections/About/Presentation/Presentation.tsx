"use client";
import React, { useState } from "react";
import { Container, Title, Subtitle, Text, StrongText } from "./styles";
import type { Common } from "@/lib/i18n/dicts";
import { Accordion } from "@/components/ui/Accordion/Accordion";

type Props = Pick<Common, "subtitle_role" | "about_text">;
type Section = { title: string; text?: string };

export default function Presentation({ subtitle_role, about_text }: Props) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const handleToggle = (index: number)=> {
    if (openIndex !== index) setOpenIndex(index);
  };

  const sections: (Section & { index: number })[] = [
    { index: 1, title: about_text.sections.vision.title, text: about_text.sections.vision.text },
    { index: 2, title: about_text.sections.goals.title }
  ];

  return (
    <Container>
      <Title>
        initializing{" "}
        <span className="ana">
          Ana <span className="dots" />
        </span>
        <Subtitle>{subtitle_role}</Subtitle>
      </Title>

      <Accordion
        title={about_text.sections.intro.title}
        isOpen={openIndex === 0}
        onToggle={()=> handleToggle(0)}
      >
        <Text>
          {about_text.sections.intro.text1}
        </Text>
      </Accordion>

      {sections.map((section)=> (
        <Accordion
          key={section.title}
          title={section.title}
          isOpen={openIndex === section.index}
          onToggle={()=> handleToggle(section.index)}
        >
          {section.index === 2 ? (
            <Text>
              {about_text.sections.goals.text1}
              {about_text.sections.goals.text2}
              {about_text.sections.goals.text3}
              <StrongText>{about_text.sections.goals.text_strong1}</StrongText>
              {about_text.sections.goals.text4}
              <StrongText>{about_text.sections.goals.text_strong2}</StrongText>
              {about_text.sections.goals.text5}
            </Text>
          ) : (
            <Text>{section.text ?? ""}</Text>
          )}
        </Accordion>
      ))}
    </Container>
  );
}
