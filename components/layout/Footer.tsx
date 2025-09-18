"use client";

import Link from "next/link";
import { companyInfo } from "@/lib/data";
import { Linkedin } from "lucide-react";
import { useTranslations } from "@/lib/i18n";
import ReactCountryFlag from "react-country-flag";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslations();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container pt-6 pb-4" >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  {t.footer.home}
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
                  {t.footer.solutions}
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-gray-300 hover:text-white transition-colors">
                  {t.footer.cases}
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Countries - Americas */}
          <div>
            <h4 className="text-lg font-semibold mb-3">{t.footer.continents.americas}</h4>
            <div className="grid grid-cols-2 gap-1 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="BR" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.brazil}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="US" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.usa}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="AR" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.argentina}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="CL" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.chile}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="CO" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.colombia}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="MX" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.mexico}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="PA" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.panama}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="PE" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.peru}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="PY" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.paraguay}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="CA" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.canada}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="UY" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.uruguay}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="HT" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.haiti}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="BS" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.bahamas}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="BO" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.bolivia}</span>
              </div>
            </div>
          </div>

          {/* Europe */}
          <div>
            <h4 className="text-lg font-semibold mb-3">{t.footer.continents.europe}</h4>
            <div className="grid grid-cols-2 gap-1 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="GB" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.england}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="FR" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.france}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="BE" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.belgium}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="NL" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.netherlands}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="DE" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.germany}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="CH" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.switzerland}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="AT" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.austria}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="IT" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.italy}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="CZ" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.czechRepublic}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="TR" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.turkey}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="RS" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.serbia}</span>
              </div>
            </div>
          </div>

          {/* Africa & Asia */}
          <div>
            <h4 className="text-lg font-semibold mb-3">{t.footer.continents.africaAsia}</h4>
            <div className="grid grid-cols-2 gap-1 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="CD" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.congoDR}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="NG" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.nigeria}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="AO" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.angola}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="QA" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.qatar}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="SA" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.saudiArabia}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="PH" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.philippines}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ReactCountryFlag countryCode="PG" svg style={{ width: '16px', height: '12px' }} />
                <span>{t.footer.countries.papuaNewGuinea}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-sm">{t.footer.copyright.replace('{year}', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
}
