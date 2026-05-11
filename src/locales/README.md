# Locales

This folder contains internationalization (i18n) configuration and translation files.

## Structure

- `en.json` - English translations
- `ru.json` - Russian translations
- `i18n.config.js` - i18n configuration

## Usage

```javascript
import { useTranslation } from 'react-i18next';

export const MyComponent = () => {
  const { t } = useTranslation();
  return <h1>{t('home.title')}</h1>;
};
```
