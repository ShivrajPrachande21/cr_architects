# Pages

This folder contains page components (full page views).

## Structure

- `ContactsPage/` - Contacts page
- `HomePage/` - Home page
- `PortfolioPage/` - Portfolio page

## Naming Convention

Each page should:
- Be a full-screen component
- Include its own styles
- Have sub-components in a components/ subfolder if needed
- Export from index.js

## Example

```javascript
// pages/ContactsPage/ContactsPage.jsx
import './ContactsPage.css';

export default function ContactsPage() {
  return <div className="contacts-page">...</div>;
}

// pages/ContactsPage/index.js
export { default } from './ContactsPage';
```
