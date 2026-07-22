'use client';
import { useRef, useState } from 'react';
import useClickOutside from '@/hooks/useClickOutside';
import type { Common } from '@/lib/i18n/dicts';
import type { Locale } from '@/constants/i18n';
import { CONTACTS } from '@/constants/contacts';
import { IconButton, IconContainer, IconWrapper, Tile } from './styles';
import Dropdown from './DropdownMenu/Dropdown';
import List from './MenuList/List';

type SectionLabels = Common['sections'];
type Props = { labels: SectionLabels; lang: Locale; };

const CLOSE_ANIMATION_MS = 280;
const DROPDOWN_OFFSET_PX = 12;
const TILE_INDEXES = [0, 1, 2, 3] as const;

export default function MosaicMenu({ labels, lang }: Props) {
  const [open, setOpen] = useState(false);
  //Mounted state for the dropdown rendered via a portal
  const [isMounted, setIsMounted] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const menuRootRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const unmountTimerRef = useRef<number | null>(null);

  //Prevent stale unmount timeout if reopening dropdown before close animation ends
  const cancelPendingUnmount =()=> {
    if (unmountTimerRef.current === null) return;
    window.clearTimeout(unmountTimerRef.current);
    unmountTimerRef.current = null;
  };

  const updateDropdownPosition = () => {
    const button = toggleButtonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + DROPDOWN_OFFSET_PX,
      left: rect.left + rect.width / 2,
    });
  };

  const openDropdown = () => {
    cancelPendingUnmount();
    updateDropdownPosition();
    setIsMounted(true);
    setOpen(true);
  };

  const closeDropdown =()=> {
    setOpen(false);
    cancelPendingUnmount();

    unmountTimerRef.current = window.setTimeout(()=> {
      setIsMounted(false);
      unmountTimerRef.current = null;
    }, CLOSE_ANIMATION_MS);
  };

  const toggleDropdown =()=> (open ? closeDropdown() : openDropdown());
  useClickOutside(menuRootRef, closeDropdown);

  return (
    <IconContainer ref={menuRootRef}>
      <IconButton
        ref={toggleButtonRef}
        onClick={toggleDropdown}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-haspopup="menu"
      >
      <IconWrapper open={open}>
        {TILE_INDEXES.map((index) => (
          <Tile key={index} $index={index} />
        ))}
      </IconWrapper>
      </IconButton>

      <Dropdown
        rendered={isMounted}
        open={open}
        topPx={dropdownPosition.top}
        leftPx={dropdownPosition.left}
        contacts={CONTACTS}
      >
        <List labels={labels} lang={lang} onCloseAction={closeDropdown} />
      </Dropdown>
    </IconContainer>
  );
}
