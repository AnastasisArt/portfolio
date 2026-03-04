import React from 'react';
import { Container, IconWrapper, Label, Part } from './styles';

type LabelPart = {
  text: string;
  accent?: boolean;
};

type Props = {
  icon: React.ReactNode;
  label: LabelPart[];
  url: string;
};

export default function StackTag({ icon, label, url }: Props) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Container>
        <IconWrapper>{icon}</IconWrapper>
        <Label>
          {label.map((part, i) => (
            <Part key={i} $accent={part.accent}>
              {part.text}
            </Part>
          ))}
        </Label>
      </Container>
    </a>
  );
}