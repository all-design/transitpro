'use client';

import { useState, useRef } from 'react';
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
  MapPin,
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

export default function Home() {
  const { language, setLanguage } = useLanguageStore();
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
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== HEADER / NAV ===== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo from uploaded file */}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollTo('hero')}>
              <Image
                src="/logoTP.png"
                alt="Transit Pro Logo"
                width={180}
                height={56}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
                priority
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
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
              <div className="hidden sm:flex items-center gap-0.5">
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
                  >
                    <CountryFlag countryCode={languageCountryCodes[lang.code]} />
                  </button>
                ))}
              </div>

              {/* Mobile language selector - opens mobile menu with language options */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="sm:hidden px-2 py-1 rounded-md text-lg bg-gray-50 hover:bg-gray-100"
                title={t.navContact}
              >
                <CountryFlag countryCode={languageCountryCodes[language]} />
              </button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden ml-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

      <main className="flex-1">
        {/* ===== HERO ===== */}
        <section id="hero" className="relative overflow-hidden">
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
              {/* Transit plates image instead of badge */}
              <motion.div variants={fadeInUp} className="mb-8">
                <Image
                  src="/tablice.png"
                  alt="Transit Pro - Österreichische Transitkennzeichen"
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
                {t.heroTitle}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                {t.heroSubtitle}
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
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                  {t.aboutLabel}
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t.aboutTitle}</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="max-w-4xl mx-auto space-y-5">
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{t.aboutDescription1}</p>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{t.aboutDescription2}</p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6">
                  <p className="text-amber-800 font-semibold text-base">{t.aboutDescription3}</p>
                </div>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{t.aboutDescription4}</p>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{t.aboutDescription5}</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== BENEFITS ===== */}
        <section id="benefits" className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                  {t.benefitsLabel}
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t.benefitsTitle}</h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200 bg-white group">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
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
        <section id="process" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                  {t.processLabel}
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t.processTitle}</h2>
              </motion.div>

              <div className="relative max-w-4xl mx-auto">
                {/* Connecting line */}
                <div className="hidden md:block absolute left-[60px] top-0 bottom-0 w-0.5 bg-red-100" />

                <div className="space-y-8">
                  {steps.map((step, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-[120px] flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-red-600/20">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1 pb-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== DOCUMENTS ===== */}
        <section id="documents" className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Documents */}
                <motion.div variants={fadeInUp}>
                  <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                    {t.documentsLabel}
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.documentsTitle}</h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">{t.documentsDescription}</p>

                  <div className="space-y-4">
                    {documents.map((doc, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-sm transition-all">
                        <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FileText className="w-4 h-4" />
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{doc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Regulations */}
                <motion.div variants={fadeInUp}>
                  <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                    {t.regulationsLabel}
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.regulationsTitle}</h2>

                  <div className="space-y-4">
                    {regulations.map((reg, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-600 text-sm leading-relaxed">{reg}</p>
                      </div>
                    ))}
                  </div>

                  {/* Important note */}
                  <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <p className="text-amber-800 text-sm leading-relaxed font-medium">{t.documentsNote}</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section id="pricing" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                  {t.pricingLabel}
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t.pricingTitle}</h2>
                <p className="text-gray-500 mt-3 text-lg">{t.pricingSubtitle}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Truck & Bus Card */}
                <motion.div variants={fadeInUp}>
                  <Card className="h-full border-2 border-red-200 hover:border-red-400 transition-colors shadow-lg hover:shadow-xl">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center">
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
                            <CheckCircle2 className="w-4 h-4 text-red-600" />
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
                <motion.div variants={fadeInUp}>
                  <Card className="h-full border-2 border-gray-200 hover:border-red-400 transition-colors shadow-lg hover:shadow-xl">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gray-800 text-white flex items-center justify-center">
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
                            <CheckCircle2 className="w-4 h-4 text-red-600" />
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
                  <Clock className="w-5 h-5 text-red-600" />
                  <span className="text-red-700 font-medium text-sm">{t.pricingOrderBefore}</span>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 mb-4">
                  {t.faqLabel}
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t.faqTitle}</h2>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="bg-white rounded-xl border border-gray-100 px-6 shadow-sm overflow-hidden data-[state=open]:border-red-200 data-[state=open]:shadow-md transition-all"
                    >
                      <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-gray-900 hover:text-red-600 hover:no-underline py-5">
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
        <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold">{t.ctaTitle}</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">{t.ctaSubtitle}</p>
              </motion.div>

              <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
                {/* Contact info */}
                <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-6 border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Telefon</h3>
                        <p className="text-gray-300 text-sm mt-1">+43 1 234 5678</p>
                        <p className="text-gray-400 text-xs mt-1">Mo-Fr: 08:00 - 17:00 CET</p>
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">E-Mail</h3>
                        <p className="text-gray-300 text-sm mt-1">info@transitpro.eu</p>
                        <p className="text-gray-400 text-xs mt-1">Antwort innerhalb von 24h</p>
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{language === 'de' ? 'Adresse' : language === 'en' ? 'Address' : 'Adresa'}</h3>
                        <p className="text-gray-300 text-sm mt-1">Wien, Österreich</p>
                      </div>
                    </div>
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
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{t.formTitle}</h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 text-sm font-medium">
                          {t.formName} <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleFormChange('name', e.target.value)}
                          className="border-gray-200 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 text-sm font-medium">
                          {t.formEmail} <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleFormChange('email', e.target.value)}
                          className="border-gray-200 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 text-sm font-medium">
                          {t.formPhone}
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleFormChange('phone', e.target.value)}
                          className="border-gray-200 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-700 text-sm font-medium">
                          {t.formCompany}
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleFormChange('company', e.target.value)}
                          className="border-gray-200 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="message" className="text-gray-700 text-sm font-medium">
                        {t.formMessage} <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
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
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
      <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logoTPs.png"
                alt="Transit Pro"
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
