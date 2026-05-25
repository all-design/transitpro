'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Clock,
  Shield,
  FileCheck,
  Car,
  HeadphonesIcon,
  Award,
  FileText,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Menu,
  X,
  Truck,
  Loader2,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useLanguageStore } from '@/store/language-store';
import { getTranslation, languages, LanguageCode } from '@/lib/i18n';
import { useToast } from '@/hooks/use-toast';

const SITE_URL = 'https://transitpro.eu';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Flag emoji to country code mapping for proper flag rendering
function CountryFlag({ countryCode, className = '' }: { countryCode: string; className?: string }) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return <span className={className}>{String.fromCodePoint(...codePoints)}</span>;
}

const languageCountryCodes: Record<LanguageCode, string> = {
  de: 'DE',
  sr: 'RS',
  en: 'GB',
  ro: 'RO',
  bg: 'BG',
  fr: 'FR',
  it: 'IT',
};

const languageLocales: Record<LanguageCode, string> = {
  de: 'de_AT',
  sr: 'sr_RS',
  en: 'en_GB',
  ro: 'ro_RO',
  bg: 'bg_BG',
  fr: 'fr_FR',
  it: 'it_IT',
};

// Hook for dynamic head management
function useSeoHead(language: LanguageCode) {
  const t = getTranslation(language);

  useEffect(() => {
    // Update document title
    document.title = t.seoMetaTitle;

    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t.seoMetaDescription);

    // Update or create OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', t.seoOgTitle);

    // Update or create OG description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', t.seoOgDescription);

    // Update or create OG locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute('content', languageLocales[language]);

    // Update or create OG image alt
    let ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (!ogImageAlt) {
      ogImageAlt = document.createElement('meta');
      ogImageAlt.setAttribute('property', 'og:image:alt');
      document.head.appendChild(ogImageAlt);
    }
    ogImageAlt.setAttribute('content', t.seoOgImageAlt);

    // Update or create Twitter title
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twTitle) {
      twTitle = document.createElement('meta');
      twTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twTitle);
    }
    twTitle.setAttribute('content', t.seoOgTitle);

    // Update or create Twitter description
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twDesc) {
      twDesc = document.createElement('meta');
      twDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twDesc);
    }
    twDesc.setAttribute('content', t.seoOgDescription);

    // Update html lang attribute
    document.documentElement.lang = language === 'sr' ? 'sr' : language;

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', language === 'de' ? SITE_URL : `${SITE_URL}/?lang=${language}`);

    // Update hreflang tags
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach((el) => el.remove());

    const hreflangCodes: LanguageCode[] = ['de', 'sr', 'en', 'ro', 'bg', 'fr', 'it'];
    hreflangCodes.forEach((code) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', code);
      link.setAttribute('href', code === 'de' ? SITE_URL : `${SITE_URL}/?lang=${code}`);
      document.head.appendChild(link);
    });

    // Add x-default
    const xDefault = document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    xDefault.setAttribute('href', SITE_URL);
    document.head.appendChild(xDefault);
  }, [language, t]);
}

