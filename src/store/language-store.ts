'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { LanguageCode } from '@/lib/i18n';

interface LanguageStore {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  geoDetected: boolean;
  setGeoDetected: (detected: boolean) => void;
  detectLanguageFromGeo: () => Promise<void>;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'de' as LanguageCode,
      geoDetected: false,
      setLanguage: (lang: LanguageCode) => set({ language: lang }),
      setGeoDetected: (detected: boolean) => set({ geoDetected: detected }),
      detectLanguageFromGeo: async () => {
        // Only detect once, and only if user hasn't manually selected a language before
        const state = get();
        if (state.geoDetected) return;

        try {
          const res = await fetch('/api/geolocation');
          if (!res.ok) return;

          const data = await res.json();

          // Only set language from geolocation if:
          // 1. This is the first visit (geoDetected is false)
          // 2. We got a valid language from the API
          // 3. The language is one of our supported languages
          const supportedLangs: LanguageCode[] = ['de', 'sr', 'en', 'ro', 'bg', 'fr', 'it'];
          if (data.language && supportedLangs.includes(data.language)) {
            set({
              language: data.language as LanguageCode,
              geoDetected: true,
            });
          } else {
            set({ geoDetected: true });
          }
        } catch {
          // Silently fail - keep default language
          set({ geoDetected: true });
        }
      },
    }),
    {
      name: 'transit-pro-language',
      storage: createJSONStorage(() => {
        // SSR safety
        if (typeof window !== 'undefined') {
          return localStorage;
        }
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
      // Only persist language and geoDetected, not the detectLanguageFromGeo function
      partialize: (state) => ({
        language: state.language,
        geoDetected: state.geoDetected,
      }),
    }
  )
);
