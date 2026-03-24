import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './language/en.json'
import vn from './language/vn.json'

const fallbackLng = 'en'
const saved = localStorage.getItem('lang')
const lng = saved || (navigator.language?.toLowerCase().startsWith('vi') ? 'vn' : 'en')

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vn: { translation: vn },
  },
  lng,
  fallbackLng,
  interpolation: { escapeValue: false },
})

export default i18n

