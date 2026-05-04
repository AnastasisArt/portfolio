import React from "react";
import { CONTACTS } from "@/constants/contacts";
import { Icon } from "@/components/ui/Icon";
import { ContactSection, IconsRow, IconLink, EmailLink } from "./styles";

export default function Contact() {
  const email = CONTACTS.find((c) => c.icon === "mail");
  const socials = CONTACTS.filter((c) => c.icon !== "mail");

  return (
    <ContactSection id="ping" aria-labelledby="contact-title">
      <h2 id="contact-title" className="sr-only">Contact</h2>
      <IconsRow>
        {socials.map((c) => (
          <IconLink
            key={`${c.icon}-${c.href}`}
            href={c.href}
            target={c.target}
            rel={c.rel}
            aria-label={c.label}
          >
            <Icon name={c.icon} size={32} />
          </IconLink>
        ))}
      </IconsRow>

      {email ? (<EmailLink href={email.href}>{email.label}</EmailLink>) : null}
    </ContactSection>
  );
}
