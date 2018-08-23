console.log('load index.js', new Date().getMilliseconds());

import(/* webpackChunkName 'async-leaf' */ './async').then(() => {
  console.log('callback', new Date().getMilliseconds());
});
