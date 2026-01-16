import { createQwikCity } from '@builder.io/qwik-city/middleware/cloudflare-pages';
import qwikCityPlan from '@qwik-city-plan';
import { manifest } from '@qwik-client-manifest';
import render from './entry.ssr';

const onRequest = createQwikCity({ render, qwikCityPlan, manifest });

// Cloudflare Pages expects 'onRequest'
// The generated _worker.js is looking for 'fetch'
// Exporting both covers all bases
export { onRequest, onRequest as fetch };
