console.log('load index.js', new Date().getMilliseconds());

import('./async').then(() => {
  console.log('callback', new Date().getMilliseconds());
});
