import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    debug: true, // Definir como false em produção. True podemos ver os logs
    
    // Configuração do backend HTTP
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    
    interpolation: {
      escapeValue: false, // React já protege contra XSS
    },
    
    // Configurações específicas do React
    react: {
      useSuspense: false,
    },
  });

export default i18n;
