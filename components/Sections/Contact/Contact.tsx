import React from "react";
import { CONTACTS } from "@/constants/contacts";
import { Icon } from "@/components/Icon";
import { ContactSection, IconsRow, IconLink, EmailLink } from "./styles";

export default function Contact() {
  const email = CONTACTS.find((c) => c.icon === "mail");
  const socials = CONTACTS.filter((c) => c.icon !== "mail");

  return (
    <ContactSection id="ping">
      <IconsRow>
        {socials.map((c) => (
          <IconLink
            key={`${c.icon}-${c.href}`}
            href={c.href}
            target={c.target}
            rel={c.rel}
            aria-label={c.label}
          >
            <Icon name={c.icon} size={22} />
          </IconLink>
        ))}
      </IconsRow>

      {email ? (
        <EmailLink href={email.href}>
          <Icon name={email.icon} size={16} style={{ marginRight: 8 }} />
          {email.label}
        </EmailLink>
      ) : null}
    </ContactSection>
  );
}
