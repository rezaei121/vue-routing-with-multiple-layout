import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const lang = localStorage.getItem('lang') || 'en'

function loadLocaleMessages () {
  const locales = require('./locales/' + lang + '.json')
  const messages = {}
  messages[lang] = locales
  return messages
}

export default new VueI18n({
  locale: lang,
  fallbackLocale: lang,
  messages: loadLocaleMessages()
})
