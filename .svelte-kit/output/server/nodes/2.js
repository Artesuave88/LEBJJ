import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DhSuMXEQ.js","_app/immutable/chunks/Dl0uTrUY.js","_app/immutable/chunks/Dnodtwet.js","_app/immutable/chunks/Dq85vJaZ.js","_app/immutable/chunks/OSD6v9kr.js","_app/immutable/chunks/BWZ9Llzm.js","_app/immutable/chunks/CvR9e5IK.js","_app/immutable/chunks/-lVNFpYT.js","_app/immutable/chunks/Dd29rPD-.js","_app/immutable/chunks/BW-YeITD.js"];
export const stylesheets = [];
export const fonts = [];
