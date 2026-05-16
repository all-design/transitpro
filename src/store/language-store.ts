'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LanguageCode } from '@/lib/i18n';

interface LanguageStore {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'sr' as LanguageCode,
      setLanguage: (lang: LanguageCode) => set({ language: lang }),
    }),
    {
      name: 'transit-pro-language',
    }
  )
);
