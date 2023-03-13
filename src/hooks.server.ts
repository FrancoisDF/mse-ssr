import type { Handle } from '@sveltejs/kit';
import { renderToString } from '@se/web-ui/hydrate/index';


export const handle = (async ({ event, resolve }) => {
  const response = await resolve(event, {
    transformPageChunk: async ({ html }) => {
      return renderToString(html).then(results => results.html);
    },
  });
  return response;
}) satisfies Handle;

// import type { Handle } from '@sveltejs/kit';


// export const handle = (async ({ event, resolve }) => {
//   const {renderToString} = require('https://d2osz8slymlqdp.cloudfront.net/@se/web-ui/@3.27.3/hydrate/index.js')
//   const response = await resolve(event, {
//     transformPageChunk: async ({ html }) => {
//       return renderToString(html).then(results => results.html);
//     },
//   });
//   return response;
// }) satisfies Handle;
