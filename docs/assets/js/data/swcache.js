const resource = [
  /* --- CSS --- */
  '/DL/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/DL/app.js',
  '/DL/sw.js',

  /* --- HTML --- */
  '/DL/index.html',
  '/DL/404.html',

  
    '/DL/categories/',
  
    '/DL/tags/',
  
    '/DL/archives/',
  
    '/DL/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/DL/assets/img/favicons/android-chrome-192x192.png',
    '/DL/assets/img/favicons/android-chrome-512x512.png',
    '/DL/assets/img/favicons/apple-touch-icon.png',
    '/DL/assets/img/favicons/favicon-16x16.png',
    '/DL/assets/img/favicons/favicon-32x32.png',
    '/DL/assets/img/favicons/favicon.ico',
    '/DL/assets/img/favicons/mstile-150x150.png',
    '/DL/assets/js/dist/categories.min.js',
    '/DL/assets/js/dist/commons.min.js',
    '/DL/assets/js/dist/home.min.js',
    '/DL/assets/js/dist/misc.min.js',
    '/DL/assets/js/dist/page.min.js',
    '/DL/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

