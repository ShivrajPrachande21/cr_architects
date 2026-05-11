# Components

This folder contains reusable React components.

## Structure

- `Button/` - Button component
- `Input/` - Input field component
- `Modal/` - Modal component
- `Header/` - Header/Navigation component
- `Footer/` - Footer component

## Naming Convention

Each component should have:
- `ComponentName.jsx` - Component file
- `ComponentName.css` - Component styles
- `index.js` - Export file

## Example

```javascript
// components/Button/Button.jsx
export const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

// components/Button/index.js
export { default } from './Button';
```
