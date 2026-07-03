"use client";

import type { AnchorHTMLAttributes } from "react";
import { PHONE_HREF } from "@/lib/constants";
import { reportPhoneConversion } from "@/lib/gtag";

type PhoneLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function PhoneLink({ onClick, ...props }: PhoneLinkProps) {
  return (
    <a
      href={PHONE_HREF}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
        reportPhoneConversion(PHONE_HREF);
      }}
      {...props}
    />
  );
}
