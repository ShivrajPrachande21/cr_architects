# Store

This folder contains state management (Redux, Zustand, etc.) configuration.

## Structure

- `index.js` - Store configuration
- `slices/` - Redux slices or feature stores
- `selectors/` - Selector functions
- `middleware/` - Custom middleware

## Usage

```javascript
import store from './store';
import { useSelector, useDispatch } from 'react-redux';
```
