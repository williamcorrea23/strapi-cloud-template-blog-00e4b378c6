module.exports = ({ env }) => ({
  "strapi-google-auth": {
    enabled: true,
  },
  "strapi-html-editor": {
    enabled: true,
  },
  
  "netlify-deployments": {
    enabled: true,
  },
  "strapi-stripe": {
    enabled: true,
  },
  "strapi-plugin-website-builder": {
    enabled: true,
  },
  },
  
  'open-ai': {
    enabled: true,
    config: {
      API_TOKEN: env('OPEN_AI_TOKEN'),
    },
  },
  "strapi-chatgpt": {
    enabled: true,
  },
    'drag-drop-content-types': {
    enabled: true,
  },
  "firebase-auth": {
    enabled: true,
    config: {
      FIREBASE_JSON_ENCRYPTION_KEY: env('FIREBASE_JSON_ENCRYPTION_KEY'),
    },
  },
  "strapi-plugin-graphs-builder": {
    enabled: true,
  },
 
  'raw-query': {
    enabled: true,
  },
  'plugin-sentry': {
    enabled: true,
  },
  'strapi-chat-genius': {
    enabled: true,
  },
});
