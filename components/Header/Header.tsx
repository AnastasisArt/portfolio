import Menu from './Menu/Menu';
import MosaicMenu from './MosaicMenu/MosaicMenu';
import type { Common } from '@/lib/i18n/dicts';
import { HeaderBar, Row, Left, Right } from './styles';

type SectionLabels = Common['sections'];
type HeaderProps = { labels: SectionLabels; };

export default function Header({ labels }: HeaderProps) {
  return (
    <HeaderBar role="banner">
      <Row>
        <Left>
          <Menu labels={labels} />
        </Left>

        <Right aria-label="Menu mosaïque">
          <MosaicMenu labels={labels} />
        </Right>
      </Row>
    </HeaderBar>
  );
}
