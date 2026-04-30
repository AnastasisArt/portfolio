import React from "react";
import { overlays } from "./overlays";
import SwapItUpStack from "./Stacks";
import SwapItUpVideo from "./Demo/Demo";
import { Left, OverlayImage } from "./styles";
import { Container, Title, Text, Subtitle, Right } from "../Common.styles";
import type { ProjectDict } from "@/lib/i18n/dicts";

type Props = {
  dict: ProjectDict<"swapitup">;
};

export default function SwapItUp({ dict }: Props) {
  return (
    <Container className="layout-portrait">
      <Left>
        <div className="background-layer">
          {overlays.map((emoji, index) => (
            <OverlayImage
              key={index}
              src={emoji.src}
              alt={emoji.alt}
              top={emoji.top}
              bottom={emoji.bottom}
              left={emoji.left}
              width={emoji.width}
              rotate={emoji.rotate}
            />
          ))}
        </div>

        <SwapItUpVideo />
      </Left>

      <Right className="layout-portrait">
        <Title className="no-margin margin-top" $align="right">{dict.title}</Title>
        <Subtitle $align="right">{dict.subtitle}</Subtitle>
        <Text $align="right">{dict.intro}</Text>
        <Text $align="right">{dict.development}</Text>
        <Text $align="right">{dict.development2}</Text>
        <Text $align="right">{dict.development3}</Text>
        <Text $align="right">{dict.hint}</Text>

        <SwapItUpStack />
      </Right>
    </Container>
  );
}
