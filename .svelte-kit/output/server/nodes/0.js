import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.06c597d5.js","_app/immutable/chunks/scheduler.f13cd452.js","_app/immutable/chunks/index.6f1e0938.js","_app/immutable/chunks/index.cef2fa0f.js","_app/immutable/chunks/index.2b48d029.js","_app/immutable/chunks/tw-merge.dd2125e8.js","_app/immutable/chunks/Frame.2b2bbcd3.js","_app/immutable/chunks/index.01453b9e.js","_app/immutable/chunks/stores.48c7026d.js","_app/immutable/chunks/singletons.fef63b7b.js","_app/immutable/chunks/small_logo.c201534d.js"];
export const stylesheets = ["_app/immutable/assets/0.6803a66a.css"];
export const fonts = [];
