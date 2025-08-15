
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://dineshndk.github.io/the-palace/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/the-palace"
  },
  {
    "renderMode": 2,
    "route": "/the-palace/home"
  },
  {
    "renderMode": 2,
    "route": "/the-palace/about"
  },
  {
    "renderMode": 2,
    "route": "/the-palace/contactus"
  },
  {
    "renderMode": 2,
    "route": "/the-palace/login"
  },
  {
    "renderMode": 2,
    "route": "/the-palace/menu"
  },
  {
    "renderMode": 2,
    "route": "/the-palace/reservation"
  },
  {
    "renderMode": 2,
    "route": "/the-palace/orderonline"
  },
  {
    "renderMode": 2,
    "route": "/the-palace/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 21512, hash: 'b523230083101fc26ac0907c52b67a064a44f6c8483f266794741c3e92a2c523', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17154, hash: 'a09f51d8304974e05d3f13cc5d8632c8cd3fa412ee05a6edd3b0194192dcb02f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'reservation/index.html': {size: 33765, hash: '22cc8266c5f76163db5274e0d24331f25106acbf747bf2ba3a98605a525ac18d', text: () => import('./assets-chunks/reservation_index_html.mjs').then(m => m.default)},
    'index.html': {size: 47335, hash: '55ad39d0aadbc1fe26748bc937d31004cd61c3210f47d8acde030e47e7d8ab01', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 39410, hash: 'be7c185d428060712aea4d95380871a2fb2081151387b7650163f4cdc979be87', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 32040, hash: '7d62decce2dff50169fc58b4a2ac4af6ae8aadcd46ff8a83350aa89918427d37', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'orderonline/index.html': {size: 33762, hash: '94f5e8ae3821423b734e67dee794502444c5d58a63b10370520468cfd18aa939', text: () => import('./assets-chunks/orderonline_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 32040, hash: '64e3ae76d480933157a31006d93dda24af581dcb0b529a60761d3748374a3da7', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 47335, hash: '55ad39d0aadbc1fe26748bc937d31004cd61c3210f47d8acde030e47e7d8ab01', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 33753, hash: '583c7646400ff0a9f5fa74210b5ea5d8937ca0a633e16a75649eb1584161a2f0', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'styles-NXZFJNNW.css': {size: 305059, hash: 'JwvqjrFluxk', text: () => import('./assets-chunks/styles-NXZFJNNW_css.mjs').then(m => m.default)}
  },
};
