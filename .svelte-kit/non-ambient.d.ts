
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/contact" | "/api/health" | "/api/trial" | "/coaches" | "/contact" | "/gallery" | "/kids" | "/pricing" | "/robots.txt" | "/sitemap.xml" | "/timetable" | "/trial";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/api": Record<string, never>;
			"/api/contact": Record<string, never>;
			"/api/health": Record<string, never>;
			"/api/trial": Record<string, never>;
			"/coaches": Record<string, never>;
			"/contact": Record<string, never>;
			"/gallery": Record<string, never>;
			"/kids": Record<string, never>;
			"/pricing": Record<string, never>;
			"/robots.txt": Record<string, never>;
			"/sitemap.xml": Record<string, never>;
			"/timetable": Record<string, never>;
			"/trial": Record<string, never>
		};
		Pathname(): "/" | "/api/contact" | "/api/health" | "/api/trial" | "/coaches" | "/contact" | "/gallery" | "/kids" | "/pricing" | "/robots.txt" | "/sitemap.xml" | "/timetable" | "/trial";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}