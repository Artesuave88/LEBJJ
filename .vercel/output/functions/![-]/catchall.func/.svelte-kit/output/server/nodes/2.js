import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DcvydSGk.js","_app/immutable/chunks/DSPxEpFK.js","_app/immutable/chunks/Dnodtwet.js","_app/immutable/chunks/Dq85vJaZ.js","_app/immutable/chunks/OSD6v9kr.js","_app/immutable/chunks/BWZ9Llzm.js","_app/immutable/chunks/CT8IguEp.js","_app/immutable/chunks/DTKDccqK.js","_app/immutable/chunks/OYf3imne.js","_app/immutable/chunks/DQWxjxhJ.js"];
export const stylesheets = [];
export const fonts = [];
