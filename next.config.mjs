import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  reactStrictMode: true,
<<<<<<< HEAD
  distDir: '.next',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 250000, // 250 KB limit per chunk
      };
    }
    return config;
  },
});
=======
  distDir: '.next',  // Ensure the build output directory is correctly set
};
>>>>>>> f44695c8d15e6520cfff890d1192b8292b304496

export default nextConfig;
