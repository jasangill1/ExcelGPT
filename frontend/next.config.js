const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: function (config, { dev }) {
    if (!dev) {
      config.module.rules.push({
        test: /\.css$/,
        use: 'null-loader',
      });
    }
    return config;
  },
}

module.exports = nextConfig
