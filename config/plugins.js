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
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env('VERCEL_DEPLOY_PLUGIN_HOOK'),
      apiToken: env('VERCEL_DEPLOY_PLUGIN_API_TOKEN'),
      appFilter: env('VERCEL_DEPLOY_PLUGIN_APP_FILTER'),
      teamFilter: env('VERCEL_DEPLOY_PLUGIN_TEAM_FILTER'),
      roles: ["strapi-super-admin"],
    },
  },
  'sitemap': {
    enabled: true,
    config: {
      cron: '0 0 0 * * *',
      limit: 45000,
      xsl: true,
      autoGenerate: false,
      caching: true,
      allowedFields: ['id', 'uid'],
      excludedTypes: [],
    },
  },
  "strapi-plugin-rest-cache": {
    enabled: true,
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
  ckeditor5: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor"
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
  'import-export-entries': {
    enabled: true,
    config: {
      // Configurações adicionais
    },
  },
});
