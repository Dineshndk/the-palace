
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
    'index.csr.html': {size: 21512, hash: '0f0588eb3569c0981949d7a88ece597ca3d1efcf4c8d7c2a0c7ad94ed5100226', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17154, hash: '5a9ddc583b6bea5da7a1a87ef2dfc33d390d0adf387392d9171e8044a50f97c1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 39312, hash: '8ffca1d242c874d9ac5597b37bdddfbac8b081a0d5907e85175ad0fbc1173188', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'reservation/index.html': {size: 33815, hash: 'fdce43bdacea2afd58d3e42dc091e886231fd2ba4e12878df6cd53ff21939f1f', text: () => import('./assets-chunks/reservation_index_html.mjs').then(m => m.default)},
    'index.html': {size: 47398, hash: '85e4cb9f4c5e445b57c4dc9cd0936c25145436d22daa4f45a1c851563727b8af', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 32089, hash: 'c5c679f5fb73f4113d6e5c4289c6daec90f7efb5482b7e4eb708ad7e6abc2bce', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 47398, hash: '85e4cb9f4c5e445b57c4dc9cd0936c25145436d22daa4f45a1c851563727b8af', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 32089, hash: '78a201c894dcdad11be51c8cb981671e7a6bb98ce3ed01b8f768361c89f6567e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'orderonline/index.html': {size: 33812, hash: '71ee99efcad13c0903b30ad11091b714df261967ac02dc6f6c026a80c5cd2a26', text: () => import('./assets-chunks/orderonline_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 33802, hash: '449c0f4228bd23de390ff12a270e1ba9ed188b7e3d99a8af30c0bd930eb71bf8', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'styles-NXZFJNNW.css': {size: 305059, hash: 'JwvqjrFluxk', text: () => import('./assets-chunks/styles-NXZFJNNW_css.mjs').then(m => m.default)}
  },
};
