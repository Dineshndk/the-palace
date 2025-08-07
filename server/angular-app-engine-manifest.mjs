
export default {
  basePath: 'https://dineshndk.github.io/the-palace',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
