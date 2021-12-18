const dynamicChunks = {
 ['components/nuxt-logo.js']: () => import('./app/components/nuxt-logo.mjs').then(function (n) { return n.n; }),
 ['components/tutorial.js']: () => import('./app/components/tutorial.mjs').then(function (n) { return n.t; }),
 ['components/vuetify-logo.js']: () => import('./app/components/vuetify-logo.mjs').then(function (n) { return n.v; }),
 ['pages/index.js']: () => import('./app/pages/index.mjs').then(function (n) { return n.i; }),
 ['pages/inspire.js']: () => import('./app/pages/inspire.mjs').then(function (n) { return n.i; })
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