// JSON-LD Structured Data generator
function useStructuredData(language: LanguageCode) {
  const t = getTranslation(language);

  return useMemo(() => {
    // LocalBusiness schema
    const localBusiness = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Transit Pro',
      description: t.seoMetaDescription,
      url: SITE_URL,
      logo: `${SITE_URL}/logoTP.png`,
      image: `${SITE_URL}/og-image.png`,
      telephone: '+40 723 252 121',
      email: 'office@transitplates.eu',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'AT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.2082,
        longitude: 16.3738,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      priceRange: '$$',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Bank Transfer',
      areaServed: [
        { '@type': 'Place', name: 'Austria' },
        { '@type': 'Place', name: 'European Union' },
        { '@type': 'Place', name: 'Serbia' },
        { '@type': 'Place', name: 'Bosnia and Herzegovina' },
        { '@type': 'Place', name: 'Montenegro' },
        { '@type': 'Place', name: 'North Macedonia' },
        { '@type': 'Place', name: 'Albania' },
        { '@type': 'Place', name: 'Switzerland' },
        { '@type': 'Place', name: 'Norway' },
        { '@type': 'Place', name: 'Turkey' },
      ],
      sameAs: [],
    };

    // Service schema
    const service = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/#service`,
      name: t.heroTitle,
      description: t.seoMetaDescription,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Transit Pro',
      },
      serviceType: 'Transit Plate Registration',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 48.2082, longitude: 16.3738 },
        geoRadius: '2000 km',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Transit Plates',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: t.pricingTruckTitle,
              description: t.pricingTruckDesc,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: t.pricingTrailerTitle,
              description: t.pricingTrailerDesc,
            },
          },
        ],
      },
    };

    // FAQPage schema
    const faqPage = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        { q: t.faq1Q, a: t.faq1A },
        { q: t.faq2Q, a: t.faq2A },
        { q: t.faq3Q, a: t.faq3A },
        { q: t.faq4Q, a: t.faq4A },
        { q: t.faq5Q, a: t.faq5A },
        { q: t.faq6Q, a: t.faq6A },
        { q: t.faq7Q, a: t.faq7A },
        { q: t.faq8Q, a: t.faq8A },
        { q: t.faq9Q, a: t.faq9A },
      ].map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: a,
        },
      })),
    };

    // HowTo schema
    const howTo = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      '@id': `${SITE_URL}/#howto`,
      name: t.processTitle,
      description: t.processStep1Desc,
      step: [
        { name: t.processStep1Title, text: t.processStep1Desc },
        { name: t.processStep2Title, text: t.processStep2Desc },
        { name: t.processStep3Title, text: t.processStep3Desc },
        { name: t.processStep4Title, text: t.processStep4Desc },
        { name: t.processStep5Title, text: t.processStep5Desc },
      ].map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.name,
        text: step.text,
      })),
    };

    // BreadcrumbList schema
    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: t.navHome,
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: t.heroTitle,
          item: `${SITE_URL}/#about`,
        },
      ],
    };

    // WebSite schema with search action placeholder
    const webSite = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Transit Pro',
      url: SITE_URL,
      inLanguage: languageLocales[language],
      description: t.seoMetaDescription,
      publisher: {
        '@id': `${SITE_URL}/#business`,
      },
    };

    return { localBusiness, service, faqPage, howTo, breadcrumb, webSite };
  }, [language, t]);
}

