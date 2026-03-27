import { useId } from 'react';
import { Icon } from '@/components/ui/Icon';
import {
  AccordionButton,
  AccordionContent,
  AccordionContentInner,
  AccordionHeader,
  AccordionRoot,
  AccordionTitle,
} from './styles';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: ()=> void;
};

export function Accordion({ title, children, isOpen, onToggle }: AccordionProps){
  const contentId = useId();

  return (
    <AccordionRoot $isOpen={isOpen}>
      <AccordionHeader>
        <AccordionButton
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={contentId}
        >
          <AccordionTitle>{title}</AccordionTitle>
          {!isOpen && ( <Icon name="chevronDown" size={14} aria-hidden="true"/> )}
        </AccordionButton>
      </AccordionHeader>

      <AccordionContent id={contentId} $isOpen={isOpen}>
        <AccordionContentInner>{children}</AccordionContentInner>
      </AccordionContent>
    </AccordionRoot>
  );
}