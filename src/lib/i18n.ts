export type LanguageCode = 'de' | 'sr' | 'en' | 'ro' | 'bg' | 'fr' | 'it';

export interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
}

export const languages: Language[] = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'sr', name: 'Srpski', flag: '🇷🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export type TranslationKeys = {
  // Nav
  navHome: string;
  navAbout: string;
  navProcess: string;
  navDocuments: string;
  navFaq: string;
  navContact: string;

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroSecondaryCta: string;

  // About
  aboutLabel: string;
  aboutTitle: string;
  aboutDescription1: string;
  aboutDescription2: string;
  aboutDescription3: string;
  aboutDescription4: string;
  aboutDescription5: string;

  // Benefits
  benefitsLabel: string;
  benefitsTitle: string;
  benefit1Title: string;
  benefit1Desc: string;
  benefit2Title: string;
  benefit2Desc: string;
  benefit3Title: string;
  benefit3Desc: string;
  benefit4Title: string;
  benefit4Desc: string;
  benefit5Title: string;
  benefit5Desc: string;
  benefit6Title: string;
  benefit6Desc: string;

  // Process
  processLabel: string;
  processTitle: string;
  processStep1Title: string;
  processStep1Desc: string;
  processStep2Title: string;
  processStep2Desc: string;
  processStep3Title: string;
  processStep3Desc: string;
  processStep4Title: string;
  processStep4Desc: string;
  processStep5Title: string;
  processStep5Desc: string;

  // Documents
  documentsLabel: string;
  documentsTitle: string;
  documentsDescription: string;
  doc1: string;
  doc2: string;
  doc3: string;
  doc4: string;
  doc5: string;
  documentsNote: string;

  // Regulations
  regulationsLabel: string;
  regulationsTitle: string;
  reg1: string;
  reg2: string;
  reg3: string;
  reg4: string;
  reg5: string;
  reg6: string;

  // Pricing
  pricingLabel: string;
  pricingTitle: string;
  pricingSubtitle: string;
  pricingTruckTitle: string;
  pricingTruckDesc: string;
  pricingTrailerTitle: string;
  pricingTrailerDesc: string;
  pricingDuration: string;
  pricingIncludes: string;
  pricingInclude1: string;
  pricingInclude2: string;
  pricingInclude3: string;
  pricingOrderBefore: string;
  pricingOnRequest: string;

  // FAQ
  faqLabel: string;
  faqTitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  faq5Q: string;
  faq5A: string;
  faq6Q: string;
  faq6A: string;
  faq7Q: string;
  faq7A: string;
  faq8Q: string;
  faq8A: string;
  faq9Q: string;
  faq9A: string;

  // CTA
  ctaTitle: string;
  ctaSubtitle: string;

  // Contact Form
  formTitle: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formCompany: string;
  formMessage: string;
  formSubmit: string;
  formSuccess: string;
  formError: string;
  formRequired: string;

  // SEO
  seoMetaTitle: string;
  seoMetaDescription: string;
  seoOgTitle: string;
  seoOgDescription: string;
  seoOgImageAlt: string;

  // Contact Info
  contactPhone: string;
  contactPhoneHours: string;
  contactEmail: string;
  contactEmailResponse: string;

  // Footer
  footerText: string;
  footerRights: string;
  footerPrivacy: string;
  footerTerms: string;
};

