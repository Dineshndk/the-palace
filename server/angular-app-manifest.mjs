
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
    'index.csr.html': {size: 29101, hash: '81cb7601694041ece377bfcc846a95e707775be6cdda401579fc105f0958981a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17153, hash: 'f01fc60c3e3d352e02176745b807a4d5ffc95b345b3fe9d884b9f1dfd1758e9f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 49307, hash: 'c6455f466727d0d7b9bf6111af7e488cc95544664a6c9ca68af0a09aacf4c97e', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 46460, hash: '6d576e965320d44c24d9ac7bbdbd39ed1dc9fc172fba154594d0e0e042814475', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 46460, hash: '6d576e965320d44c24d9ac7bbdbd39ed1dc9fc172fba154594d0e0e042814475', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 43677, hash: 'd3bc1e7fdb3dd9553e25bdbb8b5008430610bdc3b5d76e1349b000557f2c1bdd', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'orderonline/index.html': {size: 44079, hash: '0849949e77d2c06787d5343cf2a4383ccfd858adebf09c8e7eff63a3dbc1014f', text: () => import('./assets-chunks/orderonline_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 43677, hash: '7143af0ebc62ab5ce473e60dfc369404a110eca21c120645b00c5074d5cb75f8', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'reservation/index.html': {size: 44080, hash: '32c9854f889141fb203fb202e22a6ae8b097e16928e36f103ae5808f3bb0828f', text: () => import('./assets-chunks/reservation_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 44077, hash: 'a65c4b8a4bb73c635b62b5d74506f0e3d2fc1f2169c6408edd2546ec2381626f', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'styles-SRNN27C4.css': {size: 238958, hash: 'x+dGrnMgUsc', text: () => import('./assets-chunks/styles-SRNN27C4_css.mjs').then(m => m.default)}
  },
};
