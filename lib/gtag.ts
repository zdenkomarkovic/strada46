// Google Ads "Kliknite i pozovite" conversion tracking

export const GOOGLE_ADS_ID = "AW-17995029465";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

/** Prijavljuje "poziv" konverziju Google Ads-u pre nego sto pratilac otvori tel: link. */
export function reportPhoneConversion(href: string) {
  if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
    window.gtag_report_conversion(href);
  } else if (typeof window !== "undefined") {
    window.location.href = href;
  }
}
