import Menu from './Menu/Menu';
import MosaicMenu from './MosaicMenu/MosaicMenu';
import type { Common } from '@/lib/i18n/dicts';
import type { Locale } from '@/constants/i18n';
import { HeaderBar, Row, Left, Right } from './styles';

type SectionLabels = Common['sections'];
type HeaderProps = { labels: SectionLabels; lang: Locale; };

export default function Header({ labels, lang }: HeaderProps) {
  return (
    <HeaderBar>
      <Row>
        <Left>
          <Menu labels={labels} lang={lang} />
        </Left>

        <Right aria-label="Menu mosaïque">
          <MosaicMenu labels={labels} lang={lang} />
        </Right>
      </Row>
    </HeaderBar>
  );
}
