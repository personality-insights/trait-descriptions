export = PersonalityTraitDescriptions;

declare type Locale = 'en' | 'es' | 'ja' | 'ko';
declare type Version = 'v2' | 'v3';
declare type Format = 'plain' | 'html' | 'markdown';

declare class PersonalityTraitDescriptions {
  constructor(options?: { locale?: Locale, version?: Version, format?: Format });

  defaultOptions(): {
    locale: Locale,
    version: Version,
    format: Format
  };

  setLocale(locale: Locale): void;

  description(traitId: string): string;

  descriptions(): string[];
}