export default function Home() {
  const { language, setLanguage, geoDetected, detectLanguageFromGeo } = useLanguageStore();
  const t = getTranslation(language);
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  // URL ?lang= parameter takes highest priority (for shared links / hreflang)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang') as LanguageCode | null;
    if (langParam && ['de', 'sr', 'en', 'ro', 'bg', 'fr', 'it'].includes(langParam)) {
      setLanguage(langParam);
      // Clean up URL without reloading
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [setLanguage]);

  // Detect language from visitor's IP geolocation (only on first visit, if no URL param)
  useEffect(() => {
    if (!geoDetected) {
      detectLanguageFromGeo();
    }
  }, [geoDetected, detectLanguageFromGeo]);

  // Apply dynamic SEO head tags
  useSeoHead(language);

  // Get structured data
  const structuredData = useStructuredData(language);

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, language }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast({ title: t.formSuccess, variant: 'default' });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        toast({ title: t.formError, variant: 'destructive' });
      }
    } catch {
      toast({ title: t.formError, variant: 'destructive' });
    } finally {
      setFormSubmitting(false);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const benefits = [
    { icon: Clock, title: t.benefit1Title, desc: t.benefit1Desc },
    { icon: Shield, title: t.benefit2Title, desc: t.benefit2Desc },
    { icon: FileCheck, title: t.benefit3Title, desc: t.benefit3Desc },
    { icon: Car, title: t.benefit4Title, desc: t.benefit4Desc },
    { icon: HeadphonesIcon, title: t.benefit5Title, desc: t.benefit5Desc },
    { icon: Award, title: t.benefit6Title, desc: t.benefit6Desc },
  ];

  const steps = [
    { number: '01', title: t.processStep1Title, desc: t.processStep1Desc },
    { number: '02', title: t.processStep2Title, desc: t.processStep2Desc },
    { number: '03', title: t.processStep3Title, desc: t.processStep3Desc },
    { number: '04', title: t.processStep4Title, desc: t.processStep4Desc },
    { number: '05', title: t.processStep5Title, desc: t.processStep5Desc },
  ];

  const documents = [t.doc1, t.doc2, t.doc3, t.doc4, t.doc5];

  const regulations = [t.reg1, t.reg2, t.reg3, t.reg4, t.reg5, t.reg6];

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
    { q: t.faq6Q, a: t.faq6A },
    { q: t.faq7Q, a: t.faq7A },
    { q: t.faq8Q, a: t.faq8A },
    { q: t.faq9Q, a: t.faq9A },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== JSON-LD Structured Data ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.howTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.webSite) }}
      />

      {/* ===== HEADER / NAV ===== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => scrollTo('hero')}
              itemScope
              itemType="https://schema.org/Organization"
            >
              <Image
                src="/logoTP.png"
                alt="Transit Pro Logo"
                width={180}
                height={56}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
                priority
              />
              <meta itemProp="name" content="Transit Pro" />
              <meta itemProp="url" content={SITE_URL} />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              {[
                { label: t.navAbout, id: 'about' },
                { label: t.navProcess, id: 'process' },
                { label: t.navDocuments, id: 'documents' },
                { label: t.navFaq, id: 'faq' },
                { label: t.navContact, id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Language Flags + Mobile Menu Toggle */}
            <div className="flex items-center gap-1">
              {/* Flag buttons for language selection */}
              <div className="hidden sm:flex items-center gap-0.5" role="group" aria-label="Language selection">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-1.5 py-1 rounded-md text-lg transition-all ${
                      language === lang.code
                        ? 'bg-red-50 ring-2 ring-red-500 scale-110'
                        : 'hover:bg-gray-100 opacity-60 hover:opacity-100'
                    }`}
                    title={lang.name}
                    aria-label={`${lang.name}${language === lang.code ? ' (selected)' : ''}`}
                    aria-pressed={language === lang.code}
                  >
                    <CountryFlag countryCode={languageCountryCodes[lang.code]} />
                  </button>
                ))}
              </div>

              {/* Mobile language selector */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="sm:hidden px-2 py-1 rounded-md text-lg bg-gray-50 hover:bg-gray-100"
                title={t.navContact}
                aria-label="Open menu"
              >
                <CountryFlag countryCode={languageCountryCodes[language]} />
              </button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden ml-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-3 space-y-2">
              {[
                { label: t.navAbout, id: 'about' },
                { label: t.navProcess, id: 'process' },
                { label: t.navDocuments, id: 'documents' },
                { label: t.navFaq, id: 'faq' },
                { label: t.navContact, id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Separator className="my-2" />
              <div className="flex flex-wrap gap-1 px-2 pb-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setMobileMenuOpen(false); }}
                    className={`px-2 py-1 rounded-md text-sm font-medium transition-all flex items-center gap-1 ${
                      language === lang.code
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <CountryFlag countryCode={languageCountryCodes[lang.code]} />
                    <span className="text-xs">{lang.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1" role="main" itemScope itemType="https://schema.org/WebPage">
        {/* ===== HERO ===== */}
        <section id="hero" className="relative overflow-hidden" aria-label="Hero section">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900" />
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: 'url(/hero-image.png)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              {/* Transit plates image */}
              <motion.div variants={fadeInUp} className="mb-8">
                <Image
                  src="/tablice.png"
                  alt={t.seoOgImageAlt}
                  width={600}
                  height={200}
                  className="w-64 sm:w-80 md:w-96 lg:w-[480px] h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
              >
                <span itemProp="name">{t.heroTitle}</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                <span itemProp="description">{t.heroSubtitle}</span>
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollTo('contact')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 h-12 text-base font-semibold shadow-lg shadow-red-600/25"
                >
                  {t.heroCta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollTo('about')}
                  className="group border-white/30 bg-transparent text-red-500 hover:text-white hover:bg-white/10 h-12 text-base font-semibold transition-colors"
                >
                  {t.heroSecondaryCta}
                  <ArrowRight className="ml-2 w-4 h-4 text-red-500 group-hover:text-white transition-colors" />
                </Button>
              </motion.div>

              {/* Quick stats */}
              <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap gap-8">
                {[
                  { value: '21', label: t.pricingDuration },
                  { value: '12:00', label: t.pricingOrderBefore },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-red-400">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="py-16 sm:py-24 bg-white" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                  {t.aboutLabel}
                </Badge>
                <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">{t.aboutTitle}</h2>
              </motion.div>

              <article className="max-w-4xl mx-auto space-y-5" itemScope itemType="https://schema.org/Article">
                <meta itemProp="headline" content={t.aboutTitle} />
                <meta itemProp="author" content="Transit Pro" />
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg" itemProp="articleBody">{t.aboutDescription1}</p>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{t.aboutDescription2}</p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6" role="alert">
                  <p className="text-amber-800 font-semibold text-base">{t.aboutDescription3}</p>
                </div>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{t.aboutDescription4}</p>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{t.aboutDescription5}</p>
              </article>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== BENEFITS ===== */}
        <section id="benefits" className="py-16 sm:py-24 bg-gray-50" aria-labelledby="benefits-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                  {t.benefitsLabel}
                </Badge>
                <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">{t.benefitsTitle}</h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
                {benefits.map((benefit, i) => (
                  <motion.div key={i} variants={fadeInUp} role="listitem">
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200 bg-white group">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300" aria-hidden="true">
                          <benefit.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section id="process" className="py-16 sm:py-24 bg-white" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                  {t.processLabel}
                </Badge>
                <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">{t.processTitle}</h2>
              </motion.div>

              <div className="relative max-w-4xl mx-auto">
                {/* Connecting line */}
                <div className="hidden md:block absolute left-[60px] top-0 bottom-0 w-0.5 bg-red-100" aria-hidden="true" />

                <ol className="space-y-8" role="list">
                  {steps.map((step, i) => (
                    <motion.li key={i} variants={fadeInUp} className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-[120px] flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-red-600/20" aria-label={`Step ${step.number}`}>
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1 pb-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== DOCUMENTS ===== */}
        <section id="documents" className="py-16 sm:py-24 bg-gray-50" aria-labelledby="documents-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Documents */}
                <motion.div variants={fadeInUp}>
                  <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                    {t.documentsLabel}
                  </Badge>
                  <h2 id="documents-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.documentsTitle}</h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">{t.documentsDescription}</p>

                  <ul className="space-y-4" role="list">
                    {documents.map((doc, i) => (
                      <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-sm transition-all">
                        <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                          <FileText className="w-4 h-4" />
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{doc}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Regulations */}
                <motion.div variants={fadeInUp}>
                  <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                    {t.regulationsLabel}
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.regulationsTitle}</h2>

                  <ul className="space-y-4" role="list">
                    {regulations.map((reg, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <p className="text-gray-600 text-sm leading-relaxed">{reg}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Important note */}
                  <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5" role="alert">
                    <p className="text-amber-800 text-sm leading-relaxed font-medium">{t.documentsNote}</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section id="pricing" className="py-16 sm:py-24 bg-white" aria-labelledby="pricing-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                  {t.pricingLabel}
                </Badge>
                <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">{t.pricingTitle}</h2>
                <p className="text-gray-500 mt-3 text-lg">{t.pricingSubtitle}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" role="list">
                {/* Truck & Bus Card */}
                <motion.div variants={fadeInUp} role="listitem">
                  <Card className="h-full border-2 border-red-200 hover:border-red-400 transition-colors shadow-lg hover:shadow-xl">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center" aria-hidden="true">
                          <Truck className="w-5 h-5" />
                        </div>
                        <CardTitle className="text-xl">{t.pricingTruckTitle}</CardTitle>
                      </div>
                      <p className="text-gray-500 text-sm">{t.pricingTruckDesc}</p>
                    </CardHeader>
                    <Separator className="mb-4" />
                    <CardContent className="pt-0">
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {t.pricingOnRequest}
                      </div>
                      <p className="text-sm text-gray-500 mb-6">{t.pricingDuration}</p>

                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-gray-700">{t.pricingIncludes}</p>
                        {[t.pricingInclude1, t.pricingInclude2, t.pricingInclude3].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-red-600" aria-hidden="true" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold"
                        onClick={() => scrollTo('contact')}
                      >
                        {t.heroCta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Trailer Card */}
                <motion.div variants={fadeInUp} role="listitem">
                  <Card className="h-full border-2 border-gray-200 hover:border-red-400 transition-colors shadow-lg hover:shadow-xl">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gray-800 text-white flex items-center justify-center" aria-hidden="true">
                          <Car className="w-5 h-5" />
                        </div>
                        <CardTitle className="text-xl">{t.pricingTrailerTitle}</CardTitle>
                      </div>
                      <p className="text-gray-500 text-sm">{t.pricingTrailerDesc}</p>
                    </CardHeader>
                    <Separator className="mb-4" />
                    <CardContent className="pt-0">
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {t.pricingOnRequest}
                      </div>
                      <p className="text-sm text-gray-500 mb-6">{t.pricingDuration}</p>

                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-gray-700">{t.pricingIncludes}</p>
                        {[t.pricingInclude1, t.pricingInclude2, t.pricingInclude3].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-red-600" aria-hidden="true" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className="w-full mt-6 bg-gray-800 hover:bg-gray-900 text-white font-semibold"
                        onClick={() => scrollTo('contact')}
                      >
                        {t.heroCta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Same-day banner */}
              <motion.div variants={fadeInUp} className="mt-10 text-center">
                <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 text-red-600" aria-hidden="true" />
                  <span className="text-red-700 font-medium text-sm">{t.pricingOrderBefore}</span>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="py-16 sm:py-24 bg-gray-50" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                  {t.faqLabel}
                </Badge>
                <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">{t.faqTitle}</h2>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="bg-white rounded-xl border border-gray-100 px-6 shadow-sm overflow-hidden data-[state=open]:border-red-200 data-[state=open]:shadow-md transition-all"
                    >
                      <AccordionTrigger
                        className="text-left text-sm sm:text-base font-semibold text-gray-900 hover:text-red-600 hover:no-underline py-5"
                        aria-label={faq.q}
                      >
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== CTA + CONTACT FORM ===== */}
        <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white relative overflow-hidden" aria-labelledby="contact-heading">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold">{t.ctaTitle}</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">{t.ctaSubtitle}</p>
              </motion.div>

              <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
                {/* Contact info */}
                <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-6 border border-white/10">
                    <address className="not-italic space-y-6" itemScope itemType="https://schema.org/LocalBusiness">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{t.contactPhone}</h3>
                          <p className="text-gray-300 text-sm mt-1" itemProp="telephone">
                            <a href="tel:+40723252121" className="hover:text-red-400 transition-colors">+40 723 252 121</a>
                          </p>
                          <p className="text-gray-400 text-xs mt-1">{t.contactPhoneHours}</p>
                        </div>
                      </div>

                      <Separator className="bg-white/10" />

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{t.contactEmail}</h3>
                          <p className="text-gray-300 text-sm mt-1" itemProp="email">
                            <a href="mailto:office@transitplates.eu" className="hover:text-red-400 transition-colors">office@transitplates.eu</a>
                          </p>
                          <p className="text-gray-400 text-xs mt-1">{t.contactEmailResponse}</p>
                        </div>
                      </div>
                    </address>
                  </div>

                  {/* Language switcher */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                      🌍 7 {language === 'de' ? 'Sprachen' : language === 'en' ? 'Languages' : language === 'sr' ? 'Jezika' : language === 'fr' ? 'Langues' : language === 'it' ? 'Lingue' : language === 'ro' ? 'Limbi' : 'Езика'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setLanguage(lang.code)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                            language === lang.code
                              ? 'bg-red-600 text-white'
                              : 'bg-white/10 text-gray-300 hover:bg-white/20'
                          }`}
                          aria-pressed={language === lang.code}
                        >
                          <CountryFlag countryCode={languageCountryCodes[lang.code]} />
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div variants={fadeInUp} className="lg:col-span-3">
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl" aria-label={t.formTitle}>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{t.formTitle}</h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 text-sm font-medium">
                          {t.formName} <span className="text-red-500" aria-hidden="true">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleFormChange('name', e.target.value)}
                          className="border-gray-200 focus:ring-red-500 focus:border-red-500"
                          autoComplete="name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 text-sm font-medium">
                          {t.formEmail} <span className="text-red-500" aria-hidden="true">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleFormChange('email', e.target.value)}
                          className="border-gray-200 focus:ring-red-500 focus:border-red-500"
                          autoComplete="email"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 text-sm font-medium">
                          {t.formPhone}
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleFormChange('phone', e.target.value)}
                          className="border-gray-200 focus:ring-red-500 focus:border-red-500"
                          autoComplete="tel"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-700 text-sm font-medium">
                          {t.formCompany}
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={(e) => handleFormChange('company', e.target.value)}
                          className="border-gray-200 focus:ring-red-500 focus:border-red-500"
                          autoComplete="organization"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="message" className="text-gray-700 text-sm font-medium">
                        {t.formMessage} <span className="text-red-500" aria-hidden="true">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleFormChange('message', e.target.value)}
                        className="border-gray-200 focus:ring-red-500 focus:border-red-500 min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold h-12 text-base"
                    >
                      {formSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                          <span className="sr-only">Sending...</span>
                          ...
                        </>
                      ) : (
                        <>
                          {t.formSubmit}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-400 border-t border-gray-800" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logoTPs.png"
                alt="Transit Pro Logo"
                width={80}
                height={28}
                className="h-6 sm:h-7 w-auto object-contain brightness-0 invert"
              />
              <span className="text-xs text-gray-500">— {t.footerText}</span>
            </div>

            <div className="flex items-center gap-6 text-xs">
              <span>© {new Date().getFullYear()} Transit Pro. {t.footerRights}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
