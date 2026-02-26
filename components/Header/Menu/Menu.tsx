'use client';
import { useEffect, useRef } from 'react';
import { MenuWrap, MenuList, ItemWrap, MenuItem, Label } from './styles';
import type { Common } from '@/lib/i18n/dicts';

type SectionLabels = Common['sections'];

export default function Menu({ labels }: { labels: SectionLabels }) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(()=> {
    const root = rootRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>('[data-menu-item]')
    );

    //Measure geek & human label widths
    const syncWidths =()=> {
      for (const i of items) {
        const geek = i.querySelector('.geek');
        const human = i.querySelector('.human');
        if (!(geek instanceof HTMLElement) || !(human instanceof HTMLElement)) continue;

        const wGeek = Math.ceil(geek.getBoundingClientRect().width);
        const wHuman = Math.ceil(human.getBoundingClientRect().width);
        i.dataset.wgeek = String(wGeek);
        i.dataset.whuman = String(wHuman);
        //Apply correct width based on the hover state
        i.style.width = i.matches(':hover') ? `${wHuman}px` : `${wGeek}px`;
      }
    };

    //Show human label
    const onEnter = (e: Event)=> {
      if (!(e.currentTarget instanceof HTMLElement)) return;
      const wHuman = Number(e.currentTarget.dataset.whuman ?? 0);
      if (wHuman > 0) e.currentTarget.style.width = `${wHuman}px`;
    };
    //Show geek label
    const onLeave = (e: Event)=> {
      if (!(e.currentTarget instanceof HTMLElement)) return;
      const wGeek = Number(e.currentTarget.dataset.wgeek ?? 0);
      if (wGeek > 0) e.currentTarget.style.width = `${wGeek}px`;
    };

    const syncFrameId = requestAnimationFrame(syncWidths);

    for (const i of items) {
      i.addEventListener('mouseenter', onEnter);
      i.addEventListener('mouseleave', onLeave);
    }

    window.addEventListener('resize', syncWidths);
    void document.fonts?.ready?.then(syncWidths);

    return ()=> {
      cancelAnimationFrame(syncFrameId);
      window.removeEventListener('resize', syncWidths);

      for (const i of items) {
        i.removeEventListener('mouseenter', onEnter);
        i.removeEventListener('mouseleave', onLeave);
      }
    };
  }, []);

  return (
    <MenuWrap ref={rootRef} aria-label="Menu rapide">
      <MenuList role="menu">
        <ItemWrap role="none">
          <MenuItem href="#me" role="menuitem" data-menu-item>
            <Label className="geek">me.txt</Label>
            <Label className="human">{labels.about}</Label>
          </MenuItem>
        </ItemWrap>

        <ItemWrap role="none">
          <MenuItem href="#projects" role="menuitem" data-menu-item>
            <Label className="geek">projects.exe</Label>
            <Label className="human">{labels.work}</Label>
          </MenuItem>
        </ItemWrap>

        {/* For later */}
        {/*
        <ItemWrap role="none">
          <MenuItem href="#stack" role="menuitem" data-menu-item>
            <Label className="geek">stack.config.js</Label>
            <Label className="human">{labels.skills_tools}</Label>
          </MenuItem>
        </ItemWrap>
        */}

        <ItemWrap role="none">
          <MenuItem href="#ping" role="menuitem" data-menu-item>
            <Label className="geek">ping.sh</Label>
            <Label className="human">{labels.get_in_touch}</Label>
          </MenuItem>
        </ItemWrap>
      </MenuList>
    </MenuWrap>
  );
}
