/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["raw.githubusercontent.com", "https://pokeapi.co"],
	},
}

module.exports = nextConfig
