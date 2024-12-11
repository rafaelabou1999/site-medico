const nextConfig = {
  webpack: (config, { isServer }) => {
    // Disable Webpack cache
    config.cache = false;

    // Return the modified config
    return config;
  },
};

export default nextConfig;
