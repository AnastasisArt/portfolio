'use client';

import { Wrap, Rule, Line, Bottom, Version } from './styles';
import { useRandomQuote } from '@/hooks/useRandomQuotes';

type Props = {
  quotes: string[];
  year?: number;
  brand?: string;
  version?: string;
};

export default function Footer({
                                 quotes,
                                 year = 2025,
                                 brand = 'AnastasisArt',
                                 version = 'v1.0',
                               }: Props) {
  const randomQuote = useRandomQuote(quotes);

  return (
    <Wrap aria-label="Site footer">
      <Rule />
      <Line>{randomQuote}</Line>
      <Rule />
      <Bottom>
        <span>© {year} {brand}</span>
        <Version>{version}</Version>
      </Bottom>
    </Wrap>
  );
}
