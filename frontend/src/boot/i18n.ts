import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';

export default ({ app }: any) => {
  // Create I18n instance
  const i18n = createI18n({
    locale: 'pt-BR',
    fallbackLocale: 'en-US',
    messages,
  });

  // Tell app to use the I18n instance
  app.use(i18n);
};
