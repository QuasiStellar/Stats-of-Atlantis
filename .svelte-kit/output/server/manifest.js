export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.d8779fd1.js","app":"_app/immutable/entry/app.5f81a934.js","imports":["_app/immutable/entry/start.d8779fd1.js","_app/immutable/chunks/scheduler.f13cd452.js","_app/immutable/chunks/singletons.fef63b7b.js","_app/immutable/chunks/index.01453b9e.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.5f81a934.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.f13cd452.js","_app/immutable/chunks/index.6f1e0938.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
