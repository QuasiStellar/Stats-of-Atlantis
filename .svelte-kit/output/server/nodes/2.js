import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.1d2172e7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/states.fb67612f.js","_app/immutable/chunks/index.6f1e0938.js","_app/immutable/chunks/scheduler.f13cd452.js","_app/immutable/chunks/stores.48c7026d.js","_app/immutable/chunks/singletons.fef63b7b.js","_app/immutable/chunks/index.01453b9e.js","_app/immutable/chunks/index.2b48d029.js","_app/immutable/chunks/Card.9904d2ee.js","_app/immutable/chunks/tw-merge.dd2125e8.js","_app/immutable/chunks/Frame.2b2bbcd3.js","_app/immutable/chunks/Button.f24a3f17.js","_app/immutable/chunks/Tooltip.22dedf3e.js","_app/immutable/chunks/Img.b52120b8.js","_app/immutable/chunks/star.dd6f9dea.js"];
export const stylesheets = ["_app/immutable/assets/2.81a5e041.css"];
export const fonts = ["_app/immutable/assets/modesto_poster.50b150e0.woff"];
