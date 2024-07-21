module.exports = {
  "strapi-google-auth": {
    enabled: true,
  },
 {
  "strapi-html-editor": {
    enabled: true,
  }, 
  {
  "netlify-deployments": {
    enabled: true,
  },
  {
  "strapi-stripe": {
    enabled: true,
  },
  
 {
  "strapi-plugin-website-builder": {
    enabled: true,
  },

  {
  "vercel-deploy": {
    enabled: true,
  },

  {
  // ...
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
  {
  "strapi-plugin-rest-cache": {
    enabled: true,
  },

  {
  // ...
  'open-ai': {
    enabled: true,
    config: {
      API_TOKEN: '<your-open-ai-token>',
    },
  },
  {
  // ...
  "strapi-chatgpt": {
    enabled: true,
  },

  {
  ckeditor5: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor"
  },
};

