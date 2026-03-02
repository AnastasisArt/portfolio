import { FooterWrap, Wrap, Rule, Bottom, Version, Line } from "./styles";

type Props = {
  quotes: string[];
  year?: number;
  brand?: string;
  version?: string;
};

export default function Footer({
  quotes,
  year = new Date().getFullYear(),
  brand = "Anastasia Vojkic",
  version = "v1.0",
}: Props) {
  const randomQuote = quotes.length > 0 ? quotes[Math.floor(Math.random() * quotes.length)] : "";

  return (
    <FooterWrap>
      <Wrap aria-label="Site footer">
        <Rule />
        <Line>{randomQuote}</Line>
        <Rule />
        <Bottom>
          <span>
            © {year} {brand}
          </span>
          <Version>{version}</Version>
        </Bottom>
      </Wrap>
    </FooterWrap>
  );
}

