import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default {
	root: 'src/',
	publicDir: '../static/',
	base: './',
	plugins: [wasm(), topLevelAwait()],
	server: {
		allowedHosts: ['ba61-73-139-162-64.ngrok-free.app'],
	},
	// added below
	build: {
		outDir: '../dist',
		emptyOutDir: true,
	},
};
