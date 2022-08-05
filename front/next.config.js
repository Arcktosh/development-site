/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		cacheOnFrontEndNav: true,
		customWorkerDir: './',
		disable: process.env.ENV_MODE == 'dev',
	},
})
