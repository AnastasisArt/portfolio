'use client';
import { createPortal } from 'react-dom';
import { Icon } from '@/components/ui/Icon';
import type { ContactItem } from '@/constants/contacts';
import { DropdownWrap, DropdownContent, ContactLink, ContactBlock } from './styles';

type Props = {
  rendered: boolean;
  open: boolean;
  topPx: number;
  children: React.ReactNode;
  contacts: ContactItem[];
};

export default function Dropdown({ rendered, open, topPx, children, contacts }: Props) {
  if (typeof document === 'undefined' || !rendered) return null;

  //Render outside the DOM tree to avoid overflow issues
  return createPortal(
    <DropdownWrap className={open? 'open':'close'} style={{top:`${topPx}px`}}>
      <DropdownContent>
        {children}

        <ContactBlock>
          {contacts.map((contact) => (
            <ContactLink key={contact.href} href={contact.href} target={contact.target} rel={contact.rel}>
              {contact.label}
              <Icon name={contact.icon} size={16} />
            </ContactLink>
          ))}
        </ContactBlock>
      </DropdownContent>
    </DropdownWrap>,
    document.body
  );
}
