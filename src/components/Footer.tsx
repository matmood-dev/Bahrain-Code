import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const companyLinks = [
    { to: "/about", label: t("footer.links.about", "About") },
    { to: "/services", label: t("footer.links.services", "Services") },
    { to: "/contact", label: t("footer.links.contact", "Contact") },
    { to: "/careers", label: t("footer.links.careers", "Contact") },
  ];

  const legalLinks = [
    { to: "/privacy", label: t("footer.links.privacy", "Privacy") },
    { to: "/terms", label: t("footer.links.terms", "Terms") },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: hook up your newsletter endpoint
    setEmail("");
    alert(t("footer.newsletter.thanks", "Thanks! You’re on the list."));
  };

  return (
    <footer className="mt-16 border-t border-white/10" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand + Socials */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700" />
              <span className="text-lg font-bold">{t("home.brand")}</span>
            </Link>
            <p className="mt-3 text-sm text-[rgb(var(--muted))]">
              {t(
                "footer.tagline",
                "Designing and shipping web, mobile, and cloud software for real teams."
              )}
            </p>
            <div className="mt-4 flex gap-4">
              <a
                aria-label="Twitter"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                aria-label="GitHub"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                aria-label="WhatsApp"
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold">
              {t("footer.headings.company", "Company")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {companyLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[rgb(var(--muted))] hover:text-inherit transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold">
              {t("footer.headings.contact", "Contact")}
            </h4>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-500" />
                <a
                  className="hover:underline"
                  href="mailto:hello@bahraincode.com"
                >
                  hello@bahraincode.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-500" />
                <a className="hover:underline" href="tel:+97300000000">
                  +973 0000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-500" />
                <span>{t("footer.address", "Manama, Kingdom of Bahrain")}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold">
              {t("footer.headings.newsletter", "Newsletter")}
            </h4>
            <p className="mt-3 text-sm text-[rgb(var(--muted))]">
              {t(
                "footer.newsletter.copy",
                "Occasional updates. No spam, ever."
              )}
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-3 flex items-stretch gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={t("footer.newsletter.placeholder", "Your email")}
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1 rounded-lg px-3 py-2 bg-gradient-to-br from-brand-500 to-brand-700 text-white hover:opacity-95"
              >
                <ArrowRight className="h-4 w-4" />
                {t("footer.newsletter.action", "Subscribe")}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[rgb(var(--muted))]">
          <p>
            © {year} {t("home.brand")} — {t("home.footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="hover:text-inherit transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
