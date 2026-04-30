'use client';
import { MenuList, ItemWrap, MenuItem, Label } from './styles';
import type { Common } from '@/lib/i18n/dicts';
import {Locale} from '@/constants/i18n';

type SectionLabels = Common['sections'];

type Props = {
  labels: SectionLabels;
  lang: Locale;
  onCloseAction: ()=> void;
};

export default function List({ labels, lang, onCloseAction }: Props) {
  return (
    <MenuList role="menu">
      <ItemWrap>
        <MenuItem
          href={`/${lang}#me`}
          role="menuitem"
          className="first"
          onClick={onCloseAction}
        >
          <Label>{labels.about}</Label>
        </MenuItem>
      </ItemWrap>

      <ItemWrap>
        <MenuItem
          href={`/${lang}#projects`}
          role="menuitem"
          onClick={onCloseAction}
        >
          <Label>{labels.work}</Label>
        </MenuItem>
      </ItemWrap>

      {/* For later */}
      {/*
      <ItemWrap>
        <MenuItem
          href={`/${lang}#stack`}
          role="menuitem"
          onClick={onCloseAction}
        >
          <Label>{labels.skills_tools}</Label>
        </MenuItem>
      </ItemWrap>
      */}

      <ItemWrap>
        <MenuItem
          href={`/${lang}#ping`}
          role="menuitem"
          className="last"
          onClick={onCloseAction}
        >
          <Label>{labels.get_in_touch}</Label>
        </MenuItem>
      </ItemWrap>
    </MenuList>
  );
}
