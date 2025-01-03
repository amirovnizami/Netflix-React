import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../src/locales/i18n.js'

createRoot(document.getElementById('root')).render(
    <App />
)
