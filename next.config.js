/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.istockphoto.com',
				port: '',
				pathname: '**',
			},
		],
	},
};