const translations: Record<LanguageCode, TranslationKeys> = {
  de: {
    // Nav
    navHome: 'Startseite',
    navAbout: 'Über uns',
    navProcess: 'Ablauf',
    navDocuments: 'Dokumente',
    navFaq: 'FAQ',
    navContact: 'Kontakt',

    // Hero
    heroTitle: 'Österreichische Transitkennzeichen',
    heroSubtitle: 'Schnell, zuverlässig und professionell — besorgen Sie sich Transitkennzeichen mit WA-Versicherung für Ihr Fahrzeug. Fahren Sie legal von A nach B durch die EU und viele weitere Länder.',
    heroCta: 'Angebot anfordern',
    heroSecondaryCta: 'Mehr erfahren',

    // About
    aboutLabel: 'Über das Produkt',
    aboutTitle: 'Was sind österreichische Transitkennzeichen?',
    aboutDescription1: 'Für Fahrzeuge, die über kein gültiges Kennzeichen oder keine gültige TÜV-Bescheinigung verfügen, können Sie die österreichische Ausfuhrgenehmigung nutzen, auch bekannt als österreichische Transitkennzeichen.',
    aboutDescription2: 'Diese vorübergehenden Kennzeichen werden mit einer vorübergehenden WA-Versicherung geliefert und sind für Fahrzeuge bestimmt, die exportiert und auf der Straße ins Bestimmungsland gefahren werden.',
    aboutDescription3: 'Hinweis: Anträge sind ausschließlich für Unternehmen möglich.',
    aboutDescription4: 'Diese Kennzeichen sind für eine Fahrt von A nach B bestimmt, wobei die Route durch EU-Länder und andere europäische Staaten führen kann. Eine Zulassung in einem anderen Land ist mit diesen Kennzeichen nicht möglich — dafür sind die originalen Fahrzeugpapiere erforderlich.',
    aboutDescription5: 'Eine gültige TÜV-Bescheinigung ist für die Ausstellung dieser Kennzeichen nicht erforderlich. Die Verantwortung für die Sicherheit und den technischen Zustand des Fahrzeugs während der Fahrt liegt stets beim Käufer bzw. Fahrer.',

    // Benefits
    benefitsLabel: 'Vorteile',
    benefitsTitle: 'Warum Transit Pro wählen?',
    benefit1Title: 'Schnelle Bearbeitung',
    benefit1Desc: 'Bestellungen vor 12:00 Uhr werden noch am selben Werktag bearbeitet. Kennzeichen und Versicherungspolice werden am selben Tag versendet.',
    benefit2Title: 'WA-Versicherung inklusive',
    benefit2Desc: 'Jeder Kennzeichensatz wird mit einer vorübergehenden WA-Versicherung für 21 Tage geliefert, die vollumfänglichen Schutz bietet.',
    benefit3Title: 'Kein TÜV erforderlich',
    benefit3Desc: 'Für die Ausstellung der Transitkennzeichen ist keine gültige TÜV-Bescheinigung erforderlich, was den Prozess für ältere Fahrzeuge erleichtert.',
    benefit4Title: 'Legales Fahren',
    benefit4Desc: 'Fahren Sie völlig legal durch die EU und Europa mit gültigen Transitkennzeichen und Dokumenten.',
    benefit5Title: 'Engagierter Support',
    benefit5Desc: 'Unser Expertenteam steht Ihnen bei allen Fragen zur Seite und begleitet Sie durch den gesamten Prozess.',
    benefit6Title: 'Erfahrung & Zuverlässigkeit',
    benefit6Desc: 'Jahrelange Erfahrung in der Abwicklung von Transitkennzeichen für Unternehmen in ganz Europa.',

    // Process
    processLabel: 'So funktioniert es',
    processTitle: 'Der Ablauf in 5 einfachen Schritten',
    processStep1Title: 'Kontaktieren Sie uns',
    processStep1Desc: 'Füllen Sie das Kontaktformular aus oder rufen Sie uns an, um den Prozess zu starten. Unser Team bietet Ihnen alle benötigten Informationen.',
    processStep2Title: 'Dokumente vorbereiten',
    processStep2Desc: 'Sammeln Sie die erforderlichen Dokumente: Rechnung, Zulassungsdokument, CoC-Bescheinigung, Vollmacht und gewünschtes Versicherungsbeginndatum.',
    processStep3Title: 'Dokumente einreichen',
    processStep3Desc: 'Senden Sie uns klare, lesbare PDF-Scans aller erforderlichen Dokumente zur Bearbeitung Ihres Antrags.',
    processStep4Title: 'Antragsbearbeitung',
    processStep4Desc: 'Wir bearbeiten Ihren Antrag und stellen die Transitkennzeichen basierend auf der Fahrgestellnummer des Fahrzeugs aus.',
    processStep5Title: 'Kennzeichen erhalten',
    processStep5Desc: 'Kennzeichen und Versicherungspolice werden am selben Tag an Ihre Adresse versendet, an dem der Antrag bearbeitet wurde.',

    // Documents
    documentsLabel: 'Dokumentation',
    documentsTitle: 'Erforderliche Dokumente für den Antrag',
    documentsDescription: 'Der Antrag kann nur bearbeitet werden, wenn die folgenden Dokumente eingereicht werden. Wir akzeptieren ausschließlich klare, gut lesbare PDF-Scans:',
    doc1: 'Kopie der Verkaufsrechnung',
    doc2: 'Kopie des Zulassungsdokuments (bei gebrauchten Fahrzeugen)',
    doc3: 'Übereinstimmungsbescheinigung (CoC) (bei neuen Fahrzeugen)',
    doc4: 'Vom Käufer unterzeichnete Vollmacht',
    doc5: 'Gewünschtes Versicherungsbeginndatum (gültig für 21 Tage)',
    documentsNote: 'Hinweis: Die Kennzeichen werden auf die von Ihnen angegebene Fahrgestellnummer ausgestellt. Daher ist eine Stornierung oder Rückgabe der Bestellung nach Antragsstellung nicht möglich.',

    // Regulations
    regulationsLabel: 'Vorschriften',
    regulationsTitle: 'Vorschriften und Nutzungsbedingungen',
    reg1: 'Österreichische Transitkennzeichen können nur für Lkw, Busse und Anhänger/Auflieger europäischer Herkunft beantragt werden.',
    reg2: 'Die Rechnung muss an ein Unternehmen adressiert sein — eine Zulassung auf Privatpersonen ist nicht möglich. Gegebenenfalls kann eine EORI-Nummer angefordert werden.',
    reg3: 'Das Startdatum der Kennzeichen und Versicherung (21 Tage) ist standardmäßig das Bestelldatum, sofern Sie nichts anderes angeben.',
    reg4: 'Die Kennzeichen dürfen für Fahrten von oder nach Österreich verwendet werden, wobei die Route durch EU-Länder und andere europäische Staaten führen kann.',
    reg5: 'Diese vorübergehenden Kennzeichen werden nicht im EUCARIS-System registriert, weshalb in einigen Ländern zusätzliche Kontrollen durchgeführt werden können. Wir empfehlen, stets die originalen Fahrzeugpapiere griffbereit zu haben.',
    reg6: 'Unsachgemäße oder unbefugte Nutzung kann zu Maßnahmen durch örtliche Behörden führen. Wir bieten in solchen Fällen keine rechtliche Unterstützung.',

    // Pricing
    pricingLabel: 'Preise',
    pricingTitle: 'Transparente Preise',
    pricingSubtitle: 'Keine versteckten Kosten — Sie zahlen nur für das, was Sie nutzen.',
    pricingTruckTitle: 'Lkw & Busse',
    pricingTruckDesc: 'Transitkennzeichen mit WA-Versicherung für Lkw und Busse (21 Tage Gültigkeit)',
    pricingTrailerTitle: 'Anhänger & Auflieger',
    pricingTrailerDesc: 'Transitkennzeichen mit WA-Versicherung für Anhänger und Auflieger (21 Tage Gültigkeit)',
    pricingDuration: 'Gültigkeit: 21 Tage',
    pricingIncludes: 'Inklusive:',
    pricingInclude1: 'Transitkennzeichen',
    pricingInclude2: 'WA-Versicherung',
    pricingInclude3: 'Same-Day-Versand',
    pricingOrderBefore: 'Bestellen Sie vor 12:00 Uhr — Bearbeitung am selben Tag!',
    pricingOnRequest: 'Preis auf Anfrage',

    // FAQ
    faqLabel: 'FAQ',
    faqTitle: 'Häufig gestellte Fragen',
    faq1Q: 'Wer kann österreichische Transitkennzeichen beantragen?',
    faq1A: 'Anträge sind ausschließlich für Unternehmen möglich. Die Rechnung muss an ein Unternehmen adressiert sein, und eine EORI-Nummer kann angefordert werden.',
    faq2Q: 'Welche Fahrzeuge sind berechtigt?',
    faq2A: 'Österreichische Transitkennzeichen können nur für Lkw, Busse und Anhänger/Auflieger europäischer Herkunft beantragt werden.',
    faq3Q: 'Ist eine gültige TÜV-Bescheinigung erforderlich?',
    faq3A: 'Nein, eine gültige TÜV-Bescheinigung ist für die Ausstellung der Transitkennzeichen nicht erforderlich. Die Verantwortung für die Sicherheit und den technischen Zustand des Fahrzeugs liegt jedoch beim Käufer bzw. Fahrer.',
    faq4Q: 'Wie lange sind die Transitkennzeichen gültig?',
    faq4A: 'Die Transitkennzeichen und die WA-Versicherung sind 21 Tage ab dem von Ihnen angegebenen Startdatum gültig.',
    faq5Q: 'Können die Kennzeichen für eine Zulassung in einem anderen Land verwendet werden?',
    faq5A: 'Nein, diese Kennzeichen sind ausschließlich für eine Fahrt von A nach B durch Österreich bestimmt. Eine Zulassung in einem anderen Land ist nicht möglich — dafür sind die originalen Fahrzeugpapiere erforderlich.',
    faq6Q: 'Kann ich die Bestellung stornieren?',
    faq6A: 'Nein, die Kennzeichen werden auf die Fahrgestellnummer des Fahrzeugs ausgestellt, daher ist eine Stornierung oder Rückgabe nach Antragsstellung nicht möglich.',
    faq7Q: 'Wie schnell erhalte ich die Kennzeichen?',
    faq7A: 'Bestellungen vor 12:00 Uhr werden am selben Werktag bearbeitet. Kennzeichen und Versicherungspolice werden noch am selben Tag an Ihre Adresse versendet.',

    faq8Q: 'Können mit österreichischen Transitkennzeichen alle EU-Länder durchfahren werden?',
    faq8A: 'Ja, mit österreichischen Transitkennzeichen können Sie durch EU-Länder fahren, sofern: die Kennzeichen gültig sind (Ablaufdatum nicht überschritten), das Fahrzeug über eine gültige Transitversicherung verfügt, die die durchfahrenen Länder abdeckt, und Sie die gesamte Begleitdokumentation (Zulassungspapiere, Kaufvertrag oder Rechnung, Versicherungsnachweis, ggf. Ausfuhrpapiere) mitführen. Österreichische Transitkennzeichen werden in der EU in der Regel anerkannt, da sie mit einer internationalen Versicherung (Grüne Karte oder EU-Police) einhergehen. Bitte beachten Sie: Sie sind nicht für dauerhaftes Fahren oder alltägliche Nutzung bestimmt. Wenn das Ablaufdatum auf den Kennzeichen überschritten wird, gilt das Fahrzeug als nicht zugelassen.',

    faq9Q: 'Durch welche Nicht-EU-Länder kann mit österreichischen Transitkennzeichen gefahren werden?',
    faq9A: 'Neben den EU-Ländern können Sie in der Regel auch durch viele europäische Länder fahren, die eine internationale Kfz-Versicherung anerkennen: Serbien, Bosnien und Herzegowina, Montenegro, Nordmazedonien, Albanien, Schweiz, Norwegen, Island, Vereinigtes Königreich (Versicherungsschutz prüfen) und die Türkei (möglich, aber Versicherung muss speziell gelten). Prüfen Sie stets, ob Ihre Versicherungspolice ausdrücklich alle Länder auf Ihrer geplanten Route abdeckt.',

    // CTA
    ctaTitle: 'Bereit für österreichische Transitkennzeichen?',
    ctaSubtitle: 'Kontaktieren Sie uns noch heute und sichern Sie sich legale Transitkennzeichen für Ihr Fahrzeug in kürzester Zeit.',

    // Contact Form
    formTitle: 'Kontaktieren Sie uns',
    formName: 'Name',
    formEmail: 'E-Mail-Adresse',
    formPhone: 'Telefon',
    formCompany: 'Unternehmen',
    formMessage: 'Nachricht',
    formSubmit: 'Anfrage senden',
    formSuccess: 'Ihre Anfrage wurde erfolgreich gesendet! Wir melden uns in Kürze bei Ihnen.',
    formError: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    formRequired: 'Dieses Feld ist erforderlich',

    // SEO
    seoMetaTitle: 'Transit Pro — Österreichische Transitkennzeichen | WA-Versicherung | EU-weit',
    seoMetaDescription: 'Österreichische Transitkennzeichen mit WA-Versicherung für Lkw, Busse und Anhänger. Legale Durchfahrt durch die EU und viele weitere Länder. Same-Day-Bearbeitung. Nur für Unternehmen.',
    seoOgTitle: 'Transit Pro — Österreichische Transitkennzeichen mit WA-Versicherung',
    seoOgDescription: 'Schnelle, zuverlässige und professionelle Abwicklung österreichischer Transitkennzeichen. Legale Durchfahrt durch die EU und viele weitere Länder.',
    seoOgImageAlt: 'Transit Pro — Österreichische Transitkennzeichen auf weißem Hintergrund',

    // Contact Info
    contactPhone: 'Telefon',
    contactPhoneHours: 'Mo-Fr: 08:00 - 17:00 CET',
    contactEmail: 'E-Mail',
    contactEmailResponse: 'Antwort innerhalb von 24h',

    // Footer
    footerText: 'Transit Pro — Ihr zuverlässiger Partner für österreichische Transitkennzeichen',
    footerRights: 'Alle Rechte vorbehalten.',
    footerPrivacy: 'Datenschutz',
    footerTerms: 'Nutzungsbedingungen',
  },

  sr: {
    navHome: 'Početna',
    navAbout: 'O nama',
    navProcess: 'Postupak',
    navDocuments: 'Dokumenti',
    navFaq: 'FAQ',
    navContact: 'Kontakt',

    heroTitle: 'Austrijske tranzitne tablice',
    heroSubtitle: 'Brzo, pouzdano i profesionalno — obezbedite tranzitne tablice sa WA osiguranjem za vaše vozilo. Vozite legalno od tačke A do tačke B kroz EU i mnoge druge zemlje.',
    heroCta: 'Zatražite ponudu',
    heroSecondaryCta: 'Saznajte više',

    aboutLabel: 'O proizvodu',
    aboutTitle: 'Šta su austrijske tranzitne tablice?',
    aboutDescription1: 'Za vozila koja nemaju važeće registarske tablice ili važeći tehnički pregled, možete koristiti austrijsku izvoznu registraciju, poznatu i kao austrijske tranzitne tablice.',
    aboutDescription2: 'Ove privremene tablice se isporučuju sa privremenim WA osiguranjem i namenjene su za vozila koja se izvoze i prevoze drumskim putem do zemlje odredišta.',
    aboutDescription3: 'Napomena: zahtevi su mogući isključivo za pravna lica (kompanije).',
    aboutDescription4: 'Ove tablice su namenjene za vožnju od tačke A do tačke B, pri čemu ruta može voditi kroz zemlje EU i druge evropske države. Registracija u drugoj zemlji sa ovim tablicama nije moguća — za to su potrebni originalni dokumenti vozila.',
    aboutDescription5: 'Važeći tehnički pregled nije obavezan za izdavanje ovih tablica. Odgovornost za bezbednost i tehničko stanje vozila tokom vožnje uvek leži na kupcu/vozaču.',

    benefitsLabel: 'Prednosti',
    benefitsTitle: 'Zašto odabrati Transit Pro?',
    benefit1Title: 'Brza obrada',
    benefit1Desc: 'Porudžbine primljene pre 12:00 obrađuju se istog radnog dana. Tablice i polisa osiguranja se šalju istog dana.',
    benefit2Title: 'WA osiguranje uključeno',
    benefit2Desc: 'Svaki set tablica dolazi sa privremenim WA osiguranjem koje važi 21 dan, obezbeđujući potpunu pokrivenost.',
    benefit3Title: 'Bez tehničkog pregleda',
    benefit3Desc: 'Za izdavanje tranzitnih tablica nije potreban važeći tehnički pregled, što olakšava postupak za starija vozila.',
    benefit4Title: 'Legalna vožnja',
    benefit4Desc: 'Vozite potpuno legalno kroz EU i Evropu sa važećim tranzitnim tablicama i dokumentima.',
    benefit5Title: 'Posvećena podrška',
    benefit5Desc: 'Naš stručni tim je spreman da vam pomogne sa svim pitanjima i da vas vodi kroz ceo postupak.',
    benefit6Title: 'Iskustvo i pouzdanost',
    benefit6Desc: 'Godine iskustva u obradi tranzitnih tablica za kompanije širom Evrope.',

    processLabel: 'Kako funkcioniše',
    processTitle: 'Postupak u 5 jednostavnih koraka',
    processStep1Title: 'Kontaktirajte nas',
    processStep1Desc: 'Popunite kontakt formu ili nas pozovite da biste započeli postupak. Naš tim će vam pružiti sve potrebne informacije.',
    processStep2Title: 'Pripremite dokumenta',
    processStep2Desc: 'Prikupite potrebna dokumenta: fakturu, saobraćajnu dozvolu, CoC potvrdu, punomoćje i željeni datum početka osiguranja.',
    processStep3Title: 'Pošaljite dokumenta',
    processStep3Desc: 'Pošaljite nam jasne, čitljive PDF skenove svih potrebnih dokumenata za obradu vašeg zahteva.',
    processStep4Title: 'Obrada zahteva',
    processStep4Desc: 'Mi obrađujemo vaš zahtev i izdajemo tranzitne tablice na osnovu broja šasije vozila.',
    processStep5Title: 'Primite tablice',
    processStep5Desc: 'Tablice i polisa osiguranja se šalju na vašu adresu istog dana kada je zahtev obrađen.',

    documentsLabel: 'Dokumentacija',
    documentsTitle: 'Potrebna dokumenta za zahtev',
    documentsDescription: 'Zahtev može biti obrađen samo kada su sledeća dokumenta dostavljena. Prihvatamo isključivo jasne, čitljive PDF skenove:',
    doc1: 'Kopija prodajne fakture',
    doc2: 'Kopija saobraćajne dozvole (za polovna vozila)',
    doc3: 'Potvrda o usaglašenosti (CoC) (za nova vozila)',
    doc4: 'Punomoćje koje je potpisao kupac',
    doc5: 'Željeni datum početka osiguranja (važi 21 dan)',
    documentsNote: 'Napomena: Tablice se izdaju na osnovu broja šasije koji ste naveli. Stoga nije moguće otkazati ili vratiti porudžbinu nakon što je zahtev podnet.',

    regulationsLabel: 'Propisi',
    regulationsTitle: 'Propisi i pravila korišćenja',
    reg1: 'Austrijske tranzitne tablice se mogu tražiti samo za kamione, autobuse i prikolice i poluprikolice evropskog porekla.',
    reg2: 'Faktura mora biti adresirana na kompaniju — registracija na ime fizičkog lica nije moguća. Može se tražiti i EORI broj.',
    reg3: 'Datum početka važenja tablica i osiguranja (21 dan) je podrazumevano datum porudžbine, osim ako ne navedete drugačije.',
    reg4: 'Tablice se smeju koristiti za vožnju ka ili iz Austrije, pri čemu ruta može voditi kroz zemlje EU i druge evropske države.',
    reg5: 'Ove privremene tablice se ne registruju u EUCARIS sistemu, pa u nekim zemljama mogu biti sprovedene dodatne kontrole. Preporučujemo da uvek imate pri ruci originalnu saobraćajnu dozvolu vozila.',
    reg6: 'Nepravilno ili neovlašćeno korišćenje može dovesti do mera lokalnih vlasti. Ne pružamo pravnu podršku u takvim situacijama.',

    pricingLabel: 'Cene',
    pricingTitle: 'Transparentne cene',
    pricingSubtitle: 'Bez skrivenih troškova — platite samo ono što koristite.',
    pricingTruckTitle: 'Kamioni i autobusi',
    pricingTruckDesc: 'Tranzitne tablice sa WA osiguranjem za kamione i autobuse (21 dan važenja)',
    pricingTrailerTitle: 'Prikolice i poluprikolice',
    pricingTrailerDesc: 'Tranzitne tablice sa WA osiguranjem za prikolice i poluprikolice (21 dan važenja)',
    pricingDuration: 'Važenje: 21 dan',
    pricingIncludes: 'Uključeno:',
    pricingInclude1: 'Tranzitne tablice',
    pricingInclude2: 'WA osiguranje',
    pricingInclude3: 'Isporuka istog dana',
    pricingOrderBefore: 'Naručite pre 12:00 — obrada istog dana!',
    pricingOnRequest: 'Cena na upit',

    faqLabel: 'FAQ',
    faqTitle: 'Često postavljana pitanja',
    faq1Q: 'Ko može da podnese zahtev za austrijske tranzitne tablice?',
    faq1A: 'Zahtevi su mogući isključivo za pravna lica (kompanije). Faktura mora biti adresirana na kompaniju, a može se tražiti i EORI broj.',
    faq2Q: 'Koja vozila ispunjavaju uslove?',
    faq2A: 'Austrijske tranzitne tablice se mogu tražiti samo za kamione, autobuse i prikolice i poluprikolice evropskog porekla.',
    faq3Q: 'Da li je potreban važeći tehnički pregled?',
    faq3A: 'Ne, važeći tehnički pregled nije obavezan za izdavanje tranzitnih tablica. Međutim, odgovornost za bezbednost i tehničko stanje vozila tokom vožnje leži na kupcu/vozaču.',
    faq4Q: 'Koliko dugo važe tranzitne tablice?',
    faq4A: 'Tranzitne tablice i WA osiguranje važe 21 dan od datuma početka koji navedete.',
    faq5Q: 'Mogu li se tablice koristiti za registraciju vozila u drugoj zemlji?',
    faq5A: 'Ne, ove tablice su namenjene isključivo za vožnju od tačke A do tačke B kroz Austriju. Registracija u drugoj zemlji nije moguća — za to su potrebni originalni dokumenti vozila.',
    faq6Q: 'Da li mogu da otkažem porudžbinu?',
    faq6A: 'Ne, tablice se izdaju na osnovu broja šasije vozila, pa nije moguće otkazati ili vratiti porudžbinu nakon što je zahtev podnet.',
    faq7Q: 'Koliko brzo mogu dobiti tablice?',
    faq7A: 'Porudžbine primljene pre 12:00 obrađuju se istog radnog dana. Tablice i polisa osiguranja se šalju istog dana na vašu adresu.',

    faq8Q: 'Da li se sa austrijskim tranzitnim tablicama može voziti kroz celu EU?',
    faq8A: 'Da, sa austrijskim tranzitnim tablicama možete voziti kroz zemlje EU, pod uslovom da: tablice budu važeće (datum isteka nije prošao), vozilo ima važeće tranzitno osiguranje koje pokriva zemlje kroz koje prolazite, i da imate svu prateću dokumentaciju (saobraćajnu dozvolu, kupoprodajni ugovor ili račun, potvrdu o osiguranju, izvozne papire ukoliko su potrebni). Austrijske tranzitne tablice su generalno priznate u EU jer dolaze uz međunarodno osiguranje (zelena karta ili EU polisa). Napomena: nisu namenjene za dugotrajnu vožnju ili svakodnevnu upotrebu. Ako istekne datum na tablicama dok ste na putu, vozilo praktično postaje neregistrovano.',

    faq9Q: 'Kroz koje zemlje van EU je moguće proći sa austrijskim tranzitnim tablicama?',
    faq9A: 'Pored zemalja EU, uglavnom možete prolaziti i kroz mnoge evropske zemlje koje priznaju međunarodno osiguranje vozila: Srbiju, Bosnu i Hercegovinu, Crnu Goru, Severnu Makedoniju, Albaniju, Švajcarsku, Norvešku, Island, Ujedinjeno Kraljevstvo (proverite pokrivenost osiguranja) i Tursku (moguće, ali osiguranje mora posebno da važi). Uvek proverite da li vaša polisa osiguranja izričito pokriva sve zemlje na vašoj planiranoj ruti.',

    ctaTitle: 'Spremni za austrijske tranzitne tablice?',
    ctaSubtitle: 'Kontaktirajte nas danas i obezbedite legalne tranzitne tablice za vaše vozilo u najkraćem roku.',

    formTitle: 'Kontaktirajte nas',
    formName: 'Ime i prezime',
    formEmail: 'E-mail adresa',
    formPhone: 'Telefon',
    formCompany: 'Kompanija',
    formMessage: 'Poruka',
    formSubmit: 'Pošaljite zahtev',
    formSuccess: 'Vaš zahtev je uspešno poslat! Javićemo vam se u najkraćem roku.',
    formError: 'Došlo je do greške. Pokušajte ponovo.',
    formRequired: 'Ovo polje je obavezno',

    // SEO
    seoMetaTitle: 'Transit Pro — Austrijske tranzitne tablice | WA osiguranje | EU',
    seoMetaDescription: 'Austrijske tranzitne tablice sa WA osiguranjem za kamione, autobuse i prikolice. Legalna vožnja kroz EU i mnoge druge zemlje. Isporuka istog dana. Samo za pravna lica.',
    seoOgTitle: 'Transit Pro — Austrijske tranzitne tablice sa WA osiguranjem',
    seoOgDescription: 'Brza, pouzdana i profesionalna obrada austrijskih tranzitnih tablica. Legalna vožnja kroz EU i mnoge druge zemlje.',
    seoOgImageAlt: 'Transit Pro — Austrijske tranzitne tablice na beloj pozadini',

    // Contact Info
    contactPhone: 'Telefon',
    contactPhoneHours: 'Po-Pe: 08:00 - 17:00 CET',
    contactEmail: 'E-pošta',
    contactEmailResponse: 'Odgovor u roku od 24h',

    // Footer
    footerText: 'Transit Pro — Vaš pouzdani partner za austrijske tranzitne tablice',
    footerRights: 'Sva prava zadržana.',
    footerPrivacy: 'Politika privatnosti',
    footerTerms: 'Uslovi korišćenja',
  },

  en: {
    navHome: 'Home',
    navAbout: 'About',
    navProcess: 'Process',
    navDocuments: 'Documents',
    navFaq: 'FAQ',
    navContact: 'Contact',

    heroTitle: 'Austrian Transit Plates',
    heroSubtitle: 'Fast, reliable, and professional — get transit plates with WA insurance for your vehicle. Drive legally from point A to point B through the EU and many other countries.',
    heroCta: 'Request a Quote',
    heroSecondaryCta: 'Learn More',

    aboutLabel: 'About the Product',
    aboutTitle: 'What are Austrian Transit Plates?',
    aboutDescription1: 'For vehicles that do not have valid registration plates or a valid roadworthiness certificate, you can use the Austrian export registration, also known as Austrian transit plates.',
    aboutDescription2: 'These temporary plates come with temporary WA insurance and are intended for vehicles that are being exported and driven by road to the country of destination.',
    aboutDescription3: 'Note: Applications are only accepted from businesses (companies).',
    aboutDescription4: 'These plates are intended for driving from point A to point B, with the route passing through EU countries and other European states. Registration in another country is not possible with these plates — original vehicle documents are required for that.',
    aboutDescription5: 'A valid roadworthiness certificate is not required for the issuance of these plates. The responsibility for the safety and technical condition of the vehicle during the journey always lies with the buyer/driver.',

    benefitsLabel: 'Benefits',
    benefitsTitle: 'Why Choose Transit Pro?',
    benefit1Title: 'Fast Processing',
    benefit1Desc: 'Orders received before 12:00 are processed the same business day. Plates and insurance policy are shipped the same day.',
    benefit2Title: 'WA Insurance Included',
    benefit2Desc: 'Every set of plates comes with temporary WA insurance valid for 21 days, providing full coverage.',
    benefit3Title: 'No Roadworthiness Test Required',
    benefit3Desc: 'A valid roadworthiness certificate is not required for issuing transit plates, simplifying the process for older vehicles.',
    benefit4Title: 'Legal Driving',
    benefit4Desc: 'Drive completely legally through the EU and Europe with valid transit plates and documents.',
    benefit5Title: 'Dedicated Support',
    benefit5Desc: 'Our expert team is ready to help you with all your questions and guide you through the entire process.',
    benefit6Title: 'Experience & Reliability',
    benefit6Desc: 'Years of experience in processing transit plates for companies across Europe.',

    processLabel: 'How It Works',
    processTitle: 'The Process in 5 Simple Steps',
    processStep1Title: 'Contact Us',
    processStep1Desc: 'Fill out the contact form or call us to start the process. Our team will provide you with all the necessary information.',
    processStep2Title: 'Prepare Documents',
    processStep2Desc: 'Gather the required documents: invoice, registration document, CoC certificate, power of attorney, and desired insurance start date.',
    processStep3Title: 'Submit Documents',
    processStep3Desc: 'Send us clear, readable PDF scans of all required documents for processing your application.',
    processStep4Title: 'Application Processing',
    processStep4Desc: 'We process your application and issue the transit plates based on the vehicle\'s chassis number.',
    processStep5Title: 'Receive Plates',
    processStep5Desc: 'Plates and insurance policy are shipped to your address on the same day the application is processed.',

    documentsLabel: 'Documentation',
    documentsTitle: 'Required Documents for Application',
    documentsDescription: 'The application can only be processed when the following documents are submitted. We accept only clear, readable PDF scans:',
    doc1: 'Copy of the sales invoice',
    doc2: 'Copy of the registration document (for used vehicles)',
    doc3: 'Certificate of Conformity (CoC) (for new vehicles)',
    doc4: 'Power of attorney signed by the buyer',
    doc5: 'Desired insurance start date (valid for 21 days)',
    documentsNote: 'Note: The plates are issued based on the chassis number you provide. Therefore, it is not possible to cancel or return an order once the application has been submitted.',

    regulationsLabel: 'Regulations',
    regulationsTitle: 'Regulations and Terms of Use',
    reg1: 'Austrian transit plates can only be requested for trucks, buses, and trailers/semi-trailers of European origin.',
    reg2: 'The invoice must be addressed to a company — registration in the name of a private individual is not possible. An EORI number may also be requested.',
    reg3: 'The start date of the plates and insurance (21 days) defaults to the order date unless you specify otherwise.',
    reg4: 'The plates may be used for driving to or from Austria, with the route passing through EU countries and other European states.',
    reg5: 'These temporary plates are not registered in the EUCARIS system, so additional checks may be carried out in some countries. We recommend always keeping the original vehicle registration at hand.',
    reg6: 'Improper or unauthorised use may result in action by local authorities. We do not provide legal support in such cases.',

    pricingLabel: 'Pricing',
    pricingTitle: 'Transparent Pricing',
    pricingSubtitle: 'No hidden costs — pay only for what you use.',
    pricingTruckTitle: 'Trucks & Buses',
    pricingTruckDesc: 'Transit plates with WA insurance for trucks and buses (21-day validity)',
    pricingTrailerTitle: 'Trailers & Semi-trailers',
    pricingTrailerDesc: 'Transit plates with WA insurance for trailers and semi-trailers (21-day validity)',
    pricingDuration: 'Validity: 21 days',
    pricingIncludes: 'Includes:',
    pricingInclude1: 'Transit plates',
    pricingInclude2: 'WA insurance',
    pricingInclude3: 'Same-day shipping',
    pricingOrderBefore: 'Order before 12:00 — processed the same day!',
    pricingOnRequest: 'Price on request',

    faqLabel: 'FAQ',
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'Who can apply for Austrian transit plates?',
    faq1A: 'Applications are only accepted from businesses (companies). The invoice must be addressed to a company, and an EORI number may be requested.',
    faq2Q: 'Which vehicles are eligible?',
    faq2A: 'Austrian transit plates can only be requested for trucks, buses, and trailers/semi-trailers of European origin.',
    faq3Q: 'Is a valid roadworthiness certificate required?',
    faq3A: 'No, a valid roadworthiness certificate is not required for issuing transit plates. However, the responsibility for the safety and technical condition of the vehicle lies with the buyer/driver.',
    faq4Q: 'How long are the transit plates valid?',
    faq4A: 'The transit plates and WA insurance are valid for 21 days from the start date you specify.',
    faq5Q: 'Can the plates be used for vehicle registration in another country?',
    faq5A: 'No, these plates are exclusively intended for driving from point A to point B through Austria. Registration in another country is not possible — original vehicle documents are required for that.',
    faq6Q: 'Can I cancel my order?',
    faq6A: 'No, the plates are issued based on the vehicle\'s chassis number, so it is not possible to cancel or return an order once the application has been submitted.',
    faq7Q: 'How quickly can I receive the plates?',
    faq7A: 'Orders received before 12:00 are processed the same business day. Plates and insurance policy are shipped to your address the same day.',

    faq8Q: 'Can you drive through the entire EU with Austrian transit plates?',
    faq8A: 'Yes, you can drive through EU countries with Austrian transit plates, provided: the plates are valid (expiry date has not passed), the vehicle has valid transit insurance covering the countries you pass through, and you carry all accompanying documentation (registration documents, purchase invoice, insurance confirmation, and export papers if needed). Austrian transit plates are generally recognized in the EU as they come with international insurance (green card or EU policy). Please note: they are not intended for long-term or daily use. If the expiry date on the plates passes while you are on the road, the vehicle effectively becomes unregistered.',

    faq9Q: 'Through which non-EU countries can you drive with Austrian transit plates?',
    faq9A: 'Besides EU countries, you can generally also drive through many European countries that recognize international vehicle insurance: Serbia, Bosnia and Herzegovina, Montenegro, North Macedonia, Albania, Switzerland, Norway, Iceland, United Kingdom (check insurance coverage) and Turkey (possible, but insurance must specifically cover it). Always verify that your insurance policy explicitly covers all countries on your planned route.',

    ctaTitle: 'Ready for Austrian Transit Plates?',
    ctaSubtitle: 'Contact us today and secure legal transit plates for your vehicle in the shortest possible time.',

    formTitle: 'Contact Us',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formPhone: 'Phone',
    formCompany: 'Company',
    formMessage: 'Message',
    formSubmit: 'Send Request',
    formSuccess: 'Your request has been successfully sent! We will get back to you shortly.',
    formError: 'An error occurred. Please try again.',
    formRequired: 'This field is required',

    // SEO
    seoMetaTitle: 'Transit Pro — Austrian Transit Plates | WA Insurance | EU-wide',
    seoMetaDescription: 'Austrian transit plates with WA insurance for trucks, buses, and trailers. Legal driving through the EU and many more countries. Same-day processing. Businesses only.',
    seoOgTitle: 'Transit Pro — Austrian Transit Plates with WA Insurance',
    seoOgDescription: 'Fast, reliable, and professional Austrian transit plates processing. Drive legally through the EU and many more countries.',
    seoOgImageAlt: 'Transit Pro — Austrian transit plates on white background',

    // Contact Info
    contactPhone: 'Phone',
    contactPhoneHours: 'Mon-Fri: 08:00 - 17:00 CET',
    contactEmail: 'Email',
    contactEmailResponse: 'Response within 24h',

    // Footer
    footerText: 'Transit Pro — Your reliable partner for Austrian transit plates',
    footerRights: 'All rights reserved.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
  },

  ro: {
    navHome: 'Acasă',
    navAbout: 'Despre',
    navProcess: 'Procedură',
    navDocuments: 'Documente',
    navFaq: 'FAQ',
    navContact: 'Contact',

    heroTitle: 'Numere de tranzit austriece',
    heroSubtitle: 'Rapid, fiabil și profesionist — obțineți numere de tranzit cu asigurare WA pentru vehiculul dumneavoastră. Conduceți legal din punctul A în punctul B prin UE și multe alte țări.',
    heroCta: 'Solicitați o ofertă',
    heroSecondaryCta: 'Aflați mai multe',

    aboutLabel: 'Despre produs',
    aboutTitle: 'Ce sunt numerele de tranzit austriece?',
    aboutDescription1: 'Pentru vehiculele care nu dispun de numere de înmatriculare valabile sau de o inspecție tehnică valabilă, puteți utiliza înmatricularea de export austriacă, cunoscută și sub denumirea de numere de tranzit austriece.',
    aboutDescription2: 'Aceste numere temporare sunt livrate cu o asigurare WA temporară și sunt destinate vehiculelor care sunt exportate și conduse pe drum până în țara de destinație.',
    aboutDescription3: 'Notă: Cererile sunt acceptate exclusiv din partea companiilor (persoane juridice).',
    aboutDescription4: 'Aceste numere sunt destinate conducerii din punctul A în punctul B, traseul putând trece prin țări UE și alte state europene. Înmatricularea într-o altă țară nu este posibilă cu aceste numere — pentru aceasta sunt necesare documentele originale ale vehiculului.',
    aboutDescription5: 'O inspecție tehnică valabilă nu este obligatorie pentru eliberarea acestor numere. Responsabilitatea pentru siguranța și starea tehnică a vehiculului în timpul călătoriei revine întotdeauna cumpărătorului/conducătorului.',

    benefitsLabel: 'Avantaje',
    benefitsTitle: 'De ce să alegeți Transit Pro?',
    benefit1Title: 'Procesare rapidă',
    benefit1Desc: 'Comenzile primite înainte de 12:00 sunt procesate în aceeași zi lucrătoare. Numerele și polița de asigurare sunt expediate în aceeași zi.',
    benefit2Title: 'Asigurare WA inclusă',
    benefit2Desc: 'Fiecare set de numere vine cu o asigurare WA temporară valabilă 21 de zile, oferind acoperire completă.',
    benefit3Title: 'Fără inspecție tehnică',
    benefit3Desc: 'O inspecție tehnică valabilă nu este necesară pentru eliberarea numerelor de tranzit, simplificând procedura pentru vehiculele mai vechi.',
    benefit4Title: 'Conducere legală',
    benefit4Desc: 'Conduceți în deplină legalitate prin UE și Europa cu numere de tranzit și documente valabile.',
    benefit5Title: 'Asistență dedicată',
    benefit5Desc: 'Echipa noastră de experți este pregătită să vă ajute cu toate întrebările și să vă ghideze pe parcursul întregii proceduri.',
    benefit6Title: 'Experiență și fiabilitate',
    benefit6Desc: 'Ani de experiență în procesarea numerelor de tranzit pentru companii din întreaga Europă.',

    processLabel: 'Cum funcționează',
    processTitle: 'Procedura în 5 pași simpli',
    processStep1Title: 'Contactați-ne',
    processStep1Desc: 'Completați formularul de contact sau sunați-ne pentru a iniția procedura. Echipa noastră vă va oferi toate informațiile necesare.',
    processStep2Title: 'Pregătiți documentele',
    processStep2Desc: 'Strângeți documentele necesare: factura, certificatul de înmatriculare, certificatul CoC, procura și data de început dorită a asigurării.',
    processStep3Title: 'Trimiteți documentele',
    processStep3Desc: 'Trimiteți-ne scanări PDF clare și lizibile ale tuturor documentelor necesare pentru procesarea cererii dumneavoastră.',
    processStep4Title: 'Procesarea cererii',
    processStep4Desc: 'Procesăm cererea dumneavoastră și eliberăm numerele de tranzit pe baza numărului de șasiu al vehiculului.',
    processStep5Title: 'Primiți numerele',
    processStep5Desc: 'Numerele și polița de asigurare sunt expediate la adresa dumneavoastră în aceeași zi în care cererea a fost procesată.',

    documentsLabel: 'Documentație',
    documentsTitle: 'Documente necesare pentru cerere',
    documentsDescription: 'Cererea poate fi procesată doar atunci când sunt trimise următoarele documente. Acceptăm exclusiv scanări PDF clare și lizibile:',
    doc1: 'Copie a facturii de vânzare',
    doc2: 'Copie a certificatului de înmatriculare (pentru vehiculele rulate)',
    doc3: 'Certificat de conformitate (CoC) (pentru vehicule noi)',
    doc4: 'Procură semnată de cumpărător',
    doc5: 'Data de început dorită a asigurării (valabilă 21 de zile)',
    documentsNote: 'Notă: Numerele sunt eliberate pe baza numărului de șasiu pe care îl furnizați. Prin urmare, nu este posibil să anulați sau să returnați o comandă după ce cererea a fost depusă.',

    regulationsLabel: 'Regulamente',
    regulationsTitle: 'Regulamente și condiții de utilizare',
    reg1: 'Numerele de tranzit austriece pot fi solicitate doar pentru camioane, autobuze și remorci/semiremorci de origine europeană.',
    reg2: 'Factura trebuie să fie adresată unei companii — înmatricularea pe numele unei persoane fizice nu este posibilă. Poate fi solicitat și un număr EORI.',
    reg3: 'Data de început a numerelor și asigurării (21 de zile) este implicit data comenzii, cu excepția cazului în care specificați altfel.',
    reg4: 'Numerele pot fi utilizate pentru condus spre sau dinspre Austria, traseul putând trece prin țări UE și alte state europene.',
    reg5: 'Aceste numere temporare nu sunt înregistrate în sistemul EUCARIS, deci pot fi efectuate controale suplimentare în unele țări. Recomandăm să aveți întotdeauna la îndemână certificatul de înmatriculare original al vehiculului.',
    reg6: 'Utilizarea necorespunzătoare sau neautorizată poate atrage măsuri din partea autorităților locale. Nu oferim asistență juridică în astfel de situații.',

    pricingLabel: 'Prețuri',
    pricingTitle: 'Prețuri transparente',
    pricingSubtitle: 'Fără costuri ascunse — plătiți doar pentru ceea ce utilizați.',
    pricingTruckTitle: 'Camioane și autobuze',
    pricingTruckDesc: 'Numere de tranzit cu asigurare WA pentru camioane și autobuze (valabilitate 21 de zile)',
    pricingTrailerTitle: 'Remorci și semiremorci',
    pricingTrailerDesc: 'Numere de tranzit cu asigurare WA pentru remorci și semiremorci (valabilitate 21 de zile)',
    pricingDuration: 'Valabilitate: 21 de zile',
    pricingIncludes: 'Include:',
    pricingInclude1: 'Numere de tranzit',
    pricingInclude2: 'Asigurare WA',
    pricingInclude3: 'Expediere în aceeași zi',
    pricingOrderBefore: 'Comandați înainte de 12:00 — procesare în aceeași zi!',
    pricingOnRequest: 'Preț la cerere',

    faqLabel: 'FAQ',
    faqTitle: 'Întrebări frecvente',
    faq1Q: 'Cine poate solicita numere de tranzit austriece?',
    faq1A: 'Cererile sunt acceptate exclusiv din partea companiilor. Factura trebuie să fie adresată unei companii, iar un număr EORI poate fi solicitat.',
    faq2Q: 'Ce vehicule sunt eligibile?',
    faq2A: 'Numerele de tranzit austriece pot fi solicitate doar pentru camioane, autobuze și remorci/semiremorci de origine europeană.',
    faq3Q: 'Este necesară o inspecție tehnică valabilă?',
    faq3A: 'Nu, o inspecție tehnică valabilă nu este necesară pentru eliberarea numerelor de tranzit. Totuși, responsabilitatea pentru siguranța și starea tehnică a vehiculului revine cumpărătorului/conducătorului.',
    faq4Q: 'Cât timp sunt valabile numerele de tranzit?',
    faq4A: 'Numerele de tranzit și asigurarea WA sunt valabile 21 de zile de la data de început pe care o specificați.',
    faq5Q: 'Pot fi folosite numerele pentru înmatricularea vehiculului într-o altă țară?',
    faq5A: 'Nu, aceste numere sunt destinate exclusiv conducerii din punctul A în punctul B prin Austria. Înmatricularea într-o altă țară nu este posibilă — pentru aceasta sunt necesare documentele originale ale vehiculului.',
    faq6Q: 'Pot anula comanda?',
    faq6A: 'Nu, numerele sunt eliberate pe baza numărului de șasiu al vehiculului, deci nu este posibil să anulați sau returnați o comandă după depunerea cererii.',
    faq7Q: 'Cât de repede pot primi numerele?',
    faq7A: 'Comenzile primite înainte de 12:00 sunt procesate în aceeași zi lucrătoare. Numerele și polița de asigurare sunt expediate la adresa dumneavoastră în aceeași zi.',

    faq8Q: 'Se poate conduce prin toată UE cu numere de tranzit austriece?',
    faq8A: 'Da, puteți conduce prin țările UE cu numere de tranzit austriece, cu condiția ca: numerele să fie valabile (data de expirare să nu fi trecut), vehiculul să aibă asigurare de tranzit valabilă care să acopere țările prin care treceți, și să aveți toată documentația însoțitoare (certificat de înmatriculare, factură de vânzare, confirmare de asigurare, documente de export dacă este cazul). Numerele de tranzit austriece sunt în general recunoscute în UE deoarece vin cu asigurare internațională (carte verde sau poliță UE). Notă: nu sunt destinate pentru utilizare pe termen lung sau zilnică. Dacă data de expirare de pe numere trece în timp ce sunteți în tranzit, vehiculul devine practic neînmatriculat.',

    faq9Q: 'Prin ce țări din afara UE se poate conduce cu numere de tranzit austriece?',
    faq9A: 'Pe lângă țările UE, puteți în general conduce și prin multe țări europene care recunosc asigurarea internațională a vehiculelor: Serbia, Bosnia și Herțegovina, Muntenegru, Macedonia de Nord, Albania, Elveția, Norvegia, Islanda, Regatul Unit (verificați acoperirea asigurării) și Turcia (posibil, dar asigurarea trebuie să acopere în mod specific). Verificați întotdeauna că polița dumneavoastră de asigurare acoperă explicit toate țările de pe traseul planificat.',

    ctaTitle: 'Sunteți pregătit pentru numere de tranzit austriece?',
    ctaSubtitle: 'Contactați-ne astăzi și asigurați-vă numere de tranzit legale pentru vehiculul dumneavoastră în cel mai scurt timp.',

    formTitle: 'Contactați-ne',
    formName: 'Nume complet',
    formEmail: 'Adresa de e-mail',
    formPhone: 'Telefon',
    formCompany: 'Companie',
    formMessage: 'Mesaj',
    formSubmit: 'Trimiteți cererea',
    formSuccess: 'Cererea dumneavoastră a fost trimisă cu succes! Vă vom contacta în cel mai scurt timp.',
    formError: 'A apărut o eroare. Vă rugăm să încercați din nou.',
    formRequired: 'Acest câmp este obligatoriu',

    // SEO
    seoMetaTitle: 'Transit Pro — Numere de tranzit austriece | Asigurare WA | UE',
    seoMetaDescription: 'Numere de tranzit austriece cu asigurare WA pentru camioane, autobuze și remorci. Conducere legală prin UE și multe alte țări. Procesare în aceeași zi. Doar pentru companii.',
    seoOgTitle: 'Transit Pro — Numere de tranzit austriece cu asigurare WA',
    seoOgDescription: 'Procesare rapidă, fiabilă și profesionistă a numerelor de tranzit austriece. Conducere legală prin UE și multe alte țări.',
    seoOgImageAlt: 'Transit Pro — Numere de tranzit austriece pe fond alb',

    // Contact Info
    contactPhone: 'Telefon',
    contactPhoneHours: 'Lun-Vin: 08:00 - 17:00 CET',
    contactEmail: 'E-mail',
    contactEmailResponse: 'Răspuns în termen de 24h',

    // Footer
    footerText: 'Transit Pro — Partenerul dumneavoastră de încredere pentru numere de tranzit austriece',
    footerRights: 'Toate drepturile rezervate.',
    footerPrivacy: 'Politica de confidențialitate',
    footerTerms: 'Termeni și condiții',
  },

  bg: {
    navHome: 'Начало',
    navAbout: 'За нас',
    navProcess: 'Процедура',
    navDocuments: 'Документи',
    navFaq: 'Въпроси',
    navContact: 'Контакт',

    heroTitle: 'Австрийски транзитни табели',
    heroSubtitle: 'Бързо, надеждно и професионално — осигурете си транзитни табели с WA застраховка за вашия автомобил. Шофирайте законно от точка А до точка Б през ЕС и много други държави.',
    heroCta: 'Заявете оферта',
    heroSecondaryCta: 'Научете повече',

    aboutLabel: 'За продукта',
    aboutTitle: 'Какво са австрийските транзитни табели?',
    aboutDescription1: 'За превозни средства, които нямат валидни регистрационни табели или валиден технически преглед, можете да използвате австрийската износна регистрация, известна още като австрийски транзитни табели.',
    aboutDescription2: 'Тези временни табели се доставят с временна WA застраховка и са предназначени за превозни средства, които се изнасят и се шофират по пътя до страната на дестинация.',
    aboutDescription3: 'Забележка: Заявления са възможни само за юридически лица (компании).',
    aboutDescription4: 'Тези табели са предназначени за шофиране от точка А до точка Б, като маршрутът може да минава през държави от ЕС и други европейски държави. Регистрация в друга страна с тези табели не е възможна — за това са необходими оригиналните документи на превозното средство.',
    aboutDescription5: 'Валиден технически преглед не е задължителен за издаване на тези табели. Отговорността за безопасността и техническото състояние на превозното средство по време на пътуването винаги носи купувачът/шофьорът.',

    benefitsLabel: 'Предимства',
    benefitsTitle: 'Защо да изберете Transit Pro?',
    benefit1Title: 'Бърза обработка',
    benefit1Desc: 'Поръчки, получени преди 12:00, се обработват същия работен ден. Табелите и застрахователната полица се изпращат същия ден.',
    benefit2Title: 'WA застраховка включена',
    benefit2Desc: 'Всеки комплект табели идва с временна WA застраховка, валидна 21 дни, осигуряваща пълно покритие.',
    benefit3Title: 'Без технически преглед',
    benefit3Desc: 'Валиден технически преглед не е необходим за издаване на транзитните табели, което опростява процедурата за по-стари превозни средства.',
    benefit4Title: 'Законно шофиране',
    benefit4Desc: 'Шофирайте напълно законно през ЕС и Европа с валидни транзитни табели и документи.',
    benefit5Title: 'Специализирана поддръжка',
    benefit5Desc: 'Нашият експертен екип е готов да ви помогне с всички въпроси и да ви преведе през цялата процедура.',
    benefit6Title: 'Опит и надеждност',
    benefit6Desc: 'Години опит в обработката на транзитни табели за компании в цяла Европа.',

    processLabel: 'Как работи',
    processTitle: 'Процедурата в 5 прости стъпки',
    processStep1Title: 'Свържете се с нас',
    processStep1Desc: 'Попълнете контактната форма или ни се обадете, за да започнете процедурата. Нашият екип ще ви предостави цялата необходима информация.',
    processStep2Title: 'Подгответе документите',
    processStep2Desc: 'Съберете необходимите документи: фактура, свидетелство за регистрация, сертификат CoC, пълномощно и желана начална дата на застраховката.',
    processStep3Title: 'Подайте документите',
    processStep3Desc: 'Изпратете ни ясни, четливи PDF сканирания на всички необходими документи за обработка на вашата заявка.',
    processStep4Title: 'Обработка на заявката',
    processStep4Desc: 'Ние обработваме вашата заявка и издаваме транзитните табели въз основа на номера на шасито на превозното средство.',
    processStep5Title: 'Получете табелите',
    processStep5Desc: 'Табелите и застрахователната полица се изпращат на вашия адрес същия ден, в който заявката е обработена.',

    documentsLabel: 'Документация',
    documentsTitle: 'Необходими документи за заявка',
    documentsDescription: 'Заявката може да бъде обработена само когато са предоставени следните документи. Приемаме само ясни, четливи PDF сканирания:',
    doc1: 'Копие от фактурата за продажба',
    doc2: 'Копие от свидетелството за регистрация (за превозни средства втора употреба)',
    doc3: 'Сертификат за съответствие (CoC) (за нови превозни средства)',
    doc4: 'Пълномощно, подписано от купувача',
    doc5: 'Желана начална дата на застраховката (валидна 21 дни)',
    documentsNote: 'Забележка: Табелите се издават въз основа на номера на шасито, който сте посочили. Следователно не е възможно да отмените или върнете поръчка, след като заявката е подадена.',

    regulationsLabel: 'Наредби',
    regulationsTitle: 'Наредби и условия за ползване',
    reg1: 'Австрийски транзитни табели могат да се заявяват само за камиони, автобуси и ремаркета/полуремаркета от европейски произход.',
    reg2: 'Фактурата трябва да бъде адресирана до компания — регистрация на името на физическо лице не е възможна. Може да се изиска и EORI номер.',
    reg3: 'Началната дата на табелите и застраховката (21 дни) е по подразбиране датата на поръчката, освен ако не посочите друго.',
    reg4: 'Табелите могат да се използват за шофиране до или от Австрия, като маршрутът може да минава през държави от ЕС и други европейски държави.',
    reg5: 'Тези временни табели не се регистрират в системата EUCARIS, така че в някои страни могат да се извършват допълнителни проверки. Препоръчваме винаги да имате под ръка оригиналното свидетелство за регистрация на превозното средство.',
    reg6: 'Неправилна или неоторизирана употреба може да доведе до мерки от местните власти. Не осигуряваме правна подкрепа в такива ситуации.',

    pricingLabel: 'Цени',
    pricingTitle: 'Прозрачни цени',
    pricingSubtitle: 'Без скрити разходи — плащате само за това, което използвате.',
    pricingTruckTitle: 'Камиони и автобуси',
    pricingTruckDesc: 'Транзитни табели с WA застраховка за камиони и автобуси (валидност 21 дни)',
    pricingTrailerTitle: 'Ремаркета и полуремаркета',
    pricingTrailerDesc: 'Транзитни табели с WA застраховка за ремаркета и полуремаркета (валидност 21 дни)',
    pricingDuration: 'Валидност: 21 дни',
    pricingIncludes: 'Включва:',
    pricingInclude1: 'Транзитни табели',
    pricingInclude2: 'WA застраховка',
    pricingInclude3: 'Изпращане същия ден',
    pricingOrderBefore: 'Поръчайте преди 12:00 — обработка същия ден!',
    pricingOnRequest: 'Цена по заявка',

    faqLabel: 'Въпроси',
    faqTitle: 'Често задавани въпроси',
    faq1Q: 'Кой може да подава заявка за австрийски транзитни табели?',
    faq1A: 'Заявления са възможни само за компании. Фактурата трябва да бъде адресирана до компания, а може да се изиска и EORI номер.',
    faq2Q: 'Кои превозни средства са допустими?',
    faq2A: 'Австрийски транзитни табели могат да се заявяват само за камиони, автобуси и ремаркета/полуремаркета от европейски произход.',
    faq3Q: 'Необходим ли е валиден технически преглед?',
    faq3A: 'Не, валиден технически преглед не е необходим за издаване на транзитните табели. Въпреки това, отговорността за безопасността и техническото състояние на превозното средство носи купувачът/шофьорът.',
    faq4Q: 'Колко дълго са валидни транзитните табели?',
    faq4A: 'Транзитните табели и WA застраховката са валидни 21 дни от началната дата, която посочите.',
    faq5Q: 'Могат ли табелите да се използват за регистрация на превозното средство в друга страна?',
    faq5A: 'Не, тези табели са предназначени изключително за шофиране от точка А до точка Б през Австрия. Регистрация в друга страна не е възможна — за това са необходими оригиналните документи на превозното средство.',
    faq6Q: 'Мога ли да отменя поръчката си?',
    faq6A: 'Не, табелите се издават въз основа на номера на шасито на превозното средство, така че не е възможно да отмените или върнете поръчка, след като заявката е подадена.',
    faq7Q: 'Колко бързо мога да получа табелите?',
    faq7A: 'Поръчки, получени преди 12:00, се обработват същия работен ден. Табелите и застрахователната полица се изпращат на вашия адрес същия ден.',

    faq8Q: 'Може ли да се шофира през цялата ЕС с австрийски транзитни табели?',
    faq8A: 'Да, можете да шофирате през държави от ЕС с австрийски транзитни табели, при условие че: табелите са валидни (датата на изтичане не е преминала), превозното средство има валидна транзитна застраховка, покриваща държавите, през които преминавате, и носите цялата съпътстваща документация (свидетелство за регистрация, фактура за покупка, потвърждение за застраховка, износни документи при необходимост). Австрийските транзитни табели са общо взето признати в ЕС, тъй като идват с международна застраховка (зелена карта или ЕС полица). Забележка: не са предназначени за дълготрайно шофиране или ежедневна употреба. Ако датата на изтичане на табелите изтече докато сте на път, превозното средство на практика става нерегистрирано.',

    faq9Q: 'През кои държави извън ЕС може да се шофира с австрийски транзитни табели?',
    faq9A: 'Освен държавите от ЕС, като цяло можете да шофирате и през много европейски държави, които признават международната застраховка на моторни превозни средства: Сърбия, Босна и Херцеговина, Черна гора, Северна Македония, Албания, Швейцария, Норвегия, Исландия, Обединеното кралство (проверете покритието на застраховката) и Турция (възможно, но застраховката трябва специално да покрива). Винаги проверявайте дали вашата застрахователна полица изрично покрива всички държави по планирания маршрут.',

    ctaTitle: 'Готови ли сте за австрийски транзитни табели?',
    ctaSubtitle: 'Свържете се с нас днес и осигурете законни транзитни табели за вашия автомобил в най-кратък срок.',

    formTitle: 'Свържете се с нас',
    formName: 'Пълно име',
    formEmail: 'Имейл адрес',
    formPhone: 'Телефон',
    formCompany: 'Компания',
    formMessage: 'Съобщение',
    formSubmit: 'Изпратете заявка',
    formSuccess: 'Вашата заявка е изпратена успешно! Ще се свържем с вас в най-кратък срок.',
    formError: 'Възникна грешка. Моля, опитайте отново.',
    formRequired: 'Това поле е задължително',

    // SEO
    seoMetaTitle: 'Transit Pro — Австрийски транзитни табели | WA застраховка | ЕС',
    seoMetaDescription: 'Австрийски транзитни табели с WA застраховка за камиони, автобуси и ремаркета. Законно шофиране през ЕС и много други държави. Обработка същия ден. Само за компании.',
    seoOgTitle: 'Transit Pro — Австрийски транзитни табели с WA застраховка',
    seoOgDescription: 'Бърза, надеждна и професионална обработка на австрийски транзитни табели. Законно шофиране през ЕС и много други държави.',
    seoOgImageAlt: 'Transit Pro — Австрийски транзитни табели на бял фон',

    // Contact Info
    contactPhone: 'Телефон',
    contactPhoneHours: 'По-Пе: 08:00 - 17:00 CET',
    contactEmail: 'Имейл',
    contactEmailResponse: 'Отговор в рамките на 24ч',

    // Footer
    footerText: 'Transit Pro — Вашият надежден партньор за австрийски транзитни табели',
    footerRights: 'Всички права запазени.',
    footerPrivacy: 'Политика за поверителност',
    footerTerms: 'Условия за ползване',
  },

  fr: {
    navHome: 'Accueil',
    navAbout: 'À propos',
    navProcess: 'Procédure',
    navDocuments: 'Documents',
    navFaq: 'FAQ',
    navContact: 'Contact',

    heroTitle: 'Plaques de transit autrichiennes',
    heroSubtitle: 'Rapide, fiable et professionnel — obtenez des plaques de transit avec assurance WA pour votre véhicule. Conduisez légalement du point A au point B à travers l\'UE et de nombreux autres pays.',
    heroCta: 'Demander un devis',
    heroSecondaryCta: 'En savoir plus',

    aboutLabel: 'À propos du produit',
    aboutTitle: 'Que sont les plaques de transit autrichiennes ?',
    aboutDescription1: 'Pour les véhicules qui ne disposent pas de plaques d\'immatriculation valides ou d\'un contrôle technique valide, vous pouvez utiliser l\'immatriculation d\'exportation autrichienne, également connue sous le nom de plaques de transit autrichiennes.',
    aboutDescription2: 'Ces plaques temporaires sont fournies avec une assurance WA temporaire et sont destinées aux véhicules qui sont exportés et conduits par la route vers le pays de destination.',
    aboutDescription3: 'Remarque : Les demandes sont acceptées uniquement pour les entreprises (sociétés).',
    aboutDescription4: 'Ces plaques sont destinées à la conduite du point A au point B, l\'itinéraire pouvant passer par des pays de l\'UE et d\'autres États européens. L\'immatriculation dans un autre pays n\'est pas possible avec ces plaques — les documents originaux du véhicule sont nécessaires pour cela.',
    aboutDescription5: 'Un contrôle technique valide n\'est pas obligatoire pour la délivrance de ces plaques. La responsabilité de la sécurité et de l\'état technique du véhicule pendant le trajet incombe toujours à l\'acheteur/conducteur.',

    benefitsLabel: 'Avantages',
    benefitsTitle: 'Pourquoi choisir Transit Pro ?',
    benefit1Title: 'Traitement rapide',
    benefit1Desc: 'Les commandes reçues avant 12 h 00 sont traitées le même jour ouvrable. Les plaques et la police d\'assurance sont expédiées le jour même.',
    benefit2Title: 'Assurance WA incluse',
    benefit2Desc: 'Chaque jeu de plaques est accompagné d\'une assurance WA temporaire valable 21 jours, offrant une couverture complète.',
    benefit3Title: 'Sans contrôle technique',
    benefit3Desc: 'Un contrôle technique valide n\'est pas requis pour la délivrance des plaques de transit, ce qui simplifie la démarche pour les véhicules plus anciens.',
    benefit4Title: 'Conduite légale',
    benefit4Desc: 'Conduisez en toute légalité à travers l\'UE et l\'Europe avec des plaques de transit et des documents valides.',
    benefit5Title: 'Support dédié',
    benefit5Desc: 'Notre équipe d\'experts est prête à vous aider pour toutes vos questions et à vous guider tout au long de la procédure.',
    benefit6Title: 'Expérience et fiabilité',
    benefit6Desc: 'Des années d\'expérience dans le traitement des plaques de transit pour les entreprises à travers l\'Europe.',

    processLabel: 'Comment ça marche',
    processTitle: 'La procédure en 5 étapes simples',
    processStep1Title: 'Contactez-nous',
    processStep1Desc: 'Remplissez le formulaire de contact ou appelez-nous pour démarrer la procédure. Notre équipe vous fournira toutes les informations nécessaires.',
    processStep2Title: 'Préparez les documents',
    processStep2Desc: 'Rassemblez les documents requis : facture, certificat d\'immatriculation, certificat CoC, procuration et date de début d\'assurance souhaitée.',
    processStep3Title: 'Soumettez les documents',
    processStep3Desc: 'Envoyez-nous des scans PDF clairs et lisibles de tous les documents requis pour le traitement de votre demande.',
    processStep4Title: 'Traitement de la demande',
    processStep4Desc: 'Nous traitons votre demande et délivrons les plaques de transit sur la base du numéro de châssis du véhicule.',
    processStep5Title: 'Recevez les plaques',
    processStep5Desc: 'Les plaques et la police d\'assurance sont expédiées à votre adresse le jour même du traitement de la demande.',

    documentsLabel: 'Documentation',
    documentsTitle: 'Documents requis pour la demande',
    documentsDescription: 'La demande ne peut être traitée que lorsque les documents suivants sont soumis. Nous acceptons exclusivement les scans PDF clairs et lisibles :',
    doc1: 'Copie de la facture de vente',
    doc2: 'Copie du certificat d\'immatriculation (pour les véhicules d\'occasion)',
    doc3: 'Certificat de conformité (CoC) (pour les véhicules neufs)',
    doc4: 'Procuration signée par l\'acheteur',
    doc5: 'Date de début d\'assurance souhaitée (valable 21 jours)',
    documentsNote: 'Remarque : Les plaques sont délivrées sur la base du numéro de châssis que vous fournissez. Par conséquent, il n\'est pas possible d\'annuler ou de retourner une commande une fois la demande soumise.',

    regulationsLabel: 'Règlementation',
    regulationsTitle: 'Règlementation et conditions d\'utilisation',
    reg1: 'Les plaques de transit autrichiennes ne peuvent être demandées que pour les camions, bus et remorques/semi-remorques d\'origine européenne.',
    reg2: 'La facture doit être adressée à une entreprise — l\'immatriculation au nom d\'un particulier n\'est pas possible. Un numéro EORI peut également être demandé.',
    reg3: 'La date de début des plaques et de l\'assurance (21 jours) est par défaut la date de commande, sauf indication contraire de votre part.',
    reg4: 'Les plaques peuvent être utilisées pour la conduite vers ou depuis l\'Autriche, l\'itinéraire pouvant passer par des pays de l\'UE et d\'autres États européens.',
    reg5: 'Ces plaques temporaires ne sont pas enregistrées dans le système EUCARIS, des contrôles supplémentaires peuvent donc être effectués dans certains pays. Nous recommandons de toujours garder le certificat d\'immatriculation original du véhicule à portée de main.',
    reg6: 'Une utilisation incorrecte ou non autorisée peut entraîner des sanctions de la part des autorités locales. Nous ne fournissons pas de soutien juridique dans de telles situations.',

    pricingLabel: 'Tarifs',
    pricingTitle: 'Tarifs transparents',
    pricingSubtitle: 'Pas de coûts cachés — payez uniquement ce que vous utilisez.',
    pricingTruckTitle: 'Camions et bus',
    pricingTruckDesc: 'Plaques de transit avec assurance WA pour camions et bus (validité 21 jours)',
    pricingTrailerTitle: 'Remorques et semi-remorques',
    pricingTrailerDesc: 'Plaques de transit avec assurance WA pour remorques et semi-remorques (validité 21 jours)',
    pricingDuration: 'Validité : 21 jours',
    pricingIncludes: 'Inclus :',
    pricingInclude1: 'Plaques de transit',
    pricingInclude2: 'Assurance WA',
    pricingInclude3: 'Expédition le jour même',
    pricingOrderBefore: 'Commandez avant 12 h 00 — traitement le jour même !',
    pricingOnRequest: 'Prix sur demande',

    faqLabel: 'FAQ',
    faqTitle: 'Questions fréquemment posées',
    faq1Q: 'Qui peut demander des plaques de transit autrichiennes ?',
    faq1A: 'Les demandes sont acceptées uniquement pour les entreprises. La facture doit être adressée à une entreprise, et un numéro EORI peut être demandé.',
    faq2Q: 'Quels véhicules sont éligibles ?',
    faq2A: 'Les plaques de transit autrichiennes ne peuvent être demandées que pour les camions, bus et remorques/semi-remorques d\'origine européenne.',
    faq3Q: 'Un contrôle technique valide est-il requis ?',
    faq3A: 'Non, un contrôle technique valide n\'est pas requis pour la délivrance des plaques de transit. Cependant, la responsabilité de la sécurité et de l\'état technique du véhicule incombe à l\'acheteur/conducteur.',
    faq4Q: 'Combien de temps les plaques de transit sont-elles valables ?',
    faq4A: 'Les plaques de transit et l\'assurance WA sont valables 21 jours à compter de la date de début que vous spécifiez.',
    faq5Q: 'Les plaques peuvent-elles être utilisées pour l\'immatriculation du véhicule dans un autre pays ?',
    faq5A: 'Non, ces plaques sont exclusivement destinées à la conduite du point A au point B à travers l\'Autriche. L\'immatriculation dans un autre pays n\'est pas possible — les documents originaux du véhicule sont nécessaires pour cela.',
    faq6Q: 'Puis-je annuler ma commande ?',
    faq6A: 'Non, les plaques sont délivrées sur la base du numéro de châssis du véhicule, il n\'est donc pas possible d\'annuler ou de retourner une commande une fois la demande soumise.',
    faq7Q: 'Combien de temps faut-il pour recevoir les plaques ?',
    faq7A: 'Les commandes reçues avant 12 h 00 sont traitées le même jour ouvrable. Les plaques et la police d\'assurance sont expédiées à votre adresse le jour même.',

    faq8Q: 'Peut-on conduire dans toute l\'UE avec des plaques de transit autrichiennes ?',
    faq8A: 'Oui, vous pouvez conduire dans les pays de l\'UE avec des plaques de transit autrichiennes, à condition que : les plaques soient valides (la date d\'expiration n\'est pas dépassée), le véhicule dispose d\'une assurance transit valide couvrant les pays traversés, et que vous ayez toute la documentation nécessaire (certificat d\'immatriculation, facture d\'achat, confirmation d\'assurance, documents d\'exportation si nécessaire). Les plaques de transit autrichiennes sont généralement reconnues dans l\'UE car elles sont accompagnées d\'une assurance internationale (carte verte ou police UE). Remarque : elles ne sont pas destinées à une utilisation prolongée ou quotidienne. Si la date d\'expiration des plaques est dépassée pendant le trajet, le véhicule est considéré comme non immatriculé.',

    faq9Q: 'Dans quels pays hors UE peut-on conduire avec des plaques de transit autrichiennes ?',
    faq9A: 'Outre les pays de l\'UE, vous pouvez généralement conduire dans de nombreux pays européens qui reconnaissent l\'assurance internationale des véhicules : Serbie, Bosnie-Herzégovine, Monténégro, Macédoine du Nord, Albanie, Suisse, Norvège, Islande, Royaume-Uni (vérifiez la couverture d\'assurance) et Turquie (possible, mais l\'assurance doit couvrir spécifiquement). Vérifiez toujours que votre police d\'assurance couvre explicitement tous les pays sur votre itinéraire prévu.',

    ctaTitle: 'Prêt pour les plaques de transit autrichiennes ?',
    ctaSubtitle: 'Contactez-nous aujourd\'hui et obtenez des plaques de transit légales pour votre véhicule dans les plus brefs délais.',

    formTitle: 'Contactez-nous',
    formName: 'Nom complet',
    formEmail: 'Adresse e-mail',
    formPhone: 'Téléphone',
    formCompany: 'Entreprise',
    formMessage: 'Message',
    formSubmit: 'Envoyer la demande',
    formSuccess: 'Votre demande a été envoyée avec succès ! Nous vous recontacterons dans les plus brefs délais.',
    formError: 'Une erreur est survenue. Veuillez réessayer.',
    formRequired: 'Ce champ est obligatoire',

    // SEO
    seoMetaTitle: 'Transit Pro — Plaques de transit autrichiennes | Assurance WA | UE',
    seoMetaDescription: 'Plaques de transit autrichiennes avec assurance WA pour camions, bus et remorques. Conduite légale dans l\'UE et de nombreux autres pays. Traitement le jour même. Entreprises uniquement.',
    seoOgTitle: 'Transit Pro — Plaques de transit autrichiennes avec assurance WA',
    seoOgDescription: 'Traitement rapide, fiable et professionnel des plaques de transit autrichiennes. Conduite légale dans l\'UE et de nombreux autres pays.',
    seoOgImageAlt: 'Transit Pro — Plaques de transit autrichiennes sur fond blanc',

    // Contact Info
    contactPhone: 'Téléphone',
    contactPhoneHours: 'Lun-Ven: 08:00 - 17:00 CET',
    contactEmail: 'Courriel',
    contactEmailResponse: 'Réponse sous 24h',

    // Footer
    footerText: 'Transit Pro — Votre partenaire de confiance pour les plaques de transit autrichiennes',
    footerRights: 'Tous droits réservés.',
    footerPrivacy: 'Politique de confidentialité',
    footerTerms: 'Conditions d\'utilisation',
  },

  it: {
    navHome: 'Home',
    navAbout: 'Chi siamo',
    navProcess: 'Procedura',
    navDocuments: 'Documenti',
    navFaq: 'FAQ',
    navContact: 'Contatti',

    heroTitle: 'Targhe di transito austriache',
    heroSubtitle: 'Veloce, affidabile e professionale — ottieni targhe di transito con assicurazione WA per il tuo veicolo. Guida legalmente dal punto A al punto B attraverso l\'UE e molti altri paesi.',
    heroCta: 'Richiedi preventivo',
    heroSecondaryCta: 'Scopri di più',

    aboutLabel: 'Il prodotto',
    aboutTitle: 'Cosa sono le targhe di transito austriache?',
    aboutDescription1: 'Per i veicoli che non dispongono di targhe di immatricolazione valide o di un\'ispezione tecnica valida, è possibile utilizzare l\'immatricolazione di esportazione austriaca, nota anche come targhe di transito austriache.',
    aboutDescription2: 'Queste targhe temporanee sono fornite con un\'assicurazione WA temporanea e sono destinate ai veicoli che vengono esportati e guidati su strada verso il paese di destinazione.',
    aboutDescription3: 'Nota: Le richieste sono accettate esclusivamente da aziende (società).',
    aboutDescription4: 'Queste targhe sono destinate alla guida dal punto A al punto B, con il percorso che può attraversare paesi dell\'UE e altri Stati europei. L\'immatricolazione in un altro paese non è possibile con queste targhe — per questo sono necessari i documenti originali del veicolo.',
    aboutDescription5: 'Un\'ispezione tecnica valida non è obbligatoria per il rilascio di queste targhe. La responsabilità della sicurezza e dello stato tecnico del veicolo durante il viaggio spetta sempre all\'acquirente/conducente.',

    benefitsLabel: 'Vantaggi',
    benefitsTitle: 'Perché scegliere Transit Pro?',
    benefit1Title: 'Pratica rapida',
    benefit1Desc: 'Gli ordini ricevuti prima delle 12:00 vengono evasi lo stesso giorno lavorativo. Le targhe e la polizza assicurativa vengono spedite il giorno stesso.',
    benefit2Title: 'Assicurazione WA inclusa',
    benefit2Desc: 'Ogni set di targhe è fornito con un\'assicurazione WA temporanea valida 21 giorni, che offre copertura completa.',
    benefit3Title: 'Senza ispezione tecnica',
    benefit3Desc: 'Un\'ispezione tecnica valida non è richiesta per il rilascio delle targhe di transito, semplificando la procedura per i veicoli più datati.',
    benefit4Title: 'Guida legale',
    benefit4Desc: 'Guida in piena legalità attraverso l\'UE e l\'Europa con targhe di transito e documenti validi.',
    benefit5Title: 'Assistenza dedicata',
    benefit5Desc: 'Il nostro team di esperti è pronto ad aiutarti con tutte le domande e a guidarti attraverso l\'intera procedura.',
    benefit6Title: 'Esperienza e affidabilità',
    benefit6Desc: 'Anni di esperienza nell\'evasione di targhe di transito per aziende in tutta Europa.',

    processLabel: 'Come funziona',
    processTitle: 'La procedura in 5 semplici passaggi',
    processStep1Title: 'Contattaci',
    processStep1Desc: 'Compila il modulo di contatto o chiamaci per avviare la procedura. Il nostro team ti fornirà tutte le informazioni necessarie.',
    processStep2Title: 'Prepara i documenti',
    processStep2Desc: 'Raccogli i documenti necessari: fattura, certificato di immatricolazione, certificato CoC, procura e data di inizio assicurazione desiderata.',
    processStep3Title: 'Invia i documenti',
    processStep3Desc: 'Inviaci scansioni PDF chiare e leggibili di tutti i documenti necessari per l\'evasione della tua richiesta.',
    processStep4Title: 'Evasione della richiesta',
    processStep4Desc: 'Evasiamo la tua richiesta e rilasciamo le targhe di transito sulla base del numero di telaio del veicolo.',
    processStep5Title: 'Ricevi le targhe',
    processStep5Desc: 'Le targhe e la polizza assicurativa vengono spedite al tuo indirizzo il giorno stesso in cui la richiesta viene evasa.',

    documentsLabel: 'Documentazione',
    documentsTitle: 'Documenti necessari per la richiesta',
    documentsDescription: 'La richiesta può essere evasa solo quando vengono presentati i seguenti documenti. Accettiamo esclusivamente scansioni PDF chiare e leggibili:',
    doc1: 'Copia della fattura di vendita',
    doc2: 'Copia del certificato di immatricolazione (per veicoli usati)',
    doc3: 'Certificato di conformità (CoC) (per veicoli nuovi)',
    doc4: 'Procura firmata dall\'acquirente',
    doc5: 'Data di inizio assicurazione desiderata (valida 21 giorni)',
    documentsNote: 'Nota: Le targhe vengono rilasciate sulla base del numero di telaio che fornisci. Pertanto, non è possibile annullare o restituire un ordine dopo che la richiesta è stata inviata.',

    regulationsLabel: 'Normativa',
    regulationsTitle: 'Normativa e condizioni d\'uso',
    reg1: 'Le targhe di transito austriache possono essere richieste solo per camion, autobus e rimorchi/semi-rimorchi di origine europea.',
    reg2: 'La fattura deve essere intestata a un\'azienda — l\'immatricolazione a nome di una persona fisica non è possibile. Può essere richiesto anche un numero EORI.',
    reg3: 'La data di inizio delle targhe e dell\'assicurazione (21 giorni) è predefinita alla data dell\'ordine, salvo diversa indicazione.',
    reg4: 'Le targhe possono essere utilizzate per la guida verso o dall\'Austria, con il percorso che può attraversare paesi dell\'UE e altri Stati europei.',
    reg5: 'Queste targhe temporanee non sono registrate nel sistema EUCARIS, pertanto in alcuni paesi possono essere effettuati controlli aggiuntivi. Consigliamo di avere sempre a portata di mano il certificato di immatricolazione originale del veicolo.',
    reg6: 'L\'uso improprio o non autorizzato può comportare provvedimenti da parte delle autorità locali. Non forniamo assistenza legale in tali situazioni.',

    pricingLabel: 'Prezzi',
    pricingTitle: 'Prezzi trasparenti',
    pricingSubtitle: 'Nessun costo nascosto — paghi solo per ciò che usi.',
    pricingTruckTitle: 'Camion e autobus',
    pricingTruckDesc: 'Targhe di transito con assicurazione WA per camion e autobus (validità 21 giorni)',
    pricingTrailerTitle: 'Rimorchi e semi-rimorchi',
    pricingTrailerDesc: 'Targhe di transito con assicurazione WA per rimorchi e semi-rimorchi (validità 21 giorni)',
    pricingDuration: 'Validità: 21 giorni',
    pricingIncludes: 'Include:',
    pricingInclude1: 'Targhe di transito',
    pricingInclude2: 'Assicurazione WA',
    pricingInclude3: 'Spedizione il giorno stesso',
    pricingOrderBefore: 'Ordina prima delle 12:00 — evasione il giorno stesso!',
    pricingOnRequest: 'Prezzo su richiesta',

    faqLabel: 'FAQ',
    faqTitle: 'Domande frequenti',
    faq1Q: 'Chi può richiedere le targhe di transito austriache?',
    faq1A: 'Le richieste sono accettate esclusivamente da aziende. La fattura deve essere intestata a un\'azienda e può essere richiesto un numero EORI.',
    faq2Q: 'Quali veicoli sono idonei?',
    faq2A: 'Le targhe di transito austriache possono essere richieste solo per camion, autobus e rimorchi/semi-rimorchi di origine europea.',
    faq3Q: 'È necessaria un\'ispezione tecnica valida?',
    faq3A: 'No, un\'ispezione tecnica valida non è richiesta per il rilascio delle targhe di transito. Tuttavia, la responsabilità della sicurezza e dello stato tecnico del veicolo spetta all\'acquirente/conducente.',
    faq4Q: 'Per quanto tempo sono valide le targhe di transito?',
    faq4A: 'Le targhe di transito e l\'assicurazione WA sono valide 21 giorni dalla data di inizio specificata.',
    faq5Q: 'Le targhe possono essere utilizzate per l\'immatricolazione del veicolo in un altro paese?',
    faq5A: 'No, queste targhe sono destinate esclusivamente alla guida dal punto A al punto B attraverso l\'Austria. L\'immatricolazione in un altro paese non è possibile — per questo sono necessari i documenti originali del veicolo.',
    faq6Q: 'Posso annullare il mio ordine?',
    faq6A: 'No, le targhe vengono rilasciate sulla base del numero di telaio del veicolo, quindi non è possibile annullare o restituire un ordine dopo che la richiesta è stata inviata.',
    faq7Q: 'Quanto velocemente posso ricevere le targhe?',
    faq7A: 'Gli ordini ricevuti prima delle 12:00 vengono evasi lo stesso giorno lavorativo. Le targhe e la polizza assicurativa vengono spedite al tuo indirizzo il giorno stesso.',

    faq8Q: 'È possibile guidare in tutta l\'UE con le targhe di transito austriache?',
    faq8A: 'Sì, è possibile guidare nei paesi dell\'UE con le targhe di transito austriache, a condizione che: le targhe siano valide (la data di scadenza non sia passata), il veicolo abbia un\'assicurazione di transito valida che copra i paesi attraversati, e che si abbia tutta la documentazione necessaria (certificato di immatricolazione, fattura di acquisto, conferma dell\'assicurazione, documenti di esportazione se necessari). Le targhe di transito austriache sono generalmente riconosciute nell\'UE poiché accompagnate da un\'assicurazione internazionale (carta verde o polizza UE). Nota: non sono destinate all\'uso prolungato o quotidiano. Se la data di scadenza sulle targhe scade durante il viaggio, il veicolo diventa di fatto non immatricolato.',

    faq9Q: 'In quali paesi extra-UE si può guidare con le targhe di transito austriache?',
    faq9A: 'Oltre ai paesi dell\'UE, è possibile in genere guidare anche in molti paesi europei che riconoscono l\'assicurazione internazionale dei veicoli: Serbia, Bosnia ed Erzegovina, Montenegro, Macedonia del Nord, Albania, Svizzera, Norvegia, Islanda, Regno Unito (verificare la copertura assicurativa) e Turchia (possibile, ma l\'assicurazione deve coprire specificamente). Verificate sempre che la vostra polizza assicurativa copra esplicitamente tutti i paesi sul percorso previsto.',

    ctaTitle: 'Pronto per le targhe di transito austriache?',
    ctaSubtitle: 'Contattaci oggi e assicurati targhe di transito legali per il tuo veicolo nel minor tempo possibile.',

    formTitle: 'Contattaci',
    formName: 'Nome completo',
    formEmail: 'Indirizzo e-mail',
    formPhone: 'Telefono',
    formCompany: 'Azienda',
    formMessage: 'Messaggio',
    formSubmit: 'Invia richiesta',
    formSuccess: 'La tua richiesta è stata inviata con successo! Ti ricontatteremo al più presto.',
    formError: 'Si è verificato un errore. Riprova.',
    formRequired: 'Questo campo è obbligatorio',

    // SEO
    seoMetaTitle: 'Transit Pro — Targhe di transito austriache | Assicurazione WA | UE',
    seoMetaDescription: 'Targhe di transito austriache con assicurazione WA per camion, autobus e rimorchi. Guida legale nell\'UE e in molti altri paesi. Spedizione il giorno stesso. Solo per aziende.',
    seoOgTitle: 'Transit Pro — Targhe di transito austriache con assicurazione WA',
    seoOgDescription: 'Trattazione rapida, affidabile e professionale delle targhe di transito austriache. Guida legale nell\'UE e in molti altri paesi.',
    seoOgImageAlt: 'Transit Pro — Targhe di transito austriache su sfondo bianco',

    // Contact Info
    contactPhone: 'Telefono',
    contactPhoneHours: 'Lun-Ven: 08:00 - 17:00 CET',
    contactEmail: 'E-mail',
    contactEmailResponse: 'Risposta entro 24h',

    // Footer
    footerText: 'Transit Pro — Il tuo partner affidabile per le targhe di transito austriache',
    footerRights: 'Tutti i diritti riservati.',
    footerPrivacy: 'Informativa sulla privacy',
    footerTerms: 'Condizioni di servizio',
  },
};

export function getTranslation(code: LanguageCode): TranslationKeys {
  return translations[code] || translations.de;
}
