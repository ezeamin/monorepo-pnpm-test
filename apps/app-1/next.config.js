const multizones = require('multizones');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui', 'puas-components'],
  images: {
    domains: ['cdn.pixabay.com'],
  },
  ...multizones,
};
