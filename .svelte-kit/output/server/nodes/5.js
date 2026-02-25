import * as universal from '../entries/pages/gallery/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/gallery/+page.ts";
export const imports = ["_app/immutable/nodes/5.Bs0O-EvG.js","_app/immutable/chunks/CTAKUR_9.js","_app/immutable/chunks/Dnodtwet.js","_app/immutable/chunks/Dq85vJaZ.js","_app/immutable/chunks/OSD6v9kr.js","_app/immutable/chunks/BWZ9Llzm.js","_app/immutable/chunks/CIH1Vx3-.js","_app/immutable/chunks/BtcVWsRj.js"];
export const stylesheets = [];
export const fonts = [];
